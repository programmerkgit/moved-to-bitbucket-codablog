import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { Document } from '../../model/document';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: [ './documents.component.scss' ]
})
export class DocumentsComponent implements OnInit {

    documents$: Observable<Document[]>;

    constructor(
        private documentService: DocumentService
    ) {
    }

    getDocuments(): Observable<Document[]> {
        return this.documentService.findAll();
    }

    ngOnInit() {
        this.documents$ = this.getDocuments();
    }

}
