import {Injectable} from '@angular/core';
import {User, UserLogin} from '../../nutrition-buddy/identity/models/user.model';
import {LocalStorageService} from './local-storage.service';
import {RoutingService} from './routing.service';
import {FrontendRouteIds} from '../globals/frontend-route-ids';
import 'rxjs/add/operator/toPromise';
import {UserRepositoryService} from '../../nutrition-buddy/identity/services/user-repository.service';

@Injectable()
export class AuthService {

  constructor(private _userService: UserRepositoryService,
              private _localStorage: LocalStorageService,
              private _routingService: RoutingService) {
  }

  authenticate(userLogin: UserLogin): Promise<User> {
    return this._userService.authenticate(userLogin)
      .then((user: User) => {
        if (user !== undefined) {
          this._localStorage.setUser(user);
          this._localStorage.setToken('Bearer ' + user.token);
          this._localStorage.setTokenExpirationDate(user.tokenExpirationDate);
        }
        return user;
      });
  }

  logOut(): void {
    this._localStorage.destroyToken();
    this._localStorage.removeUser();
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }

  isAuthenticated(): boolean {
    return this._localStorage.getTokenIsValid();
  }
}
