import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { DocumentCategory } from '../model/document-category';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DocumentCategoryService extends ApiService<DocumentCategory> {

    protected _basePath = 'document-categories';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }
}
