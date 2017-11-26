import {NgModule} from '@angular/core';
import {ProductModule} from './product/product.module';
import {IdentityModule} from './identity/identity.module';

@NgModule({
  imports: [
    ProductModule,
    IdentityModule
  ],
  exports: [ProductModule, IdentityModule]
})
export class NutritionBuddyModule {

}
