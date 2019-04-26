import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipProgramComponent } from './leadership-program.component';

describe('LeadershipProgramComponent', () => {
  let component: LeadershipProgramComponent;
  let fixture: ComponentFixture<LeadershipProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
