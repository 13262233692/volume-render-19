export interface VolumeData {
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  spacing: {
    x: number;
    y: number;
    z: number;
  };
  data: Float32Array | Uint16Array | Int16Array | Uint8Array | Int8Array;
  minValue: number;
  maxValue: number;
  histogram: number[];
}

export interface TransferFunctionPoint {
  value: number;
  color: { r: number; g: number; b: number };
  opacity: number;
}

export interface WindowLevel {
  window: number;
  level: number;
}

export type MPRPlane = 'axial' | 'sagittal' | 'coronal';

export interface MPRSlice {
  plane: MPRPlane;
  index: number;
}

export interface SegmentationLabel {
  id: number;
  name: string;
  color: { r: number; g: number; b: number };
  opacity: number;
  visible: boolean;
}

export interface SegmentationData {
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  data: Uint8Array | Uint16Array | Int16Array;
  maxLabel: number;
  labels: SegmentationLabel[];
}
