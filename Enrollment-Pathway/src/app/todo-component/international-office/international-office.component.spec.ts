import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalOfficeComponent } from './international-office.component';

describe('InternationalOfficeComponent', () => {
  let component: InternationalOfficeComponent;
  let fixture: ComponentFixture<InternationalOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
