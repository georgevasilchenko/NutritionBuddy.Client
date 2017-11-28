import {Injectable} from '@angular/core';
import {AppUris} from '../../../../globals/app-uris';
import {IAppUris} from '../../../frontend/models/app-uris-contract.model';
import {HttpClientService} from '../../../frontend/services/http-client.service';
import {BaseRepositoryService} from '../../../frontend/services/base-repository.service';
import {Food} from '../models/food.model';

@Injectable()
export class FoodRepositoryService extends BaseRepositoryService<Food> {

  private searchResults: Food[];

  constructor(protected _http: HttpClientService) {
    super(_http, <IAppUris>
      {
        getAllUri: AppUris.FoodGetAll,
        getByIdUri: AppUris.FoodGetById,
        createUri: AppUris.FoodCreate,
        updateUri: AppUris.FoodUpdate,
        deleteUri: AppUris.FoodDelete,
      });
    this.searchResults = [];
  }
}
