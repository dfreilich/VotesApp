import { Injectable } from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
// @ts-ignore
import { SignUp } from 'types';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) {
    this.users.push({username: 'admin', password: '1234', name: 'Admin'});
  }
  users: any[] = JSON.parse(localStorage.getItem('users')) || [];

  static signedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    const registering = localStorage.getItem('registering');
    return user != null && registering !== 'true';
  }

  static finishedRegistration() {
    localStorage.removeItem('registering');
  }

  login(value: {username: string, password: string}): Observable<boolean> {
    const match = this.users.find(user => user.username === value.username && user.password === value.password);

    if (match) {
      localStorage.setItem('currentUser', JSON.stringify(match.name));
      return observableOf(true);
    }
    return observableOf(false);
  }

  createAccount(value: SignUp): Observable<any> {
    if (this.users.find((user) => user.username === value.username)) {
      return observableOf(new Error('User exists already'));
    }
    // TODO: Make sure he's old enough
    this.users.push({username: value.username, password: value.password, name: value.name});
    localStorage.setItem('currentUser', JSON.stringify(value.name));
    localStorage.setItem('registering', JSON.stringify(true));
    return observableOf(true);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
