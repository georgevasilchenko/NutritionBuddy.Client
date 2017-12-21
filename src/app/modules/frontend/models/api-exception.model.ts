export interface IApiException {
  message: string;
  apiErrors: ApiError[];
  statusCode: number;
}

export class ApiException implements IApiException {
  message: string;
  apiErrors: ApiError[];
  statusCode: number;

  constructor(spec?: IApiException) {
    if (spec) {
      this.message = spec.message;
      this.apiErrors = spec.apiErrors;
      this.statusCode = spec.statusCode;
    }
  }

  getMessages(): string {
    let result = this.message;
    if (this.apiErrors && this.apiErrors.length > 0) {
      for (const error of this.apiErrors) {
        result += '\n' + error.message;
      }
    }
    return result;
  }
}

export class ApiError {
  message: string;
  details: string;
}
