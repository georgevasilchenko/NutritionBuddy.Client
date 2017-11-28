export interface IFoodSearchResult {
  description: string;
  name: string;
  type: string;
  url: string;
}

export class FoodSearchResult implements IFoodSearchResult {
  description: string;
  name: string;
  type: string;
  url: string;

  get calories(): number {
    return 0;
  }

  get carbohydrate(): number {
    return 0;
  }

  get protein(): number {
    return 0;
  }

  get fat(): number {
    return 0;
  }

  constructor(spec?: IFoodSearchResult) {
    if (spec) {
      this.description = spec.description;
      this.name = spec.name;
      this.type = spec.type;
      this.url = spec.url;
    }
  }
}
