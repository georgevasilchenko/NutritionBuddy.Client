import {Injectable} from '@angular/core';
import {BaseRepositoryService} from '../../../frontend/services/base-services/base-repository.service';
import {
  EmailConfirmationRequest, EmailConfirmationResult, EmailResendConfirmationRequest, PasswordResetNewPassword, PasswordResetRequest,
  PasswordResetResult, User, UserLogin
} from '../models/user.model';
import {HttpClientService} from '../../../frontend/services/http-client.service';
import {IAppUris} from '../../../frontend/models/app-uris-contract.model';
import {AppUris} from '../../../../globals/app-uris';
import 'rxjs/add/operator/toPromise';
import {Response} from '@angular/http';

@Injectable()
export class UserRepositoryService extends BaseRepositoryService<User> {

  constructor(protected _http: HttpClientService) {
    super(_http, <IAppUris>
      {
        getAllUri: AppUris.UserGetAll,
        getByIdUri: AppUris.UserGeById,
        createUri: AppUris.UserCreate,
        updateUri: AppUris.UserUpdate,
        deleteUri: AppUris.UserDelete,
      });
  }

  authenticate(userLogin: UserLogin): Promise<User> {
    return this._http.post(AppUris.UserAuthenticate, userLogin)
      .then((response: Response) => {
        const user = response.json() as User;
        return user;
      });
  }

  confirmEmail(confirmationStatusRequest: EmailConfirmationRequest): Promise<EmailConfirmationResult> {
    return this._http.post(AppUris.UserEmailConfirmation, confirmationStatusRequest)
      .then(response => {
        return response.json() as EmailConfirmationResult;
      });
  }

  resendConfirmationEmail(resendConfirmationStatusRequest: EmailResendConfirmationRequest): Promise<any> {
    return this._http.post(AppUris.UserResendConfirmation, resendConfirmationStatusRequest)
      .then(result => {
        return result;
      });
  }

  register(user: User): Promise<string> {
    return this._http.post(AppUris.UserCreate, user)
      .then((response: Response) => {
        return response;
      });
  }

  requestPasswordReset(request: PasswordResetRequest): Promise<any> {
    return this._http.post(AppUris.UserPasswordResetRequest, request)
      .then((response: Response) => {
        return response;
      });
  }

  resetPassword(request: PasswordResetNewPassword): Promise<PasswordResetResult> {
    return this._http.post(AppUris.UserPasswordReset, request)
      .then((response: Response) => {
        return response.json() as PasswordResetRequest;
      });
  }
}
