import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


type CheckLogin = { result: boolean }
type Login = { result: boolean }

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {

    urlBase = environment.apiBase;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    ngOnInit() {
    }

    login(values: { email: string, password: string }): Observable<Login> {
        return this.httpClient.post<Login>(this.urlBase + '/login', values, {withCredentials: true});
    }

    checkLogin(): Observable<CheckLogin> {
        return this.httpClient.get<CheckLogin>(this.urlBase + '/check-login', {withCredentials: true});
    }

}
