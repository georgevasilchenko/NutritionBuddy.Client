import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {FileImage} from '../../models/file-image.model';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: FrontendSelectorsIds.FileImageSelector,
  templateUrl: './file-image.component.html',
  styleUrls: ['./file-image.component.less']
})
export class FileImageComponent extends BaseComponent<FileImage> implements OnInit {

  @ViewChild('fileSelector')
  fileInput: ElementRef;

  @Output()
  onFileDialogFileChanged: EventEmitter<FileImage> = new EventEmitter<FileImage>();

  @Input()
  model: FileImage;

  @Input()
  imageId;

  @Input()
  altImageSource = 'assets/images/placeholders/food-image-placeholder.png';

  constructor(private _alertService: AlertService) {
    super();
  }

  ngOnInit() {

  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  onFileDialogFileChange(event: any) {
    const that = this;

    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      const fileSizeKB = Math.round(file.size / 1024);

      if (fileSizeKB > 200) {
        this._alertService.displayMessage('Maximum image size is 200KB, your image is ' + fileSizeKB + 'KB');
        return;
      }

      reader.onload = function (e: any) {

        that.model = new FileImage();
        that.model.decryptImageString(e.target.result);
        that.model.fileName = file.name;

        that.onFileDialogFileChanged.emit(that.model);
      };

      reader.readAsDataURL(file);
    }
  }

}
