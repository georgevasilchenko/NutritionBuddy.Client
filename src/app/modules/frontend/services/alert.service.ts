import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AlertPopupComponent} from '../components/alert-popup/alert-popup.component';
import {AlertSnackbarData} from '../models/alert-snackbar-data.model';

@Injectable()
export class AlertService {

  constructor(private _snackBar: MatSnackBar) {
  }

  displayMessage(message: string) {
    this._snackBar.openFromComponent(AlertPopupComponent, {duration: 5000, data: new AlertSnackbarData(message)});
    console.log(message);
  }
}
