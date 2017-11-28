import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {BaseCollectionComponent} from '../../../../frontend/components/base-collection/base-collection.component';
import {Food, IFood} from '../../models/food.model';
import {FoodRepositoryService} from '../../services/food-repository.service';
import {ComponentFactoryService} from '../../../../frontend/services/component-factory.service';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {CreateCollectionItemModel} from '../../../../frontend/models/create-collection-item.model';
import {FoodSelectorsIds} from '../../globals/food-selectors-ids';
import {FoodCollectionItemComponent} from '../food-collection-item/food-collection-item.component';

@Component({
  selector: FoodSelectorsIds.FoodCollectionSelector,
  templateUrl: '../../../../frontend/components/base-collection/base-collection.component.html',
  styleUrls: ['../../../../frontend/components/base-collection/base-collection.component.less']
})
export class FoodCollectionComponent extends BaseCollectionComponent<Food> implements OnInit, OnDestroy {

  constructor(protected _foodRepositoryService: FoodRepositoryService,
              @Inject(ComponentFactoryService)
              protected _factoryService: ComponentFactoryService<Food, BaseComponent<Food>>) {
    super(_foodRepositoryService, _factoryService, FoodCollectionItemComponent,
      new CreateCollectionItemModel('../edit', 'New Food'));
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
        const newProduct = new Food(<IFood>model);
        models.push(newProduct);
      }
    }
    this.model = models;
  }

  ngOnDestroy() {
    this.destroyChildren();
  }
}
