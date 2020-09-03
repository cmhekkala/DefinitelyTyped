declare class BlobWriter {
  constructor(contentType: string);
}
declare class BlobReader {
  constructor(blob: Blob);
  getEntries(f: Function): void;
  close(): void;
}
declare class ZipEntry {
  filename: string;
  directory: boolean;
  getData(blobWriter: BlobWriter, f: Function): void;
}
declare function createReader(
    reader: BlobReader, callback: Function, onerror: Function): void;
