import {Component, Input, OnInit} from '@angular/core';
import {BaseActionComponent} from '../base-action/base-action.component';
import {CollectionItemActionItem} from '../../models/collection-item-action-item.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.CollectionItemActionItemSelector,
  templateUrl: './collection-item-action-item.component.html',
  styleUrls: ['./collection-item-action-item.component.less']
})
export class CollectionItemActionItemComponent extends BaseActionComponent<CollectionItemActionItem> implements OnInit {
  @Input() model: CollectionItemActionItem;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
