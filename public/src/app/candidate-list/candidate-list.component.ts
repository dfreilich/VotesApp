import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material";
import { AlertDialogComponent } from '../alertcomponent/alert.component';
import {ErrorMessage} from '../types';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  dataSource1;
  dataSource2;
	displayedColumns = [];
	columnNames = ["name", "actions", "seeinfo"];
	position = "Presidency";
  position2 = "Congress";
  allCandidates;
  selections = {"presidency":null, "congress":null};
  selected;
  selected2;
  popup;

 constructor(private router: Router, private dialog: MatDialog) {}


  ngOnInit() {
  		this.displayedColumns = this.columnNames;
      this.createTable();
  }

  createTable() {
        let tableArr: Candidate[] = [{name: 'Candidate 1' , id: '1'}, {name: 'Candidate 2' , id: '2'}, {name: 'Candidate 3' , id: '3'}, {name: 'Candidate 4' , id: '4'}, {name: 'Candidate 5' , id: '5'}];
        this.dataSource1 = new MatTableDataSource(tableArr);

        let tableArr2: Candidate[] = [{name: 'Candidate 6' , id: '6'}, {name: 'Candidate 7' , id: '7'}, {name: 'Candidate 8' , id: '8'}, {name: 'Candidate 9' , id: '9'}];
        this.dataSource2 = new MatTableDataSource(tableArr2);

        this.allCandidates = tableArr.concat(tableArr2)
     }

   seeInfo(candidate) {
   	 this.router.navigate(['candidate-info', candidate.id]); 
   }

   valueChange($event, element) {
        if(this.allCandidates.indexOf(element) <= 4 && $event.checked){
          this.selections["presidency"] = element.id;
          this.selected = element;
        }
        if(this.allCandidates.indexOf(element) > 4 && $event.checked){
          this.selections["congress"] = element.id;
          this.selected2 = element;
        }
    }

    review() {
      if(this.selections["presidency"] == null || this.selections["congress"] == null) {
        let data: ErrorMessage = {"info":null, "status":null};
        data.info = "you must choose candidates for each position!";
        data.status = "error";
        this.openDialog(data);
      }
      else {
        this.router.navigate(['vote', this.selections]); 
      }
      
    }

    openDialog(data: ErrorMessage) {
        this.popup = true;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.panelClass= 'my-centered-dialog';
        dialogConfig.data = data;

        let dialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
          this.popup=false;
          console.log(result)
        });

    }


}

 export interface Candidate {name: string, id: string}
