import {IProduct, Product} from '../../../product/models/product.model';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../../product/globals/product-selectors-ids';
import {BaseCollectionItemComponent} from '../../../../frontend/components/base-collection-item/base-collection-item.component';
import {CollectionItemActionItem} from '../../../../frontend/models/collection-item-action-item.model';
import {IconsNames} from '../../../../../globals/icons-names';
import {MatDialog} from '@angular/material';
import {ProductEditDialogComponent} from '../product-edit-dialog/product-edit-dialog.component';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {ProductCollectionComponent} from '../product-collection/product-collection.component';
import {DialogResult} from "../../../../frontend/models/dialog-result.model";

@Component({
  selector: ProductSelectorsIds.ProductCollectionItemSelector,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent extends BaseCollectionItemComponent<Product> implements OnInit, OnDestroy {

  @Input() model: Product;
  parentCollectionComponent: ProductCollectionComponent;
  private _productUpdateDialogRef: any;

  constructor(private _productUpdateDialog: MatDialog,
              private _localStorageService: LocalStorageService,
              private _productRepositoryService: ProductRepositoryService) {
    super();
  }

  openUpdateDialog(): void {
    if (this._productUpdateDialogRef && this._productUpdateDialogRef.isOpen) {
      return;
    }

    this._productUpdateDialogRef = this._productUpdateDialog.open(ProductEditDialogComponent);
    this._productUpdateDialogRef.afterClosed().subscribe((result: DialogResult) => {
      this.parentCollectionComponent.refreshModel(result);
    });
  }

  ngOnInit() {
    this.createActions();
  }

  ngOnDestroy() {
    this.destroyActions();
  }

  createActions(): void {
    this.actions = [];
    this.actions.push(
      new CollectionItemActionItem(
        IconsNames.MoreHorizontal,
        'View Details',
        undefined,
        () => {
          this.setDialogDataAndOpenDialog();
        })
    );
  }

  setDialogDataAndOpenDialog(): void {
    this._productRepositoryService.getById(this.model.id)
      .then((result: IProduct) => {
        const modelString = JSON.stringify(result);
        this._localStorageService.addValue(this._localStorageService.__PROD_KEY, modelString);
        this.openUpdateDialog();
      });
  }

  destroyActions(): void {
    this.actions = [];
  }
}
