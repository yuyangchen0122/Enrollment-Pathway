import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedActivitiesComponent } from './recommended-activities.component';

describe('RecommendedActivitiesComponent', () => {
  let component: RecommendedActivitiesComponent;
  let fixture: ComponentFixture<RecommendedActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
