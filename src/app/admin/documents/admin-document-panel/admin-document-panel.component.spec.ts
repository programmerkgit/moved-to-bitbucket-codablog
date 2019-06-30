import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocumentPanelComponent } from './admin-document-panel.component';

describe('AdminDocumentPanelComponent', () => {
  let component: AdminDocumentPanelComponent;
  let fixture: ComponentFixture<AdminDocumentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocumentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocumentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
