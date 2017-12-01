import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {BaseCollectionComponent} from '../../../../frontend/components/base-collection/base-collection.component';
import {IProduct, Product} from '../../models/product.model';
import {ComponentFactoryService} from '../../../../frontend/services/component-factory.service';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {ProductItemComponent} from '../product-item/product-item.component';
import {CreateCollectionItemModel} from '../../../../frontend/models/create-collection-item.model';
import {ProductRepositoryService} from '../../services/product-repository.service';

@Component({
  selector: ProductSelectorsIds.ProductCollectionSelector,
  templateUrl: '../../../../frontend/components/base-collection/base-collection.component.html',
  styleUrls: ['../../../../frontend/components/base-collection/base-collection.component.less']
})
export class ProductCollectionComponent extends BaseCollectionComponent<Product> implements OnInit, OnDestroy {

  constructor(protected _productService: ProductRepositoryService,
              @Inject(ComponentFactoryService) protected _factoryService: ComponentFactoryService<Product, BaseComponent<Product>>) {
    super(_productService, _factoryService, ProductItemComponent,
      new CreateCollectionItemModel('../edit', 'New Product'));
  }

  ngOnInit() {
    this.loadModel();
  }

  onLoadModelComplete() {
    this.mapResultsToCollection();
    this.createComponents(this.model);
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
  }
}
