import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { TokenPayload, AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  msg: string = null;
  registerForm: FormGroup;
  submitted = false;

  credentials: TokenPayload = {
    id: 0,
    name: "",
    email: "",
    username: "",
    password: ""
  };


  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private auth: AuthenticationService, private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
        this.msg = 'success';
      },
      err => {
        console.error(err);
      }
    );
  }
}