import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {Headers, Http, Response, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class XhrImageService {

  constructor(private _http: Http,
              private _localStorage: LocalStorageService) {
  }

  createAuthorizationHeader(headers: Headers) {
    if (this._localStorage.getTokenIsValid()) {
      headers.append('Authorization', this._localStorage.getToken());
    }
  }

  getImage(imageUrl: string): Observable<File> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this._http.get(imageUrl, {responseType: ResponseContentType.Blob, headers: headers})
      .map((res: Response) => res.blob());
  }
}
