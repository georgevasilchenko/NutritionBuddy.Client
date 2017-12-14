import {BaseAction, IBaseAction} from './base-action.model';

export interface ICollectionItemActionItem extends IBaseAction {
  iconCode: string;
  itemTooltip: string;
}

export class CollectionItemActionItem extends BaseAction implements ICollectionItemActionItem {
  constructor(public iconCode: string,
              public itemTooltip: string,
              public navigationPath: string,
              public customAction?: Function,
              public actionText?: string) {
    super(navigationPath, customAction);
  }
}
