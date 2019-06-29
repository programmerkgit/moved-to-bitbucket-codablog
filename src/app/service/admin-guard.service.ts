import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ApiAuthService } from './api-auth.service';


@Injectable({
    providedIn: 'root'
})
export class AdminGuardService implements CanLoad, CanActivate {

    constructor(
        private apiAuthService: ApiAuthService,
        private router: Router
    ) {
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.apiAuthService.checkLogin().pipe(
            map(res => {
                return res.user.isAdmin();
            }),
            tap(result => {
                if (!result) {
                    this.router.navigateByUrl('login');
                }
            })
        );
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return of(false);
    }
}
