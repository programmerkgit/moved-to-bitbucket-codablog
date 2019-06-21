import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcInputComponent } from './src-input.component';

describe('SrcInputComponent', () => {
  let component: SrcInputComponent;
  let fixture: ComponentFixture<SrcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
