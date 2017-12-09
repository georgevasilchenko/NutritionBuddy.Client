import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FeatureActionService {

  onFeatureActionsUpdate: EventEmitter<any> = new EventEmitter<any>();
  currentFeatureActions = [];

  constructor() {
  }

  setActions(actions: any[]): void {
    this.currentFeatureActions = actions;
    this.onFeatureActionsUpdate.emit(this.currentFeatureActions);
  }

  resetActions(): void {
    this.currentFeatureActions = [];
    this.onFeatureActionsUpdate.emit(this.currentFeatureActions);
  }
}
