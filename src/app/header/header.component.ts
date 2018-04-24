import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public base_url: any = myGlobals.base_url;
  public loginData: any = myGlobals.login_ses;
  public useremail: any = myGlobals.useremail;

  constructor(private router: Router) {
  }
  
  ngOnInit() {
    if (this.loginData == null) {
      window.location.href = this.base_url + 'login';
    }
  }

  destroyUser() {
    localStorage.clear();
    location.href = this.base_url +'login';
  }

}
