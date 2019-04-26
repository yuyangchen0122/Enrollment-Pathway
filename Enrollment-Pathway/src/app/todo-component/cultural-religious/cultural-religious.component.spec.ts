import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalReligiousComponent } from './cultural-religious.component';

describe('CulturalReligiousComponent', () => {
  let component: CulturalReligiousComponent;
  let fixture: ComponentFixture<CulturalReligiousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalReligiousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalReligiousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
