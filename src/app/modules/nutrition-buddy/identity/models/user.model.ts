import {FileImage, IFileImage} from '../../../frontend/models/file-image.model';

export interface IUser {
  id: string;
  userName: string;
  token: string;
  tokenExpirationDate: Date;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  userImage: IFileImage;
}

export class User implements IUser {
  id: string;
  userName: string;
  token: string;
  tokenExpirationDate: Date;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  userImage: FileImage;

  constructor(spec: IUser) {

    if (spec) {
      this.id = spec.id;
      this.userName = spec.userName;
      this.token = spec.token;
      this.tokenExpirationDate = spec.tokenExpirationDate;
      this.firstName = spec.firstName;
      this.lastName = spec.lastName;
      this.email = spec.email;
      this.phoneNumber = spec.phoneNumber;
      this.password = spec.password;

      if (spec.userImage) {
        this.userImage = new FileImage(spec.userImage);
      }
    }
  }
}

export class UserLogin {
  constructor(public email: string,
              public password: string) {
  }
}

