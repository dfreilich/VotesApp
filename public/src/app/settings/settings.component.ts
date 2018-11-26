import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectEnglish;
  selectSpanish;
  // selectedItem;

  constructor() {
      this.selectEnglish = true;
      this.selectSpanish = false;
    }

  ngOnInit() {
    console.log('run ngOnInit()');
  }

  changeToEnglish() {
    this.selectEnglish = true;
    this.selectSpanish = false;
    console.log('change to english');
  }

  changeToSpanish() {
    this.selectEnglish = false;
    this.selectSpanish = true;
    console.log('change to spanish');
  }

  // update() {
  //   // console.log(this.selectedItem);
  // }

  // testbutton() {
  //   console.log('testbutton');
  // }

}
