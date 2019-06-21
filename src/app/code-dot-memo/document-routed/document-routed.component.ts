import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../service/document.service';
import { Document } from '../../model/document';

@Component({
    selector: 'app-page-routed',
    templateUrl: './document-routed.component.html',
    styleUrls: [ './document-routed.component.scss' ]
})
export class DocumentRoutedComponent implements OnInit {

    document$: Observable<Document>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private documentService: DocumentService
    ) {
    }

    getDocument(id): Observable<Document> {
        return this.documentService.findById(id);
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            const id = param.get('id');
            this.document$ = this.getDocument(id);
        });
    }

}
