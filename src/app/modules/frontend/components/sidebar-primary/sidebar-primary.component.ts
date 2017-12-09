import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {SidebarPrimaryItem} from '../../models/sidebar-primary-item.model';
import {IconsNames} from '../../../../globals/icons-names';
import {ColorsIds} from '../../../../globals/colors-ids';
import {RoutingService} from '../../services/routing.service';
import {ProductRouteIds} from '../../../nutrition-buddy/product/globals/product-route-ids';
import {LocalStorageService} from '../../services/local-storage.service';
import {UserRouteIds} from '../../../nutrition-buddy/identity/globals/user-route-ids';
import {SidebarPrimaryItemComponent} from '../sidebar-primary-item/sidebar-primary-item.component';
import {ISubscription} from 'rxjs/Subscription';
import {ActiveStateService} from '../../services/active-state.service';
import {ProductRouteNames} from '../../../nutrition-buddy/product/globals/product-route-names';
import {UserRouteNames} from '../../../nutrition-buddy/identity/globals/user-route-names';

@Component({
  selector: FrontendSelectorsIds.SidebarPrimarySelector,
  templateUrl: './sidebar-primary.component.html',
  styleUrls: ['./sidebar-primary.component.less']
})
export class SidebarPrimaryComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren(SidebarPrimaryItemComponent) items: QueryList<SidebarPrimaryItemComponent>;
  model: SidebarPrimaryItem[];
  private _itemsArray = [];
  private _activeStateSubscription: ISubscription;

  constructor(private _activeState: ActiveStateService,
              private _routingService: RoutingService,
              private _localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.createModel();
    this._activeStateSubscription = this._activeState.onStateChange.subscribe(state => {
      this.updateItemBasedOnCurrentRouteName(state);
    });
  }

  ngOnDestroy() {
    this._activeStateSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this._itemsArray = this.items.toArray();

    setTimeout(() => {
      this.updateItemBasedOnCurrentRouteName(this._activeState.getCurrentState());
    }, 500);
  }

  updateItemBasedOnCurrentRouteName(title: string): void {
    const target = this._itemsArray.filter((o: SidebarPrimaryItemComponent) => o.model.routeName === title)[0];
    const others = this._itemsArray.filter((o: SidebarPrimaryItemComponent) => o.model.routeName !== title);

    if (target) {
      target.setActive(true);
      others.forEach((o) => o.setActive(false));
    } else {
      this._itemsArray.forEach((o) => o.setActive(false));
    }
  }

  createModel(): void {
    this.model = [];
    this.model.push(
      new SidebarPrimaryItem(
        IconsNames.LocalDining,
        ColorsIds.White,
        'Food',
        this._routingService.getNavigationOfRoute(ProductRouteIds.ProductCollection),
        ProductRouteNames.ProductCollection));
    this.model.push(
      new SidebarPrimaryItem(
        IconsNames.AccountCircle,
        ColorsIds.White,
        'Account',
        this._routingService.getNavigationOfRoute(UserRouteIds.UserEdit) + this._localStorageService.getUser().id,
        UserRouteNames.UserEdit));
    this.model.push(
      new SidebarPrimaryItem(
        IconsNames.Settings,
        ColorsIds.White,
        'Settings',
        '.', ''));
  }
}
