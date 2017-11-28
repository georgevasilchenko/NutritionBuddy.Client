import {Component, OnInit} from '@angular/core';
import {FoodSelectorsIds} from '../../globals/food-selectors-ids';
import {BaseEditComponent} from '../../../../frontend/components/base-edit/base-edit.component';
import {Food} from '../../models/food.model';
import {FoodRepositoryService} from '../../services/food-repository.service';
import {FoodFormConfigService} from '../../services/food-form-config.service';
import {ActivatedRoute} from '@angular/router';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';
import {FormGroup} from '@angular/forms';
import {FoodRouteIds} from '../../globals/food-route-ids';
import {FileImage} from '../../../../frontend/models/file-image.model';

@Component({
  selector: FoodSelectorsIds.FoodEditSelector,
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.less']
})
export class FoodEditComponent extends BaseEditComponent<Food> implements OnInit {
  constructor(protected _productFormConfigService: FoodFormConfigService,
              protected _productRepositoryService: FoodRepositoryService,
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
          that.model = new Food(result);
          that.onLoadModelComplete();
        });
    } else if (this._localStorageService.hasKey('food')) {
      this.isCreate = true;
      const modelMessage = JSON.parse(this._localStorageService.getValue('food')) as Food;
      this.model = new Food(modelMessage);
      this._localStorageService.removeKey('food');
      this.onLoadModelComplete();
    } else {
      this.isCreate = true;
      this.model = new Food();
      this.model.foodImage.setDefaultData();
      this.onLoadModelComplete();
    }
  }

  onLoadModelComplete() {
    this.model = new Food(this.model);
    this.form = this._productFormConfigService.generateForm(this.model);
  }

  onFileImageFileChanged(event: FileImage): void {
    this.model.foodImage = event;
    this.form.markAsDirty();
  }

  onSubmit(form: FormGroup) {

    if (!this.isCreate && !form.dirty) {
      return;
    }
    this.applyChangedModel(form.value);

    if (this.isCreate) {
      this._productRepositoryService.create(this.model)
        .then(() => this._routingService.navigateTo(FoodRouteIds.FoodCollection))
        .catch((e) => console.log(e));
    } else {
      this._productRepositoryService.update(this.model)
        .then(() => this._routingService.navigateTo(FoodRouteIds.FoodCollection))
        .catch((e) => console.log(e));
    }
  }

  onDelete(): void {
    this._productRepositoryService.delete(this.model)
      .then(() => this._routingService.navigateTo(FoodRouteIds.FoodCollection))
      .catch((e) => console.log(e));
  }

  applyChangedModel(formValue: any) {
    this.model.description = formValue.description;
    this.model.name = formValue.name;
    this.model.type = formValue.type;
    this.model.url = formValue.url;
    this.model.serving = formValue.serving;
  }
}
