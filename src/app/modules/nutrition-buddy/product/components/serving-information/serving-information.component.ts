import {Component, Input, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {BaseComponent} from '../../../../frontend/components/base-component/base.component';
import {ServingInformation} from '../../models/serving-information.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: ProductSelectorsIds.ServingInformationSelector,
  templateUrl: './serving-information.component.html',
  styleUrls: ['./serving-information.component.less']
})
export class ServingInformationComponent extends BaseComponent<ServingInformation> implements OnInit {

  @Input() model: ServingInformation;
  @Input() form: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
