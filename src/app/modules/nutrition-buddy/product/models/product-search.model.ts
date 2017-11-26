import {IProductSearchQuery} from './product-search.model';

export interface IProductSearchQuery {
  value: string;
}

export class ProductSearchQuery implements IProductSearchQuery {
  constructor(public value: string) {
  }
}
