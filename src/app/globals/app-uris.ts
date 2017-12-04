export class AppUris {
  static IsDev = false;
  static ProdUri = 'http://nutrition-buddy-api.azurewebsites.net/';
  static DevUri = 'http://localhost:5000/';
  static RootUri = AppUris.IsDev ? AppUris.DevUri : AppUris.ProdUri;

  // Data
  static ImageDataGet = (uri: string) => {
    return AppUris.RootUri + 'api/data/getimagedata?uri=' + uri;
  }

  // Product
  static ProductGetAll = AppUris.RootUri + 'api/product/getall';
  static ProductCreate = AppUris.RootUri + 'api/product/create';
  static ProductUpdate = AppUris.RootUri + 'api/product/update';
  static ProductDelete = AppUris.RootUri + 'api/product/delete';
  static ProductSearch = AppUris.RootUri + 'api/product/search';
  static ProductGeById = (id: number) => {
    return AppUris.RootUri + 'api/product/getbyid?id=' + id;
  }

  // Identity
  static UserAuthenticate = AppUris.RootUri + 'api/account/authenticate';
  static UserGetAll = AppUris.RootUri + 'api/account/getall';
  static UserCreate = AppUris.RootUri + 'api/account/register';
  static UserUpdate = AppUris.RootUri + 'api/account/update';
  static UserDelete = AppUris.RootUri + 'api/account/delete';
  static UserUploadImage = AppUris.RootUri + 'api/account/setuserimage';
  static UserDownloadImage = (id: string) => {
    return AppUris.RootUri + 'api/account/getuserimagestring?id=' + id;
  }
  static UserGeById = (id: string) => {
    return AppUris.RootUri + 'api/account/getbyid?id=' + id;
  }
}
