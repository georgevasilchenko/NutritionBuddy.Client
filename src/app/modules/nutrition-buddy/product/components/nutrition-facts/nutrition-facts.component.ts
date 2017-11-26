import {Component, Input, OnInit} from '@angular/core';
import {NutritionFacts} from '../../models/nutrition-facts.model';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {FormGroup} from '@angular/forms';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';

@Component({
  selector: ProductSelectorsIds.NutritionFactsSelector,
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.less']
})
export class NutritionFactsComponent extends BaseComponent<NutritionFacts> implements OnInit {

  @Input() model: NutritionFacts;
  @Input() form: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
