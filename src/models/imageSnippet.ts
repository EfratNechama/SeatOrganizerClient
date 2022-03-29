export class ImageSnippet {
    file: File;
    base64Str: string;
  
    constructor(srcFile: File, resultString: string) {
      this.file = srcFile;
      this.base64Str = resultString;
    }
  }
  