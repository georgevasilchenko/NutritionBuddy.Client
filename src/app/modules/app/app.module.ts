// Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.routing';
import {NutritionBuddyModule} from '../nutrition-buddy/nutrition-buddy.module';
import {MaterialsModule} from '../materials/materials.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FrontendModule} from '../frontend/frontend.module';
// Components
import {AppComponent} from './components/app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    HttpModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,

    FrontendModule,
    NutritionBuddyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
