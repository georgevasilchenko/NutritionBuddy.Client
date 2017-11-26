import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable()
export class BaseFormConfigService<TypeModel> {

  constructor(protected formBuilder: FormBuilder) {

  }

  generateForm<TypeModel>(model: TypeModel): any {
    throw new Error('Not implemented');
  }

}
