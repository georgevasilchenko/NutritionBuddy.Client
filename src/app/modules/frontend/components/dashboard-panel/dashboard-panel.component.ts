import {Component} from '@angular/core';
import {BaseComponent} from '../../../frontend/components/base-component/base.component';
import {Panel} from '../../../frontend/models/panel.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';


@Component({
  selector: FrontendSelectorsIds.DashboardPanelSelector,
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.less']
})
export class DashboardPanelComponent extends BaseComponent<Panel> {

  constructor() {
    super();
  }
}
