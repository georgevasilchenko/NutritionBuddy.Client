import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Food} from '../models/food.model';

@Injectable()
export class FoodFormConfigService {

  constructor(private _formBuilder: FormBuilder) {

  }

  generateForm(model: Food): any {
    return this._formBuilder.group({
      description: [model.description],
      name: [model.name, Validators.required],
      type: [model.type],
      url: [model.url],
      serving: this._formBuilder.group({
        calories: [model.serving.calories, Validators.required],
        calcium: [model.serving.calcium],
        carbohydrate: [model.serving.carbohydrate, Validators.required],
        cholesterol: [model.serving.cholesterol],
        fat: [model.serving.fat, Validators.required],
        fiber: [model.serving.fiber],
        iron: [model.serving.iron],
        measurementDescription: [model.serving.measurementDescription],
        metricAmount: [model.serving.metricAmount, Validators.required],
        metricUnit: [model.serving.metricUnit, Validators.required],
        monounsaturatedFat: [model.serving.monounsaturatedFat],
        numberOfUnits: [model.serving.numberOfUnits],
        polyunsaturatedFat: [model.serving.polyunsaturatedFat],
        potassium: [model.serving.potassium],
        protein: [model.serving.protein, Validators.required],
        saturatedFat: [model.serving.saturatedFat],
        servingDescription: [model.serving.servingDescription],
        sodium: [model.serving.sodium],
        sugar: [model.serving.sugar],
        transFat: [model.serving.transFat],
        url: [model.serving.url],
        vitaminA: [model.serving.vitaminA],
        vitaminC: [model.serving.vitaminC],
      })
    });
  }
}

