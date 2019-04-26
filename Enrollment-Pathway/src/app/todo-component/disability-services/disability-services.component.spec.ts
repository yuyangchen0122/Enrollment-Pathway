import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityServicesComponent } from './disability-services.component';

describe('DisabilityServicesComponent', () => {
  let component: DisabilityServicesComponent;
  let fixture: ComponentFixture<DisabilityServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
