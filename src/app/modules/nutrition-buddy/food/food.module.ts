import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodSearchComponent} from './components/food-search/food-search.component';
import {FoodCollectionComponent} from './components/food-collection/food-collection.component';
import {FoodEditComponent} from './components/food-edit/food-edit.component';
import {ServingEditComponent} from './components/food-serving-edit/food-serving-edit.component';
import {FoodRepositoryService} from './services/food-repository.service';
import {FoodCollectionItemComponent} from './components/food-collection-item/food-collection-item.component';
import {FrontendModule} from '../../frontend/frontend.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FoodFormConfigService} from './services/food-form-config.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FrontendModule
  ],
  declarations: [FoodSearchComponent, FoodCollectionComponent, FoodEditComponent, ServingEditComponent, FoodCollectionItemComponent],
  providers: [FoodRepositoryService, FoodFormConfigService],
  entryComponents: [FoodCollectionItemComponent]
})
export class FoodModule {
}
