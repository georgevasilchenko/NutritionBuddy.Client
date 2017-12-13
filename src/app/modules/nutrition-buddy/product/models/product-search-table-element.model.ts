export interface IProductSearchTableElement {
  image: string;
  quantity: number;
  unit: string;
  name: string;
  calories: number;
  weight: number;
}

export class ProductSearchTableElement implements IProductSearchTableElement {
  image: string;
  quantity: number;
  unit: string;
  name: string;
  calories: number;
  weight: number;

  constructor(spec?: IProductSearchTableElement) {
    if (spec) {
      this.image = spec.image;
      this.quantity = spec.quantity;
      this.unit = spec.unit;
      this.name = spec.name;
      this.calories = spec.calories;
      this.weight = spec.weight;
    }
  }
}
