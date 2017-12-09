import {HeaderActionItem, IHeaderActionItem} from './header-action-item.model';

export interface ICollectionItemActionItem extends IHeaderActionItem {
  iconCode: string;
  itemTooltip: string;
}

export class CollectionItemActionItem extends HeaderActionItem implements ICollectionItemActionItem {
  constructor(public iconCode: string,
              public itemTooltip: string,
              public navigationPath: string,
              public customAction?: Function) {
    super(iconCode, itemTooltip, navigationPath, customAction);
  }
}
