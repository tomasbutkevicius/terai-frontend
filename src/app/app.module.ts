import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ApplicantTableComponent } from './applicant-table/applicant-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationFormComponent,
    CopyrightComponent,
    ApplicantTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
