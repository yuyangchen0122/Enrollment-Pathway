import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDirectDepositComponent } from './electronic-direct-deposit.component';

describe('ElectronicDirectDepositComponent', () => {
  let component: ElectronicDirectDepositComponent;
  let fixture: ComponentFixture<ElectronicDirectDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicDirectDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDirectDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
