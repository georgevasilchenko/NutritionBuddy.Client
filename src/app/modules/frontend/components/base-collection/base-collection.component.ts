import {BaseRepositoryService} from '../../services/base-repository.service';
import {Component, ComponentRef, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {CreateCollectionItemModel} from '../../models/create-collection-item.model';
import {ComponentFactoryService} from '../../services/component-factory.service';
import {FrontendSelectorsIds} from '../../globals/frontend-selectors-ids';
import {BaseCollectionItemComponent} from '../base-collection-item/base-collection-item.component';

@Component({
  selector: FrontendSelectorsIds.BaseCollectionSelector,
  templateUrl: './base-collection.component.html',
  styleUrls: ['./base-collection.component.less']
})
export class BaseCollectionComponent<TypeModel> {

  @ViewChild('collectionItemsContainer', {read: ViewContainerRef}) collectionItemsContainer: ViewContainerRef;
  model: TypeModel[];
  components: ComponentRef<BaseComponent<TypeModel>>[];

  constructor(public repository: BaseRepositoryService<TypeModel>,
              public factoryService: ComponentFactoryService<TypeModel, BaseComponent<TypeModel>>,
              public componentType: Type<BaseCollectionItemComponent<TypeModel>>,
              public createCollectionItemModel?: CreateCollectionItemModel) {
    this.components = [];
  }

  loadModel(): void {
    this.repository.getAll()
      .then(results => {
        this.model = results;
        this.onLoadModelComplete();
      });
  }

  destroyChildren(): void {
    if (this.components) {
      for (const component of this.components) {
        component.destroy();
      }
    }
  }

  onLoadModelComplete() {
    this.createComponents(this.model);
  }

  mapResultsToCollection(): void {

  }

  createComponents(model: TypeModel[]): void {
    this.factoryService.setRootViewContainerRef(this.collectionItemsContainer);

    for (const item of model) {
      const newComponent = this.factoryService.addDynamicComponentWithModel(item, this.componentType);
      this.components.push(newComponent);
    }
  }
}
