import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Component, OnInit, Inject} from '@angular/core';
import { ErrorMessage } from "../types";

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertDialogComponent implements OnInit {

    constructor(public thisDialogRef: MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ErrorMessage){}

    ngOnInit() {}

    onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

