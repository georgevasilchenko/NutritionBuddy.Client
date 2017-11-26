import {Injectable} from '@angular/core';

@Injectable()
export class TempStorageService {

  private data = {};

  constructor() {
  }

  addItem(key: string, value: any): void {
    if (this.data[key]) {
      return;
    } else {
      this.data[key] = value;
    }
  }

  hasKey(key: string): boolean {
    return this.data[key] !== undefined;
  }

  getItem(key: string): any {
    if (!this.data[key]) {
      return undefined;
    } else {
      return this.data[key];
    }
  }

  clean(): void {
    this.data = {};
  }
}
