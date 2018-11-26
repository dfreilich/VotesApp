import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string = "David";
  currentUser: any;
  votingOpen = true;
  voted = false;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      if(params.message == "votesuccess"){
        this.voted = true;
      }
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    localStorage.removeItem('beingAuthenticated');
    this.name = this.currentUser;
  }

  ngOnInit() {
  }

}
