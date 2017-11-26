import {Component, OnInit} from '@angular/core';
import {BaseEditComponent} from '../../../../frontend/components/base-edit/base-edit.component';
import {User} from '../../models/user.model';
import {UserRepositoryService} from '../../services/user-repository.service';
import {ActivatedRoute} from '@angular/router';
import {UserFormConfigService} from '../../services/user-form-config.service';
import {FormGroup} from '@angular/forms';
import {UserSelectorsIds} from '../../globals/user-selectors-ids';
import {FileImage} from '../../../../frontend/models/file-image.model';

@Component({
  selector: UserSelectorsIds.UserEditSelector,
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent extends BaseEditComponent<User> implements OnInit {

  constructor(protected _userRepositoryService: UserRepositoryService,
              protected  _userFormConfigService: UserFormConfigService,
              protected _route: ActivatedRoute) {
    super(_userRepositoryService, _route);
  }

  ngOnInit() {
    this.loadModel();
  }

  onLoadModelComplete() {
    this.model = new User(this.model);
    this.form = this._userFormConfigService.generateForm(this.model);
  }

  onFileImageFileChanged(event: FileImage): void {
    this.model.userImage = event;
  }

  onSubmit(form: FormGroup) {
    if (!form.dirty) {
      return;
    }
    this.applyChangedModel(form.value);
    this._userRepositoryService.update(this.model)
      .then()
      .catch((e) => console.log(e));
  }

  applyChangedModel(formValue: any) {
    this.model.firstName = formValue.firstName;
    this.model.lastName = formValue.lastName;
    this.model.userName = formValue.userName;
    this.model.password = formValue.password;
    this.model.phoneNumber = formValue.phoneNumber;
  }
}
