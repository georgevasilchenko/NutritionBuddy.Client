import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AlertService {

  onShownEvent: EventEmitter<boolean> = new EventEmitter();

  private _isShown: boolean;
  public message: string;

  constructor() {
  }

  getIsShown(): boolean {
    return this._isShown;
  }

  displayMessage(message: string) {
    if (this._isShown) {
      return;
    }

    this._isShown = false;
    this.message = null;

    setTimeout(() => {
      this._isShown = true;
      this.onShownEvent.emit(true);
      this.message = message;
    }, 1000);

    setTimeout(() => {
      this._isShown = false;
      this.onShownEvent.emit(false);
      this.message = null;
    }, 5000);
  }
}
