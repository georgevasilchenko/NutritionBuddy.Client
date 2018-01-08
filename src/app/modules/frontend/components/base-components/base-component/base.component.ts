import {IBaseAction} from '../../../models/base-action.model';

export abstract class BaseComponent<TypeModel> {
  actions: IBaseAction[];
  model: TypeModel;

  createActions(): void {

  }

  destroyActions(): void {

  }
}
