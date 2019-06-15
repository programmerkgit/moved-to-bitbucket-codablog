import { Component, Input, OnInit, Optional } from '@angular/core';
import { TestComponent } from '../test.component';
import { ComponentFactoryComponent } from '../component-factory/component-factory.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: [ './host.component.scss' ],
  host: {
    'class': 'bg-primary d-inline-block',
    'input': 'input-can\'t bind',
    'style': 'border: solid 1px;',
    '[class.half]': 'half'
  },
  inputs: [ 'abc' ]
})
export class HostComponent implements OnInit {


  abc;

  @Input() input;
  half;

  constructor(
    private testComponent: TestComponent,
    @Optional() private componentFactoryComponent: ComponentFactoryComponent
  ) {
  }

  ngOnInit() {
    setInterval(() => {
      this.half = Math.random() < 0.5;
    }, 1000);
    console.log(this.testComponent.m);
  }

}
