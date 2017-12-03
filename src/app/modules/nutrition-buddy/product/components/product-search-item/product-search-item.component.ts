import {ProductRouteIds} from '../../globals/product-route-ids';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {FileImage} from '../../../../frontend/models/file-image.model';
import {DataService} from '../../../services/data.service';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';

@Component({
  selector: ProductSelectorsIds.ProductSearchItemSelector,
  templateUrl: './product-search-item.component.html',
  styleUrls: ['../../../../frontend/components/base-collection-item/base-collection-item.component.less']
})
export class ProductSearchItemComponent implements OnInit {

  @Input() model: Product;

  constructor(private _localStorageService: LocalStorageService,
              private _routingService: RoutingService,
              private _dataService: DataService) {
  }

  ngOnInit() {

  }

  onClick() {
    this._dataService.getImageData(this.model.productInformation.imageUriThumb)
      .then((result: FileImage) => {
        this.model.productImage = result;
        const modelString = JSON.stringify(this.model);
        this._localStorageService.addValue(this._localStorageService.__PROD_KEY, modelString);
        this._routingService.navigateTo(ProductRouteIds.ProductCreate);
      });
  }
}
