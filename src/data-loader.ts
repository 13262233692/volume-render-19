// @ts-ignore
import * as nifti from 'nifti-reader-js';
import pako from 'pako';
import type { VolumeData, SegmentationData, SegmentationLabel } from './types';

const DEFAULT_LABEL_COLORS: { r: number; g: number; b: number }[] = [
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 50, b: 50 },
  { r: 50, g: 255, b: 50 },
  { r: 50, g: 100, b: 255 },
  { r: 255, g: 255, b: 50 },
  { r: 255, g: 50, b: 255 },
  { r: 50, g: 255, b: 255 },
  { r: 255, g: 150, b: 50 },
  { r: 150, g: 50, b: 255 },
  { r: 50, g: 255, b: 150 },
  { r: 255, g: 100, b: 100 },
  { r: 100, g: 255, b: 100 },
  { r: 100, g: 100, b: 255 },
  { r: 255, g: 200, b: 100 },
  { r: 200, g: 100, b: 255 },
  { r: 100, g: 200, b: 200 },
];

export class NiftiLoader {
  async loadFromFile(file: File): Promise<VolumeData> {
    const arrayBuffer = await file.arrayBuffer();
    return this.loadFromArrayBuffer(arrayBuffer, file.name);
  }

  async loadSegmentationFromFile(file: File): Promise<SegmentationData> {
    const arrayBuffer = await file.arrayBuffer();
    return this.loadSegmentationFromArrayBuffer(arrayBuffer, file.name);
  }

  async loadSegmentationFromArrayBuffer(arrayBuffer: ArrayBuffer, fileName: string): Promise<SegmentationData> {
    let data = arrayBuffer;
    if (fileName.endsWith('.gz')) {
      data = this.decompressGzip(arrayBuffer);
    }
    return this.parseNiftiSegmentation(data);
  }

  async loadFromArrayBuffer(arrayBuffer: ArrayBuffer, fileName: string): Promise<VolumeData> {
    let data = arrayBuffer;
    
    if (fileName.endsWith('.gz')) {
      data = this.decompressGzip(arrayBuffer);
    }
    
    return this.parseNifti(data);
  }

  private decompressGzip(arrayBuffer: ArrayBuffer): ArrayBuffer {
    const uint8Array = new Uint8Array(arrayBuffer);
    const decompressed = pako.inflate(uint8Array);
    const result = new ArrayBuffer(decompressed.length);
    new Uint8Array(result).set(decompressed);
    return result;
  }

  private parseNifti(arrayBuffer: ArrayBuffer): VolumeData {
    const header = nifti.readHeader(arrayBuffer);
    
    if (!nifti.isNIFTI(header)) {
      throw new Error('Invalid NIfTI file');
    }

    const imageData = nifti.readImage(header, arrayBuffer);
    
    let rawBytes: Uint8Array;
    if (imageData instanceof ArrayBuffer) {
      rawBytes = new Uint8Array(imageData);
    } else if (imageData instanceof Uint8Array) {
      rawBytes = new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength);
    } else {
      rawBytes = new Uint8Array(imageData as ArrayBuffer);
    }
    
    const alignedBuffer = new ArrayBuffer(rawBytes.length);
    new Uint8Array(alignedBuffer).set(rawBytes);

    let volumeData: Float32Array | Uint16Array | Int16Array | Uint8Array | Int8Array;
    const datatypeCode = header.datatypeCode;
    
    switch (datatypeCode) {
      case 2:
        volumeData = new Uint8Array(alignedBuffer);
        break;
      case 4:
        volumeData = new Int16Array(alignedBuffer);
        break;
      case 512:
        volumeData = new Uint16Array(alignedBuffer);
        break;
      case 16:
        volumeData = new Float32Array(alignedBuffer);
        break;
      case 64: {
        const temp64 = new Float64Array(alignedBuffer);
        volumeData = new Float32Array(temp64.length);
        for (let i = 0; i < temp64.length; i++) {
          volumeData[i] = temp64[i];
        }
        break;
      }
      case 256:
        volumeData = new Int8Array(alignedBuffer);
        break;
      default:
        volumeData = new Float32Array(alignedBuffer);
    }

    const { min, max } = this.calculateMinMax(volumeData);
    const histogram = this.calculateHistogram(volumeData, min, max);

