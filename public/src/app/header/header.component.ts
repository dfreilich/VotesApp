import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'VotesApp';
  noBackButtonPages = ['/', '/landing', '/dashboard'];

  constructor(private location: Location) {}

  ngOnInit() {}

  displayBackButton(): boolean {
    const currentPath = this.location.path(false);
    return !this.noBackButtonPages.includes(currentPath);
  }

  displayLogout(): boolean {
    return false;
  }

  logout() {

  }

  goBack() {
    this.location.back();
  }
}
