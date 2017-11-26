import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {Nutrients} from '../../models/nutrients.model';
import {FormGroup} from '@angular/forms';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';

@Component({
  selector: ProductSelectorsIds.NutrientsSelector,
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.less']
})
export class NutrientsComponent extends BaseComponent<Nutrients> implements OnInit {

  @Input() model: Nutrients;
  @Input() form: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
