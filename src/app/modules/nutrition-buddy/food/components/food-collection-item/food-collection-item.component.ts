import {Component, Input, OnInit} from '@angular/core';
import {FoodSelectorsIds} from '../../globals/food-selectors-ids';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';
import {BaseCollectionItemComponent} from '../../../../frontend/components/base-collection-item/base-collection-item.component';
import {Food} from '../../models/food.model';

@Component({
  selector: FoodSelectorsIds.FoodCollectionItemSelector,
  templateUrl: './food-collection-item.component.html',
  styleUrls: ['./food-collection-item.component.less']
})
export class FoodCollectionItemComponent extends BaseCollectionItemComponent<Food> implements OnInit {

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
    this._localStorageService.addValue('food', modelString);
  }
}

