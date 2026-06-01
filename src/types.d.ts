declare module 'nifti-reader-js' {
  export function readHeader(data: ArrayBuffer): any;
  export function readImage(header: any, data: ArrayBuffer): any;
  export function isNIFTI(header: any): boolean;
}

declare module 'pako' {
  export function inflate(data: Uint8Array): Uint8Array;
}
