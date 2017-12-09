import {Component, Input, OnInit} from '@angular/core';
import {BaseActionComponent} from '../base-action/base-action.component';
import {HeaderActionItem} from '../../models/header-action-item.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.HeaderActionItemSelector,
  templateUrl: './header-action-item.component.html',
  styleUrls: ['./header-action-item.component.less']
})
export class HeaderActionItemComponent extends BaseActionComponent<HeaderActionItem> implements OnInit {
  @Input() model: HeaderActionItem;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
