import {Product} from '../../../product/models/product.model';
import {Component, Input, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../../product/globals/product-selectors-ids';
import {BaseCollectionItemComponent} from '../../../../frontend/components/base-collection-item/base-collection-item.component';

@Component({
  selector: ProductSelectorsIds.ProductCollectionItemSelector,
  templateUrl: './product-item.component.html',
  styleUrls: ['../../../../frontend/components/base-collection-item/base-collection-item.component.less']
})
export class ProductItemComponent extends BaseCollectionItemComponent<Product> implements OnInit {

  @Input() model: Product;

  constructor() {
    super();
  }

  ngOnInit() {

  }
}
