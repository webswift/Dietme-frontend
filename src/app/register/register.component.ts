import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';
import { DitmeService } from '../ditme.service';
import * as myGlobals from '../global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DitmeService],
})
export class RegisterComponent implements OnInit {

  private toasterService: ToasterService;
  public base_url: any = myGlobals.base_url;
  public loginData: any = myGlobals.login_ses;
  regex: any;

  constructor(private ditmeservice: DitmeService, private router: Router, toasterService: ToasterService) {
    this.toasterService = toasterService;
    this.regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // this.setMessage();
    if (this.loginData != null) {
      window.location.href = this.base_url + 'dashboard';
    }
  }

  ngOnInit() {
  }

  onSubmitRegister(register) {
    if (register.name === '') {
      this.toasterService.pop('error', 'Required', 'Please enter name');
    } else if (register.email === '') {
      this.toasterService.pop('error', 'Required', 'Please enter email');
    } else if (register.email.length === 0 || !this.regex.test(register.email)) {
      this.toasterService.pop('error', 'Required', 'Please enter valid email');
    } else if (register.password === '') {
      this.toasterService.pop('error', 'Required', 'Please enter password');
    } else {
      this.ditmeservice.newuserregister(register).subscribe(resData => {
        if (resData.status == true) {
          this.toasterService.pop('success', 'Success', resData.message);
          setTimeout(() => {
            window.location.href = this.base_url + 'login';
          }, 2000);
        } else {
          this.toasterService.pop('error', 'Error', resData.message);
        }
      });
    }
  }

}
