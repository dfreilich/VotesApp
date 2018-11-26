import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-to-vote',
  templateUrl: './register-to-vote.component.html',
  styleUrls: ['./register-to-vote.component.scss']
})
export class RegisterToVoteComponent implements OnInit {
  hide = true;
  id: File;

  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.id = event.target.files[0]
  }
}
