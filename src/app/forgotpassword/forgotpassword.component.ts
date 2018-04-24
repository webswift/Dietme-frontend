import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';
import { DitmeService } from '../ditme.service';
import * as myGlobals from '../global';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers: [DitmeService],
})
export class ForgotpasswordComponent implements OnInit {

  private toasterService: ToasterService;
  public base_url: any = myGlobals.base_url;
  public loginData: any = myGlobals.login_ses;
  message: string;
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

  onSubmitforgotpassword(forgot) {
    /* if (forgot.email === '' || forgot.email === undefined) {
      this.toasterService.pop('error', 'Required', 'Please enter email');
    } else {
      this.ditmeservice.forgotpassword(forgot.email).subscribe(resData => {
        // tslint:disable-next-line:triple-equals
        if (resData.status == true) {
          this.toasterService.pop('success', 'Success', resData.message);
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          this.toasterService.pop('error', 'Error', resData.message);
        }
      });
    } */
  }

}
