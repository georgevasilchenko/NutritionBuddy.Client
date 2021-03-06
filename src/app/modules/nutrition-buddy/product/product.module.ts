import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCollectionItemComponent} from './components/product-collection-item/product-collection-item.component';
import {ProductCollectionComponent} from './components/product-collection/product-collection.component';
import {FrontendModule} from '../../frontend/frontend.module';
import {MaterialsModule} from '../../materials/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductRepositoryService} from './services/product-repository.service';
import {ProductFormConfigService} from './services/product-form-config.service';
import {ProductInformationComponent} from './components/product-information/product-information.component';
import {ServingInformationComponent} from './components/serving-information/serving-information.component';
import {NutritionFactsComponent} from './components/nutrition-facts/nutrition-facts.component';
import {ProductEditDialogComponent} from './components/product-edit-dialog/product-edit-dialog.component';
import {ProductSearchDialogComponent} from './components/product-search-dialog/product-search-dialog.component';
import {ProductSearchListItemComponent} from './components/product-search-list-item/product-search-list-item.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    FrontendModule
  ],
  declarations: [
    ProductCollectionComponent,
    ProductCollectionItemComponent,
    ProductInformationComponent,
    ServingInformationComponent,
    NutritionFactsComponent,
    ProductEditDialogComponent,
    ProductSearchDialogComponent,
    ProductSearchListItemComponent
  ],
  exports: [ProductCollectionComponent],
  providers: [ProductRepositoryService, ProductFormConfigService],
  entryComponents: [
    ProductCollectionItemComponent,
    ProductEditDialogComponent,
    ProductSearchDialogComponent,
    ProductSearchListItemComponent
  ]
})
export class ProductModule {
}
