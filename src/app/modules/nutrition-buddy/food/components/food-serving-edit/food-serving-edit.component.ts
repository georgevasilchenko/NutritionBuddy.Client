import {Component, Input, OnInit} from '@angular/core';
import {FoodSelectorsIds} from '../../globals/food-selectors-ids';
import {Serving} from '../../models/serving.model';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: FoodSelectorsIds.FoodServingEditSelector,
  templateUrl: './food-serving-edit.component.html',
  styleUrls: ['./food-serving-edit.component.less']
})
export class ServingEditComponent extends BaseComponent<Serving> implements OnInit {

  @Input() model: Serving;
  @Input() form: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
