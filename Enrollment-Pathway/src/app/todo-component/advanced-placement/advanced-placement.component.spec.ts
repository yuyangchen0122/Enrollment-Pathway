import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPlacementComponent } from './advanced-placement.component';

describe('AdvancedPlacementComponent', () => {
  let component: AdvancedPlacementComponent;
  let fixture: ComponentFixture<AdvancedPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
