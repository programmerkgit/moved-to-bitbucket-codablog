import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFeedBacksComponent } from './document-feed-backs.component';

describe('DocumentFeedbacksComponent', () => {
  let component: DocumentFeedBacksComponent;
  let fixture: ComponentFixture<DocumentFeedBacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFeedBacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFeedBacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
