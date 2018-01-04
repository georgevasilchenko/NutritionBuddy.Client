import {Component, OnInit} from '@angular/core';
import {
  EmailConfirmationRequest, EmailConfirmationResult,
  EmailResendConfirmationRequest
} from '../../../nutrition-buddy/identity/models/user.model';
import {FrontendRouteIds} from '../../globals/frontend-route-ids';
import {RoutingService} from '../../services/routing.service';
import {UserRepositoryService} from '../../../nutrition-buddy/identity/services/user-repository.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.less']
})
export class EmailConfirmComponent implements OnInit {

  emailIsConfirmed: boolean;
  isLoading = true;
  confirmationStatusText: string;
  isError = false;

  private _model: EmailConfirmationRequest;
  private _email;
  private _token;

  private _statusServerError = 'Something went wrong...';
  private _statusLoading = 'We are checking your email...';
  private _statusSuccess = 'Confirmation was successful!';
  private _statusFailed = 'Oops, confirmation failed. The confirmation is expired or invalid. Or something went wrong.';


  constructor(private _route: ActivatedRoute,
              private _routingService: RoutingService,
              private _alertService: AlertService,
              private _userRepositoryService: UserRepositoryService) {
  }

  ngOnInit() {
    this.updateConfirmationStatus();
  }

  updateConfirmationStatus(): void {
    this.confirmationStatusText = this._statusLoading;

    this._route.queryParams.subscribe(params => {
      this._email = params['email'];
      this._token = params['token'];
      this._model = new EmailConfirmationRequest(this._email, this._token);

      this._userRepositoryService.confirmEmail(this._model)
        .then((result: EmailConfirmationResult) => {
          if (result.isSuccess) {
            this.onSuccess();
          } else {
            this.onFailure();
          }
        })
        .catch(result => {
          this.onError();
        });
    });
  }

  onError(): void {
    this.isError = true;
    this.isLoading = true;
    this.emailIsConfirmed = false;
    this.confirmationStatusText = this._statusServerError;
  }

  onSuccess(): void {
    this.isLoading = false;
    this.emailIsConfirmed = true;
    this.confirmationStatusText = this._statusSuccess;
  }

  onFailure(): void {
    this.isLoading = false;
    this.emailIsConfirmed = false;
    this.confirmationStatusText = this._statusFailed;
  }

  onResendConfirmationMail(): void {
    const request = new EmailResendConfirmationRequest(this._email);
    this._userRepositoryService.resendConfirmationEmail(request)
      .then(result => {
        this._alertService.displayMessage('Confirmation email was re-sent');
        this._routingService.navigateTo(FrontendRouteIds.Login);
      })
      .catch(response => {
        this._routingService.navigateTo(FrontendRouteIds.Login);
      });
  }

  onLoginClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }
}
