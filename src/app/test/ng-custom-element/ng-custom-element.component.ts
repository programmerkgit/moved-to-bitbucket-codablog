import { Component, ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { HostComponent } from '../host/host.component';

@Component({
  selector: 'app-ng-custom-element',
  templateUrl: './ng-custom-element.component.html',
  styleUrls: [ './ng-custom-element.component.scss' ]
})
export class NgCustomElementComponent implements OnInit, OnDestroy {

  element: NgElement & WithProperties<HostComponent>;

  constructor(
    private  injector: Injector,
    private elementRef: ElementRef
  ) {
    /*
     The @angular/elements package exports a createCustomElement() API that provides a bridge
     from Angular's component interface and change detection functionality to
     the built-in DOM API.
    */
    const hostElement = createCustomElement(HostComponent, {injector});
    if (document.createElement('new-host').constructor === HTMLElement) {
      customElements.define('new-host', hostElement);
    }
  }

  ngOnDestroy(): void {
    if (this.element) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  ngOnInit() {
    this.element = document.createElement('new-host') as any;
    this.element.abc = 'new-host';
    this.elementRef.nativeElement.appendChild(this.element);
  }

}
