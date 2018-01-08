import {Component, OnInit} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {BaseComponent} from '../base-components/base-component/base.component';
import {HeaderActionItem} from '../../models/header-action-item.model';
import {IconsNames} from '../../../../globals/icons-names';
import {LocalStorageService} from '../../services/local-storage.service';
import {AuthService} from '../../services/auth.service';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {RoutingService} from '../../services/routing.service';
import {UserRouteIds} from '../../../nutrition-buddy/identity/globals/user-route-ids';
import {IUser, User} from '../../../nutrition-buddy/identity/models/user.model';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import {FeatureActionService} from '../../services/feature-action.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: FrontendSelectorsIds.DashboardHeaderSelector,
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.less']
})
export class DashboardHeaderComponent extends BaseComponent<any> implements OnInit {

  user: User;
  accountAction: HeaderActionItem;
  logoutAction: HeaderActionItem;

  featureActions = [];
  featureActionsSubscription: ISubscription;

  constructor(private _authService: AuthService,
              private _featureActionService: FeatureActionService,
              private _userRepositoryService: UserRepositoryService,
              private _localStorageService: LocalStorageService,
              private _routingService: RoutingService) {
    super();
  }

  ngOnInit(): void {
    if (this._authService.isAuthenticated()) {
      // const userName = this._localStorageService.getUser().userName;
      const accountPath = this._routingService.getNavigationOfRoute(UserRouteIds.UserEdit) + this._localStorageService.getUser().id;

      this.accountAction = new HeaderActionItem(IconsNames.AccountCircle, 'Account', accountPath);
      this.logoutAction = new HeaderActionItem(IconsNames.ExitToApp, 'Logout', undefined, () => this.onLogoutClick());

      this._userRepositoryService.getById(this._localStorageService.getUser().id)
        .then((response) => {
          const userSpec = <IUser>response;
          this.user = new User(userSpec);
        });
    }

    this.featureActionsSubscription = this._featureActionService.onFeatureActionsUpdate.subscribe(actions => {
      this.featureActions = actions;
    });
  }

  onLogoutClick(): void {
    this._authService.logOut();
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }
}
