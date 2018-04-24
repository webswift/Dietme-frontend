import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatientsComponent } from './patients/patients.component';

import { registerLocaleData } from '@angular/common';
import localeit from '@angular/common/locales/it';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {PatientsService} from './patients/patients.service';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



registerLocaleData(localeit);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    SettingsComponent,
    PatientsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'it' }, AuthService, AuthGuard,PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
