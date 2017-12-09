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
    let isFound = false;
    let targetRoute;
    for (const route of this._router.config) {

      if (isFound) {
        break;
      }

      if (route.data['routeId'] === routeId) {
        targetRoute = route;
        isFound = true;
      } else if (route.children && route.children.length > 0) {
        for (const childRoute of route.children) {
          if (childRoute.data['routeId'] === routeId) {
            targetRoute = childRoute;
            isFound = true;
            break;
          }
        }
      }
    }
    return targetRoute.data['navigation'];
  }
}
