export interface IBaseAction {
  navigationPath: string;
  customAction?: Function;
  isDisabled?: boolean;
}

export class BaseAction implements IBaseAction {

  constructor(public navigationPath: string,
              public customAction?: Function,
              public isDisabled?: boolean) {
    this.navigationPath = navigationPath;
    this.customAction = customAction;
    this.isDisabled = isDisabled;

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
