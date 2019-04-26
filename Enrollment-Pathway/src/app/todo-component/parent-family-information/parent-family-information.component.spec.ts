import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFamilyInformationComponent } from './parent-family-information.component';

describe('ParentFamilyInformationComponent', () => {
  let component: ParentFamilyInformationComponent;
  let fixture: ComponentFixture<ParentFamilyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFamilyInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFamilyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
