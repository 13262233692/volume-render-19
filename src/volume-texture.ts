import * as THREE from 'three';
import type { VolumeData, TransferFunctionPoint, WindowLevel, SegmentationData, SegmentationLabel } from './types';

const MAX_SEG_LABELS = 32;

export class VolumeTexture {
  private volumeData: VolumeData;
  private segmentationData: SegmentationData | null = null;
  private dataTexture3D: THREE.Data3DTexture | null = null;
  private transferFunctionTexture: THREE.DataTexture | null = null;
  private segmentationTexture3D: THREE.Data3DTexture | null = null;
  private segmentationLUTTexture: THREE.DataTexture | null = null;

  constructor(volumeData: VolumeData) {
    this.volumeData = volumeData;
  }

  create3DTexture(): THREE.Data3DTexture {
    const { dimensions, data, minValue, maxValue } = this.volumeData;
    const totalVoxels = dimensions.width * dimensions.height * dimensions.depth;
    const range = maxValue - minValue;

    const textureData = new Uint16Array(totalVoxels);

    if (range === 0) {
      textureData.fill(32768);
    } else {
      for (let i = 0; i < data.length; i++) {
        const normalized = (data[i] - minValue) / range;
        textureData[i] = Math.min(65535, Math.max(0, Math.round(normalized * 65535)));
      }
    }

    this.dataTexture3D = new THREE.Data3DTexture(
      textureData,
      dimensions.width,
      dimensions.height,
      dimensions.depth
    );

    this.dataTexture3D.format = THREE.RedFormat;
    this.dataTexture3D.type = THREE.UnsignedShortType;
    this.dataTexture3D.minFilter = THREE.LinearFilter;
    this.dataTexture3D.magFilter = THREE.LinearFilter;
    this.dataTexture3D.wrapS = THREE.ClampToEdgeWrapping;
    this.dataTexture3D.wrapT = THREE.ClampToEdgeWrapping;
    this.dataTexture3D.wrapR = THREE.ClampToEdgeWrapping;
    this.dataTexture3D.unpackAlignment = 2;
    this.dataTexture3D.needsUpdate = true;

    return this.dataTexture3D;
  }

  createTransferFunctionTexture(points: TransferFunctionPoint[]): THREE.DataTexture {
    const size = 1024;
    const data = new Uint8Array(size * 4);
    
    const sortedPoints = [...points].sort((a, b) => a.value - b.value);
    
    for (let i = 0; i < size; i++) {
      const t = i / (size - 1);
      
      let prevPoint = sortedPoints[0];
      let nextPoint = sortedPoints[sortedPoints.length - 1];
      
      for (let j = 0; j < sortedPoints.length - 1; j++) {
        if (t >= sortedPoints[j].value && t <= sortedPoints[j + 1].value) {
          prevPoint = sortedPoints[j];
          nextPoint = sortedPoints[j + 1];
          break;
        }
      }
      
      const localT = (t - prevPoint.value) / (nextPoint.value - prevPoint.value || 1);
      
      const r = Math.floor(prevPoint.color.r + (nextPoint.color.r - prevPoint.color.r) * localT);
      const g = Math.floor(prevPoint.color.g + (nextPoint.color.g - prevPoint.color.g) * localT);
      const b = Math.floor(prevPoint.color.b + (nextPoint.color.b - prevPoint.color.b) * localT);
      const a = Math.floor((prevPoint.opacity + (nextPoint.opacity - prevPoint.opacity) * localT) * 255);
      
      data[i * 4] = r;
      data[i * 4 + 1] = g;
      data[i * 4 + 2] = b;
      data[i * 4 + 3] = a;
    }
    
    this.transferFunctionTexture = new THREE.DataTexture(data, size, 1);
    this.transferFunctionTexture.format = THREE.RGBAFormat;
    this.transferFunctionTexture.type = THREE.UnsignedByteType;
    this.transferFunctionTexture.minFilter = THREE.LinearFilter;
    this.transferFunctionTexture.magFilter = THREE.LinearFilter;
    this.transferFunctionTexture.wrapS = THREE.ClampToEdgeWrapping;
    this.transferFunctionTexture.wrapT = THREE.ClampToEdgeWrapping;
    this.transferFunctionTexture.needsUpdate = true;
    
    return this.transferFunctionTexture;
  }

