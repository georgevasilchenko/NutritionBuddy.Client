export interface IEntity {
  id: number;
}

export interface IFormConfigurable {
  getFormConfig(builder: any): any;
}
