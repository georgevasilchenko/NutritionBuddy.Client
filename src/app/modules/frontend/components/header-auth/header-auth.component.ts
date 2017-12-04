import {Component, OnInit} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {UserRouteIds} from '../../../nutrition-buddy/identity/globals/user-route-ids';
import {RoutingService} from '../../services/routing.service';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import {UserRepositoryService} from "../../../nutrition-buddy/identity/services/user-repository.service";
import {IUser, User} from "../../../nutrition-buddy/identity/models/user.model";

@Component({
  selector: FrontendSelectorsIds.HeaderAuthenticationSelector,
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.less']
})
export class HeaderAuthComponent implements OnInit {

  userName = 'null';
  profilePath: string;
  logOutPath: string;
  user: User;

  constructor(private _authService: AuthService,
              private _userRepositoryService: UserRepositoryService,
              private _localStorageService: LocalStorageService,
              private _routingService: RoutingService) {
  }

  ngOnInit() {

    if (this._authService.isAuthenticated()) {
      this.userName = this._localStorageService.getUser().userName;
      this.profilePath = this._routingService.getNavigationOfRoute(UserRouteIds.UserEdit) + this._localStorageService.getUser().id;
      this.logOutPath = this._routingService.getNavigationOfRoute(FrontendRouteIds.Login);

      this._userRepositoryService.getById(this._localStorageService.getUser().id)
        .then((response) => {
          const userSpec = <IUser>response;
          this.user = new User(userSpec);
        });
    }
  }

  logOut(): void {
    this._authService.logOut();
  }
}
