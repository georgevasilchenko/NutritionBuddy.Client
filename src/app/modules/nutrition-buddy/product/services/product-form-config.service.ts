import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Product} from '../models/product.model';

@Injectable()
export class ProductFormConfigService {

  constructor(private _formBuilder: FormBuilder) {

  }

  generateForm(model: Product): any {
    return this._formBuilder.group({
      uniqueName: [model.uniqueName, Validators.required],
      servingInformation: this._formBuilder.group({
        quantity: [model.servingInformation.quantity, [Validators.required, Validators.min(1)]],
        unit: [model.servingInformation.unit, Validators.required],
        weightGrams: [model.servingInformation.weightGrams, [Validators.required, Validators.min(1)]],
      }),
      productInformation: this._formBuilder.group({
        brandName: [model.productInformation.brandName],
        consumedAt: [model.productInformation.consumedAt],
        imageUriHighres: [model.productInformation.imageUriHighres],
        imageUriThumb: [model.productInformation.imageUriThumb],
        internalBrandId: [model.productInformation.internalBrandId],
        internalBrandName: [model.productInformation.internalBrandName],
        internalItemId: [model.productInformation.internalItemId],
        internalItemName: [model.productInformation.internalItemName],
        productName: [model.productInformation.productName, Validators.required],
        source: [model.productInformation.source],
        upc: [model.productInformation.upc]
      }),
      nutritionFacts: this._formBuilder.group({
        calories: [model.nutritionFacts.calories, [Validators.required, Validators.min(0)]],
        totalFat_Grams: [model.nutritionFacts.totalFat_Grams, [Validators.required, Validators.min(0)]],
        saturatedFat_Grams: [model.nutritionFacts.saturatedFat_Grams],
        cholesterol_MilliGrams: [model.nutritionFacts.cholesterol_MilliGrams],
        sodium_MilliGrams: [model.nutritionFacts.sodium_MilliGrams],
        totalCarbohydrate_Grams: [model.nutritionFacts.totalCarbohydrate_Grams, [Validators.required, Validators.min(0)]],
        dietaryFiber_Grams: [model.nutritionFacts.dietaryFiber_Grams],
        sugars_Grams: [model.nutritionFacts.sugars_Grams],
        protein_Grams: [model.nutritionFacts.protein_Grams, [Validators.required, Validators.min(0)]],
        potassium_MilliGrams: [model.nutritionFacts.totalCarbohydrate_Grams],
        phosphorus_MilliGrams: [model.nutritionFacts.phosphorus_MilliGrams]
      })
    });
  }
}
