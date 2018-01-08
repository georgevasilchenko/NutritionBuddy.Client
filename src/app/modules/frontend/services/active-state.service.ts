import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ActiveStateService {

  private _currentState: string;
  onStateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  setState(state: any): void {
    this._currentState = state;
    this.onStateChange.emit(state);
  }

  getCurrentState(): string {
    return this._currentState;
  }
}
