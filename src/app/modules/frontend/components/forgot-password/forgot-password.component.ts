import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoutingService} from '../../services/routing.service';
import {AuthService} from '../../services/auth.service';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';

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
              private _routingService: RoutingService) {
  }

  ngOnInit() {
    this.forgotPassForm = this._formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // this._authService.authenticate(new UserLogin(form.value.email, form.value.password))
      //   .then(user => {
      //       if (user && user.token) {
      //         this._routingService.navigateTo(FrontendRouteIds.Dashboard);
      //       }
      //     }
      //   );
    }
  }

  onLoginClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }
}
