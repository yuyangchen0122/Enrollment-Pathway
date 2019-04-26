import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnesNobleComponent } from './barnes-noble.component';

describe('BarnesNobleComponent', () => {
  let component: BarnesNobleComponent;
  let fixture: ComponentFixture<BarnesNobleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarnesNobleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnesNobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
