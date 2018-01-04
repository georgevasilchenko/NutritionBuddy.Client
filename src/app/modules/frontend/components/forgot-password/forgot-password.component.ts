import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoutingService} from '../../services/routing.service';
import {AuthService} from '../../services/auth.service';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {PasswordResetRequest} from '../../../nutrition-buddy/identity/models/user.model';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: FrontendSelectorsIds.ForgotPasswordSelector,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  forgotPassForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _alertService: AlertService,
              private _userRepositoryService: UserRepositoryService,
              private _routingService: RoutingService) {
  }

  ngOnInit() {
    this.forgotPassForm = this._formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const model = new PasswordResetRequest(this.email);
      this._userRepositoryService.requestPasswordReset(model)
        .then(result => {
          this._alertService.displayMessage('Password reset link was sent to: ' + this.email);
          this._routingService.navigateTo(FrontendRouteIds.Login);
        });
    }
  }

  onLoginClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }
}
