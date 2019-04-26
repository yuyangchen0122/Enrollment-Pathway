import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOfPlansComponent } from './change-of-plans.component';

describe('ChangeOfPlansComponent', () => {
  let component: ChangeOfPlansComponent;
  let fixture: ComponentFixture<ChangeOfPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOfPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOfPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
