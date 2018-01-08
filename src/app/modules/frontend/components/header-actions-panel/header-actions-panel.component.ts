import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../base-components/base-component/base.component';
import {HeaderActionItem} from '../../models/header-action-item.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.HeaderActionsPanelSelector,
  templateUrl: './header-actions-panel.component.html',
  styleUrls: ['./header-actions-panel.component.less']
})
export class HeaderActionsPanelComponent extends BaseComponent<HeaderActionItem[]> implements OnInit {

  @Input() model: HeaderActionItem[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
