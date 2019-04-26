import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningAdvisingComponent } from './planning-advising.component';

describe('PlanningAdvisingComponent', () => {
  let component: PlanningAdvisingComponent;
  let fixture: ComponentFixture<PlanningAdvisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningAdvisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningAdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
