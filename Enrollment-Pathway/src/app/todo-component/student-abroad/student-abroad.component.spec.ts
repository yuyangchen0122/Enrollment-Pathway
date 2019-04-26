import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAbroadComponent } from './student-abroad.component';

describe('StudentAbroadComponent', () => {
  let component: StudentAbroadComponent;
  let fixture: ComponentFixture<StudentAbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAbroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
