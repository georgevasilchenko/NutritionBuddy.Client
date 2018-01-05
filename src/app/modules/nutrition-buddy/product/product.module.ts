import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NutritionFactsLabelComponent} from './components/nutrition-facts-label/nutrition-facts-label.component';
import {ProductSearchItemComponent} from './components/product-search-item/product-search-item.component';
import {ProductSearchComponent} from './components/product-search/product-search.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {ProductCollectionComponent} from './components/product-collection/product-collection.component';
import {FrontendModule} from '../../frontend/frontend.module';
import {MaterialsModule} from '../../materials/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductRepositoryService} from './services/product-repository.service';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
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
    ProductItemComponent,
    ProductSearchComponent,
    ProductSearchItemComponent,
    NutritionFactsLabelComponent,
    ProductEditComponent,
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
    ProductItemComponent,
    ProductSearchItemComponent,
    ProductEditDialogComponent,
    ProductSearchDialogComponent,
    ProductSearchListItemComponent
  ]
})
export class ProductModule {
}
