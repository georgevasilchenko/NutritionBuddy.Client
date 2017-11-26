import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {Tile} from '../../models/tile.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.HeaderNavigationButtonSelector,
  templateUrl: './header-nav-button.component.html',
  styleUrls: ['./header-nav-button.component.less']
})
export class HeaderNavButtonComponent extends BaseComponent<Tile> implements OnInit {

  @Input() model: Tile;

  constructor() {
    super();
  }

  onClick() {
    if (this.model.callback) {
      this.model.callback();
    }
  }

  ngOnInit() {
  }
}
