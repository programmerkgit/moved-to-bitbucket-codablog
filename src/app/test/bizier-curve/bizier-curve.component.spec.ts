import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizierCurveComponent } from './bizier-curve.component';

describe('BizierCurveComponent', () => {
  let component: BizierCurveComponent;
  let fixture: ComponentFixture<BizierCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizierCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizierCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
