import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleIxComponent } from './title-ix.component';

describe('TitleIxComponent', () => {
  let component: TitleIxComponent;
  let fixture: ComponentFixture<TitleIxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleIxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleIxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
