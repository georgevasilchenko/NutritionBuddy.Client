import {Component, OnInit} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.SidebarSecondarySelector,
  templateUrl: './sidebar-secondary.component.html',
  styleUrls: ['./sidebar-secondary.component.less']
})
export class SidebarSecondaryComponent implements OnInit {

  isVisible: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
