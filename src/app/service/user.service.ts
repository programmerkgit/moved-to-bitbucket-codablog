import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService extends ApiService<User> {

    protected _basePath = 'users';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }
}
