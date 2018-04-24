import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  title = 'app';
  showHeader: any;
  private toasterService: ToasterService;

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      timeout: 2000
    });

  constructor(public authService: AuthService, private router: Router, toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    // listenging to routing navigation event
    this.router.events.subscribe(event => this.modifyHeader(event));
  }

  modifyHeader(location) {
    if (location.url === '/login' || location.url === '/register' || location.url === '/forgotpassword' || location.url === undefined) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
