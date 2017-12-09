export interface IBaseAction {
  navigationPath: string;
  customAction?: Function;
}

export class BaseAction implements IBaseAction {
  constructor(public navigationPath: string,
              public customAction?: Function) {
    this.navigationPath = navigationPath;
    this.customAction = customAction;

    if (this.customAction) {
      this.navigationPath = undefined;
    } else if (navigationPath === undefined) {
      this.navigationPath = './';
    }
  }

  onCustomActionClick(): void {
    if (this.customAction) {
      this.customAction();
    }
  }
}
