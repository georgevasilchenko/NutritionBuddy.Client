import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoutingService} from '../../../services/routing.service';
import {FrontendRouteIds} from '../../../globals/frontend-route-ids';
import {IUser, User} from '../../../../nutrition-buddy/identity/models/user.model';
import {BaseComponent} from '../../base-components/base-component/base.component';
import {AlertService} from '../../../services/utility-services/alert.service';
import {UserRepositoryService} from '../../../../nutrition-buddy/identity/services/user-repository.service';
import {AppUris} from '../../../../../globals/app-uris';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent extends BaseComponent<User> implements OnInit {
  registerForm: FormGroup;
  passwordHide = true;
  secondPassword: string;

  constructor(private _formBuilder: FormBuilder,
              private _userRepositoryService: UserRepositoryService,
              private _alertService: AlertService,
              private _routingService: RoutingService) {
    super();
  }

  ngOnInit() {
    this.model = new User();

    if (AppUris.IsDev) {
      const userSpec = <IUser>{
        firstName: 'TestUser01_First',
        lastName: 'TestUser01_Last',
        userName: 'testUser01',
        email: 'hardwired.ql@gmail.com',
        password: 'QWEasd123!',
        phoneNumber: '+310000000000'
      };
      this.model = new User(userSpec);
      this.secondPassword = 'QWEasd123!';
    }

    this.registerForm = this._formBuilder.group({
      firstName: [this.model.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [this.model.lastName, [Validators.required, Validators.minLength(2)]],
      userName: [this.model.userName, [Validators.required, Validators.minLength(6)]],
      email: [this.model.email, [Validators.required, Validators.email]],
      password: [this.model.password, [Validators.required, Validators.minLength(6)]],
      secondPassword: [this.secondPassword, [Validators.required, Validators.minLength(6)]],
      phoneNumber: [this.model.phoneNumber, [
        Validators.required,
        Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
        Validators.minLength(6)]]
    });
  }

  onSubmit(form: FormGroup) {
    if (this.secondPassword !== this.model.password) {
      this._alertService.displayMessage('Passwords don\'t match');
      return;
    }
    if (form.valid) {
      this._userRepositoryService.register(this.model)
        .then(newUserId => {
            if (newUserId) {
              this._alertService.displayMessage('Confirmation email was sent to: ' + this.model.email);
              this._routingService.navigateTo(FrontendRouteIds.Login);
            }
          }
        );
    }
  }

  onLoginClick(): void {
    this._routingService.navigateTo(FrontendRouteIds.Login);
  }
}
