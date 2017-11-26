import {Injectable} from '@angular/core';

@Injectable()
export class ObjectUtilityService {

  constructor() {
  }

  static generateObjectFromProperties(properties: string[]): any {
    const newObject = {};
    for (const prop of properties) {
      newObject[prop] = undefined;
    }
    return newObject;
  }


  static combineObjectsInOne(source: any[]) {

    const newObject = {};

    for (const obj of source) {
      const objProperties = Object.keys(obj);
      for (const prop of objProperties) {
        newObject[prop] = obj[prop];
      }
    }

    return newObject;
  }

  static addPropertyToObject(target: any, source: any, sourceKey: string): any {
    target[sourceKey] = source[sourceKey];
    return target;
  }

  static getPropertiesOfObject(source: any): string[] {
    return Object.keys(source);
  }

  static map(source: any): any {

    const target = {};

    const targetProps = Object.keys(target);
    const sourceProps = Object.keys(source);

    if (targetProps.length !== sourceProps.length) {
      throw new Error('Source properties length is not equal to target properties length.');
    }

    for (const trgProp of targetProps) {
      target[trgProp] = source[trgProp];
    }

    return target;
  }
}
