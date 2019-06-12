import { Component, OnInit, Optional } from '@angular/core';
import { TestComponent } from '../test.component';

@Component({
  selector: 'app-component-injection',
  templateUrl: './component-injection.component.html',
  styleUrls: [ './component-injection.component.scss' ]
})
export class ComponentInjectionComponent implements OnInit {

  m;

  constructor(
    @Optional() private testComponent: TestComponent
  ) {
  }

  ngOnInit() {
    this.m = this.testComponent.m;
  }

}
