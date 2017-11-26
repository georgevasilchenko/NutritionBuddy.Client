import {Component} from '@angular/core';
import {BaseComponent} from '../base-component/base.component';
import {BaseRepositoryService} from '../../services/base-repository.service';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export class BaseEditComponent<TypeModel> extends BaseComponent<TypeModel> {
  form: FormGroup;
  isCreate = false;

  constructor(protected _repositoryService: BaseRepositoryService<TypeModel>,
              protected _route: ActivatedRoute) {
    super();
  }

  loadModel() {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      const that = this;
      this._repositoryService.getById(id)
        .then(result => {
          that.model = result;
          that.onLoadModelComplete();
        });
    }
  }

  onLoadModelComplete() {
  }

  onSubmit(form: FormGroup) {
  }

  onDelete(): void {
  }

  applyChangedModel(formValue: any) {
  }
}
