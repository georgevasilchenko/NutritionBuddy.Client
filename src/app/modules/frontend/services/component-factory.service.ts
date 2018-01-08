import {ComponentFactoryResolver, ComponentRef, Inject, Injectable, Type, ViewContainerRef} from '@angular/core';
import {BaseCollectionItemComponent} from '../components/base-components/base-collection-item/base-collection-item.component';

@Injectable()
export class ComponentFactoryService<TypeModel, TypeCollectionItem extends BaseCollectionItemComponent<TypeModel>> {

  rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) private _factoryResolver: ComponentFactoryResolver) {
  }

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponentWithModel(model: TypeModel, componentType: Type<TypeCollectionItem>): ComponentRef<TypeCollectionItem> {
    const factory = this._factoryResolver.resolveComponentFactory(componentType);
    const component = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);
    component.instance.model = model;

    return component;
  }

  addDynamicComponentWithExtendedModel(model: any, componentType: Type<TypeCollectionItem>): ComponentRef<TypeCollectionItem> {
    const factory = this._factoryResolver.resolveComponentFactory(componentType);
    const component = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(component.hostView);

    const sourceModelProps = Object.keys(model);
    for (const srcProp of sourceModelProps) {
      component.instance[srcProp] = model[srcProp];
    }

    return component;
  }
}
