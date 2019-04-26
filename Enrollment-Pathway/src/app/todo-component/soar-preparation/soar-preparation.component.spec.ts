import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoarPreparationComponent } from './soar-preparation.component';

describe('SoarPreparationComponent', () => {
  let component: SoarPreparationComponent;
  let fixture: ComponentFixture<SoarPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoarPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoarPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
