import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomComponent } from './code-dot-memo/custom/custom.component';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AceComponent } from 'ace-module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnDestroy, OnInit {
    title = 'app';
    noindex = true;
    routerSubscription: Subscription;

    constructor(
        private injector: Injector,
        private router: Router
    ) {
        const customElement = createCustomElement(CustomComponent, {injector});
        if (document.createElement('custom-element').constructor === HTMLElement) {
            customElements.define('custom-element', customElement);
        }
        const aceElement = createCustomElement(AceComponent, {injector});
        if (document.createElement('ace-editor').constructor === HTMLElement) {
            customElements.define('ace-editor', aceElement);
        }
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        if (environment.production) {
            this.routerSubscription = this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
            ).subscribe((event: any) => {
                (<any>window).ga('set', 'page', event.urlAfterRedirects);
                (<any>window).ga('send', 'pageview');
            });
        }
    }
}
