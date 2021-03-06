import {BaseRepositoryService} from '../../../services/base-services/base-repository.service';
import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {ComponentFactoryService} from '../../../services/component-factory.service';
import {FrontendSelectorsIds} from '../../../globals/frontend-selectors-ids';

@Component({
  selector: FrontendSelectorsIds.BaseCollectionSelector,
  templateUrl: './base-collection.component.html',
  styleUrls: ['./base-collection.component.less']
})
export class BaseCollectionComponent<TypeModel> extends BaseComponent<TypeModel[]> {

  @ViewChild('collectionItemsContainer', {read: ViewContainerRef}) collectionItemsContainer: ViewContainerRef;
  model: TypeModel[];
  components: ComponentRef<BaseComponent<TypeModel>>[];

  constructor(public repository: BaseRepositoryService<TypeModel>,
              public factoryService: ComponentFactoryService<TypeModel, BaseComponent<TypeModel>>) {
    super();
    this.actions = [];
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

  }

  mapResultsToCollection(): void {

  }

  createComponents(model: TypeModel[], type: any, extraData?: any): void {
    this.factoryService.setRootViewContainerRef(this.collectionItemsContainer);

    for (const item of model) {
      const newComponent = this.factoryService.addDynamicComponentWithModel(item, type);
      this.components.push(newComponent);
    }
  }
}
