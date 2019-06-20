import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from '../Document';
import { ApiService } from './api-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService<Document> {

  protected _basePath = 'document';

  constructor(
    protected httpClient: HttpClient
  ) {
    super(httpClient);
  }

  getDocument(): Observable<Document> {
    const document = new Document({title: 'title', content: '<custom-element></custom-element>'});
    return of(document);
  }
}
