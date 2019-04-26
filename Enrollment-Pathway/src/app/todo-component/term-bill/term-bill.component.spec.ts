import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermBillComponent } from './term-bill.component';

describe('TermBillComponent', () => {
  let component: TermBillComponent;
  let fixture: ComponentFixture<TermBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
