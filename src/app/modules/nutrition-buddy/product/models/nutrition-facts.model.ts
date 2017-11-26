import {IEntity, IFormConfigurable} from '../../../frontend/models/entity.model';
import {Validators} from '@angular/forms';

export interface INutritionFacts extends IEntity, IFormConfigurable {
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

export class NutritionFacts implements INutritionFacts, IFormConfigurable {
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

  getFormConfig(builder: any): any {
    return {
      calories: [this.calories, [Validators.required, Validators.min(0)]],
      totalFat_Grams: [this.totalFat_Grams, [Validators.required, Validators.min(0)]],
      saturatedFat_Grams: [this.saturatedFat_Grams],
      cholesterol_MilliGrams: [this.cholesterol_MilliGrams],
      sodium_MilliGrams: [this.sodium_MilliGrams],
      totalCarbohydrate_Grams: [this.totalCarbohydrate_Grams, [Validators.required, Validators.min(0)]],
      dietaryFiber_Grams: [this.dietaryFiber_Grams],
      sugars_Grams: [this.sugars_Grams],
      protein_Grams: [this.protein_Grams, [Validators.required, Validators.min(0)]],
      potassium_MilliGrams: [this.totalCarbohydrate_Grams],
      phosphorus_MilliGrams: [this.phosphorus_MilliGrams]
    };
  }
}
