import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutgersNetidEmailActivationComponent } from './rutgers-netid-email-activation.component';

describe('RutgersNetidEmailActivationComponent', () => {
  let component: RutgersNetidEmailActivationComponent;
  let fixture: ComponentFixture<RutgersNetidEmailActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutgersNetidEmailActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutgersNetidEmailActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
