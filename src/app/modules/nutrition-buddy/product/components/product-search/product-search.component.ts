import {IProduct, Product} from '../../models/product.model';
import {ProductSearchQuery} from '../../models/product-search.model';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {BaseCollectionComponent} from '../../../../frontend/components/base-collection/base-collection.component';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {ComponentFactoryService} from '../../../../frontend/services/component-factory.service';
import {ProductSearchItemComponent} from "../product-search-item/product-search-item.component";

@Component({
  selector: ProductSelectorsIds.ProductSearchSelector,
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.less',
    '../../../../frontend/components/base-collection/base-collection.component.less']
})
export class ProductSearchComponent extends BaseCollectionComponent<Product> implements OnInit, OnDestroy {

  searchQuery: string;

  constructor(protected _productService: ProductRepositoryService,
              protected _factoryService: ComponentFactoryService<Product, BaseComponent<Product>>) {
    super(_productService, _factoryService);
  }

  ngOnInit() {

  }

  onInstantSearch(event: KeyboardEvent): void {
    if (this.searchQuery) {
      const that = this;
      this._productService.search(new ProductSearchQuery(that.searchQuery))
        .then(result => {
          that.model = result;
          that.destroyChildren();
          that.createComponents(result);
        });
    } else {
      this.destroyChildren();
    }
  }

  onSearch(): void {
    const that = this;
    this._productService.search(new ProductSearchQuery(that.searchQuery))
      .then(result => {
        that.model = result;
        that.destroyChildren();
        that.mapResultsToCollection();
        that.createComponents(result);
      });
  }

  saveAll(): void {
    if (this.model) {
      const that = this;
      for (const product of this.model) {
        this._productService.create(product)
          .then()
          .catch((e) => {
            alert(e);
            that.destroyChildren();
          });
      }

      that.destroyChildren();
    }
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

  createComponents(model: Product[]): void {
    this.factoryService.setRootViewContainerRef(this.collectionItemsContainer);

    for (const item of model) {
      const newComponent = this.factoryService.addDynamicComponentWithExtendedModel({
        model: item,
        isCreate: true
      }, ProductSearchItemComponent);
      this.components.push(newComponent);
    }
  }

  ngOnDestroy() {
    this.destroyChildren();
  }
}
