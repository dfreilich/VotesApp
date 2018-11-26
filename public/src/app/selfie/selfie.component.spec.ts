import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieComponent } from './selfie.component';
import { AppModule } from "../app.module";

describe('SelfieComponent', () => {
  let component: SelfieComponent;
  let fixture: ComponentFixture<SelfieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
