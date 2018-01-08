import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingService} from './services/routing.service';
import {ObjectUtilityService} from './services/utility-services/object-utility.service';
import {RouterModule} from '@angular/router';
import {BaseCollectionItemComponent} from './components/base-components/base-collection-item/base-collection-item.component';
import {BaseCollectionComponent} from './components/base-components/base-collection/base-collection.component';
import {LoginComponent} from './components/account-management-components/login/login.component';
import {PageNotFoundComponent} from './components/misc-components/page-not-found/page-not-found.component';
import {MaterialsModule} from '../materials/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientService} from './services/http-client.service';
import {LocalStorageService} from './services/local-storage.service';
import {AlertService} from './services/utility-services/alert.service';
import {ComponentFactoryService} from './services/component-factory.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {BaseEditComponent} from './components/base-components/base-edit/base-edit.component';
import {SafeHtmlPipe} from './services/safe-html.pipe';
import {FileImageComponent} from './components/utility-components/file-image/file-image.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SidebarPrimaryComponent} from './components/sidebar-primary/sidebar-primary.component';
import {SidebarPrimaryItemComponent} from './components/sidebar-primary-item/sidebar-primary-item.component';
import {BaseActionComponent} from './components/base-components/base-action/base-action.component';
import {DashboardWindowComponent} from './components/dashboard-window/dashboard-window.component';
import {DashboardHeaderComponent} from './components/dashboard-header/dashboard-header.component';
import {HeaderActionItemComponent} from './components/header-action-item/header-action-item.component';
import {ActiveStateService} from './services/active-state.service';
import {HeaderActionsPanelComponent} from './components/header-actions-panel/header-actions-panel.component';
import {FeatureActionService} from './services/feature-action.service';
import {AlertPopupComponent} from './components/utility-components/alert-popup/alert-popup.component';
import {RegisterComponent} from './components/account-management-components/register/register.component';
import {EmailConfirmComponent} from './components/account-management-components/email-confirm/email-confirm.component';
import {ForgotPasswordComponent} from './components/account-management-components/forgot-password/forgot-password.component';
import {ResendEmailConfirmComponent} from './components/account-management-components/resend-email-confirm/resend-email-confirm.component';
import {NewPasswordComponent} from './components/account-management-components/new-password/new-password.component';
import {CollectionItemActionItemComponent} from './components/misc-components/collection-item-action-item/collection-item-action-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  declarations: [
    PageNotFoundComponent,
    LoginComponent,
    BaseCollectionComponent,
    BaseCollectionItemComponent,
    BaseEditComponent,
    BaseEditComponent,
    SafeHtmlPipe,
    FileImageComponent,
    DashboardComponent,
    SidebarPrimaryComponent,
    SidebarPrimaryItemComponent,
    BaseActionComponent,
    DashboardWindowComponent,
    DashboardHeaderComponent,
    HeaderActionItemComponent,
    HeaderActionsPanelComponent,
    CollectionItemActionItemComponent,
    AlertPopupComponent,
    RegisterComponent,
    EmailConfirmComponent,
    ForgotPasswordComponent,
    ResendEmailConfirmComponent,
    NewPasswordComponent
  ],
  exports: [
    SafeHtmlPipe,
    FileImageComponent,
    HeaderActionsPanelComponent,
    CollectionItemActionItemComponent
  ],
  providers: [
    ObjectUtilityService,
    RoutingService,
    ComponentFactoryService,
    AlertService,
    LocalStorageService,
    HttpClientService,
    AuthService,
    AuthGuardService,
    ActiveStateService,
    FeatureActionService,
  ],
  entryComponents: [AlertPopupComponent]
})
export class FrontendModule {
}
