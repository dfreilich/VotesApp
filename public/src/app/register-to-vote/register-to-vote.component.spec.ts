import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterToVoteComponent } from './register-to-vote.component';
import { AppModule} from "../app.module";

describe('RegisterToVoteComponent', () => {
  let component: RegisterToVoteComponent;
  let fixture: ComponentFixture<RegisterToVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterToVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
