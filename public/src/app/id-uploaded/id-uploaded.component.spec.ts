import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUploadedComponent } from './id-uploaded.component';

describe('IdUploadedComponent', () => {
  let component: IdUploadedComponent;
  let fixture: ComponentFixture<IdUploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdUploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
