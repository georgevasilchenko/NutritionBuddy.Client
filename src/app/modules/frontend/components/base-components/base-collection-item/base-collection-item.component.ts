import {BaseComponent} from '../base-component/base.component';
import {Component} from '@angular/core';
import {FrontendSelectorsIds} from '../../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.BaseCollectionItemSelector,
  templateUrl: './base-collection-item.component.html',
  styleUrls: ['./base-collection-item.component.less']
})
export class BaseCollectionItemComponent<TypeModel> extends BaseComponent<TypeModel> {
  constructor() {
    super();
  }
}
