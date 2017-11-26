export interface IMacroTotals {
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

export class MacroTotals implements IMacroTotals {
  calories = 0;
  carbohydrates = 0;
  fats = 0;
  proteins = 0;

  constructor(spec?: IMacroTotals) {
    if (spec) {
      this.calories = spec.calories;
      this.carbohydrates = spec.carbohydrates;
      this.fats = spec.fats;
      this.proteins = spec.proteins;
    }
  }
}
