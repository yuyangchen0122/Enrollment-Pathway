import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstYearChecklistComponent } from './first-year-checklist.component';

describe('FirstYearChecklistComponent', () => {
  let component: FirstYearChecklistComponent;
  let fixture: ComponentFixture<FirstYearChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstYearChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstYearChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