    return {
      dimensions: {
        width: header.dims[1],
        height: header.dims[2],
        depth: header.dims[3],
      },
      spacing: {
        x: header.pixDims[1] || 1,
        y: header.pixDims[2] || 1,
        z: header.pixDims[3] || 1,
      },
      data: volumeData,
      minValue: min,
      maxValue: max,
      histogram,
    };
  }

  private parseNiftiSegmentation(arrayBuffer: ArrayBuffer): SegmentationData {
    const header = nifti.readHeader(arrayBuffer);
    
    if (!nifti.isNIFTI(header)) {
      throw new Error('Invalid NIfTI segmentation file');
    }

    const imageData = nifti.readImage(header, arrayBuffer);
    
    let rawBytes: Uint8Array;
    if (imageData instanceof ArrayBuffer) {
      rawBytes = new Uint8Array(imageData);
    } else if (imageData instanceof Uint8Array) {
      rawBytes = new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength);
    } else {
      rawBytes = new Uint8Array(imageData as ArrayBuffer);
    }
    
    const alignedBuffer = new ArrayBuffer(rawBytes.length);
    new Uint8Array(alignedBuffer).set(rawBytes);

    let segData: Uint8Array | Uint16Array | Int16Array;
    const datatypeCode = header.datatypeCode;

    switch (datatypeCode) {
      case 2:
      case 256:
        segData = new Uint8Array(alignedBuffer);
        break;
      case 4:
        segData = new Int16Array(alignedBuffer);
        break;
      case 512:
        segData = new Uint16Array(alignedBuffer);
        break;
      default: {
        const temp = new Uint8Array(alignedBuffer);
        segData = new Uint8Array(temp.length);
        for (let i = 0; i < temp.length; i++) {
          segData[i] = temp[i] > 0 ? 1 : 0;
        }
      }
    }

    let maxLabel = 0;
    for (let i = 0; i < segData.length; i++) {
      if (segData[i] > maxLabel) maxLabel = segData[i];
    }

    const labels: SegmentationLabel[] = [];
    for (let id = 1; id <= maxLabel; id++) {
      let hasVoxels = false;
      for (let i = 0; i < segData.length; i++) {
        if (segData[i] === id) {
          hasVoxels = true;
          break;
        }
      }
      if (hasVoxels) {
        const colorIdx = id % DEFAULT_LABEL_COLORS.length;
        labels.push({
          id,
          name: `Label ${id}`,
          color: { ...DEFAULT_LABEL_COLORS[colorIdx] },
          opacity: 0.6,
          visible: true,
        });
      }
    }

    return {
      dimensions: {
        width: header.dims[1],
        height: header.dims[2],
        depth: header.dims[3],
      },
      data: segData,
      maxLabel,
      labels,
    };
  }

  private calculateMinMax(data: Float32Array | Uint16Array | Int16Array | Uint8Array | Int8Array): { min: number; max: number } {
    let min = Infinity;
    let max = -Infinity;
    
    for (let i = 0; i < data.length; i++) {
      const value = data[i];
      if (value < min) min = value;
      if (value > max) max = value;
    }
    
    return { min, max };
  }

  private calculateHistogram(
    data: Float32Array | Uint16Array | Int16Array | Uint8Array | Int8Array,
    min: number,
    max: number,
    bins: number = 256
  ): number[] {
    const histogram = new Array(bins).fill(0);
    const range = max - min;
    
    if (range === 0) {
      histogram[0] = data.length;
      return histogram;
    }
    
    for (let i = 0; i < data.length; i++) {
      const value = data[i];
      const binIndex = Math.min(Math.floor(((value - min) / range) * bins), bins - 1);
      histogram[binIndex]++;
    }
    
    return histogram;
  }

  generateSyntheticData(): VolumeData {
    const size = 128;
    const data = new Uint8Array(size * size * size);
    
    for (let z = 0; z < size; z++) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const index = z * size * size + y * size + x;
          
          const cx = size / 2, cy = size / 2, cz = size / 2;
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2 + (z - cz) ** 2);
          
          if (dist < size * 0.4) {
            if (dist < size * 0.15) {
              data[index] = 200;
            } else if (dist < size * 0.25) {
              data[index] = 150;
            } else {
              data[index] = 80 + Math.sin(x * 0.1) * 20 + Math.sin(y * 0.15) * 15;
            }
          } else {
            data[index] = 10 + Math.random() * 5;
          }
        }
      }
    }

    const histogram = new Array(256).fill(0);
    for (let i = 0; i < data.length; i++) {
      histogram[data[i]]++;
    }

    return {
      dimensions: { width: size, height: size, depth: size },
      spacing: { x: 1, y: 1, z: 1 },
      data,
      minValue: 0,
      maxValue: 255,
      histogram,
    };
  }
}
