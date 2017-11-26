import {IEntity, IFormConfigurable} from '../../../frontend/models/entity.model';

export interface INutrients extends IEntity, IFormConfigurable {
  adjustedProtein_Grams: number;
  alanine_Grams: number;
  alcohol_Grams: number;
  arginine_Grams: number;
  ash_Grams: number;
  asparticAcid_Grams: number;
  betaine_MilliGrams: number;
  betaSitosterol_MilliGrams: number;
  caffeine_MilliGrams: number;
  calcium_MilliGrams: number;
  campesterol_MilliGrams: number;
  carbohydrate_Grams: number;
  caroteneAlpha_MicroGrams: number;
  caroteneBeta_MicroGrams: number;
  choline_MilliGrams: number;
  copper_MilliGrams: number;
  cryptoxanthin_MicroGrams: number;
  cystine_Grams: number;
  dihydrophylloquinone_MicroGrams: number;
  energyCal_KiloCalories: number;
  energyKj_KiloJoules: number;
  fat_Grams: number;
  fattyAcids_Grams: number;
  fattyAcidsSaturated_Grams: number;
  fattyAcidsTotalMonosaturated_Grams: number;
  fattyAcidsTotalPolysaturated_Grams: number;
  fattyAcidsTotalTransMonoenoic_Grams: number;
  fattyAcidsTotalTransPolyenoic_Grams: number;
  fiber_Grams: number;
  fluoride_MicroGrams: number;
  folate_MicroGrams: number;
  folateDFE_MicroGrams: number;
  folicAcid_MicroGrams: number;
  fructose_Grams: number;
  galactose_Grams: number;
  glucose_Grams: number;
  glutamicAcid_Grams: number;
  glycine_Grams: number;
  histidine_Grams: number;
  hydroxyproline_Grams: number;
  iron_MilliGrams: number;
  isoleucine_Grams: number;
  lactose_Grams: number;
  leucine_Grams: number;
  lutein_MicroGrams: number;
  lycopene_MicroGrams: number;
  lysine_Grams: number;
  magnesium_MilliGrams: number;
  maltose_Grams: number;
  manganese_MilliGrams: number;
  menaquinone4_MicroGrams: number;
  methionine_Grams: number;
  niacin_MilliGrams: number;
  omega3AlphaLinolenicAcid_Grams: number;
  omega3DocosahexaenoicAcid_Grams: number;
  omega3EicosapentaenoicAcid_Grams: number;
  pantothenicAcid_MilliGrams: number;
  phenylalanine_Grams: number;
  phytosterols_MilliGrams: number;
  proline_Grams: number;
  retinol_MicroGrams: number;
  riboflavin_MilliGrams: number;
  selenium_MicroGrams: number;
  serine_Grams: number;
  starch_Grams: number;
  stigmasterol_MilliGrams: number;
  sucrosel_Grams: number;
  theobromine_MilliGrams: number;
  thiamin_MilliGrams: number;
  threonine_Grams: number;
  tocopherolBeta_MilliGrams: number;
  tocopherolDelta_MilliGrams: number;
  tocopherolGamma_MilliGrams: number;
  tryptophan_Grams: number;
  tyrosine_Grams: number;
  valine_Grams: number;
  vitaminA_MicroGrams: number;
  vitaminB12_MicroGrams: number;
  vitaminB6_MilliGrams: number;
  vitaminC_MilliGrams: number;
  vitaminD_International: number;
  vitaminD2_MicroGrams: number;
  vitaminD2D3_MicroGrams: number;
  vitaminD3_MicroGrams: number;
  vitaminE_MilliGrams: number;
  vitaminK_MicroGrams: number;
  water_Grams: number;
  zinc_MilliGrams: number;
}

