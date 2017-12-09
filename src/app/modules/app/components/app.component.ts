import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../frontend/services/alert.service';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {ActiveStateService} from '../../frontend/services/active-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private _alertService: AlertService,
              private _activeStateService: ActiveStateService,
              private _router: Router) {
  }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getDeepestTitle(this._router.routerState.snapshot.root);
        this._activeStateService.setState(title);
      }
    });
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
}
