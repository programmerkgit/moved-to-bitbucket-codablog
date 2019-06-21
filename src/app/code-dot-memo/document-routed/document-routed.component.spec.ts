import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRoutedComponent } from './document-routed.component';

describe('PageRoutedComponent', () => {
  let component: DocumentRoutedComponent;
  let fixture: ComponentFixture<DocumentRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
