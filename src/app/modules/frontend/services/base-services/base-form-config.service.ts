import {Injectable} from '@angular/core';

@Injectable()
export class BaseFormConfigService<TypeModel> {

  constructor() {

  }

  generateForm(model: TypeModel): any {
    throw new Error('Not implemented');
  }
}
