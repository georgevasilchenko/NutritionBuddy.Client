import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductFormConfigService} from '../../services/product-form-config.service';
import {BaseEditComponent} from '../../../../frontend/components/base-edit/base-edit.component';
import {FormGroup} from '@angular/forms';
import {IProduct, Product} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';
import {FileImage} from '../../../../frontend/models/file-image.model';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {ProductRouteIds} from '../../globals/product-route-ids';
import {RoutingService} from '../../../../frontend/services/routing.service';
import {MatDialogRef} from '@angular/material';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {HeaderActionItem} from '../../../../frontend/models/header-action-item.model';
import {IconsNames} from '../../../../../globals/icons-names';
import {DialogResult} from '../../../../frontend/models/dialog-result.model';
import {AlertService} from '../../../../frontend/services/alert.service';

@Component({
  selector: ProductSelectorsIds.ProductEditDialogSelector,
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.less']
})
export class ProductEditDialogComponent extends BaseEditComponent<Product> implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<ProductEditDialogComponent>,
              protected _productFormConfigService: ProductFormConfigService,
              protected _productRepositoryService: ProductRepositoryService,
              protected _route: ActivatedRoute,
              protected _routingService: RoutingService,
              protected _localStorageService: LocalStorageService,
              private _alertService: AlertService) {
    super(_productRepositoryService, _route);
  }

  ngOnInit() {
    this.loadModel();
    this.createActions();
  }

  createActions() {
    this.actions.push(
      new HeaderActionItem(
        IconsNames.Done,
        'Done',
        undefined,
        () => {
          this.onDoneClick(this.form);
        }
      ),
      new HeaderActionItem(
        IconsNames.Cancel,
        'Cancel',
        undefined,
        () => {
          this.onCancelClick();
        }
      )
    );

    if (!this.isCreate) {
      this.actions.splice(1, 0, new HeaderActionItem(
        IconsNames.Delete,
        'Delete',
        undefined,
        () => {
          this.onDeleteClick();
        })
      );
    }
  }

  destroyActions(): void {
    this.actions = [];
  }

  loadModel() {
    // const id = this._route.snapshot.paramMap.get('id');
    // if (id) {
    //   const that = this;
    //   this._productRepositoryService.getById(+id)
    //     .then(result => {
    //       that.model = new Product(result);
    //       that.onLoadModelComplete();
    //     });
    // } else if (this._localStorageService.hasKey(this._localStorageService.__PROD_KEY)) {
    //   this.isCreate = true;
    //   const modelMessage = JSON.parse(this._localStorageService.getValue(this._localStorageService.__PROD_KEY));
    //   const productSpec = <IProduct>modelMessage;
    //   this.model = new Product(productSpec);
    //   this._localStorageService.removeKey(this._localStorageService.__PROD_KEY);
    //   this.onLoadModelComplete();
    // } else {
    //   this.isCreate = true;
    //   this.model = new Product();
    //   this.model.productImage.setDefaultData();
    //   this.onLoadModelComplete();
    // }

    if (this._localStorageService.hasKey(this._localStorageService.__PROD_KEY)) {
      this.isCreate = false;
      const modelMessage = JSON.parse(this._localStorageService.getValue(this._localStorageService.__PROD_KEY));
      const productSpec = <IProduct>modelMessage;
      this.model = new Product(productSpec);
      this._localStorageService.removeKey(this._localStorageService.__PROD_KEY);
      this.onLoadModelComplete();
    } else {
      this.isCreate = true;
      this.model = new Product();
      this.model.productImage.setDefaultData();
      this.onLoadModelComplete();
    }
  }

  onFileImageFileChanged(event: FileImage): void {
    this.model.productImage = event;
    this.form.markAsDirty();
  }

  onLoadModelComplete() {
    this.model = new Product(this.model);
    this.form = this._productFormConfigService.generateForm(this.model);
  }

  onSubmit(form: FormGroup) {

    if (this.isCreate) {
      if (!form.valid) {
        return;
      }
    } else if (!this.isCreate) {
      if (!(form.valid && form.dirty)) {
        return;
      }
    }

    this.applyChangedModel(form.value);

    if (this.isCreate) {
      this._productRepositoryService.create(this.model)
        .then((e) => {
          this._alertService.displayMessage('Saved: ' + this.model.uniqueName);
          this.dialogRef.close(new DialogResult(true));
        })
        .catch((e) => {
          this.dialogRef.close(new DialogResult(false));
        });
    } else {
      this._productRepositoryService.update(this.model)
        .then((e) => {
          this._alertService.displayMessage('Saved changes for: ' + this.model.uniqueName);
          this.dialogRef.close(new DialogResult(true));
        })
        .catch((e) => {
          this.dialogRef.close(new DialogResult(false));
        });
    }
  }

  onDelete(): void {
    this._productRepositoryService.delete(this.model)
      .then(() => this._routingService.navigateTo(ProductRouteIds.ProductCollection))
      .catch((e) => console.log(e));
  }

  applyChangedModel(formValue: any) {
    this.model.uniqueName = formValue.uniqueName;
    this.model.servingInformation = formValue.servingInformation;
    this.model.productInformation = formValue.productInformation;
    this.model.nutritionFacts = formValue.nutritionFacts;
  }

  onDoneClick(form: FormGroup): void {
    this.onSubmit(form);
  }

  onCancelClick(): void {
    this.dialogRef.close(new DialogResult(false));
  }

  onDeleteClick(): void {
    this._productRepositoryService.delete(this.model)
      .then((e) => {
        this._alertService.displayMessage('Deleted: ' + this.model.uniqueName);
        this.dialogRef.close(new DialogResult(true));
      })
      .catch((e) => {
        this.dialogRef.close(new DialogResult(false));
      });
  }

  ngOnDestroy(): void {
    this.destroyActions();
  }
}
