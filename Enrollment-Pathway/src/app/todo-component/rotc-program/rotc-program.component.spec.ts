import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotcProgramComponent } from './rotc-program.component';

describe('RotcProgramComponent', () => {
  let component: RotcProgramComponent;
  let fixture: ComponentFixture<RotcProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotcProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotcProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
