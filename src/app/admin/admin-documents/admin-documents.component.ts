import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../../model/document';
import { DocumentService } from '../../service/document.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-admin-documents',
    templateUrl: './admin-documents.component.html',
    styleUrls: [ './admin-documents.component.scss' ]
})
export class AdminDocumentsComponent implements OnInit {
    documents$: Observable<Document[]>;

    constructor(
        private documentService: DocumentService
    ) {
    }

    getDocuments(): Observable<Document[]> {
        return this.documentService.findAll({
            order: [
                [ 'createdAt', 'DESC' ]
            ]
        }).pipe(
            tap(docs => {
                console.log(docs);
            })
        );
    }

    ngOnInit() {
        this.documents$ = this.getDocuments();
    }
}
