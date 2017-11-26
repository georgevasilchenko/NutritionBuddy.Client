import {Route} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FrontendRouteIds} from './globals/frontend-route-ids';
import {FrontendRouteNames} from './globals/frontend-route-names';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';

export class FrontendRouting {
  static Dashboard: Route = <Route>{
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: FrontendRouteIds.Dashboard,
      title: FrontendRouteNames.Dashboard,
      navigation: 'dashboard'
    }
  };
  static Login: Route = <Route>{
    path: 'login',
    component: LoginComponent,
    data: {
      routeId: FrontendRouteIds.Login,
      title: FrontendRouteNames.Login,
      navigation: 'login'
    }
  };
  static Default: Route = <Route>{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
    data: {
      routeId: FrontendRouteIds.Default,
      navigation: ''
    }
  };
  static PageNotFound: Route = <Route>{
    path: '**',
    component: PageNotFoundComponent,
    data: {
      routeId: FrontendRouteIds.PageNotFound,
      title: FrontendRouteNames.PageNotFound,
      navigation: '**'
    }
  };
}
