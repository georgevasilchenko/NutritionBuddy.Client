import {Product} from '../../../product/models/product.model';
import {Component, Input, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../../product/globals/product-selectors-ids';
import {BaseCollectionItemComponent} from '../../../../frontend/components/base-collection-item/base-collection-item.component';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';

@Component({
  selector: ProductSelectorsIds.ProductCollectionItemSelector,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent extends BaseCollectionItemComponent<Product> implements OnInit {

  @Input() isCreate = false;
  @Input() model;

  constructor(private _localStorageService: LocalStorageService) {
    super();
  }

  ngOnInit() {

  }

  onClick() {

    if (!this.isCreate) {
      return;
    }

    const modelString = JSON.stringify(this.model);
    this._localStorageService.addValue('product', modelString);
  }
}
