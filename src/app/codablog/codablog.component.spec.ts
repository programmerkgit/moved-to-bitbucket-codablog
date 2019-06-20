import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodablogComponent } from './codablog.component';

describe('CodablogComponent', () => {
  let component: CodablogComponent;
  let fixture: ComponentFixture<CodablogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodablogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