  getDefaultTransferFunction(): TransferFunctionPoint[] {
    const { minValue, maxValue } = this.volumeData;
    const isCT = minValue < 0 || maxValue > 255;

    if (isCT) {
      return [
        { value: 0.0, color: { r: 0, g: 0, b: 0 }, opacity: 0.0 },
        { value: 0.1, color: { r: 30, g: 30, b: 50 }, opacity: 0.0 },
        { value: 0.2, color: { r: 80, g: 80, b: 120 }, opacity: 0.15 },
        { value: 0.35, color: { r: 150, g: 100, b: 80 }, opacity: 0.4 },
        { value: 0.5, color: { r: 200, g: 150, b: 100 }, opacity: 0.6 },
        { value: 0.7, color: { r: 240, g: 200, b: 160 }, opacity: 0.8 },
        { value: 0.85, color: { r: 255, g: 240, b: 220 }, opacity: 0.9 },
        { value: 1.0, color: { r: 255, g: 255, b: 255 }, opacity: 1.0 },
      ];
    }

    return [
      { value: 0.0, color: { r: 0, g: 0, b: 0 }, opacity: 0.0 },
      { value: 0.2, color: { r: 100, g: 100, b: 150 }, opacity: 0.1 },
      { value: 0.4, color: { r: 150, g: 120, b: 100 }, opacity: 0.25 },
      { value: 0.6, color: { r: 200, g: 150, b: 100 }, opacity: 0.5 },
      { value: 0.8, color: { r: 255, g: 255, b: 200 }, opacity: 0.75 },
      { value: 1.0, color: { r: 255, g: 255, b: 255 }, opacity: 1.0 },
    ];
  }

  getDefaultWindowLevel(): WindowLevel {
    const { minValue, maxValue } = this.volumeData;
    return {
      window: maxValue - minValue,
      level: (maxValue + minValue) / 2,
    };
  }

  getVolumeSize(): THREE.Vector3 {
    const { dimensions, spacing } = this.volumeData;
    const maxDim = Math.max(dimensions.width * spacing.x, dimensions.height * spacing.y, dimensions.depth * spacing.z);
    
    return new THREE.Vector3(
      (dimensions.width * spacing.x) / maxDim * 2,
      (dimensions.height * spacing.y) / maxDim * 2,
      (dimensions.depth * spacing.z) / maxDim * 2
    );
  }

  getDimensions() {
    return this.volumeData.dimensions;
  }

  getSpacing() {
    return this.volumeData.spacing;
  }

  getHistogram() {
    return this.volumeData.histogram;
  }

  getValueRange() {
    return { min: this.volumeData.minValue, max: this.volumeData.maxValue };
  }

  getVoxelValue(x: number, y: number, z: number): number {
    const { dimensions } = this.volumeData;
    if (x < 0 || x >= dimensions.width || y < 0 || y >= dimensions.height || z < 0 || z >= dimensions.depth) {
      return 0;
    }
    const index = Math.floor(z) * dimensions.width * dimensions.height + Math.floor(y) * dimensions.width + Math.floor(x);
    return this.volumeData.data[index];
  }

