import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglassResidentialCollegeComponent } from './douglass-residential-college.component';

describe('DouglassResidentialCollegeComponent', () => {
  let component: DouglassResidentialCollegeComponent;
  let fixture: ComponentFixture<DouglassResidentialCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DouglassResidentialCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglassResidentialCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
