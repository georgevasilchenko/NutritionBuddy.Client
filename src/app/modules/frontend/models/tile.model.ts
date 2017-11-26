export class Tile {

  constructor(public tileText: string,
              public tileIconSelectorText: string,
              public tileNavigationPath: string,
              public tileColor: string,
              public callback?: Function) {
    if (tileNavigationPath === undefined) {
      this.tileNavigationPath = './';
    }
  }
}
