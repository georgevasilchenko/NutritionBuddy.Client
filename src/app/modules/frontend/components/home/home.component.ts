import {ComponentFactoryService} from '../../services/component-factory.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseCollectionComponent} from '../base-collection/base-collection.component';
import {Panel} from '../../models/panel.model';
import {BaseComponent} from '../base-component/base.component';
import {RoutingService} from '../../services/routing.service';
import {DashboardPanelComponent} from '../dashboard-panel/dashboard-panel.component';
import {Tile} from '../../models/tile.model';
import {ProductRouteNames} from '../../../nutrition-buddy/product/globals/product-route-names';
import {IconsNames} from '../../../../globals/icons-names';
import {ProductRouteIds} from '../../../nutrition-buddy/product/globals/product-route-ids';
import {ColorsIds} from '../../../../globals/colors-ids';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {UserRouteIds} from '../../../nutrition-buddy/identity/globals/user-route-ids';
import {UserRouteNames} from '../../../nutrition-buddy/identity/globals/user-route-names';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: FrontendSelectorsIds.HomeSelector,
  templateUrl: '../base-collection/base-collection.component.html',
  styleUrls: ['../base-collection/base-collection.component.less']
})
export class HomeComponent extends BaseCollectionComponent<Panel> implements OnInit, OnDestroy {

  constructor(private _localStorageService: LocalStorageService,
              private _factoryService: ComponentFactoryService<Panel, BaseComponent<Panel>>,
              private _routingService: RoutingService) {
    super(undefined, _factoryService, DashboardPanelComponent);
  }

  ngOnInit() {
    this.loadModel();
    this.createComponents(this.model);
  }

  loadModel() {
    this.model = [];

    const foodPanel = this.createFoodPanel();
    const accountPanel = this.createAccountPanel();

    this.model.push(foodPanel, accountPanel);
  }

  createFoodPanel(): Panel {
    const panel = new Panel('Food');
    panel.addTile(
      new Tile(
        ProductRouteNames.ProductCollection,
        IconsNames.ShoppingCart,
        this._routingService.getNavigationOfRoute(ProductRouteIds.ProductCollection),
        ColorsIds.DeepSkyBlue));
    panel.addTile(
      new Tile(
        ProductRouteNames.ProductSearch,
        IconsNames.Search,
        this._routingService.getNavigationOfRoute(ProductRouteIds.ProductSearch),
        ColorsIds.DarkTurquoise));
    return panel;
  }

  createAccountPanel(): Panel {
    const panel = new Panel('Account');
    panel.addTile(
      new Tile(
        UserRouteNames.UserEdit,
        IconsNames.AccountCircle,
        this._routingService.getNavigationOfRoute(UserRouteIds.UserEdit) + this._localStorageService.getUser().id,
        ColorsIds.SandyBrown));
    return panel;
  }

  ngOnDestroy(): void {
    this.destroyChildren();
  }
}
