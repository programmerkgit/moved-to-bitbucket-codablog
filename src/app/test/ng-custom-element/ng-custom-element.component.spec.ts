import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomElementComponent } from './ng-custom-element.component';

describe('NgCustomElementComponent', () => {
  let component: NgCustomElementComponent;
  let fixture: ComponentFixture<NgCustomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCustomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
