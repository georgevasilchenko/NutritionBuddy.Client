import {NgModule} from '@angular/core';
import {ProductModule} from './product/product.module';
import {IdentityModule} from './identity/identity.module';
import {FoodModule} from './food/food.module';

@NgModule({
  imports: [
    ProductModule,
    IdentityModule,
    FoodModule
  ],
  exports: [ProductModule, IdentityModule]
})
export class NutritionBuddyModule {

}
