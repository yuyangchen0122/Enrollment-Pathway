import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NontraditionalStudentComponent } from './nontraditional-student.component';

describe('NontraditionalStudentComponent', () => {
  let component: NontraditionalStudentComponent;
  let fixture: ComponentFixture<NontraditionalStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NontraditionalStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NontraditionalStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
