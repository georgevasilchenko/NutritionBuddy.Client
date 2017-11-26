import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../frontend/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private _alertService: AlertService) {

  }

  ngOnInit(): void {
    //this._alertService.displayMessage('test1');
  }

  ngOnDestroy(): void {
  }
}
