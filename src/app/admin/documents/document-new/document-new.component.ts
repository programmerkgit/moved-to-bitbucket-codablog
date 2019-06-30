import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { Category } from '../../../model/category';
import { Document } from '../../../model/document';

@Component({
    selector: 'app-document-new',
    templateUrl: './document-new.component.html',
    styleUrls: [ './document-new.component.scss' ]
})
export class DocumentNewComponent implements OnInit {


    document: Document;

    constructor(
        private documentService: DocumentService
    ) {
    }

    ngOnInit() {
        this.document = new Document();
    }

}
