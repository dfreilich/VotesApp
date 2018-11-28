import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'VotesApp';
  noBackButtonPages = ['/', '/landing', '/dashboard'];

  constructor(private location: Location, private auth: AuthenticationService) {}

  ngOnInit() {}

  displayBackButton(): boolean {
    const currentPath = this.location.path(false);
    return !this.noBackButtonPages.includes(currentPath);
  }

  displayLogout(): boolean {
    return this.auth.signedIn();
  }

  logout() {
    this.auth.logout();
  }

  goBack() {
    this.location.back();
  }
}
