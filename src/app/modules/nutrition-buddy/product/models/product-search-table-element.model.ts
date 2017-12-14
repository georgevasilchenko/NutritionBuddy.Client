import {HeaderActionItem, IHeaderActionItem} from '../../../frontend/models/header-action-item.model';

export interface IProductSearchTableElement {
  image: string;
  quantity: number;
  unit: string;
  name: string;
  calories: number;
  weight: number;
  actions: IHeaderActionItem[];
}

export class ProductSearchTableElement implements IProductSearchTableElement {
  image: string;
  quantity: number;
  unit: string;
  name: string;
  calories: number;
  weight: number;
  actions: HeaderActionItem[];

  constructor(spec?: IProductSearchTableElement) {

    this.actions = [];

    if (spec) {
      this.image = spec.image;
      this.quantity = spec.quantity;
      this.unit = spec.unit;
      this.name = spec.name;
      this.calories = spec.calories;
      this.weight = spec.weight;
      if (spec.actions && spec.actions.length > 0) {
        for (const action of spec.actions) {
          this.actions.push(new HeaderActionItem(action.iconCode, action.itemTooltip, action.navigationPath, action.customAction));
        }
      }
    }
  }
}
