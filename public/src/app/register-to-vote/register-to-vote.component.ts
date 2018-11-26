import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {atLeastOne} from '../at-least-one.directive';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-to-vote',
  templateUrl: './register-to-vote.component.html',
  styleUrls: ['./register-to-vote.component.scss']
})
export class RegisterToVoteComponent implements OnInit {
  hide = true;
  id: File;
  initialSetup = true;
  buttonString = "Next: Prove Your Identity";
  url = '/selfie';

  constructor(private formBuilder: FormBuilder, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initialSetup = JSON.parse(localStorage.getItem('beingAuthenticated'));
    console.log(this.initialSetup);
    if(this.initialSetup == null) {
      this.buttonString = "Next: Vote";
      this.url = '/candidates';
    }
  }

  registrationForm = this.formBuilder.group({
    id: [null],
    name: [''],
    ssn: ['']
  }, {validator: atLeastOne(Validators.required, ['id', 'name', 'ssn'])});

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.registrationForm.patchValue({
          name: reader.result,
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onFormSubmit() {
    console.log(this.registrationForm);

    if (this.registrationForm.invalid) {
      console.log('invalid');
      return;
    }

    this.router.navigate([this.url]);
  }
}
