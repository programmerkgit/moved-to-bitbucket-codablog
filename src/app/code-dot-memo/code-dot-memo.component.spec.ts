import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDotMemo } from './code-dot-memo.component';

describe('CodablogComponent', () => {
  let component: CodeDotMemo;
  let fixture: ComponentFixture<CodeDotMemo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDotMemo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDotMemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
