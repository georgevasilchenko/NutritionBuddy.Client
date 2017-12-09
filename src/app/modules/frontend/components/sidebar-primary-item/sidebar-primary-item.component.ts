import {Component, Input, OnInit} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {SidebarPrimaryItem} from '../../models/sidebar-primary-item.model';
import {BaseActionComponent} from '../base-action/base-action.component';
import {MaterialsColorsIds} from '../../../../globals/materials-colors-ids';

@Component({
  selector: FrontendSelectorsIds.SidebarPrimaryItemSelector,
  templateUrl: './sidebar-primary-item.component.html',
  styleUrls: ['./sidebar-primary-item.component.less']
})
export class SidebarPrimaryItemComponent extends BaseActionComponent<SidebarPrimaryItem> implements OnInit {

  @Input() model: SidebarPrimaryItem;
  activeColor = MaterialsColorsIds.Accent;
  isActive = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setActive(isOn: boolean): void {
    this.isActive = isOn;
  }
}
