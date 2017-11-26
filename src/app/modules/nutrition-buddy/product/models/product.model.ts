import {IProductInformation, ProductInformation} from './product-information.model';
import {INutritionFacts, NutritionFacts} from './nutrition-facts.model';
import {INutrients, Nutrients} from './nutrients.model';
import {IServingInformation, ServingInformation} from './serving-information.model';
import {IMacroTotals, MacroTotals} from './macro-totals.model';
import {IEntity} from '../../../frontend/models/entity.model';

export interface IProduct extends IEntity {
  id: number;
  uniqueName: string;
  productInformation: IProductInformation;
  nutritionFacts: INutritionFacts;
  nutrients: INutrients;
  servingInformation: IServingInformation;
  macroTotals: IMacroTotals;
}

export class Product implements IProduct {
  id: number;
  uniqueName: string;
  productInformation: IProductInformation;
  nutritionFacts: INutritionFacts;
  nutrients: INutrients;
  servingInformation: IServingInformation;
  macroTotals: IMacroTotals;

  constructor(spec?: IProduct) {
    this.id = spec ? spec.id : 0;
    this.uniqueName = undefined;
    this.productInformation = new ProductInformation();
    this.nutritionFacts = new NutritionFacts();
    this.servingInformation = new ServingInformation();
    this.macroTotals = new MacroTotals();
    this.nutrients = new Nutrients();

    if (spec) {
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
      if (spec.nutrients) {
        this.nutrients = new Nutrients(spec.nutrients);
      }
    }
  }
}
