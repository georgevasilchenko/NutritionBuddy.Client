import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {AuthService} from '../../../services/auth.service';
import {AppUris} from '../../../../../globals/app-uris';
import {RoutingService} from '../../../services/routing.service';
import {FrontendRouteIds} from '../../../globals/frontend-route-ids';
import 'rxjs/add/operator/toPromise';
import {FrontendSelectorsIds} from '../../../globals/frontend-selectors-ids';
import {User, UserLogin} from '../../../../nutrition-buddy/identity/models/user.model';

@Component({
  selector: FrontendSelectorsIds.LoginSelector,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginForm: FormGroup;
  passwordHide = true;

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _routingService: RoutingService) {
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required, Validators.minLength(6)]]
    });

    if (AppUris.IsDev) {
      this.loginForm.patchValue({
        email: 'george.vasilchenko@gmail.com',
        password: 'QWEasd123!'
      });
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._authService.authenticate(new UserLogin(form.value.email, form.value.password))
        .then((user: User) => {
            if (user) {
              if (user.token && user.emailConfirmed) {
                this._routingService.navigateTo(FrontendRouteIds.Dashboard);
              } else if (!user.emailConfirmed) {
                this._routingService.navigateTo(FrontendRouteIds.ResendEmailConfirmation, user.email);
              }
            }
          }
        );
    }
  }

  onForgotPasswordClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.ForgotPassword);
  }

  onRegisterClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Register);
  }
}
