import {Injectable} from '@angular/core';
import {AppUrisCollection} from '../../frontend/models/app-uris-contract.model';
import {HttpClientService} from './http-client.service';

@Injectable()
export abstract class BaseRepositoryService<TypeModel> {
  constructor(protected _http: HttpClientService,
              protected _uris: AppUrisCollection) {
  }

  getAll(): Promise<TypeModel[]> {
    return this._http.get(this._uris.getAllUri)
      .then(this.extractCollecitonData)
      .catch(this.handleError);
  }

  getById(id: any): Promise<TypeModel> {
    return this._http.get(this._uris.getByIdUri(id))
      .then(this.extractElementData)
      .catch(this.handleError);
  }

  create(model: TypeModel): Promise<number> {
    return this._http.post(this._uris.createUri, model)
      .then((response: any) => {
        return response.json() as number;
      });
  }

  update(model: TypeModel): Promise<any> {
    return this._http.post(this._uris.updateUri, model)
      .then((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }

  delete(model: TypeModel): Promise<void> {
    return this._http.post(this._uris.deleteUri, model)
      .then((res: any) => {
        return;
      })
      .catch(this.handleError);
  }

  protected extractCollecitonData(res: any): TypeModel[] {
    const body = res.json();
    return body;
  }

  protected extractElementData(res: any): TypeModel {
    const body = res.json() as TypeModel;
    return body;
  }

  protected handleError(error: any) {
    return Promise.reject(error);
  }
}
