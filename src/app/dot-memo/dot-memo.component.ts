import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animation =
    trigger('animation', [
        transition('documents => document', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                })
            ]),
            query(':enter', [
                style({
                    left: '100%',
                    opacity: '0'
                })
            ]),
            query(':leave', [
                style({
                    left: '0%',
                    opacity: '1'
                })
            ]),
            group([
                query(':leave', [
                    animate('500ms ease', style({
                        left: '-100%',
                        opacity: '0'
                    }))
                ]),
                query(':enter', [
                    animate('500ms ease', style({
                        left: '0%',
                    }))
                ]),
                query(':enter', [
                    animate('500ms ease', style({
                        opacity: '1'
                    }))
                ])
            ]),
        ]),
        transition('document => documents', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                })
            ]),
            query(':enter', [
                style({
                    left: '-100%',
                    opacity: '0'
                })
            ]),
            query(':leave', [
                style({
                    left: '0%',
                    opacity: '1'
                })
            ]),
            group([
                query(':leave', [
                    animate('500ms ease', style({
                        left: '100%',
                        opacity: '0'
                    }))
                ]),
                query(':enter', [
                    animate('500ms ease', style({
                        left: '0%',
                        opacity: '1'
                    }))
                ]),
            ]),
        ])
    ]);

@Component({
    selector: 'app-dot-memo',
    templateUrl: './dot-memo.component.html',
    styleUrls: [ './dot-memo.component.scss' ],
    animations: [ animation ]
})
export class DotMemo implements OnInit, OnDestroy {

    routerSubscription: Subscription;
    state = 'visible';

    constructor(
        private router: Router
    ) {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'page' ];
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    ngOnInit() {
    }

}