  getSlice(plane: 'axial' | 'sagittal' | 'coronal', index: number): Uint8Array {
    const { dimensions } = this.volumeData;
    const { minValue, maxValue } = this.volumeData;
    const range = maxValue - minValue;
    
    let width: number, height: number;
    const sliceData: number[] = [];
    
    switch (plane) {
      case 'axial':
        width = dimensions.width;
        height = dimensions.height;
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const value = this.getVoxelValue(x, y, index);
            sliceData.push(Math.min(255, Math.max(0, Math.floor(((value - minValue) / range) * 255))));
          }
        }
        break;
      case 'sagittal':
        width = dimensions.height;
        height = dimensions.depth;
        for (let z = 0; z < height; z++) {
          for (let y = 0; y < width; y++) {
            const value = this.getVoxelValue(index, y, z);
            sliceData.push(Math.min(255, Math.max(0, Math.floor(((value - minValue) / range) * 255))));
          }
        }
        break;
      case 'coronal':
        width = dimensions.width;
        height = dimensions.depth;
        for (let z = 0; z < height; z++) {
          for (let x = 0; x < width; x++) {
            const value = this.getVoxelValue(x, index, z);
            sliceData.push(Math.min(255, Math.max(0, Math.floor(((value - minValue) / range) * 255))));
          }
        }
        break;
    }
    
    return new Uint8Array(sliceData);
  }

  setSegmentation(segData: SegmentationData): void {
    this.segmentationData = segData;
  }

  getSegmentation(): SegmentationData | null {
    return this.segmentationData;
  }

  createSegmentation3DTexture(): THREE.Data3DTexture | null {
    if (!this.segmentationData) return null;

    const { dimensions, data } = this.segmentationData;
    const totalVoxels = dimensions.width * dimensions.height * dimensions.depth;

    const textureData = new Uint8Array(totalVoxels);

    for (let i = 0; i < data.length && i < totalVoxels; i++) {
      textureData[i] = Math.min(MAX_SEG_LABELS - 1, Math.max(0, data[i]));
    }

    this.segmentationTexture3D = new THREE.Data3DTexture(
      textureData,
      dimensions.width,
      dimensions.height,
      dimensions.depth
    );

    this.segmentationTexture3D.format = THREE.RedFormat;
    this.segmentationTexture3D.type = THREE.UnsignedByteType;
    this.segmentationTexture3D.minFilter = THREE.NearestFilter;
    this.segmentationTexture3D.magFilter = THREE.NearestFilter;
    this.segmentationTexture3D.wrapS = THREE.ClampToEdgeWrapping;
    this.segmentationTexture3D.wrapT = THREE.ClampToEdgeWrapping;
    this.segmentationTexture3D.wrapR = THREE.ClampToEdgeWrapping;
    this.segmentationTexture3D.needsUpdate = true;

    return this.segmentationTexture3D;
  }

  createSegmentationLUT(labels: SegmentationLabel[]): THREE.DataTexture {
    const data = new Uint8Array(MAX_SEG_LABELS * 4);

    data[0] = 0;
    data[1] = 0;
    data[2] = 0;
    data[3] = 0;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const idx = label.id;
      if (idx >= MAX_SEG_LABELS) continue;

      const offset = idx * 4;
      data[offset] = label.color.r;
      data[offset + 1] = label.color.g;
      data[offset + 2] = label.color.b;
      data[offset + 3] = label.visible ? Math.floor(label.opacity * 255) : 0;
    }

    this.segmentationLUTTexture = new THREE.DataTexture(data, MAX_SEG_LABELS, 1);
    this.segmentationLUTTexture.format = THREE.RGBAFormat;
    this.segmentationLUTTexture.type = THREE.UnsignedByteType;
    this.segmentationLUTTexture.minFilter = THREE.NearestFilter;
    this.segmentationLUTTexture.magFilter = THREE.NearestFilter;
    this.segmentationLUTTexture.wrapS = THREE.ClampToEdgeWrapping;
    this.segmentationLUTTexture.wrapT = THREE.ClampToEdgeWrapping;
    this.segmentationLUTTexture.needsUpdate = true;

    return this.segmentationLUTTexture;
  }

  updateSegmentationLUT(labels: SegmentationLabel[]): void {
    if (!this.segmentationLUTTexture) return;

    const data = this.segmentationLUTTexture.image.data as unknown as Uint8Array;

    data[0] = 0;
    data[1] = 0;
    data[2] = 0;
    data[3] = 0;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const idx = label.id;
      if (idx >= MAX_SEG_LABELS) continue;

      const offset = idx * 4;
      data[offset] = label.color.r;
      data[offset + 1] = label.color.g;
      data[offset + 2] = label.color.b;
      data[offset + 3] = label.visible ? Math.floor(label.opacity * 255) : 0;
    }

    this.segmentationLUTTexture.needsUpdate = true;
  }

  getSegmentationSlice(plane: 'axial' | 'sagittal' | 'coronal', index: number): Uint8Array | null {
    if (!this.segmentationData) return null;

    const { dimensions, data } = this.segmentationData;
    let width: number, height: number;
    const sliceData: number[] = [];

    switch (plane) {
      case 'axial':
        width = dimensions.width;
        height = dimensions.height;
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const vi = index * width * height + y * width + x;
            sliceData.push(vi < data.length ? data[vi] : 0);
          }
        }
        break;
      case 'sagittal':
        width = dimensions.height;
        height = dimensions.depth;
        for (let z = 0; z < height; z++) {
          for (let y = 0; y < width; y++) {
            const vi = z * dimensions.width * dimensions.height + y * dimensions.width + index;
            sliceData.push(vi < data.length ? data[vi] : 0);
          }
        }
        break;
      case 'coronal':
        width = dimensions.width;
        height = dimensions.depth;
        for (let z = 0; z < height; z++) {
          for (let x = 0; x < width; x++) {
            const vi = z * dimensions.width * dimensions.height + index * dimensions.width + x;
            sliceData.push(vi < data.length ? data[vi] : 0);
          }
        }
        break;
    }

    return new Uint8Array(sliceData);
  }

  hasSegmentation(): boolean {
    return this.segmentationData !== null;
  }

  getMaxSegLabels(): number {
    return MAX_SEG_LABELS;
  }

  dispose(): void {
    this.dataTexture3D?.dispose();
    this.transferFunctionTexture?.dispose();
    this.segmentationTexture3D?.dispose();
    this.segmentationLUTTexture?.dispose();
  }
}
