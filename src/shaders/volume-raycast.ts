export const volumeVertexShader = `
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  
  void main() {
    vLocalPosition = position * 0.5 + 0.5;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const volumeFragmentShader = `
  precision highp float;
  precision highp sampler3D;
  
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  
  uniform sampler3D uVolumeTexture;
  uniform sampler2D uTransferFunction;
  uniform sampler3D uSegmentationTexture;
  uniform sampler2D uSegmentationLUT;
  uniform vec3 uVolumeSize;
  uniform vec3 uCameraPosition;
  uniform float uStepSize;
  uniform float uWindowMin;
  uniform float uWindowMax;
  uniform float uIsoValue;
  uniform int uRenderMode;
  uniform float uBrightness;
  uniform float uDensity;
  uniform bool uHasSegmentation;
  uniform float uSegBlendFactor;
  
  const int MAX_STEPS = 512;
  
  vec2 intersectBox(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
    vec3 tMin = (boxMin - rayOrigin) / rayDir;
    vec3 tMax = (boxMax - rayOrigin) / rayDir;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
  }
  
  float getVolumeValue(vec3 texCoord) {
    float value = texture(uVolumeTexture, texCoord).r;
    float windowRange = uWindowMax - uWindowMin;
    if (windowRange < 0.001) {
      return step(uWindowMin, value);
    }
    return clamp((value - uWindowMin) / windowRange, 0.0, 1.0);
  }
  
  vec4 applyTransferFunction(float value) {
    return texture2D(uTransferFunction, vec2(value, 0.5));
  }
  
  vec4 getSegmentationColor(vec3 texCoord) {
    if (!uHasSegmentation) return vec4(0.0);
    float label = texture(uSegmentationTexture, texCoord).r;
    if (label < 0.5) return vec4(0.0);
    float lutCoord = (label + 0.5) / 32.0;
    vec4 lutEntry = texture2D(uSegmentationLUT, vec2(lutCoord, 0.5));
    return lutEntry;
  }
  
  vec4 blendSegmentation(vec4 baseColor, vec4 segColor) {
    if (segColor.a < 0.01) return baseColor;
    float alpha = segColor.a * uSegBlendFactor;
    vec3 blended = mix(baseColor.rgb, segColor.rgb, alpha);
    return vec4(blended, baseColor.a);
  }
  
  vec4 rayCastMIP(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    float maxValue = 0.0;
    vec3 maxPos = rayOrigin;
    float t = tNear;
    float stepSize = uStepSize * 0.5;
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      if (value > maxValue) {
        maxValue = value;
        maxPos = pos;
      }
      
      t += stepSize;
    }
    
    vec4 color = applyTransferFunction(maxValue);
    
    if (uHasSegmentation) {
      vec4 segColor = getSegmentationColor(maxPos);
      color = blendSegmentation(color, segColor);
    }
    
    return color;
  }
  
  vec4 rayCastComposite(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    vec4 result = vec4(0.0);
    float t = tNear;
    float stepSize = uStepSize;
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar || result.a >= 0.99) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      vec4 color = applyTransferFunction(value);
      
      if (uHasSegmentation) {
        vec4 segColor = getSegmentationColor(pos);
        color = blendSegmentation(color, segColor);
      }
      
      color.a *= stepSize * uDensity * 100.0;
      color.rgb *= color.a;
      
      result = result + color * (1.0 - result.a);
      
      t += stepSize;
    }
    
    result.rgb *= uBrightness;
    return result;
  }
  
  vec4 rayCastIsoSurface(vec3 rayOrigin, vec3 rayDir, float tNear, float tFar) {
    float t = tNear;
    float stepSize = uStepSize * 0.5;
    float prevValue = getVolumeValue(rayOrigin + rayDir * tNear);
    
    for (int i = 0; i < MAX_STEPS; i++) {
      if (t > tFar) break;
      
      vec3 pos = rayOrigin + rayDir * t;
      float value = getVolumeValue(pos);
      
      if ((prevValue - uIsoValue) * (value - uIsoValue) < 0.0) {
        float isoT = t - stepSize * (value - uIsoValue) / (value - prevValue + 0.0001);
        vec3 isoPos = rayOrigin + rayDir * isoT;
        
        vec3 grad = vec3(
          getVolumeValue(isoPos + vec3(stepSize, 0.0, 0.0)) - getVolumeValue(isoPos - vec3(stepSize, 0.0, 0.0)),
          getVolumeValue(isoPos + vec3(0.0, stepSize, 0.0)) - getVolumeValue(isoPos - vec3(0.0, stepSize, 0.0)),
          getVolumeValue(isoPos + vec3(0.0, 0.0, stepSize)) - getVolumeValue(isoPos - vec3(0.0, 0.0, stepSize))
        );
        grad = normalize(grad + 0.0001);
        
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float diffuse = max(dot(grad, lightDir), 0.0);
        vec3 viewDir = -rayDir;
        vec3 halfDir = normalize(lightDir + viewDir);
        float specular = pow(max(dot(grad, halfDir), 0.0), 32.0);
        
        vec4 isoColor = applyTransferFunction(uIsoValue);
        
        if (uHasSegmentation) {
          vec4 segColor = getSegmentationColor(isoPos);
          isoColor = blendSegmentation(isoColor, segColor);
        }
        
        vec3 finalColor = isoColor.rgb * (0.3 + 0.7 * diffuse) + vec3(0.5) * specular;
        
        return vec4(finalColor, 1.0);
      }
      
      prevValue = value;
      t += stepSize;
    }
    
    return vec4(0.0);
  }
  
  void main() {
    vec3 boxMin = vec3(0.0);
    vec3 boxMax = vec3(1.0);
    
    vec3 rayOrigin = vLocalPosition;
    vec3 rayDir = normalize(vLocalPosition - (uCameraPosition * 0.5 + 0.5));
    
    vec2 t = intersectBox(rayOrigin, rayDir, boxMin, boxMax);
    float tNear = max(t.x, 0.0);
    float tFar = t.y;
    
    if (tNear > tFar) {
      discard;
    }
    
    vec4 finalColor;
    
    if (uRenderMode == 0) {
      finalColor = rayCastMIP(rayOrigin, rayDir, tNear, tFar);
    } else if (uRenderMode == 1) {
      finalColor = rayCastComposite(rayOrigin, rayDir, tNear, tFar);
    } else {
      finalColor = rayCastIsoSurface(rayOrigin, rayDir, tNear, tFar);
    }
    
    if (finalColor.a < 0.01) {
      discard;
    }
    
    gl_FragColor = finalColor;
  }
`;
