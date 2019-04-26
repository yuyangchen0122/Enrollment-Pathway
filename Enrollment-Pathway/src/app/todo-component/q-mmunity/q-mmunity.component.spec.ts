import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QMmunityComponent } from './q-mmunity.component';

describe('QMmunityComponent', () => {
  let component: QMmunityComponent;
  let fixture: ComponentFixture<QMmunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QMmunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QMmunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
