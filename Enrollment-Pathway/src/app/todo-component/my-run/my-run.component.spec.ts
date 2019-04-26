import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRunComponent } from './my-run.component';

describe('MyRunComponent', () => {
  let component: MyRunComponent;
  let fixture: ComponentFixture<MyRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
