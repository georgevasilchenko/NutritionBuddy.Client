import {IEntity} from '../../../frontend/models/entity.model';

export interface INutritionFacts extends IEntity {
  calories: number;
  totalFat_Grams: number;
  saturatedFat_Grams: number;
  cholesterol_MilliGrams: number;
  sodium_MilliGrams: number;
  totalCarbohydrate_Grams: number;
  dietaryFiber_Grams: number;
  sugars_Grams: number;
  protein_Grams: number;
  potassium_MilliGrams: number;
  phosphorus_MilliGrams: number;
}

export class NutritionFacts implements INutritionFacts {
  id = 0;
  calories = 0;
  totalFat_Grams = 0;
  saturatedFat_Grams = 0;
  cholesterol_MilliGrams = 0;
  sodium_MilliGrams = 0;
  totalCarbohydrate_Grams = 0;
  dietaryFiber_Grams = 0;
  sugars_Grams = 0;
  protein_Grams = 0;
  potassium_MilliGrams = 0;
  phosphorus_MilliGrams = 0;

  constructor(spec?: INutritionFacts) {
    if (spec) {
      this.calories = spec.calories;
      this.totalFat_Grams = spec.totalFat_Grams;
      this.saturatedFat_Grams = spec.saturatedFat_Grams;
      this.cholesterol_MilliGrams = spec.cholesterol_MilliGrams;
      this.sodium_MilliGrams = spec.sodium_MilliGrams;
      this.totalCarbohydrate_Grams = spec.totalCarbohydrate_Grams;
      this.dietaryFiber_Grams = spec.dietaryFiber_Grams;
      this.sugars_Grams = spec.sugars_Grams;
      this.protein_Grams = spec.protein_Grams;
      this.potassium_MilliGrams = spec.potassium_MilliGrams;
      this.phosphorus_MilliGrams = spec.phosphorus_MilliGrams;
    }
  }
}
