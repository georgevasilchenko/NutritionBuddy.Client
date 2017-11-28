import {IEntity} from '../../../frontend/models/entity.model';

export interface IServing extends IEntity {
  id: number;
  calcium: number;
  calories: number;
  carbohydrate: number;
  cholesterol: number;
  fat: number;
  fiber: number;
  iron: number;
  measurementDescription: string;
  metricAmount: number;
  metricUnit: string;
  monounsaturatedFat: number;
  numberOfUnits: number;
  polyunsaturatedFat: number;
  potassium: number;
  protein: number;
  saturatedFat: number;
  servingDescription: string;
  sodium: number;
  sugar: number;
  transFat: number;
  url: string;
  vitaminA: number;
  vitaminC: number;
}

export class Serving implements IServing {
  id: number;
  calcium: number;
  calories: number;
  carbohydrate: number;
  cholesterol: number;
  fat: number;
  fiber: number;
  iron: number;
  measurementDescription: string;
  metricAmount: number;
  metricUnit: string;
  monounsaturatedFat: number;
  numberOfUnits: number;
  polyunsaturatedFat: number;
  potassium: number;
  protein: number;
  saturatedFat: number;
  servingDescription: string;
  sodium: number;
  sugar: number;
  transFat: number;
  url: string;
  vitaminA: number;
  vitaminC: number;

  constructor(spec?: IServing) {
    this.id = 0;
    this.calcium = 0;
    this.calories = 0;
    this.carbohydrate = 0;
    this.cholesterol = 0;
    this.fat = 0;
    this.fiber = 0;
    this.iron = 0;
    this.measurementDescription = '';
    this.metricAmount = 0;
    this.metricUnit = '';
    this.monounsaturatedFat = 0;
    this.numberOfUnits = 0;
    this.polyunsaturatedFat = 0;
    this.potassium = 0;
    this.protein = 0;
    this.saturatedFat = 0;
    this.servingDescription = '';
    this.sodium = 0;
    this.sugar = 0;
    this.transFat = 0;
    this.url = '';
    this.vitaminA = 0;
    this.vitaminC = 0;
    
    if (spec) {
      this.id = spec.id >= 0 ? spec.id : 0;
      this.calcium = spec.calcium ? spec.calcium : 0;
      this.calories = spec.calories ? spec.calories : 0;
      this.carbohydrate = spec.carbohydrate ? spec.carbohydrate : 0;
      this.cholesterol = spec.cholesterol ? spec.cholesterol : 0;
      this.fat = spec.fat ? spec.fat : 0;
      this.fiber = spec.fiber ? spec.fiber : 0;
      this.iron = spec.iron ? spec.iron : 0;
      this.measurementDescription = spec.measurementDescription ? spec.measurementDescription : '';
      this.metricAmount = spec.metricAmount ? spec.metricAmount : 0;
      this.metricUnit = spec.metricUnit ? spec.metricUnit : '';
      this.monounsaturatedFat = spec.monounsaturatedFat ? spec.monounsaturatedFat : 0;
      this.numberOfUnits = spec.numberOfUnits ? spec.numberOfUnits : 0;
      this.polyunsaturatedFat = spec.polyunsaturatedFat ? spec.polyunsaturatedFat : 0;
      this.potassium = spec.potassium ? spec.potassium : 0;
      this.protein = spec.protein ? spec.protein : 0;
      this.saturatedFat = spec.saturatedFat ? spec.saturatedFat : 0;
      this.servingDescription = spec.servingDescription ? spec.servingDescription : '';
      this.sodium = spec.sodium ? spec.sodium : 0;
      this.sugar = spec.sugar ? spec.sugar : 0;
      this.transFat = spec.transFat ? spec.transFat : 0;
      this.url = spec.url ? spec.url : '';
      this.vitaminA = spec.vitaminA ? spec.vitaminA : 0;
      this.vitaminC = spec.vitaminC ? spec.vitaminC : 0;
    }
  }
}
