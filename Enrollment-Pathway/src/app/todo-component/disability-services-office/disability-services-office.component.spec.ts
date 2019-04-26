import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityServicesOfficeComponent } from './disability-services-office.component';

describe('DisabilityServicesOfficeComponent', () => {
  let component: DisabilityServicesOfficeComponent;
  let fixture: ComponentFixture<DisabilityServicesOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityServicesOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityServicesOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
