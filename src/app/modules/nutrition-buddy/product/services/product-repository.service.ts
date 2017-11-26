import {ProductSearchQuery} from '../models/product-search.model';
import {AppUris} from '../../../../globals/app-uris';
import {IAppUris} from '../../../frontend/models/app-uris-contract.model';
import {Product} from '../models/product.model';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {BaseRepositoryService} from '../../../frontend/services/base-repository.service';
import {HttpClientService} from '../../../frontend/services/http-client.service';

@Injectable()
export class ProductRepositoryService extends BaseRepositoryService<Product> {

  private searchResults: Product[];

  constructor(protected _http: HttpClientService) {
    super(_http, <IAppUris>
      {
        getAllUri: AppUris.ProductGetAll,
        getByIdUri: AppUris.ProductGeById,
        createUri: AppUris.ProductCreate,
        updateUri: AppUris.ProductUpdate,
        deleteUri: AppUris.ProductDelete,
      });
    this.searchResults = [];
  }

  addSearchResults(product: Product) {
    this.searchResults.push(product);
  }

  search(productSearchQuery: ProductSearchQuery): Promise<Product[]> {
    return this._http.post(AppUris.ProductSearch, productSearchQuery)
      .then(this.extractCollecitonData)
      .catch(this.handleError);
  }
}
