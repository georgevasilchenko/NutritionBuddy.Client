export class AppUris {
  static Debug = true;
  static DevUri = 'http://dev.nutritionbuddy.com/';
  static DbgUri = 'http://localhost:5000/';
  static RootUri = AppUris.Debug ? AppUris.DbgUri : AppUris.DevUri;

  // Product
  static ProductGetAll = AppUris.RootUri + 'api/product/getall';
  static ProductCreate = AppUris.RootUri + 'api/product/create';
  static ProductUpdate = AppUris.RootUri + 'api/product/update';
  static ProductDelete = AppUris.RootUri + 'api/product/delete';
  static ProductSearch = AppUris.RootUri + 'api/product/search';
  static ProductGeById = (id: number) => {
    return AppUris.RootUri + 'api/product/getbyid?id=' + id;
  }

  // Food
  static FoodGetAll = AppUris.RootUri + 'api/food/getall';
  static FoodCreate = AppUris.RootUri + 'api/food/create';
  static FoodUpdate = AppUris.RootUri + 'api/food/update';
  static FoodDelete = AppUris.RootUri + 'api/food/delete';
  static FoodSearch = AppUris.RootUri + 'api/food/search';
  static FoodGetById = (id: number) => {
    return AppUris.RootUri + 'api/food/getbyid?id=' + id;
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
