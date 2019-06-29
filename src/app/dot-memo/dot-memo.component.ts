import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animation =
    trigger('animation', [
        transition('visible <=> disappear', [
            query(':enter, :leave', [
                style({
                    position: 'absolute'
                })
            ]),
            query(':enter', [
                style({left: '-100%'})
            ]),
            query(':leave', [
                style({
                    transform: 'scale(1, 1)',
                })
            ]),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({
                        transform: 'scale(0, 0)'
                    }))
                ]),
                query(':enter', [
                    animate('500ms ease-out', style({
                        left: '0%',
                    }))
                ])
            ]),
        ])
    ]);

@Component({
    selector: 'app-dot-memo',
    templateUrl: './dot-memo.component.html',
    styleUrls: [ './dot-memo.component.scss' ],
    animations: [ animation ]
})
export class DotMemo implements OnInit {

    routerSubscription: Subscription;
    state = 'visible';

    constructor(
        private router: Router
    ) {
    }

    prepareRoute(outlet: RouterOutlet) {
        // return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'page' ];
        return this.state;
    }

    out(outlet: RouterOutlet) {
        return this.state;
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    ngOnInit() {
        this.routerSubscription = this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
        ).subscribe((event: any) => {
            this.state = this.state === 'visible' ? 'disappear' : 'visible';
        });
    }

    scrollToTop() {
        window.scrollTo({top: 0});
    }
}
