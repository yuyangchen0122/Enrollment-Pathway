import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTransportationComponent } from './parking-transportation.component';

describe('ParkingTransportationComponent', () => {
  let component: ParkingTransportationComponent;
  let fixture: ComponentFixture<ParkingTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
