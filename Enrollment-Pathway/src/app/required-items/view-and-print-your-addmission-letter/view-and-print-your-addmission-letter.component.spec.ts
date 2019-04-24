import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndPrintYourAddmissionLetterComponent } from './view-and-print-your-addmission-letter.component';

describe('ViewAndPrintYourAddmissionLetterComponent', () => {
  let component: ViewAndPrintYourAddmissionLetterComponent;
  let fixture: ComponentFixture<ViewAndPrintYourAddmissionLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAndPrintYourAddmissionLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndPrintYourAddmissionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
