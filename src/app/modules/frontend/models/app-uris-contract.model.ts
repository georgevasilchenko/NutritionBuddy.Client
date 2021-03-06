export interface IAppUris {
  getAllUri: string;
  getByIdUri: (id: any) => string;
  createUri: string;
  updateUri: string;
  deleteUri: string;
}

export class AppUrisCollection implements IAppUris {
  getAllUri: string;
  getByIdUri: (id: any) => string;
  createUri: string;
  updateUri: string;
  deleteUri: string;
}
