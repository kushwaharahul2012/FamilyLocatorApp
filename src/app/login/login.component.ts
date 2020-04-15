import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  angForm1: FormGroup;
  validEmail:boolean = false

  credentials: TokenPayload = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: ""
  };



  constructor(private auth: AuthenticationService, private router: Router,private formBuilder: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm1 = this.formBuilder.group({
     
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });


    

  }


  onChange(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }

  }
  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}
