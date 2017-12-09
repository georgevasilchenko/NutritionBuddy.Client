import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {AuthService} from '../../services/auth.service';
import {AppUris} from '../../../../globals/app-uris';
import {RoutingService} from '../../services/routing.service';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import 'rxjs/add/operator/toPromise';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {UserLogin} from '../../../nutrition-buddy/identity/models/user.model';

@Component({
  selector: FrontendSelectorsIds.LoginSelector,
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.less']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isSignUp = false;
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
        .then(user => {
            if (user && user.token) {
              this._routingService.navigateTo(FrontendRouteIds.Dashboard);
            }
          }
        );
    }
  }
}
