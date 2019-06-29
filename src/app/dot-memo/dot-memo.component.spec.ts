import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotMemo } from './dot-memo.component';

describe('CodablogComponent', () => {
  let component: DotMemo;
  let fixture: ComponentFixture<DotMemo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotMemo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotMemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
