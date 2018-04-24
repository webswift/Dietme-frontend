import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';
import { DitmeService } from './ditme.service';
import * as myGlobals from './global';

@Component({
  templateUrl: './login.component.html',
  providers: [DitmeService],
})
export class LoginComponent {

  private toasterService: ToasterService;
  public base_url: any = myGlobals.base_url;
  public loginData: any = myGlobals.login_ses;
  message: string;
  regex: any;
  /* login = {
    email: '',
    password: '',
  }; */

  constructor(public authService: AuthService, private ditmeservice: DitmeService, private router: Router, toasterService: ToasterService) {
    this.toasterService = toasterService;
    this.regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // this.setMessage();
    if (this.loginData != null) {
      window.location.href = this.base_url + 'dashboard';
    }
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  /* login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Redirect the user
        window.location.href=redirect;
        //this.router.navigate([redirect]);
      }
    });
  } */

  onSubmitLogin(login) {
    if (login.email === '') {
      this.toasterService.pop('error', 'Required', 'Please enter email');
    } else if (login.email.length === 0 || !this.regex.test(login.email)) {
      this.toasterService.pop('error', 'Required', 'Please enter valid email');
    } else if (login.password === '') {
      this.toasterService.pop('error', 'Required', 'Please enter password');
    } else {
      this.ditmeservice.loginuserdata(login).subscribe(resData => {
        if (resData.status === true) {
          this.toasterService.pop('success', 'Success', resData.message);
          localStorage.setItem('login_ses', resData.status);
          localStorage.setItem('id', resData.data.id);
          localStorage.setItem('email', resData.data.email);
          localStorage.setItem('name', resData.data.name);
          localStorage.setItem('role', resData.data.role);
          localStorage.setItem('usertype', resData.data.usertype);
          localStorage.setItem('status', resData.data.status);
          localStorage.setItem('token', resData.data.token);
          setTimeout(() => {
            window.location.href = this.base_url + 'dashboard';
          }, 1000);
        } else {
          this.toasterService.pop('error', 'Error', resData.message);
        }
      });
    }
  }

  /* logout() {
    this.authService.logout();
    this.setMessage();
  } */

  destroyUser() {
    localStorage.clear();
    location.href = this.base_url + '/login';
  }
}
