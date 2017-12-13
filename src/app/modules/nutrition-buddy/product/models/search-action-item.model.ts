import {HeaderActionItem, IHeaderActionItem} from '../../../frontend/models/header-action-item.model';

export interface ISearchActionItem extends IHeaderActionItem {
  iconCode: string;
  itemTooltip: string;
}

export class SearchActionItem extends HeaderActionItem implements ISearchActionItem {
  constructor(public iconCode: string,
              public itemTooltip: string,
              public navigationPath: string,
              public customAction?: Function) {
    super(iconCode, itemTooltip, navigationPath, customAction);
  }
}
