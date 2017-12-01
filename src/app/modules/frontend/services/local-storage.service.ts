import {Injectable} from '@angular/core';
import {User} from '../../nutrition-buddy/identity/models/user.model';

@Injectable()
export class LocalStorageService {

  public __FOOD_KEY = 'food';
  public __SRCH_FOOD_KEY = 'food-search-result';
  public __PROD_KEY = 'product';

  private __API_KEY = 'apiKey';
  private __API_KEY_EXP = 'apiKey_validTo';
  private __USR_KEY = 'user';


  constructor() {
  }

  hasKey(key: string) {
    const result = localStorage.getItem(key);
    return result !== undefined && result !== null;
  }

  addValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getValue(key: string): string {
    return localStorage.getItem(key);
  }

  removeKey(key: string): void {
    localStorage.removeItem(key);
  }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem(this.__USR_KEY));
    return user;
  }

  setUser(user: User): void {
    const userString = JSON.stringify(user);
    localStorage.setItem(this.__USR_KEY, userString);
  }

  removeUser(): void {
    localStorage.removeItem(this.__USR_KEY);
  }

  getTokenIsValid(): boolean {
    const token = this.getToken();
    const exp = this.getTokenExpirationDate();

    if (!token || !exp) {
      return false;
    } else if (exp < new Date()) {
      return false;
    }
    return true;
  }

  getToken(): string {
    const value = localStorage.getItem(this.__API_KEY);
    return value;
  }

  setToken(token: string): void {
    localStorage.setItem(this.__API_KEY, token);
  }

  destroyToken(): void {
    localStorage.removeItem(this.__API_KEY);
    localStorage.removeItem(this.__API_KEY_EXP);
  }

  getTokenExpirationDate(): Date {
    const value = localStorage.getItem(this.__API_KEY_EXP);
    return new Date(value);
  }

  setTokenExpirationDate(tokenExpirationDate: Date): void {
    localStorage.setItem(this.__API_KEY_EXP, tokenExpirationDate.toString());
  }
}
