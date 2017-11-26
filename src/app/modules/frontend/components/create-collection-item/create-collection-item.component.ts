import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {CreateCollectionItemModel} from '../../models/create-collection-item.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.CreateCollectionItemSelector,
  templateUrl: './create-collection-item.component.html',
  styleUrls: ['./create-collection-item.component.less']
})
export class CreateCollectionItemComponent extends BaseComponent<CreateCollectionItemModel> implements OnInit {

  @Input() model: CreateCollectionItemModel;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
