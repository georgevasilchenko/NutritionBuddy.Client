import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingService} from './services/routing.service';
import {ObjectUtilityService} from './services/object-utility.service';
import {CreateCollectionItemComponent} from './components/create-collection-item/create-collection-item.component';
import {RouterModule} from '@angular/router';
import {BaseCollectionItemComponent} from './components/base-collection-item/base-collection-item.component';
import {BaseCollectionComponent} from './components/base-collection/base-collection.component';
import {LoginComponent} from './components/login/login.component';
import {TileComponent} from './components/tile/tile.component';
import {HeaderNavButtonComponent} from './components/header-nav-button/header-nav-button.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardPanelComponent} from './components/dashboard-panel/dashboard-panel.component';
import {MaterialsModule} from '../materials/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientService} from './services/http-client.service';
import {LocalStorageService} from './services/local-storage.service';
import {AlertService} from './services/alert.service';
import {TempStorageService} from './services/temp-storage.service';
import {LoadingService} from './services/loading.service';
import {ComponentFactoryService} from './services/component-factory.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {HeaderAuthComponent} from './components/header-auth/header-auth.component';
import {BaseEditComponent} from './components/base-edit/base-edit.component';
import {SafeHtmlPipe} from './services/safe-html.pipe';
import {FileImageComponent} from './components/file-image/file-image.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SidebarPrimaryComponent} from './components/sidebar-primary/sidebar-primary.component';
import {SidebarPrimaryItemComponent} from './components/sidebar-primary-item/sidebar-primary-item.component';
import {BaseActionComponent} from './components/base-action/base-action.component';
import {DashboardWindowComponent} from './components/dashboard-window/dashboard-window.component';
import {DashboardHeaderComponent} from './components/dashboard-header/dashboard-header.component';
import {HeaderActionItemComponent} from './components/header-action-item/header-action-item.component';
import {SidebarSecondaryComponent} from './components/sidebar-secondary/sidebar-secondary.component';
import {SidebarSecondaryItemComponent} from './components/sidebar-secondary-item/sidebar-secondary-item.component';
import {ActiveStateService} from './services/active-state.service';
import {StateResolveService} from './services/state-resolve.service';
import {HeaderActionsPanelComponent} from './components/header-actions-panel/header-actions-panel.component';
import {FeatureActionService} from './services/feature-action.service';
import {CollectionItemActionItemComponent} from './components/collection-item-action-item/collection-item-action-item.component';
import {AlertPopupComponent} from './components/alert-popup/alert-popup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  declarations: [
    DashboardPanelComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderNavButtonComponent,
    TileComponent,
    LoginComponent,
    BaseCollectionComponent,
    BaseCollectionItemComponent,
    BaseEditComponent,
    CreateCollectionItemComponent,
    HeaderAuthComponent,
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
    SidebarSecondaryComponent,
    SidebarSecondaryItemComponent,
    HeaderActionsPanelComponent,
    CollectionItemActionItemComponent,
    AlertPopupComponent
  ],
  exports: [
    CreateCollectionItemComponent,
    HeaderComponent,
    SafeHtmlPipe,
    FileImageComponent,
    HeaderActionsPanelComponent,
    CollectionItemActionItemComponent
  ],
  providers: [
    ObjectUtilityService,
    RoutingService,
    ComponentFactoryService,
    LoadingService,
    TempStorageService,
    AlertService,
    LocalStorageService,
    HttpClientService,
    AuthService,
    AuthGuardService,
    ActiveStateService,
    StateResolveService,
    FeatureActionService,
  ],
  entryComponents: [DashboardPanelComponent, AlertPopupComponent]
})
export class FrontendModule {
}
