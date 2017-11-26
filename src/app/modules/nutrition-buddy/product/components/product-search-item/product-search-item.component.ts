import {ProductRepositoryService} from '../../services/product-repository.service';
import {ProductRouteIds} from '../../globals/product-route-ids';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';

@Component({
  selector: ProductSelectorsIds.ProductSearchItemSelector,
  templateUrl: './product-search-item.component.html',
  styleUrls: ['./product-search-item.component.less']
})
export class ProductSearchItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private _routingService: RoutingService,
              private _productService: ProductRepositoryService) {
  }

  ngOnInit() {
    console.log(this.product);
    this._productService.addSearchResults(this.product);
  }

  openDetails() {
    this._routingService.navigateTo(ProductRouteIds.ProductUpdate, this.product.id);
  }
}
