import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

  isActivatedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  activate() {
    this.isActivatedChange.emit(true);
  }

  deactivate() {
    this.isActivatedChange.emit(false);
  }
}
