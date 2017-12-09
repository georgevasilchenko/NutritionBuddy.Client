import {Component, Input, OnInit} from '@angular/core';
import {BaseActionComponent} from '../base-action/base-action.component';
import {SidebarSecondaryItem} from '../../models/sidebar-secondary-item.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.SidebarSecondaryItemSelector,
  templateUrl: './sidebar-secondary-item.component.html',
  styleUrls: ['./sidebar-secondary-item.component.less']
})
export class SidebarSecondaryItemComponent extends BaseActionComponent<SidebarSecondaryItem> implements OnInit {

  @Input() model: SidebarSecondaryItem;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
