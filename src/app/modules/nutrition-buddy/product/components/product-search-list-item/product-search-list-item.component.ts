import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {Product} from '../../models/product.model';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {IconsNames} from '../../../../../globals/icons-names';
import {HeaderActionItem} from '../../../../frontend/models/header-action-item.model';

@Component({
  selector: ProductSelectorsIds.ProductSearchListItemSelector,
  templateUrl: './product-search-list-item.component.html',
  styleUrls: ['./product-search-list-item.component.less']
})
export class ProductSearchListItemComponent extends BaseComponent<Product> implements OnInit, OnDestroy {

  @Input() model: Product;

  constructor() {
    super();

    this.actions = [];
  }

  ngOnInit() {
    this.createActions();
  }

  ngOnDestroy() {
    this.destroyActions();
  }

  createActions() {
    this.actions.push(
      new HeaderActionItem(
        IconsNames.MoreHorizontal,
        'Details',
        undefined,
        () => {
          this.onDetailsClick();
        }
      ),
      new HeaderActionItem(
        IconsNames.AddBox,
        'Save',
        undefined,
        () => {
          this.onAddClick();
        }
      )
    );
  }

  destroyActions(): void {
    this.actions = [];
  }

  onDetailsClick(): void {

  }

  onAddClick(): void {

  }
}
