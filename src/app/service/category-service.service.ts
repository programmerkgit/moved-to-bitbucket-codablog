import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoryServiceService extends ApiService<Category> {

    protected _basePath = 'categories';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }
}
