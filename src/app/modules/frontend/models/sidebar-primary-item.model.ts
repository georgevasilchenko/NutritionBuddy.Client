import {BaseAction, IBaseAction} from './base-action.model';

export interface ISidebarPrimaryItem extends IBaseAction {
  iconCode: string;
  itemColor: string;
  itemTooltip: string;
}

export class SidebarPrimaryItem extends BaseAction implements ISidebarPrimaryItem {
  constructor(public iconCode: string,
              public itemColor: string,
              public itemTooltip: string,
              public navigationPath: string,
              public routeName: string) {
    super(navigationPath);
  }
}
