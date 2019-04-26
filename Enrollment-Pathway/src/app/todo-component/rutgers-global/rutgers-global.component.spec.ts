import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutgersGlobalComponent } from './rutgers-global.component';

describe('RutgersGlobalComponent', () => {
  let component: RutgersGlobalComponent;
  let fixture: ComponentFixture<RutgersGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutgersGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutgersGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
