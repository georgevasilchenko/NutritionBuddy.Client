export interface IDialogResult {
  modelIsChanged: boolean;
}

export class DialogResult implements IDialogResult {
  modelIsChanged: boolean;

  constructor(modelIsChanged: boolean) {
    this.modelIsChanged = modelIsChanged;
  }
}
