import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: FrontendSelectorsIds.AlertModalSelector,
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less']
})
export class AlertModalComponent implements OnInit, OnDestroy {

  @ViewChild('modalToggle') modalToggle: ElementRef;
  @ViewChild('modalDialog') modalDialog: ElementRef;

  modalSubscription: ISubscription;

  constructor(public alertService: AlertService) {
  }

  ngOnInit(): void {
    // this.modalSubscription = this.alertService.onShownEvent
    //   .subscribe((value) => {
    //     const display = window.getComputedStyle(this.modalDialog.nativeElement).getPropertyValue('display');
    //     if (value && display === 'none') {
    //       this.modalToggle.nativeElement.click();
    //     } else if (!value && display === 'block') {
    //       this.modalToggle.nativeElement.click();
    //     }
    //   });
  }

  closeDialog() {
    this.modalToggle.nativeElement.click();
  }

  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }
}
