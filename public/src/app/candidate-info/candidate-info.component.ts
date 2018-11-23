import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {

   candidate;
   constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.candidate = params;
    });
  }

  ngOnInit() {

  }


}

 export interface Candidate {name: string}