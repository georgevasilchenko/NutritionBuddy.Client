import {Injectable} from '@angular/core';
import {Route, Router} from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(private _router: Router) {
  }

  navigateTo(routeId: string, params?: any) {
    const targetRoute = this._router.config.find((route: Route) => route.data['routeId'] === routeId);

    if (params) {
      this._router.navigate([targetRoute.data['navigation'], params]);
    } else {
      this._router.navigate([targetRoute.data['navigation']]);
    }
  }

  getNavigationOfRoute(routeId: string): string {
    const targetRoute = this._router.config.find((route: Route) => route.data['routeId'] === routeId);
    return targetRoute.data['navigation'];
  }
}
