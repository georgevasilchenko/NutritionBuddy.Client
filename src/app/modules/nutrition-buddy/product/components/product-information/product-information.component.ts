import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {ProductInformation} from '../../models/product-information.model';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {FormGroup} from '@angular/forms';

@Component({
  selector: ProductSelectorsIds.ProductInformationSelector,
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.less']
})
export class ProductInformationComponent extends BaseComponent<ProductInformation> implements OnInit {

  @Input() model: ProductInformation;
  @Input() form: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
