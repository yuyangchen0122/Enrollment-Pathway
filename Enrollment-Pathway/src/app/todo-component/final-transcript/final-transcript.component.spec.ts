import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTranscriptComponent } from './final-transcript.component';

describe('FinalTranscriptComponent', () => {
  let component: FinalTranscriptComponent;
  let fixture: ComponentFixture<FinalTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
