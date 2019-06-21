import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFormUiComponent } from './document-form-ui.component';

describe('DocumentFormUiComponent', () => {
  let component: DocumentFormUiComponent;
  let fixture: ComponentFixture<DocumentFormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
