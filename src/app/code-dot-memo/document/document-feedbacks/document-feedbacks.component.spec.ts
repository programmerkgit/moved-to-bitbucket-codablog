import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFeedbacksComponent } from './document-feedbacks.component';

describe('DocumentFeedbacksComponent', () => {
  let component: DocumentFeedbacksComponent;
  let fixture: ComponentFixture<DocumentFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
