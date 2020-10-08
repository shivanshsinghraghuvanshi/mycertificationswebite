import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { MainComponent } from './commons/main/main.component';
import { SearchComponent } from './commons/search/search.component';
import { LoginComponent } from './commons/login/login.component';
import { CertificateRegistrationComponent } from './commons/certificate-registration/certificate-registration.component';

import awsconfig from './../aws-exports';
import Amplify, { Interactions } from 'aws-amplify';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    LoginComponent,
    CertificateRegistrationComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
