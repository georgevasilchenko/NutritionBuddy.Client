import {IServingInformation} from './serving-information.model';
import {IEntity} from '../../../frontend/models/entity.model';

export interface IServingInformation extends IEntity {
  quantity: number;
  unit: string;
  weightGrams: number;
}

export class ServingInformation implements IServingInformation {
  id = 0;
  quantity = 0;
  unit = '';
  weightGrams = 0;

  constructor(spec?: IServingInformation) {
    if (spec) {
      this.quantity = spec.quantity;
      this.unit = spec.unit;
      this.weightGrams = spec.weightGrams;
    }
  }
}
