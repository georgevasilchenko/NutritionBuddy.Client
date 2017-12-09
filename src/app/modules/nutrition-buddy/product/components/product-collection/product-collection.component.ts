import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {BaseCollectionComponent} from '../../../../frontend/components/base-collection/base-collection.component';
import {IProduct, Product} from '../../models/product.model';
import {ComponentFactoryService} from '../../../../frontend/services/component-factory.service';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {ProductItemComponent} from '../product-item/product-item.component';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {HeaderActionItem} from '../../../../frontend/models/header-action-item.model';
import {IconsNames} from '../../../../../globals/icons-names';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {FeatureActionService} from '../../../../frontend/services/feature-action.service';
import {MatDialog} from "@angular/material";
import {ProductEditDialogComponent} from "../product-edit-dialog/product-edit-dialog.component";

@Component({
  selector: ProductSelectorsIds.ProductCollectionSelector,
  templateUrl: '../../../../frontend/components/base-collection/base-collection.component.html',
  styleUrls: ['../../../../frontend/components/base-collection/base-collection.component.less']
})
export class ProductCollectionComponent extends BaseCollectionComponent<Product> implements OnInit, OnDestroy {

  private _productCreateDialogRef: any;

  constructor(private _productCreateDialog: MatDialog,
              private _routingService: RoutingService,
              private _featureActionsService: FeatureActionService,
              protected _productService: ProductRepositoryService,
              protected _factoryService: ComponentFactoryService<Product, BaseComponent<Product>>) {
    super(_productService, _factoryService, undefined);
  }

  ngOnInit() {
    this.loadModel();
  }

  openCreateDialog(): void {

    if (this._productCreateDialogRef && this._productCreateDialogRef.isOpen) {
      return;
    }

    this._productCreateDialogRef = this._productCreateDialog.open(ProductEditDialogComponent);
    this._productCreateDialogRef.afterClosed().subscribe(result => {
      console.log('REFRESH COLLECTION!!!');
    });
  }

  createActions() {
    this.actions.push(
      new HeaderActionItem(
        IconsNames.AddBox,
        'Add Food',
        undefined,
        () => this.openCreateDialog()
      )
    );
    this._featureActionsService.setActions(this.actions);
  }

  destroyActions(): void {
    this._featureActionsService.resetActions();
  }

  onLoadModelComplete() {
    this.mapResultsToCollection();
    this.createComponents(this.model, ProductItemComponent);
    this.createActions();
  }

  mapResultsToCollection(): void {
    const models = [];
    if (this.model.length > 0) {
      for (const model of this.model) {
        const newProduct = new Product(<IProduct>model);
        models.push(newProduct);
      }
    }
    this.model = models;
  }

  ngOnDestroy() {
    this.destroyChildren();
    this.destroyActions();
  }

  createComponents(model: Product[], type: any): void {
    this.factoryService.setRootViewContainerRef(this.collectionItemsContainer);

    for (const item of model) {
      const newComponent = this.factoryService.addDynamicComponentWithExtendedModel({
        model: item,
        parentCollectionComponent: this
      }, type);
      this.components.push(newComponent);
    }
  }

  refreshModel(): void {
    this.destroyChildren();
    this._productService.getAll()
      .then(results => {
        this.model = results;
        this.mapResultsToCollection();
        this.createComponents(this.model, ProductItemComponent);
      });
  }
}
