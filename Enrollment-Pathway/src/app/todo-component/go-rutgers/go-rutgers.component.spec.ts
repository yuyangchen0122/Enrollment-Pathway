import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRutgersComponent } from './go-rutgers.component';

describe('GoRutgersComponent', () => {
  let component: GoRutgersComponent;
  let fixture: ComponentFixture<GoRutgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoRutgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRutgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
