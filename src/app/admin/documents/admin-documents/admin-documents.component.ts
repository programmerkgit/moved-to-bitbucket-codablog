import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from '../../../model/document';
import { DocumentService } from '../../../service/document.service';
import { tap } from 'rxjs/operators';

const _ = require('lodash');

@Component({
    selector: 'app-admin-documents',
    templateUrl: './admin-documents.component.html',
    styleUrls: [ './admin-documents.component.scss' ]
})
export class AdminDocumentsComponent implements OnInit {


    documents$: Observable<Document[]>;

    simples$: Observable<Document[]>;
    blogs$: Observable<Document[]>;

    constructor(
        private documentService: DocumentService
    ) {
    }

    getDocuments(): Observable<Document[]> {
        return this.documentService.findAll({
            scopes: [ 'reliableFeedBacks', 'likeFeedBacks', 'usefulFeedBacks' ],
            order: [ [ 'createdAt', 'DESC' ] ]
        });
    }

    ngOnInit() {
        this.documents$ = this.getDocuments().pipe(
            tap(documents => {
                const grouped = _.groupBy(documents, 'type');
                this.blogs$ = of(grouped.blog);
                this.simples$ = of(grouped.simple);
            })
        );
    }
}
