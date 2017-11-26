import {AuthGuardService} from '../frontend/services/auth-guard.service';
import {ProductCollectionComponent} from './product/components/product-collection/product-collection.component';
import {Route} from '@angular/router';
import {ProductRouteIds} from './product/globals/product-route-ids';
import {ProductRouteNames} from './product/globals/product-route-names';
import {UserRouteIds} from './identity/globals/user-route-ids';
import {UserRouteNames} from './identity/globals/user-route-names';
import {ProductEditComponent} from './product/components/product-edit/product-edit.component';
import {ProductSearchComponent} from './product/components/product-search/product-search.component';
import {UserEditComponent} from './identity/components/user-edit/user-edit.component';

export class NutritionBuddyRouting {

  static ProductCollection: Route = <Route>{
    path: 'product/select',
    component: ProductCollectionComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: ProductRouteIds.ProductCollection,
      title: ProductRouteNames.ProductCollection,
      navigation: '/product/select'
    },
  };
  static ProductEdit: Route = <Route>{
    path: 'product/edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: ProductRouteIds.ProductEdit,
      title: ProductRouteNames.ProductEdit,
      navigation: '/product/edit'
    },
  };
  static ProductCreate: Route = <Route>{
    path: 'product/edit',
    component: ProductEditComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: ProductRouteIds.ProductCreate,
      title: ProductRouteNames.ProductCreate,
      navigation: '/product/edit',
      model: {}
    },
  };
  static ProductSearch: Route = <Route>{
    path: 'product/search',
    component: ProductSearchComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: ProductRouteIds.ProductSearch,
      title: ProductRouteNames.ProductSearch,
      navigation: '/product/search'
    },
  };

  static UserEdit: Route = <Route>{
    path: 'account/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: UserRouteIds.UserEdit,
      title: UserRouteNames.UserEdit,
      navigation: '/account/edit/'
    },
  };
}
