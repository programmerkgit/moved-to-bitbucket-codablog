import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { Document } from '../../model/document';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const _ = require('lodash');

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: [ './documents.component.scss' ]
})
export class DocumentsComponent implements OnInit {

    documents$: Observable<Document[]>;

    simples$: Observable<Document[]>;
    blogs$: Observable<Document[]>;

    constructor(
        private documentService: DocumentService
    ) {
    }

    getDocuments(): Observable<Document[]> {
        return this.documentService.findAll({
            scopes: [ 'show', 'reliableFeedBacks', 'likeFeedBacks', 'usefulFeedBacks' ],
            order: [ [ 'createdAt', 'DESC' ] ]
        });
    }

    ngOnInit() {
        this.getDocuments().pipe(
            tap(documents => {
                const grouped = _.groupBy(documents, 'type');
                this.blogs$ = of(grouped.blog);
                this.simples$ = of(grouped.simple);
            })
        ).subscribe();
    }
}
