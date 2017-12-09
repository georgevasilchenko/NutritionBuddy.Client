import {BaseAction, IBaseAction} from './base-action.model';

export interface ISidebarSecondaryItem extends IBaseAction {
  iconCode: string;
  itemColor: string;
  itemTooltip: string;
}

export class SidebarSecondaryItem extends BaseAction implements ISidebarSecondaryItem {
  constructor(public iconCode: string,
              public itemColor: string,
              public itemTooltip: string,
              public navigationPath: string) {
    super(navigationPath);
  }
}
