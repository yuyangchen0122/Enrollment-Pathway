import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsMilitaryComponent } from './us-military.component';

describe('UsMilitaryComponent', () => {
  let component: UsMilitaryComponent;
  let fixture: ComponentFixture<UsMilitaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsMilitaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsMilitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
