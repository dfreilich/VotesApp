import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  	dataSource;
	displayedColumns = [];
	columnNames = ["name", "actions", "seeinfo"];
	position;

 constructor(private router: Router) {}

  ngOnInit() {
  		this.position = "Position 1: President"
  		this.displayedColumns = this.columnNames;
        this.createTable();
  }

  createTable() {
        let tableArr: Candidate[] = [{name: 'Candidate 1' , id: '1'}, {name: 'Candidate 2' , id: '2'}, {name: 'Candidate 3' , id: '3'}, {name: 'Candidate 4' , id: '4'}, {name: 'Candidate 5' , id: '5'}, {name: 'Candidate 6' , id: '6'}];
        this.dataSource = new MatTableDataSource(tableArr);
     }

   seeInfo(candidate) {
   	 this.router.navigate(['candidate-info', candidate.id]); 
   }

}

 export interface Candidate {name: string, id: string}