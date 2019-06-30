import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuemntPanelSimpleComponent } from './docuemnt-panel-simple.component';

describe('DocuemntPanelSimpleComponent', () => {
  let component: DocuemntPanelSimpleComponent;
  let fixture: ComponentFixture<DocuemntPanelSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocuemntPanelSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocuemntPanelSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
