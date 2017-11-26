import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {BaseFormConfigService} from '../../../frontend/services/base-form-config.service';

@Injectable()
export class UserFormConfigService extends BaseFormConfigService<User> {

  constructor(protected formBuilder: FormBuilder) {
    super(formBuilder);
  }

  generateForm(model: User): any {
    return this.formBuilder.group({
      firstName: [model.firstName, Validators.required],
      lastName: [model.lastName, Validators.required],
      userName: [model.userName, Validators.required],
      email: [model.email, [Validators.required, Validators.email]],
      password: [model.password],
      phoneNumber: [model.phoneNumber, [Validators.required]],
      image: ['']
    });
  }

}
