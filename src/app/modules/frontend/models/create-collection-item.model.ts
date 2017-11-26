import {Input} from '@angular/core';

export class CreateCollectionItemModel {
  @Input() createPath: string;
  @Input() title: string;

  constructor(createPath: string,
              title: string) {
    this.createPath = createPath;
    this.title = title;
  }
}
