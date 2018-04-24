import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as myGlobals from './global';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class DitmeService {

  api_url: any = myGlobals.api_url;

  loginAPI: any = myGlobals.loginAPI;
  registerAPI: any = myGlobals.registerAPI;
  forgotpasswordAPI: any = myGlobals.forgotpasswordAPI;

  userid: any = localStorage.getItem('id');
  useremail: any = localStorage.getItem('email');
  token: any = localStorage.getItem('token');

  constructor(private http: Http) { }

  loginuserdata(login) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('email', login.email);
    form.append('password', login.password);

    return this.http.post(this.api_url + this.loginAPI, form, options)
      .map((response: Response) => response.json());
  }

  newuserregister(register) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('name', register.name);
    form.append('email', register.email);
    form.append('password', register.password);
    form.append('usertype', '1');

    return this.http.post(this.api_url + this.registerAPI, form, options)
      .map((response: Response) => response.json());
  }

  forgotpassword(email) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const form = new URLSearchParams();
    form.append('email', email);

    return this.http.post(this.api_url + this.forgotpasswordAPI, form, options)
      .map((response: Response) => response.json());
  }

}
