import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { HostComponent } from '../host/host.component';
import { TestComponent } from '../test.component';

@Component({
  selector: 'app-component-factory',
  templateUrl: './component-factory.component.html',
  styleUrls: [ './component-factory.component.scss' ],
  inputs: [ 'abc' ]
})
export class ComponentFactoryComponent implements OnInit {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private testComponent: TestComponent
  ) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HostComponent);
    this.viewContainerRef.createComponent(componentFactory);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
    this.viewContainerRef.createComponent(componentFactory);
  }

}
