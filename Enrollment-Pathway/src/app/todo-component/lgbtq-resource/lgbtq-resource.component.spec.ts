import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgbtqResourceComponent } from './lgbtq-resource.component';

describe('LgbtqResourceComponent', () => {
  let component: LgbtqResourceComponent;
  let fixture: ComponentFixture<LgbtqResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgbtqResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgbtqResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
