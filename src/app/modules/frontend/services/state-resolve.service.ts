import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ActiveStateService} from './active-state.service';

@Injectable()
export class StateResolveService implements Resolve<string> {

  constructor(private _stateService: ActiveStateService) {
  }

  resolve(route: ActivatedRouteSnapshot): string {
    // const state: string = route.data['title'];
    // this._stateService.setState(state);
    // console.log(route.data);
    return '';
  }
}
