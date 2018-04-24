import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = true;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(){
    // this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  }

  login(): Observable<boolean> {
    localStorage.setItem('isLoggedIn', "true");
    this.isLoggedIn = true
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
