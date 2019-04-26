import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndocumentedInformationComponent } from './undocumented-information.component';

describe('UndocumentedInformationComponent', () => {
  let component: UndocumentedInformationComponent;
  let fixture: ComponentFixture<UndocumentedInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndocumentedInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndocumentedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
