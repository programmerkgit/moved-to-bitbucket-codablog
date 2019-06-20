import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from './Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() {
  }


  getDocument(): Observable<Document> {
    const document = new Document({title: 'title', content: '<custom-element></custom-element>'});
    return of(document);
  }
}
