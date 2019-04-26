import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineModulesComponent } from './online-modules.component';

describe('OnlineModulesComponent', () => {
  let component: OnlineModulesComponent;
  let fixture: ComponentFixture<OnlineModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
