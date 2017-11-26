export interface IFileImage {
  fileName: string;
  fileContentBase64: string;
  contentType: string;

  getImageString(): string;
}

export class FileImage implements IFileImage {
  fileName: string;
  fileContentBase64: string;
  contentType: string;

  get imageString(): string {
    return 'data:' + this.contentType + ';base64,' + this.fileContentBase64;
  }

  constructor(spec?: IFileImage) {
    if (spec) {
      this.fileName = spec.fileName;
      this.fileContentBase64 = spec.fileContentBase64;
      this.contentType = spec.contentType;
    }
  }

  decryptImageString(base64ImageString: string): void {
    const parts = base64ImageString.split(/([;:,])/g);

    parts.splice(parts.indexOf('data'), 1);
    parts.splice(parts.indexOf('base64'), 1);
    parts.splice(parts.indexOf(':'), 1);
    parts.splice(parts.indexOf(';'), 1);
    parts.splice(parts.indexOf(','), 1);

    this.contentType = parts[0];
    this.fileContentBase64 = parts[1];
  }

  getImageString(): string {
    return 'data:' + this.contentType + ';base64,' + this.fileContentBase64;
  }
}
