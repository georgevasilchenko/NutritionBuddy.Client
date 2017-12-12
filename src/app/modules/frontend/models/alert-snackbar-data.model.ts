export interface IAlertSnackbarData {
  message: string;
}

export class AlertSnackbarData implements IAlertSnackbarData {
  constructor(public message: string) {

  }
}
