import {IProductInformation, ProductInformation} from './product-information.model';
import {INutritionFacts, NutritionFacts} from './nutrition-facts.model';
import {IServingInformation, ServingInformation} from './serving-information.model';
import {IMacroTotals, MacroTotals} from './macro-totals.model';
import {IEntity} from '../../../frontend/models/entity.model';
import {FileImage, IFileImage} from '../../../frontend/models/file-image.model';

export interface IProduct extends IEntity {
  id: number;
  applicationUserId: string;
  uniqueName: string;
  productInformation: IProductInformation;
  nutritionFacts: INutritionFacts;
  servingInformation: IServingInformation;
  macroTotals: IMacroTotals;
  productImage: IFileImage;
}

export class Product implements IProduct {
  id: number;
  applicationUserId: string;
  uniqueName: string;
  productInformation: ProductInformation;
  nutritionFacts: NutritionFacts;
  servingInformation: ServingInformation;
  macroTotals: MacroTotals;
  productImage: FileImage;

  constructor(spec?: IProduct) {
    this.id = spec ? spec.id : 0;
    this.productInformation = new ProductInformation();
    this.nutritionFacts = new NutritionFacts();
    this.servingInformation = new ServingInformation();
    this.macroTotals = new MacroTotals();
    this.productImage = new FileImage();

    if (spec) {
      this.applicationUserId = spec.applicationUserId;

      this.uniqueName = spec.uniqueName;

      if (spec.productInformation) {
        this.productInformation = new ProductInformation(spec.productInformation);
      }
      if (spec.nutritionFacts) {
        this.nutritionFacts = new NutritionFacts(spec.nutritionFacts);
      }
      if (spec.servingInformation) {
        this.servingInformation = new ServingInformation(spec.servingInformation);
      }
      if (spec.macroTotals) {
        this.macroTotals = new MacroTotals(spec.macroTotals);
      }
      if (spec.productImage) {
        this.productImage = new FileImage(spec.productImage);
      }
    }
  }
}
