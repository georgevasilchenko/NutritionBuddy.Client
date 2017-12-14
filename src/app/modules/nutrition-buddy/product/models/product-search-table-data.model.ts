import {MatTableDataSource} from '@angular/material';
import {ProductSearchTableElement} from './product-search-table-element.model';

export interface IProductSearchTableData {
  columns: string[];
  source: MatTableDataSource<ProductSearchTableElement>;
}

export class ProductSearchTableData implements IProductSearchTableData {
  columns: string[];
  source: MatTableDataSource<ProductSearchTableElement>;

  constructor(spec?: IProductSearchTableData) {
    if (spec) {
      this.columns = spec.columns;
      this.source = spec.source;
    }
  }
}
