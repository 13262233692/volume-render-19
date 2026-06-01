import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VolumeTexture } from './volume-texture';
import { volumeVertexShader, volumeFragmentShader } from './shaders/volume-raycast';
import type { TransferFunctionPoint, WindowLevel, SegmentationLabel } from './types';

export type RenderMode = 'mip' | 'composite' | 'iso';

export interface VolumeRendererOptions {
  renderMode?: RenderMode;
  stepSize?: number;
  brightness?: number;
  density?: number;
  isoValue?: number;
}

export class VolumeRenderer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private volumeMesh: THREE.Mesh | null = null;
  private volumeTexture: VolumeTexture;
  private volumeTexture3D: THREE.Data3DTexture;
  private transferFunctionTexture: THREE.DataTexture;
  private material: THREE.ShaderMaterial | null = null;
  private animationId: number | null = null;
  private segBlendFactor: number = 1.0;
  
  private renderMode: RenderMode;
  private stepSize: number;
  private brightness: number;
  private density: number;
  private isoValue: number;
  private windowLevel: WindowLevel;
  private transferFunctionPoints: TransferFunctionPoint[];

  constructor(
    container: HTMLElement,
    volumeTexture: VolumeTexture,
    options: VolumeRendererOptions = {}
  ) {
    this.container = container;
    this.volumeTexture = volumeTexture;
    
    this.renderMode = options.renderMode || 'composite';
    this.stepSize = options.stepSize || 0.005;
    this.brightness = options.brightness || 1.5;
    this.density = options.density || 1.0;
    this.isoValue = options.isoValue || 0.5;
    
    this.windowLevel = volumeTexture.getDefaultWindowLevel();
    this.transferFunctionPoints = volumeTexture.getDefaultTransferFunction();
    
    this.volumeTexture3D = volumeTexture.create3DTexture();
    this.transferFunctionTexture = volumeTexture.createTransferFunctionTexture(this.transferFunctionPoints);
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);
    
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 3);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);
    
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 10;
    
    this.createVolumeMesh();
    this.addBoundingBox();
    this.setupEventListeners();
    this.startAnimation();
  }

  private createVolumeMesh(): void {
    const volumeSize = this.volumeTexture.getVolumeSize();
    
    const geometry = new THREE.BoxGeometry(volumeSize.x, volumeSize.y, volumeSize.z);
    
    const renderModeInt = this.renderMode === 'mip' ? 0 : this.renderMode === 'composite' ? 1 : 2;

    const maxSegLabels = this.volumeTexture.getMaxSegLabels();
    const dummySegTex = new THREE.Data3DTexture(
      new Uint8Array(1), 1, 1, 1
    );
    dummySegTex.format = THREE.RedFormat;
    dummySegTex.type = THREE.UnsignedByteType;
    dummySegTex.minFilter = THREE.NearestFilter;
    dummySegTex.magFilter = THREE.NearestFilter;
    dummySegTex.needsUpdate = true;

    const dummyLUTTex = new THREE.DataTexture(
      new Uint8Array(maxSegLabels * 4), maxSegLabels, 1
    );
    dummyLUTTex.format = THREE.RGBAFormat;
    dummyLUTTex.type = THREE.UnsignedByteType;
    dummyLUTTex.minFilter = THREE.NearestFilter;
    dummyLUTTex.magFilter = THREE.NearestFilter;
    dummyLUTTex.needsUpdate = true;
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: volumeVertexShader,
      fragmentShader: volumeFragmentShader,
      uniforms: {
        uVolumeTexture: { value: this.volumeTexture3D },
        uTransferFunction: { value: this.transferFunctionTexture },
        uSegmentationTexture: { value: dummySegTex },
        uSegmentationLUT: { value: dummyLUTTex },
        uVolumeSize: { value: new THREE.Vector3(volumeSize.x, volumeSize.y, volumeSize.z) },
        uCameraPosition: { value: new THREE.Vector3() },
        uStepSize: { value: this.stepSize },
        uWindowMin: { value: 0.0 },
        uWindowMax: { value: 1.0 },
        uIsoValue: { value: this.isoValue },
        uRenderMode: { value: renderModeInt },
        uBrightness: { value: this.brightness },
        uDensity: { value: this.density },
        uHasSegmentation: { value: false },
        uSegBlendFactor: { value: this.segBlendFactor },
      },
      side: THREE.BackSide,
      transparent: true,
    });
    
    this.volumeMesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.volumeMesh);
    
    this.setWindowLevel(this.windowLevel);
  }

  setSegmentation(labels: SegmentationLabel[]): void {
    if (!this.material) return;

    const seg3D = this.volumeTexture.createSegmentation3DTexture();
    if (!seg3D) return;

    const segLUT = this.volumeTexture.createSegmentationLUT(labels);

    const oldSegTex = this.material.uniforms.uSegmentationTexture.value as THREE.Data3DTexture;
    const oldLUTTex = this.material.uniforms.uSegmentationLUT.value as THREE.DataTexture;
    oldSegTex.dispose();
    oldLUTTex.dispose();

    this.material.uniforms.uSegmentationTexture.value = seg3D;
    this.material.uniforms.uSegmentationLUT.value = segLUT;
    this.material.uniforms.uHasSegmentation.value = true;
  }

  updateSegmentationLabels(labels: SegmentationLabel[]): void {
    this.volumeTexture.updateSegmentationLUT(labels);
  }

  setSegBlendFactor(factor: number): void {
    this.segBlendFactor = factor;
    if (this.material) {
      this.material.uniforms.uSegBlendFactor.value = factor;
    }
  }

  removeSegmentation(): void {
    if (!this.material) return;
    this.material.uniforms.uHasSegmentation.value = false;
  }

  private addBoundingBox(): void {
    const volumeSize = this.volumeTexture.getVolumeSize();
    const geometry = new THREE.BoxGeometry(volumeSize.x, volumeSize.y, volumeSize.z);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.3 });
    const box = new THREE.LineSegments(edges, material);
    this.scene.add(box);
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  private startAnimation(): void {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      
      if (this.material) {
        this.material.uniforms.uCameraPosition.value.copy(this.camera.position);
      }
      
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    
    animate();
  }

  setRenderMode(mode: RenderMode): void {
    this.renderMode = mode;
    if (this.material) {
      const renderModeInt = mode === 'mip' ? 0 : mode === 'composite' ? 1 : 2;
      this.material.uniforms.uRenderMode.value = renderModeInt;
    }
  }

  setStepSize(size: number): void {
    this.stepSize = size;
    if (this.material) {
      this.material.uniforms.uStepSize.value = size;
    }
  }

  setBrightness(brightness: number): void {
    this.brightness = brightness;
    if (this.material) {
      this.material.uniforms.uBrightness.value = brightness;
    }
  }

  setDensity(density: number): void {
    this.density = density;
    if (this.material) {
      this.material.uniforms.uDensity.value = density;
    }
  }

  setIsoValue(value: number): void {
    this.isoValue = value;
    if (this.material) {
      this.material.uniforms.uIsoValue.value = value;
    }
  }

  setWindowLevel(windowLevel: WindowLevel): void {
    this.windowLevel = windowLevel;
    const valueRange = this.volumeTexture.getValueRange();
    const totalRange = valueRange.max - valueRange.min;

    if (totalRange <= 0 || this.material === null) return;

    const minNorm = (windowLevel.level - windowLevel.window / 2 - valueRange.min) / totalRange;
    const maxNorm = (windowLevel.level + windowLevel.window / 2 - valueRange.min) / totalRange;

    this.material.uniforms.uWindowMin.value = Math.max(0, Math.min(1, minNorm));
    this.material.uniforms.uWindowMax.value = Math.max(0, Math.min(1, maxNorm));
  }

  setTransferFunction(points: TransferFunctionPoint[]): void {
    this.transferFunctionPoints = points;
    this.transferFunctionTexture.dispose();
    this.transferFunctionTexture = this.volumeTexture.createTransferFunctionTexture(points);
    
    if (this.material) {
      this.material.uniforms.uTransferFunction.value = this.transferFunctionTexture;
    }
  }

  resetCamera(): void {
    this.camera.position.set(0, 0, 3);
    this.controls.reset();
  }

  getRenderMode(): RenderMode {
    return this.renderMode;
  }

  getWindowLevel(): WindowLevel {
    return this.windowLevel;
  }

  getTransferFunction(): TransferFunctionPoint[] {
    return this.transferFunctionPoints;
  }

  getControls(): OrbitControls {
    return this.controls;
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    window.removeEventListener('resize', this.onResize.bind(this));
    
    this.volumeMesh?.geometry.dispose();
    this.material?.dispose();
    this.volumeTexture3D.dispose();
    this.transferFunctionTexture.dispose();
    this.renderer.dispose();
    
    this.container.removeChild(this.renderer.domElement);
  }
}
