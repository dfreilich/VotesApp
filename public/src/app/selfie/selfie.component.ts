import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {atLeastOne} from '../at-least-one.directive';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss']
})
export class SelfieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private cd: ChangeDetectorRef) { }

  registrationForm = this.formBuilder.group({
    id: [null],
    name: [''],
  }, {validator: atLeastOne(Validators.required, ['id', 'name'])});

  ngOnInit() {
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
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

    AuthenticationService.finishedRegistration();
    this.router.navigate(['/dashboard']);
  }
}
