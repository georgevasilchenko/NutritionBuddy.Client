import {Component, OnInit} from '@angular/core';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoutingService} from '../../services/routing.service';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import {ActivatedRoute} from '@angular/router';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {UserEmailResendConfirmationRequest} from '../../../nutrition-buddy/identity/models/user.model';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: FrontendSelectorsIds.ResendEmailConfirmationSelector,
  templateUrl: './resend-email-confirm.component.html',
  styleUrls: ['./resend-email-confirm.component.less']
})
export class ResendEmailConfirmComponent implements OnInit {
  email: string;
  resendEmailForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _userRepositoryService: UserRepositoryService,
              private _route: ActivatedRoute,
              private _alertService: AlertService,
              private _routingService: RoutingService) {
  }

  ngOnInit() {
    this.email = this._route.snapshot.paramMap.get('email');
    this.resendEmailForm = this._formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._userRepositoryService.resendConfirmationEmail(new UserEmailResendConfirmationRequest(this.email))
        .then((result) => {
          this._alertService.displayMessage('Sent confirmation email to: ' + this.email + '!');
        });
    }
  }

  onRegisterClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Register);
  }
}
