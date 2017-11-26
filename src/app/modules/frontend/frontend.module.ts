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
import {HttpModule} from '@angular/http';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {HeaderAuthComponent} from './components/header-auth/header-auth.component';
import {AlertModalComponent} from './components/alert-modal/alert-modal.component';
import {BaseEditComponent} from './components/base-edit/base-edit.component';
import {XhrImageService} from './services/xhr-image.service';
import {SafeHtmlPipe} from './services/safe-html.pipe';
import {FileImageComponent} from './components/file-image/file-image.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
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
    AlertModalComponent,
    BaseEditComponent,
    SafeHtmlPipe,
    FileImageComponent
  ],
  exports: [
    CreateCollectionItemComponent,
    HeaderComponent,
    AlertModalComponent,
    SafeHtmlPipe,
    FileImageComponent
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
    XhrImageService
  ],
  entryComponents: [DashboardPanelComponent]
})
export class FrontendModule {
}
