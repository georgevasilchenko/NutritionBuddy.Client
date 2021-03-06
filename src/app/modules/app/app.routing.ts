import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../frontend/components/dashboard/dashboard.component';
import {LoginComponent} from '../frontend/components/account-management-components/login/login.component';
import {FrontendRouteIds} from '../frontend/globals/frontend-route-ids';
import {FrontendRouteNames} from '../frontend/globals/frontend-route-names';
import {PageNotFoundComponent} from '../frontend/components/misc-components/page-not-found/page-not-found.component';
import {AuthGuardService} from '../frontend/services/auth-guard.service';
import {ProductRouteNames} from '../nutrition-buddy/product/globals/product-route-names';
import {ProductRouteIds} from '../nutrition-buddy/product/globals/product-route-ids';
import {ProductCollectionComponent} from '../nutrition-buddy/product/components/product-collection/product-collection.component';
import {UserEditComponent} from '../nutrition-buddy/identity/components/user-edit/user-edit.component';
import {UserRouteNames} from '../nutrition-buddy/identity/globals/user-route-names';
import {UserRouteIds} from '../nutrition-buddy/identity/globals/user-route-ids';
import {RegisterComponent} from '../frontend/components/account-management-components/register/register.component';
import {EmailConfirmComponent} from '../frontend/components/account-management-components/email-confirm/email-confirm.component';
import {ForgotPasswordComponent} from '../frontend/components/account-management-components/forgot-password/forgot-password.component';
import {ResendEmailConfirmComponent} from '../frontend/components/account-management-components/resend-email-confirm/resend-email-confirm.component';
import {NewPasswordComponent} from '../frontend/components/account-management-components/new-password/new-password.component';


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
    path: 'register',
    component: RegisterComponent,
    data: {
      routeId: FrontendRouteIds.Register,
      title: FrontendRouteNames.Register,
      navigation: '/register'
    }
  },
  <Route>{
    path: 'email-confirm',
    component: EmailConfirmComponent,
    data: {
      routeId: FrontendRouteIds.EmailConfirm,
      title: FrontendRouteNames.EmailConfirm,
      navigation: '/email-confirm'
    }
  },
  <Route>{
    path: 'forgot-pass',
    component: ForgotPasswordComponent,
    data: {
      routeId: FrontendRouteIds.ForgotPassword,
      title: FrontendRouteNames.ForgotPassword,
      navigation: '/forgot-pass'
    }
  },
  <Route>{
    path: 'resend-email-confirm/:email',
    component: ResendEmailConfirmComponent,
    data: {
      routeId: FrontendRouteIds.ResendEmailConfirmation,
      title: FrontendRouteNames.ResendEmailConfirmation,
      navigation: '/resend-email-confirm/'
    }
  },
  <Route>{
    path: 'new-pass',
    component: NewPasswordComponent,
    data: {
      routeId: FrontendRouteIds.NewPassword,
      title: FrontendRouteNames.NewPassword,
      navigation: '/new-pass'
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
