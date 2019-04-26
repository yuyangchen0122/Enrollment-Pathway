import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStudentChecklistComponent } from './transfer-student-checklist.component';

describe('TransferStudentChecklistComponent', () => {
  let component: TransferStudentChecklistComponent;
  let fixture: ComponentFixture<TransferStudentChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferStudentChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferStudentChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
