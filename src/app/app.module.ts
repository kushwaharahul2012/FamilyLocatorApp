import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularMaterialModule } from './material.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    ProfileComponent,
    HomeComponent,
    ReactiveFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    AngularMaterialModule
   
  ],
  providers: [AuthenticationService,  AuthGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
