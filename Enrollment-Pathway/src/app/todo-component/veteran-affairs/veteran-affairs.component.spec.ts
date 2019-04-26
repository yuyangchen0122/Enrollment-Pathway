import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranAffairsComponent } from './veteran-affairs.component';

describe('VeteranAffairsComponent', () => {
  let component: VeteranAffairsComponent;
  let fixture: ComponentFixture<VeteranAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteranAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
