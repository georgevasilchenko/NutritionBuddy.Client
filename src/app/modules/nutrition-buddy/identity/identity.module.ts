import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRepositoryService} from './services/user-repository.service';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserFormConfigService} from './services/user-form-config.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FrontendModule} from '../../frontend/frontend.module';
import {MaterialsModule} from '../../materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    FrontendModule
  ],
  providers: [UserRepositoryService, UserFormConfigService],
  declarations: [UserEditComponent]
})
export class IdentityModule {
}
