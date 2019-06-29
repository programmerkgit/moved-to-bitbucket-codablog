import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';
import { User } from '../model/user';


type CheckLogin = { result: boolean, user: User }
type Login = { result: boolean, user: User }
type SignUp = { result: boolean, user: User }
type AnonoymousSignUp = SignUp

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {

    urlBase = environment.apiBase;
    user$: Observable<User | null>;
    private user: User;
    private userSubject = new BehaviorSubject<User>(null);

    constructor(
        private httpClient: HttpClient
    ) {
        this.user$ = this.userSubject.asObservable();
    }

    emitUser(user: User) {
        this.user = user;
        this.userSubject.next(user);
    }

    setUser(): Observable<CheckLogin> {
        return this.checkLogin().pipe(
            flatMap((res) => {
                if (res.result) {
                    return of(res);
                } else {
                    return this.anonymousSignUp();
                }
            })
        );
    }

    anonymousSignUp(): Observable<AnonoymousSignUp> {
        return this.httpClient.post<AnonoymousSignUp>(this.urlBase + '/anonymous-sign-up', {}, {withCredentials: true}).pipe(
            tap(res => {
                this.emitUser(new User(res.user));
            })
        );
    }

    login(values: { email: string, password: string }): Observable<Login> {
        return this.httpClient.post<Login>(this.urlBase + '/login', values, {withCredentials: true}).pipe(
            tap(res => {
                this.emitUser(new User(res.user));
            }),
            map(res => {
                res.user = new User(res.user);
                return res;
            })
        );
    }

    checkLogin(): Observable<CheckLogin> {
        return this.httpClient.get<CheckLogin>(this.urlBase + '/check-login', {withCredentials: true}).pipe(
            tap(res => {
                this.emitUser(new User(res.user));
            }),
            map(res => {
                res.user = new User(res.user);
                return res;
            })
        );
    }
}
