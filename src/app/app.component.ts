import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomComponent } from './codablog/custom/custom.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    title = 'app';
    noindex = true;

    constructor(
        private injector: Injector,
    ) {
        const customElement = createCustomElement(CustomComponent, {injector});
        if (document.createElement('custom-element').constructor === HTMLElement) {
            customElements.define('custom-element', customElement);
        }
    }
}
