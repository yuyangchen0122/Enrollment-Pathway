import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedUserAccessComponent } from './authorized-user-access.component';

describe('AuthorizedUserAccessComponent', () => {
  let component: AuthorizedUserAccessComponent;
  let fixture: ComponentFixture<AuthorizedUserAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedUserAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
