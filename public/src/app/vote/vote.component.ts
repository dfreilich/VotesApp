import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  presidencyid;
  congressid;
  presidency;
  congress;
   constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.presidencyid = params["presidency"];
      this.congressid = params["congress"];
    });
    let candidateInfo = {
       1: {
         id: 1, name: 'Candidate 1', pos: 'Director of CMU', bio: 'Bio of Candidate 1', endorsements: 'Endorsements of Candidate 1', prevPos: 'Previous positions of Candidate 1'
       },
       2: {
         id:2, name: 'Candidate 2', pos: 'Director of CMU', bio: 'Bio of Candidate 2', endorsements: 'Endorsements of Candidate 2', prevPos: 'Previous positions of Candidate 2'
       },
       3: {
         id:3, name: 'Candidate 3', pos: 'Director of CMU', bio: 'Bio of Candidate 3', endorsements: 'Endorsements of Candidate 3', prevPos: 'Previous positions of Candidate 3'
       },
       4: {
         id:4, name: 'Candidate 4', pos: 'Director of CMU', bio: 'Bio of Candidate 4', endorsements: 'Endorsements of Candidate 4', prevPos: 'Previous positions of Candidate 4'
       },
       5: {
         id:5, name: 'Candidate 5', pos: 'Director of CMU', bio: 'Bio of Candidate 5', endorsements: 'Endorsements of Candidate 5', prevPos: 'Previous positions of Candidate 5'
       },
       6: {
         id:6, name: 'Candidate 6', pos: 'Director of CMU', bio: 'Bio of Candidate 6', endorsements: 'Endorsements of Candidate 6', prevPos: 'Previous positions of Candidate 6'
       },
       7: {
         id:7, name: 'Candidate 7', pos: 'Director of CMU', bio: 'Bio of Candidate 7', endorsements: 'Endorsements of Candidate 7', prevPos: 'Previous positions of Candidate 7'
       },
       8: {
         id:8, name: 'Candidate 8', pos: 'Director of CMU', bio: 'Bio of Candidate 8', endorsements: 'Endorsements of Candidate 8', prevPos: 'Previous positions of Candidate 8'
       },
       9: {
         id:9, name: 'Candidate 9', pos: 'Director of CMU', bio: 'Bio of Candidate 9', endorsements: 'Endorsements of Candidate 9', prevPos: 'Previous positions of Candidate 9'
       }
     };
     this.presidency = candidateInfo[this.presidencyid];
     this.congress = candidateInfo[this.congressid];
  }

  ngOnInit() {
  }

}
