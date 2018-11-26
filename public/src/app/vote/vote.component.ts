import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  presidency;
  congress;
   constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.presidency = params["presidency"];
      this.congress = params["congress"];
    });
  }

  ngOnInit() {
  }

}