export class Nutrients implements INutrients {
  id = 0;
  adjustedProtein_Grams = 0;
  alanine_Grams = 0;
  alcohol_Grams = 0;
  arginine_Grams = 0;
  ash_Grams = 0;
  asparticAcid_Grams = 0;
  betaine_MilliGrams = 0;
  betaSitosterol_MilliGrams = 0;
  caffeine_MilliGrams = 0;
  calcium_MilliGrams = 0;
  campesterol_MilliGrams = 0;
  carbohydrate_Grams = 0;
  caroteneAlpha_MicroGrams = 0;
  caroteneBeta_MicroGrams = 0;
  choline_MilliGrams = 0;
  copper_MilliGrams = 0;
  cryptoxanthin_MicroGrams = 0;
  cystine_Grams = 0;
  dihydrophylloquinone_MicroGrams = 0;
  energyCal_KiloCalories = 0;
  energyKj_KiloJoules = 0;
  fat_Grams = 0;
  fattyAcids_Grams = 0;
  fattyAcidsSaturated_Grams = 0;
  fattyAcidsTotalMonosaturated_Grams = 0;
  fattyAcidsTotalPolysaturated_Grams = 0;
  fattyAcidsTotalTransMonoenoic_Grams = 0;
  fattyAcidsTotalTransPolyenoic_Grams = 0;
  fiber_Grams = 0;
  fluoride_MicroGrams = 0;
  folate_MicroGrams = 0;
  folateDFE_MicroGrams = 0;
  folicAcid_MicroGrams = 0;
  fructose_Grams = 0;
  galactose_Grams = 0;
  glucose_Grams = 0;
  glutamicAcid_Grams = 0;
  glycine_Grams = 0;
  histidine_Grams = 0;
  hydroxyproline_Grams = 0;
  iron_MilliGrams = 0;
  isoleucine_Grams = 0;
  lactose_Grams = 0;
  leucine_Grams = 0;
  lutein_MicroGrams = 0;
  lycopene_MicroGrams = 0;
  lysine_Grams = 0;
  magnesium_MilliGrams = 0;
  maltose_Grams = 0;
  manganese_MilliGrams = 0;
  menaquinone4_MicroGrams = 0;
  methionine_Grams = 0;
  niacin_MilliGrams = 0;
  omega3AlphaLinolenicAcid_Grams = 0;
  omega3DocosahexaenoicAcid_Grams = 0;
  omega3EicosapentaenoicAcid_Grams = 0;
  pantothenicAcid_MilliGrams = 0;
  phenylalanine_Grams = 0;
  phytosterols_MilliGrams = 0;
  proline_Grams = 0;
  retinol_MicroGrams = 0;
  riboflavin_MilliGrams = 0;
  selenium_MicroGrams = 0;
  serine_Grams = 0;
  starch_Grams = 0;
  stigmasterol_MilliGrams = 0;
  sucrosel_Grams = 0;
  theobromine_MilliGrams = 0;
  thiamin_MilliGrams = 0;
  threonine_Grams = 0;
  tocopherolBeta_MilliGrams = 0;
  tocopherolDelta_MilliGrams = 0;
  tocopherolGamma_MilliGrams = 0;
  tryptophan_Grams = 0;
  tyrosine_Grams = 0;
  valine_Grams = 0;
  vitaminA_MicroGrams = 0;
  vitaminB12_MicroGrams = 0;
  vitaminB6_MilliGrams = 0;
  vitaminC_MilliGrams = 0;
  vitaminD_International = 0;
  vitaminD2_MicroGrams = 0;
  vitaminD2D3_MicroGrams = 0;
  vitaminD3_MicroGrams = 0;
  vitaminE_MilliGrams = 0;
  vitaminK_MicroGrams = 0;
  water_Grams = 0;
  zinc_MilliGrams = 0;

  constructor(spec?: INutrients) {
    if (spec) {
      const properties = Object.keys(this);
      for (const prop of properties) {
        this[prop] = spec[prop];
      }
    }
  }

  getFormConfig(builder: any): any {
    return this;
  }
}
