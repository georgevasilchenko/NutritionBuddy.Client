import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {Tile} from '../../models/tile.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.DashboardTileSelector,
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent extends BaseComponent<Tile> implements OnInit {

  @Input() model: Tile;

  constructor() {
    super();
  }

  onClick(): void {
    console.log('click');
    // if (this.model.callback) {
    //   this.model.callback();
    // }
  }

  ngOnInit() {
  }
}
