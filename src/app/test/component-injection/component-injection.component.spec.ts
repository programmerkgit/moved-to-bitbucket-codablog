import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInjectionComponent } from './component-injection.component';

describe('ComponentInjectionComponent', () => {
  let component: ComponentInjectionComponent;
  let fixture: ComponentFixture<ComponentInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
