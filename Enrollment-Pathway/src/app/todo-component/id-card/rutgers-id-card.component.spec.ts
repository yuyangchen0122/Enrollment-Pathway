import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutgersIdCardComponent } from './rutgers-id-card.component';

describe('RutgersIdCardComponent', () => {
  let component: RutgersIdCardComponent;
  let fixture: ComponentFixture<RutgersIdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutgersIdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutgersIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
