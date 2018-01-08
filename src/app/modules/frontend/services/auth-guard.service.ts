import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {RoutingService} from './routing.service';
import {FrontendRouteIds} from '../globals/frontend-route-ids';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService,
              private _routingService: RoutingService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this._authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    } else {
      this._routingService.navigateTo(FrontendRouteIds.Login);
      return false;
    }
  }
}
