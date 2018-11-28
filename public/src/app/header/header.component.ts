import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'VotesApp';
  noBackButtonPages = ['/', '/landing', '/dashboard'];
  constructor(private location: Location, private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  displayBackButton(): boolean {
    const currentPath = this.location.path(false);
    return !this.noBackButtonPages.includes(currentPath);
  }

  displayLogout(): boolean {
    return AuthenticationService.signedIn();
  }

  logout() {
    this.auth.logout();
  }

  goBack() {
    this.location.back();
  }

  displayHome(): boolean {
    return !this.location.path(false).startsWith('/dashboard') && this.displayLogout();
  }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
