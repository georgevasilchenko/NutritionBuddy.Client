import {BaseAction, IBaseAction} from './base-action.model';

export interface IHeaderActionItem extends IBaseAction {
  iconCode: string;
  itemTooltip: string;
}

export class HeaderActionItem extends BaseAction implements IHeaderActionItem {
  constructor(public iconCode: string,
              public itemTooltip: string,
              public navigationPath: string,
              public customAction?: Function,
              public isDisabled?: boolean) {
    super(navigationPath, customAction, isDisabled);
  }
}
