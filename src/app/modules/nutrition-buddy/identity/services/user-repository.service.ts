import {Injectable} from '@angular/core';
import {BaseRepositoryService} from '../../../frontend/services/base-repository.service';
import {
  User,
  UserEmailConfirmationStatusRequest,
  UserEmailConfirmationStatusResponse,
  UserEmailResendConfirmationRequest,
  UserLogin,
  UserNewPassword
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

  getEmailConfirmationStatus(confirmationStatusRequest: UserEmailConfirmationStatusRequest): Promise<UserEmailConfirmationStatusResponse> {
    return this._http.post(AppUris.UserEmailConfirmationStatus, confirmationStatusRequest)
      .then(response => {
        return response.json() as UserEmailConfirmationStatusResponse;
      });
  }

  resendConfirmationEmail(resendConfirmationStatusRequest: UserEmailResendConfirmationRequest): Promise<any> {
    return this._http.post(AppUris.UserResendConfirmation, resendConfirmationStatusRequest)
      .then(result => {
        return result;
      });
  }

  setNewPassword(userNewPassword: UserNewPassword): Promise<any> {
    return this._http.post(AppUris.UserResendConfirmation, userNewPassword)
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
}
