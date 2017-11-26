import {NavigationEnd, NavigationStart, Router, RoutesRecognized} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

import {ISubscription} from 'rxjs/Subscription';
import {Tile} from '../../models/tile.model';
import {RoutingService} from '../../services/routing.service';
import {ProductRouteNames} from '../../../nutrition-buddy/product/globals/product-route-names';
import {IconsNames} from '../../../../globals/icons-names';
import {ColorsIds} from '../../../../globals/colors-ids';
import {FrontendRouteIds as CommonRouteIds} from '../../globals/frontend-route-ids';
import {ProductRouteIds as NutritionBuddyRouteIds} from '../../../nutrition-buddy/product/globals/product-route-ids';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {AuthService} from "../../services/auth.service";
import {FrontendRouteNames} from "../../globals/frontend-route-names";

@Component({
  selector: FrontendSelectorsIds.HeaderSelector,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  routeTitle: string;
  homeTile: Tile;
  previousRouteTile: Tile;
  previousRouteUrl: string;

  previousRouteSubscription: ISubscription;
  titleUpdateSubscription: ISubscription;

  isEnabled = false;

  constructor(private _router: Router,
              private _routingService: RoutingService,
              private _authService: AuthService) {
  }

  ngOnInit() {
    this.subscribeForTitleNameUpdate();
    this.subscribeForUpdatePreviousRoute();
    this.createButtons();
  }

  subscribeForUpdatePreviousRoute() {
    this.previousRouteSubscription = this._router.events.pairwise().subscribe((event: any[]) => {
      if (event[0] instanceof NavigationEnd && event[1] instanceof NavigationStart) {
        this.previousRouteUrl = event[0].url;
      }
    });
  }

  subscribeForTitleNameUpdate() {
    this.titleUpdateSubscription = this._router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeTitle = data.state.root.firstChild.data.title;
        this.previousRouteTile.tileNavigationPath = this.previousRouteUrl;
        this.isEnabled = data.state.root.firstChild.data.title !== FrontendRouteNames.Login;
      }
    });
  }

  createButtons() {
    this.homeTile = new Tile(
      ProductRouteNames.ProductCollection,
      IconsNames.Home,
      this._routingService.getNavigationOfRoute(CommonRouteIds.Dashboard),
      ColorsIds.CadetBlue
    );
    this.previousRouteTile = new Tile(
      ProductRouteNames.ProductCollection,
      IconsNames.ArrowBack,
      this._routingService.getNavigationOfRoute(NutritionBuddyRouteIds.ProductCollection),
      ColorsIds.CadetBlue
    );
  }

  ngOnDestroy(): void {
    this.previousRouteSubscription.unsubscribe();
    this.titleUpdateSubscription.unsubscribe();
  }
}
