import { Injectable } from '@angular/core';
import { Document } from '../model/document';
import { ApiService } from './api-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DocumentService extends ApiService<Document> {

    protected _basePath = 'documents';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }

}
