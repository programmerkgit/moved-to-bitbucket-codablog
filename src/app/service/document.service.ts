import { Injectable } from '@angular/core';
import { Document } from '../model/document';
import { HttpClient } from '@angular/common/http';
import { ApiModeledService } from './api-modeled-service';

@Injectable({
    providedIn: 'root'
})
export class DocumentService extends ApiModeledService<Document> {

    model = Document;
    protected _basePath = 'documents';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }

}
