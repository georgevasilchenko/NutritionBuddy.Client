import {Component, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {Product} from '../../models/product.model';
import {FormGroup} from '@angular/forms';
import {ProductFormConfigService} from '../../services/product-form-config.service';
import {ActivatedRoute} from '@angular/router';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {ProductRouteIds} from '../../globals/product-route-ids';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';
import {BaseEditComponent} from '../../../../frontend/components/base-edit/base-edit.component';

@Component({
  selector: ProductSelectorsIds.ProductEditSelector,
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.less']
})
export class ProductEditComponent extends BaseEditComponent<Product> implements OnInit {
  constructor(protected _productFormConfigService: ProductFormConfigService,
              protected _productRepositoryService: ProductRepositoryService,
              protected _route: ActivatedRoute,
              protected _routingService: RoutingService,
              protected _localStorageService: LocalStorageService) {
    super(_productRepositoryService, _route);
  }

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      const that = this;
      this._productRepositoryService.getById(+id)
        .then(result => {
          that.model = new Product(result);
          that.onLoadModelComplete();
        });
    } else if (this._localStorageService.hasKey('product')) {
      this.isCreate = true;
      const modelMessage = JSON.parse(this._localStorageService.getValue('product')) as Product;
      this.model = new Product(modelMessage);
      this._localStorageService.removeKey('product');
      this.onLoadModelComplete();
    } else {
      this.isCreate = true;
      this.model = new Product();
      this.onLoadModelComplete();
    }
  }

  onLoadModelComplete() {
    this.model = new Product(this.model);
    this.form = this._productFormConfigService.generateForm(this.model);
  }

  onSubmit(form: FormGroup) {

    if (!this.isCreate && !form.dirty) {
      return;
    }
    this.applyChangedModel(form.value);

    if (this.isCreate) {
      this._productRepositoryService.create(this.model)
        .then(() => this._routingService.navigateTo(ProductRouteIds.ProductCollection))
        .catch((e) => console.log(e));
    } else {
      this._productRepositoryService.update(this.model)
        .then(() => this._routingService.navigateTo(ProductRouteIds.ProductCollection))
        .catch((e) => console.log(e));
    }
  }

  onDelete(): void {
    this._productRepositoryService.delete(this.model)
      .then(() => this._routingService.navigateTo(ProductRouteIds.ProductCollection))
      .catch((e) => console.log(e));
  }

  applyChangedModel(formValue: any) {
    this.model.uniqueName = formValue.uniqueName;
    this.model.servingInformation = formValue.servingInformation;
    this.model.productInformation = formValue.productInformation;
    this.model.nutritionFacts = formValue.nutritionFacts;
    this.model.nutrients = formValue.nutrients;
  }
}
