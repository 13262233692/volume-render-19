import * as THREE from 'three';
import { VolumeTexture } from './volume-texture';
import type { MPRPlane, SegmentationLabel } from './types';

export class MPRView {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private volumeTexture: VolumeTexture;
  private plane: MPRPlane;
  private sliceIndex: number;
  private sliceMesh: THREE.Mesh | null = null;
  private sliceTexture: THREE.DataTexture | null = null;
  private segOverlayMesh: THREE.Mesh | null = null;
  private segOverlayTexture: THREE.DataTexture | null = null;
  private windowMin: number;
  private windowMax: number;
  private isDragging: boolean = false;
  private lastMouseY: number = 0;
  private onSliceChange: (index: number) => void;
  private segLabels: SegmentationLabel[] = [];
  private segVisible: boolean = false;

  constructor(
    container: HTMLElement,
    volumeTexture: VolumeTexture,
    plane: MPRPlane,
    onSliceChange: (index: number) => void
  ) {
    this.container = container;
    this.volumeTexture = volumeTexture;
    this.plane = plane;
    this.onSliceChange = onSliceChange;
    
    const valueRange = volumeTexture.getValueRange();
    this.windowMin = valueRange.min;
    this.windowMax = valueRange.max;
    
    this.sliceIndex = Math.floor(this.getMaxSlice() / 2);
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a14);
    
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
    this.camera.position.z = 1;
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);
    
    this.createSliceMesh();
    this.setupEventListeners();
    this.onResize();
    this.render();
  }

  private getMaxSlice(): number {
    const dims = this.volumeTexture.getDimensions();
    switch (this.plane) {
      case 'axial': return dims.depth;
      case 'sagittal': return dims.width;
      case 'coronal': return dims.height;
    }
  }

  private getSliceDimensions(): { width: number; height: number } {
    const dims = this.volumeTexture.getDimensions();
    switch (this.plane) {
      case 'axial': return { width: dims.width, height: dims.height };
      case 'sagittal': return { width: dims.height, height: dims.depth };
      case 'coronal': return { width: dims.width, height: dims.depth };
    }
  }

  private createSliceMesh(): void {
    const { width, height } = this.getSliceDimensions();
    const sliceData = this.volumeTexture.getSlice(this.plane, this.sliceIndex);
    const valueRange = this.volumeTexture.getValueRange();
    const range = valueRange.max - valueRange.min;
    
    const rgbaData = new Uint8Array(width * height * 4);
    for (let i = 0; i < width * height; i++) {
      const normalized = sliceData[i] / 255;
      let displayValue: number;
      
      if (range > 0) {
        const wMinNorm = (this.windowMin - valueRange.min) / range;
        const wMaxNorm = (this.windowMax - valueRange.min) / range;
        const windowRange = wMaxNorm - wMinNorm;
        displayValue = windowRange > 0 
          ? Math.max(0, Math.min(1, (normalized - wMinNorm) / windowRange))
          : 0;
      } else {
        displayValue = normalized;
      }
      
      const byteValue = Math.floor(displayValue * 255);
      rgbaData[i * 4] = byteValue;
      rgbaData[i * 4 + 1] = byteValue;
      rgbaData[i * 4 + 2] = byteValue;
      rgbaData[i * 4 + 3] = 255;
    }
    
    this.sliceTexture = new THREE.DataTexture(rgbaData, width, height);
    this.sliceTexture.format = THREE.RGBAFormat;
    this.sliceTexture.type = THREE.UnsignedByteType;
    this.sliceTexture.minFilter = THREE.LinearFilter;
    this.sliceTexture.magFilter = THREE.LinearFilter;
    this.sliceTexture.wrapS = THREE.ClampToEdgeWrapping;
    this.sliceTexture.wrapT = THREE.ClampToEdgeWrapping;
    this.sliceTexture.needsUpdate = true;
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({
      map: this.sliceTexture,
    });
    
    this.sliceMesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.sliceMesh);
  }

  private createSegOverlay(): void {
    if (this.segOverlayMesh) {
      this.scene.remove(this.segOverlayMesh);
      this.segOverlayMesh.geometry.dispose();
      (this.segOverlayMesh.material as THREE.Material).dispose();
      this.segOverlayTexture?.dispose();
      this.segOverlayMesh = null;
      this.segOverlayTexture = null;
    }

    if (!this.segVisible || !this.volumeTexture.hasSegmentation()) return;

    const { width, height } = this.getSliceDimensions();
    const segSliceData = this.volumeTexture.getSegmentationSlice(this.plane, this.sliceIndex);
    if (!segSliceData) return;

    const rgbaData = new Uint8Array(width * height * 4);
    for (let i = 0; i < width * height; i++) {
      const labelId = segSliceData[i];
      if (labelId === 0) {
        rgbaData[i * 4] = 0;
        rgbaData[i * 4 + 1] = 0;
        rgbaData[i * 4 + 2] = 0;
        rgbaData[i * 4 + 3] = 0;
        continue;
      }
      const label = this.segLabels.find(l => l.id === labelId);
      if (!label || !label.visible) {
        rgbaData[i * 4] = 0;
        rgbaData[i * 4 + 1] = 0;
        rgbaData[i * 4 + 2] = 0;
        rgbaData[i * 4 + 3] = 0;
        continue;
      }
      rgbaData[i * 4] = label.color.r;
      rgbaData[i * 4 + 1] = label.color.g;
      rgbaData[i * 4 + 2] = label.color.b;
      rgbaData[i * 4 + 3] = Math.floor(label.opacity * 255);
    }

    this.segOverlayTexture = new THREE.DataTexture(rgbaData, width, height);
    this.segOverlayTexture.format = THREE.RGBAFormat;
    this.segOverlayTexture.type = THREE.UnsignedByteType;
    this.segOverlayTexture.minFilter = THREE.NearestFilter;
    this.segOverlayTexture.magFilter = THREE.NearestFilter;
    this.segOverlayTexture.wrapS = THREE.ClampToEdgeWrapping;
    this.segOverlayTexture.wrapT = THREE.ClampToEdgeWrapping;
    this.segOverlayTexture.needsUpdate = true;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({
      map: this.segOverlayTexture,
      transparent: true,
      depthTest: false,
    });

    this.segOverlayMesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.segOverlayMesh);
  }

  private updateSliceTexture(): void {
    if (!this.sliceMesh || !this.sliceTexture) return;
    
    const { width, height } = this.getSliceDimensions();
    const sliceData = this.volumeTexture.getSlice(this.plane, this.sliceIndex);
    const valueRange = this.volumeTexture.getValueRange();
    const range = valueRange.max - valueRange.min;
    const wMinNorm = range > 0 ? (this.windowMin - valueRange.min) / range : 0;
    const wMaxNorm = range > 0 ? (this.windowMax - valueRange.min) / range : 1;
    const windowRange = wMaxNorm - wMinNorm;

    const rgbaData = this.sliceTexture.image.data as unknown as Uint8Array;
    for (let i = 0; i < width * height; i++) {
      const normalized = sliceData[i] / 255;
      const displayValue = windowRange > 0
        ? Math.max(0, Math.min(1, (normalized - wMinNorm) / windowRange))
        : normalized;
      const byteValue = Math.floor(displayValue * 255);
      
      rgbaData[i * 4] = byteValue;
      rgbaData[i * 4 + 1] = byteValue;
      rgbaData[i * 4 + 2] = byteValue;
    }
    
    this.sliceTexture.needsUpdate = true;
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', this.onResize.bind(this));
    
    const canvas = this.renderer.domElement;
    canvas.style.cursor = 'pointer';
    
    canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseY = e.clientY;
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      
      const deltaY = e.clientY - this.lastMouseY;
      const deltaIndex = Math.round(deltaY / 10);
      
      if (Math.abs(deltaIndex) >= 1) {
        const maxSlice = this.getMaxSlice() - 1;
        this.sliceIndex = Math.max(0, Math.min(maxSlice, this.sliceIndex - deltaIndex));
        this.lastMouseY = e.clientY;
        this.updateSliceTexture();
        this.createSegOverlay();
        this.onSliceChange(this.sliceIndex);
        this.render();
      }
    });
    
    canvas.addEventListener('mouseup', () => {
      this.isDragging = false;
    });
    
    canvas.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });
    
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const maxSlice = this.getMaxSlice() - 1;
      const delta = e.deltaY > 0 ? 1 : -1;
      this.sliceIndex = Math.max(0, Math.min(maxSlice, this.sliceIndex + delta));
      this.updateSliceTexture();
      this.createSegOverlay();
      this.onSliceChange(this.sliceIndex);
      this.render();
    });
  }

  private onResize(): void {
    const rect = this.container.getBoundingClientRect();
    this.renderer.setSize(rect.width, rect.height);
    
    const { width, height } = this.getSliceDimensions();
    const aspect = width / height;
    const containerAspect = rect.width / rect.height;
    
    if (aspect > containerAspect) {
      this.camera.left = -1;
      this.camera.right = 1;
      this.camera.top = 1 / aspect * containerAspect;
      this.camera.bottom = -1 / aspect * containerAspect;
    } else {
      this.camera.left = -aspect / containerAspect;
      this.camera.right = aspect / containerAspect;
      this.camera.top = 1;
      this.camera.bottom = -1;
    }
    
    this.camera.updateProjectionMatrix();
    this.render();
  }

  setSliceIndex(index: number): void {
    const maxSlice = this.getMaxSlice() - 1;
    this.sliceIndex = Math.max(0, Math.min(maxSlice, index));
    this.updateSliceTexture();
    this.createSegOverlay();
    this.render();
  }

  getSliceIndex(): number {
    return this.sliceIndex;
  }

  setWindowLevel(windowMin: number, windowMax: number): void {
    this.windowMin = windowMin;
    this.windowMax = windowMax;
    this.updateSliceTexture();
    this.render();
  }

  setSegmentationLabels(labels: SegmentationLabel[]): void {
    this.segLabels = labels;
    this.segVisible = labels.length > 0 && this.volumeTexture.hasSegmentation();
    this.createSegOverlay();
    this.render();
  }

  updateSegmentationLabels(labels: SegmentationLabel[]): void {
    this.segLabels = labels;
    this.createSegOverlay();
    this.render();
  }

  removeSegmentation(): void {
    this.segVisible = false;
    this.segLabels = [];
    this.createSegOverlay();
    this.render();
  }

  getPlane(): MPRPlane {
    return this.plane;
  }

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.sliceMesh?.geometry.dispose();
    (this.sliceMesh?.material as THREE.Material)?.dispose();
    this.sliceTexture?.dispose();
    this.segOverlayMesh?.geometry.dispose();
    (this.segOverlayMesh?.material as THREE.Material)?.dispose();
    this.segOverlayTexture?.dispose();
    this.renderer.dispose();
    this.container.removeChild(this.renderer.domElement);
  }
}
