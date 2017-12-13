import {ProductSearchTableElement} from './product-search-table-element.model';

export interface IProductSearchTableData {
  columns: string[];
  source: any;
}

export class ProductSearchTableData implements IProductSearchTableData {
  columns: string[];
  source: ProductSearchTableElement[];

  constructor(spec?: IProductSearchTableData) {
    this.source = [];
    if (spec) {
      this.columns = spec.columns;
      this.source = spec.source;
    }
  }
}
