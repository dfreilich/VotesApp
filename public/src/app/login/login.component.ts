import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {FormBuilder, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.auth.login(this.loginForm.value).pipe(first()).subscribe(
      data => {
        if(data == true) {
          this.router.navigate(['/dashboard']);
        } else {
          //Todo: Have better alert system
          alert('Invalid credentials. Try again.');
        }
      },
      error => {
        console.log('invalid creds. Try again');
      });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
