import {Component, Input, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../../product/globals/product-selectors-ids';
import {Product} from '../../../product/models/product.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: ProductSelectorsIds.NutritionFactsLabelSelector,
  templateUrl: './nutrition-facts-label.component.html',
  styleUrls: ['./nutrition-facts-label.component.css']
})
export class NutritionFactsLabelComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() product: Product;

  // Daily intake
  totalFat_Grams = 65;
  saturatedFat_Grams = 20;
  cholesterol_MilliGrams = 300;
  sodium_MilliGrams = 2400;
  potassium_MilliGrams = 3500;
  totalCarbohydrate_Grams = 300;
  dietaryFiber_Grams = 25;
  protein_Grams = 50;
  vitaminA_MicroGrams = 5000;
  vitaminC_MilliGrams = 60;
  calcium_MilliGrams = 1000;
  iron_MilliGrams = 18;
  vitaminD_International = 400;
  vitaminK_MicroGrams = 80;
  thiamin_MilliGrams = 1.5;
  riboflavin_MilliGrams = 1.7;
  niacin_MilliGrams = 20;
  vitaminB6_MilliGrams = 2.0;
  folate_MicroGrams = 400;
  vitaminB12_MicroGrams = 6.0;
  pantothenicAcid = 10;
  phosphorus_MilliGrams = 1000;
  iodine = 150;
  magnesium_MilliGrams = 400;
  zinc_MilliGrams = 15;
  selenium_MicroGrams = 70;
  copper_MilliGrams = 2.0;
  manganese_MilliGrams = 2.0;


  constructor() {
  }

  ngOnInit() {
  }


  getPercentage(dailiValue, actualValue): number {
    const ratio = actualValue / dailiValue;
    if (ratio <= 0) {
      return 0;
    }
    return Math.round(ratio * 100);
  }
}
