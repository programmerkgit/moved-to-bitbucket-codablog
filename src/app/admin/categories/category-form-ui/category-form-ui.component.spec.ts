import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormUiComponent } from './category-form-ui.component';

describe('CategoryFormUiComponent', () => {
  let component: CategoryFormUiComponent;
  let fixture: ComponentFixture<CategoryFormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
