import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDiscoverConnectComponent } from './explore-discover-connect.component';

describe('ExploreDiscoverConnectComponent', () => {
  let component: ExploreDiscoverConnectComponent;
  let fixture: ComponentFixture<ExploreDiscoverConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDiscoverConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDiscoverConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
