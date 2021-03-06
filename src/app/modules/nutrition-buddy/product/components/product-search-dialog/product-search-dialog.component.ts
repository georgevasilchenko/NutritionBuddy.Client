import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductSelectorsIds} from '../../globals/product-selectors-ids';
import {AlertService} from '../../../../frontend/services/utility-services/alert.service';
import {ProductRepositoryService} from '../../services/product-repository.service';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {BaseComponent} from '../../../../frontend/components/base-components/base-component/base.component';
import {ComponentFactoryService} from '../../../../frontend/services/component-factory.service';
import {Product} from '../../models/product.model';
import {IconsNames} from '../../../../../globals/icons-names';
import {HeaderActionItem} from '../../../../frontend/models/header-action-item.model';
import {DialogResult} from '../../../../frontend/models/dialog-result.model';
import {BaseCollectionComponent} from '../../../../frontend/components/base-components/base-collection/base-collection.component';
import {ProductSearchQuery} from '../../models/product-search.model';
import {ProductSearchListItemComponent} from '../product-search-list-item/product-search-list-item.component';
import {IProductSearchTableData, ProductSearchTableData} from '../../models/product-search-table-data.model';
import {IProductSearchTableElement, ProductSearchTableElement} from '../../models/product-search-table-element.model';
import {DataService} from '../../../services/data.service';
import {FileImage} from '../../../../frontend/models/file-image.model';
import {LocalStorageService} from '../../../../frontend/services/local-storage.service';

@Component({
  selector: ProductSelectorsIds.ProductSearchDialogSelector,
  templateUrl: './product-search-dialog.component.html',
  styleUrls: ['./product-search-dialog.component.less']
})
export class ProductSearchDialogComponent extends BaseCollectionComponent<Product> implements OnInit, OnDestroy {

  tableData: ProductSearchTableData;
  blackList: string[] = [];
  searchQuery: string;
  wereProductsSaved = false;

  constructor(public dialogRef: MatDialogRef<ProductSearchDialogComponent>,
              protected _productRepositoryService: ProductRepositoryService,
              protected _productService: ProductRepositoryService,
              protected _dataService: DataService,
              protected _localStorageService: LocalStorageService,
              protected _factoryService: ComponentFactoryService<Product, BaseComponent<Product>>,
              private _alertService: AlertService) {
    super(_productRepositoryService, _factoryService);
  }

  ngOnInit() {
    this.createActions();
  }

  ngOnDestroy() {
    this.destroyActions();
    this.destroyChildren();
  }

  createActions() {
    this.actions.push(
      new HeaderActionItem(
        IconsNames.Cancel,
        'Cancel',
        undefined,
        () => {
          this.onCancelClick();
        }
      )
    );
  }

  search(): void {
    if (this.searchQuery) {
      this._productService.search(new ProductSearchQuery(this.searchQuery))
        .then(result => {
          this.model = result;
          // this.destroyChildren();
          // this.createComponents(result);
          this.modelToTable(this.model);
        });
    } else {
      // this.destroyChildren();
    }
  }

  destroyActions(): void {
    this.actions = [];
  }

  onCancelClick(): void {
    this.dialogRef.close(new DialogResult(this.wereProductsSaved));
  }

  modelToTable(model: Product[]): void {
    if (model && model.length > 0) {
      const tableSource = [];
      const tableColumns = ['image', 'quantity', 'unit', 'name', 'calories', 'weight', 'actions'];
      for (const item of model) {

        if (this.blackList.find((e) => e === item.productInformation.productName) !== undefined) {
          continue;
        }

        const tableElementSpec = <IProductSearchTableElement>{
          image: item.productInformation.imageUriThumb,
          quantity: +item.servingInformation.quantity,
          unit: item.servingInformation.unit,
          name: item.productInformation.productName,
          calories: +item.nutritionFacts.calories,
          weight: +item.servingInformation.weightGrams,
          actions: [
            new HeaderActionItem(
              IconsNames.AddBox,
              'Save',
              undefined,
              () => this.onTableActionAddClick(item))
          ]
        };
        tableSource.push(new ProductSearchTableElement(tableElementSpec));
      }
      const tableDataSpec = <IProductSearchTableData>{
        columns: tableColumns,
        source: new MatTableDataSource<ProductSearchTableElement>(tableSource)
      };
      this.tableData = tableDataSpec.source.data.length > 0 ? new ProductSearchTableData(tableDataSpec) : undefined;
    } else {
      this.tableData = undefined;
    }
  }

  createComponents(model: Product[]): void {
    this._factoryService.setRootViewContainerRef(this.collectionItemsContainer);

    for (const item of model) {
      const newComponent = this.factoryService.addDynamicComponentWithExtendedModel({
        model: item,
      }, ProductSearchListItemComponent);
      this.components.push(newComponent);
    }
  }

  onTableActionAddClick(model: Product): void {
    this._dataService.getImageData(model.productInformation.imageUriThumb)
      .then((result: FileImage) => {
        model.productImage = result;
        model.applicationUserId = this._localStorageService.getUser().id;

        this._productRepositoryService.create(model)
          .then((e) => {
            this.wereProductsSaved = true;
            this.removeResultItem(model);
            this._alertService.displayMessage('Saved: ' + model.productInformation.productName);
          })
          .catch((e) => {
          });
      });
  }

  removeResultItem(model: Product) {
    const targetName = model.productInformation.productName;
    if (this.model.length > 0) {
      for (const item of this.model) {
        if (item.productInformation.productName === targetName) {
          const targetIndex = this.model.indexOf(model);
          this.model.splice(targetIndex, 1);
          this.modelToTable(this.model);
          this.blackList.push(targetName);
        }
      }
    }
  }
}
