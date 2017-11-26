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
  private totalFat_Grams = 65;
  private saturatedFat_Grams = 20;
  private cholesterol_MilliGrams = 300;
  private sodium_MilliGrams = 2400;
  private potassium_MilliGrams = 3500;
  private totalCarbohydrate_Grams = 300;
  private dietaryFiber_Grams = 25;
  private protein_Grams = 50;
  private vitaminA_MicroGrams = 5000;
  private vitaminC_MilliGrams = 60;
  private calcium_MilliGrams = 1000;
  private iron_MilliGrams = 18;
  private vitaminD_International = 400;
  private vitaminK_MicroGrams = 80;
  private thiamin_MilliGrams = 1.5;
  private riboflavin_MilliGrams = 1.7;
  private niacin_MilliGrams = 20;
  private vitaminB6_MilliGrams = 2.0;
  private folate_MicroGrams = 400;
  private vitaminB12_MicroGrams = 6.0;
  private pantothenicAcid = 10;
  private phosphorus_MilliGrams = 1000;
  private iodine = 150;
  private magnesium_MilliGrams = 400;
  private zinc_MilliGrams = 15;
  private selenium_MicroGrams = 70;
  private copper_MilliGrams = 2.0;
  private manganese_MilliGrams = 2.0;


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
