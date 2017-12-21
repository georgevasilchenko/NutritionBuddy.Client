import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {AlertService} from '../../services/alert.service';
import {RoutingService} from '../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {UserNewPassword} from '../../../nutrition-buddy/identity/models/user.model';
import {BaseComponent} from '../base-component/base.component';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.NewPasswordComponent,
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.less']
})
export class NewPasswordComponent extends BaseComponent<UserNewPassword> implements OnInit {
  newPassForm: FormGroup;
  passwordHide = true;

  email: string;
  token: string;
  firstPassword: string;
  secondPassword: string;

  constructor(private _formBuilder: FormBuilder,
              private _userRepositoryService: UserRepositoryService,
              private _route: ActivatedRoute,
              private _alertService: AlertService,
              private _routingService: RoutingService) {
    super();
    this.model = new UserNewPassword();
  }

  ngOnInit() {

    this.email = this._route.snapshot.paramMap.get('email');
    this.token = this._route.snapshot.paramMap.get('token');

    this.newPassForm = this._formBuilder.group({
      firstPassword: [this.firstPassword, [Validators.required, Validators.minLength(6)]],
      secondPassword: [this.secondPassword, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(form: FormGroup) {
    if (this.secondPassword !== this.model.password) {
      this._alertService.displayMessage('Passwords don\'t match');
      return;
    }
    if (form.valid) {

      this.model.token = this.token;
      this.applyChangedModel(this.newPassForm.value);

      this._userRepositoryService.setNewPassword(this.model)
        .then(result => {
            this._alertService.displayMessage('Requested');
          }
        );
    }
  }

  applyChangedModel(formValue: any) {
    this.model.password = formValue.password;
    this.model.email = formValue.email;
  }

}
