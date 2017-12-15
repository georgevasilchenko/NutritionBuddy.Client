import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseEditComponent} from '../../../../frontend/components/base-edit/base-edit.component';
import {User} from '../../models/user.model';
import {UserRepositoryService} from '../../services/user-repository.service';
import {ActivatedRoute} from '@angular/router';
import {UserFormConfigService} from '../../services/user-form-config.service';
import {FormGroup} from '@angular/forms';
import {UserSelectorsIds} from '../../globals/user-selectors-ids';
import {FileImage} from '../../../../frontend/models/file-image.model';
import {HeaderActionItem} from '../../../../frontend/models/header-action-item.model';
import {IconsNames} from '../../../../../globals/icons-names';
import {AlertService} from '../../../../frontend/services/alert.service';

@Component({
  selector: UserSelectorsIds.UserEditSelector,
  templateUrl: './user-edit-new.component.html',
  styleUrls: ['./user-edit-new.component.less']
})
export class UserEditComponent extends BaseEditComponent<User> implements OnInit, OnDestroy {

  constructor(protected _userRepositoryService: UserRepositoryService,
              protected  _userFormConfigService: UserFormConfigService,
              protected _route: ActivatedRoute,
              private _alertService: AlertService) {
    super(_userRepositoryService, _route);
  }

  ngOnInit() {
    this.loadModel();
    this.createActions();
  }

  ngOnDestroy() {
    this.destroyActions();
  }

  onLoadModelComplete() {
    this.model = new User(this.model);
    this.form = this._userFormConfigService.generateForm(this.model);
  }

  onFileImageFileChanged(image: FileImage): void {
    this.model.userImage = image;
    this.form.markAsDirty();
  }

  onSubmit(form: FormGroup) {
    if (!form.dirty) {
      return;
    }
    this.applyChangedModel(form.value);
    this._userRepositoryService.update(this.model)
      .then((result) => {
        this._alertService.displayMessage('Updated account');
      })
      .catch((e) => console.log(e));
  }

  createActions() {
    this.actions.push(
      new HeaderActionItem(
        IconsNames.Done,
        'Done',
        undefined,
        () => {
          this.onDoneClick(this.form);
        },
        true
      )
    );
  }

  destroyActions(): void {
    this.actions = [];
  }

  onDoneClick(form: FormGroup): void {
    this.onSubmit(form);
  }

  applyChangedModel(formValue: any) {
    this.model.firstName = formValue.firstName;
    this.model.lastName = formValue.lastName;
    this.model.userName = formValue.userName;
    this.model.password = formValue.password;
    this.model.phoneNumber = formValue.phoneNumber;
  }
}
