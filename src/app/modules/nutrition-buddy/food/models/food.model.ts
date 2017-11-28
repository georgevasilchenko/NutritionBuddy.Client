import {IEntity} from '../../../frontend/models/entity.model';
import {IServing, Serving} from './serving.model';
import {FileImage, IFileImage} from '../../../frontend/models/file-image.model';

export interface IFood extends IEntity {
  id: number;
  description: string;
  name: string;
  type: string;
  url: string;
  serving: IServing;
  foodImage: IFileImage;
}

export class Food implements IFood {
  id: number;
  description: string;
  name: string;
  type: string;
  url: string;
  serving: Serving;
  foodImage: FileImage;

  constructor(spec?: IFood) {

    this.foodImage = new FileImage();

    if (spec) {
      this.id = spec.id >= 0 ? spec.id : 0;
      this.description = spec.description;
      this.name = spec.name;
      this.type = spec.type;
      this.url = spec.url;
      this.serving = spec.serving ? new Serving(spec.serving) : new Serving();
      if (spec.foodImage) {
        this.foodImage = new FileImage(spec.foodImage);
      }
    }
  }
}
