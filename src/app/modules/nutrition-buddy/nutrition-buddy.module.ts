import {NgModule} from '@angular/core';
import {ProductModule} from './product/product.module';
import {IdentityModule} from './identity/identity.module';
import {DataService} from './services/data.service';

@NgModule({
  imports: [
    ProductModule,
    IdentityModule
  ],
  exports: [ProductModule, IdentityModule],
  providers: [DataService]
})
export class NutritionBuddyModule {

}
