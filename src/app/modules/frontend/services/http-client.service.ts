import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {RoutingService} from './routing.service';
import {FrontendRouteIds} from '../globals/frontend-route-ids';
import {AlertService} from './utility-services/alert.service';
import {ApiException, IApiException} from '../models/api-exception.model';
import {LocalStorageService} from './local-storage.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientService {

  constructor(private _http: Http,
              private _localStorage: LocalStorageService,
              private _routingService: RoutingService,
              private _alertService: AlertService) {
  }

  createAuthorizationHeader(headers: Headers) {
    if (this._localStorage.getTokenIsValid()) {
      headers.append('Authorization', this._localStorage.getToken());
    }
  }

  get(url): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this._http.get(url, {headers: headers})
      .toPromise()
      .then((response: Response) => {
        return response;
      })
      .catch((response: Response) => {
        return this.processError(response);
      });
  }

  post(url, data): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this._http.post(url, data, {headers: headers})
      .toPromise()
      .then((response: Response) => {
        return response;
      })
      .catch((response: Response) => {
        return this.processError(response);
      });
  }

  processError(response: Response): any {
    if (response.status === 401) {
      this._routingService.navigateTo(FrontendRouteIds.Login);
      this._alertService.displayMessage('You have to be logged in.');
      return Promise.reject('Unauthorized');
    } else if (response.status === 404) {
      this._alertService.displayMessage('Resource was not found!');
      return Promise.reject('NotFoundException!');
    } else if (response.status === 500) {
      const apiException = new ApiException(<IApiException>response.json());
      if (apiException) {
        // this._alertService.displayMessage(apiException.getMessages());
        this.handleApiException(apiException);
        return Promise.reject('ApiException!');
      } else {
        console.error('PIZDETS! Got 500 but could not get api exception out of response. Fix needed!');
      }
    } else {
      this._alertService.displayMessage('Could not connect to API service. Unknown error.');
      return Promise.reject('UnhandledException!');
    }
  }


  handleApiException(apiException: ApiException): void {
    this._alertService.displayMessage(apiException.getMessages());
  }
}
