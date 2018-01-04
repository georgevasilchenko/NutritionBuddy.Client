import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {AlertService} from '../../services/alert.service';
import {RoutingService} from '../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {IUserNewPassword, PasswordResetNewPassword, PasswordResetResult} from '../../../nutrition-buddy/identity/models/user.model';
import {BaseComponent} from '../base-component/base.component';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';

@Component({
  selector: FrontendSelectorsIds.NewPasswordComponent,
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.less']
})
export class NewPasswordComponent extends BaseComponent<PasswordResetNewPassword> implements OnInit {
  newPassForm: FormGroup;
  passwordHide = true;
  firstPassword: string;
  secondPassword: string;

  private _email: string;
  private _token: string;

  constructor(private _formBuilder: FormBuilder,
              private _userRepositoryService: UserRepositoryService,
              private _route: ActivatedRoute,
              private _alertService: AlertService,
              private _routingService: RoutingService) {
    super();
    this.model = new PasswordResetNewPassword();
  }

  ngOnInit() {
    this.newPassForm = this._formBuilder.group({
      firstPassword: [this.firstPassword, [Validators.required, Validators.minLength(6)]],
      secondPassword: [this.secondPassword, [Validators.required, Validators.minLength(6)]]
    });

    this._route.queryParams.subscribe(params => {
      this._email = params['email'];
      this._token = params['token'];
    });
  }

  onSubmit(form: FormGroup) {
    if (this.secondPassword !== this.firstPassword) {
      this._alertService.displayMessage('Passwords don\'t match');
      return;
    }
    if (form.valid) {
      const newPassSpec = <IUserNewPassword>{
        email: this._email,
        token: this._token,
        password: this.firstPassword
      };
      this.model = new PasswordResetNewPassword(newPassSpec);

      this._userRepositoryService.resetPassword(this.model)
        .then((result: PasswordResetResult) => {
          if (result.isSuccess) {
            this._alertService.displayMessage('Password for ' + this.model.email + ' was successfully reset!');
            this._routingService.navigateTo(FrontendRouteIds.Login);
          } else {
            this._alertService.displayMessage('There was a problem resetting the password.');
            this._routingService.navigateTo(FrontendRouteIds.Login);
          }
        })
        .catch(error => {
          this._routingService.navigateTo(FrontendRouteIds.Login);
        });
    }
  }
}
