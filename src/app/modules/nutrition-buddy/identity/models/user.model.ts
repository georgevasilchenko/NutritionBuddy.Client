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
  emailConfirmed: boolean;
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
  emailConfirmed: boolean;

  constructor(spec?: IUser) {

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
      this.emailConfirmed = spec.emailConfirmed;

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

export class UserEmailConfirmation {
  constructor(public email: string) {

  }
}

export class UserEmailConfirmationStatusRequest {
  constructor(public email: string) {

  }
}

export class UserEmailResendConfirmationRequest {
  constructor(public email: string) {

  }
}

export enum EmailConfirmationStatus {
  None = 0,
  Confirmed = 1,
  NotConfirmed = 2
}

export class UserEmailConfirmationStatusResponse {
  constructor(public emailConfirmationStatus: EmailConfirmationStatus) {

  }
}

export interface IUserNewPassword {
  email: string;
  password: string;
  token: string;
}

export class UserNewPassword {
  email: string;
  password: string;
  token: string;

  constructor(spec?: any) {

    if (spec) {
      this.email = spec.email;
      this.password = spec.password;
      this.token = spec.token;
    }
  }
}
