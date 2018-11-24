import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {

   candidateID;candidate; curInfo;candidateInfo;
   constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.candidateID = params;
    });
     this.candidateInfo = {
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
       }
     };
     this.candidate = this.candidateInfo[this.candidateID.id];
  }

  ngOnInit() {

  }
  nextCandidate(candidate) {
     let newID = +candidate.id + 1;
     this.candidate = this.candidateInfo[newID];
  }

}

 export interface Candidate {name: string}
