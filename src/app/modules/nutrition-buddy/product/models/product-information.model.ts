import {IProductInformation} from './product-information.model';
import {IEntity, IFormConfigurable} from '../../../frontend/models/entity.model';
import {Validators} from '@angular/forms';

export interface IProductInformation extends IEntity, IFormConfigurable {
  brandName: string;
  consumedAt: Date;
  imageUriHighres: string;
  imageUriThumb: string;
  internalBrandId: number;
  internalBrandName: string;
  internalItemId: number;
  internalItemName: string;
  productName: string;
  source: number;
  upc: string;
}

export class ProductInformation implements IProductInformation {
  id = 0;
  brandName = '';
  consumedAt = new Date();
  imageUriHighres = 'assets/images/placeholders/food-image-placeholder.png';
  imageUriThumb = 'assets/images/placeholders/food-image-placeholder.png';
  internalBrandId = 0;
  internalBrandName = '';
  internalItemId = 0;
  internalItemName = '';
  productName = '';
  source = 0;
  upc = ''

  constructor(spec?: IProductInformation) {
    if (spec) {
      this.brandName = spec.brandName;
      this.consumedAt = spec.consumedAt;
      this.imageUriHighres = spec.imageUriHighres;
      this.imageUriThumb = spec.imageUriThumb;
      this.internalBrandId = spec.internalBrandId;
      this.internalBrandName = spec.internalBrandName;
      this.internalItemId = spec.internalItemId;
      this.internalItemName = spec.internalItemName;
      this.productName = spec.productName;
      this.source = spec.source;
      this.upc = spec.upc;
    }
  }

  getFormConfig(builder: any): any {
    return {
      brandName: [this.brandName],
      consumedAt: [this.consumedAt],
      imageUriHighres: [this.imageUriHighres],
      imageUriThumb: [this.imageUriThumb],
      internalBrandId: [this.internalBrandId],
      internalBrandName: [this.internalBrandName],
      internalItemId: [this.internalItemId],
      internalItemName: [this.internalItemName],
      productName: [this.productName, Validators.required],
      source: [this.source],
      upc: [this.upc]
    };
  }
}
