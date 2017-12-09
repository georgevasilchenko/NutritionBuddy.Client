import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../frontend/components/dashboard/dashboard.component';
import {LoginComponent} from '../frontend/components/login/login.component';
import {FrontendRouteIds} from '../frontend/globals/frontend-route-ids';
import {FrontendRouteNames} from '../frontend/globals/frontend-route-names';
import {PageNotFoundComponent} from '../frontend/components/page-not-found/page-not-found.component';
import {AuthGuardService} from '../frontend/services/auth-guard.service';
import {ProductRouteNames} from '../nutrition-buddy/product/globals/product-route-names';
import {ProductRouteIds} from '../nutrition-buddy/product/globals/product-route-ids';
import {ProductCollectionComponent} from '../nutrition-buddy/product/components/product-collection/product-collection.component';
import {UserEditComponent} from '../nutrition-buddy/identity/components/user-edit/user-edit.component';
import {UserRouteNames} from '../nutrition-buddy/identity/globals/user-route-names';
import {UserRouteIds} from '../nutrition-buddy/identity/globals/user-route-ids';
import {ProductEditComponent} from "../nutrition-buddy/product/components/product-edit/product-edit.component";


const AppRoutes: Routes = [
  <Route>{
    path: 'login',
    component: LoginComponent,
    data: {
      routeId: FrontendRouteIds.Login,
      title: FrontendRouteNames.Login,
      navigation: '/login'
    }
  },
  <Route>{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    data: {
      routeId: FrontendRouteIds.Dashboard,
      title: FrontendRouteNames.Dashboard,
      navigation: 'dashboard'
    },
    children: [
      <Route>{
        path: 'product/select',
        component: ProductCollectionComponent,
        canActivate: [AuthGuardService],
        data: {
          routeId: ProductRouteIds.ProductCollection,
          title: ProductRouteNames.ProductCollection,
          navigation: 'product/select'
        },
      },
      <Route>{
        path: 'product/edit',
        component: ProductEditComponent,
        canActivate: [AuthGuardService],
        data: {
          routeId: ProductRouteIds.ProductCreate,
          title: ProductRouteNames.ProductCreate,
          navigation: 'product/edit',
          model: {}
        },
      },
      <Route>{
        path: 'product/edit/:id',
        component: ProductEditComponent,
        canActivate: [AuthGuardService],
        data: {
          routeId: ProductRouteIds.ProductEdit,
          title: ProductRouteNames.ProductEdit,
          navigation: 'product/edit'
        },
      },
      <Route>{
        path: 'account/edit/:id',
        component: UserEditComponent,
        canActivate: [AuthGuardService],
        data: {
          routeId: UserRouteIds.UserEdit,
          title: UserRouteNames.UserEdit,
          navigation: 'account/edit/'
        },
      }
    ]
  },
  <Route>{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
    data: {
      routeId: FrontendRouteIds.Default,
      navigation: ''
    }
  },
  <Route>{
    path: '**',
    component: PageNotFoundComponent,
    data: {
      routeId: FrontendRouteIds.PageNotFound,
      title: FrontendRouteNames.PageNotFound,
      navigation: '**'
    }
  }

  // FrontendRouting.Dashboard,
  // FrontendRouting.Login,

  // Product
  // NutritionBuddyRouting.ProductCollection,
  // NutritionBuddyRouting.ProductEdit,
  // NutritionBuddyRouting.ProductCreate,
  // NutritionBuddyRouting.ProductSearch,
  //
  // // Identity
  // NutritionBuddyRouting.UserEdit,

  // Fall backs
  // FrontendRouting.Default,
  // FrontendRouting.PageNotFound
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
