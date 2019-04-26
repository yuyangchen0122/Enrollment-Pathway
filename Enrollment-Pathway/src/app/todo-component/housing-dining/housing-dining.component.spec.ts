import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingDiningComponent } from './housing-dining.component';

describe('HousingDiningComponent', () => {
  let component: HousingDiningComponent;
  let fixture: ComponentFixture<HousingDiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingDiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
