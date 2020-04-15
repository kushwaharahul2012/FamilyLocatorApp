import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import {  AuthGuardService } from './auth-guard.service'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 
  { path: 'reactive-form', component: ReactiveFormComponent },

 
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
