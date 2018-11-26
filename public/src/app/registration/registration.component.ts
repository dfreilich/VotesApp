import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  url = '/register-to-vote';
  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  registrationForm = this.formBuilder.group({
    name: ['', Validators.required],
    dob: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.registrationForm.invalid) {
      console.log('invalid');
      return;
    }

    console.log('hi');
    this.auth.createAccount(this.registrationForm.value).pipe(first()).subscribe(
      data => {
        if(data == true) {
          this.router.navigate([this.url]);
        } else {
          //Todo: Have better alert system
          alert('User exists already. Login instead.');
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log('invalid creds. Try again');
        this.router.navigate(['/login']);
      });
  }

  get username() {
    return this.registrationForm.get('username');
  }
  get password() {
    return this.registrationForm.get('password');
  }

}
