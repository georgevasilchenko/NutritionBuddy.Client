import {FrontendRouting} from '../frontend/frontend.routing';
import {NutritionBuddyRouting} from '../nutrition-buddy/nutrition-buddy.routing.';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const AppRoutes: Routes = [
  FrontendRouting.Dashboard,
  FrontendRouting.Login,

  // Product
  NutritionBuddyRouting.ProductCollection,
  NutritionBuddyRouting.ProductEdit,
  NutritionBuddyRouting.ProductCreate,
  NutritionBuddyRouting.ProductSearch,

  // Identity
  NutritionBuddyRouting.UserEdit,

  // Fall backs
  FrontendRouting.Default,
  FrontendRouting.PageNotFound
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
