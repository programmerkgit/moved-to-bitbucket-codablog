import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';


enum VisibilityState {
    Visible = 'visible',
    Hidden = 'hidden',
}

enum Direction {
    Up = 'Up',
    Down = 'Down',
}

@Component({
    selector: 'app-animated-sticky-header',
    templateUrl: './animated-sticky-header.component.html',
    styleUrls: [ './animated-sticky-header.component.scss' ],
    animations: [
        trigger('toggle', [
            state('visible', style({
                opacity: 1,
                transform: 'translateY(0%)',
            })),
            state('hidden', style({
                opacity: 0,
                transform: 'translateY(-100%)'
            })),
            transition('* => *',
                [ animate('0.3s ease-in') ]
            )
        ])
    ]
})
export class AnimatedStickyHeaderComponent implements OnInit, AfterViewInit, OnDestroy {


    isVisible = true;
    scrollUpSubscription$: Subscription;
    scrollDownSubscription$: Subscription;

    constructor() {
    }

    get toggle(): VisibilityState {
        if (document.documentElement.scrollTop < 100) {
            return VisibilityState.Visible;
        }
        return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
    }

    ngAfterViewInit(): void {
        const scroll$ = fromEvent(window, 'scroll').pipe(
            throttleTime(10),
            map(() => document.documentElement.scrollTop),
            pairwise(),
            map(([ y1, y2 ]): Direction => y1 < y2 ? Direction.Down : Direction.Up),
            distinctUntilChanged(),
            share()
        );
        const scrollUp$ = scroll$.pipe(filter(direction => direction === Direction.Up));
        const scrollDown$ = scroll$.pipe(filter(direction => direction === Direction.Down));
        this.scrollUpSubscription$ = scrollUp$.subscribe(() => {
            this.isVisible = true;
        });
        this.scrollDownSubscription$ = scrollDown$.subscribe(() => {
            this.isVisible = false;
        });
    }

    ngOnDestroy(): void {
        this.scrollDownSubscription$.unsubscribe();
        this.scrollUpSubscription$.unsubscribe();
    }

    ngOnInit() {
    }

}
