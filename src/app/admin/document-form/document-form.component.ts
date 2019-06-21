import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../document';
import { DocumentService } from '../../service/document.service';

@Component({
    selector: 'app-document-form',
    templateUrl: './document-form.component.html',
    styleUrls: [ './document-form.component.scss' ]
})
export class DocumentFormComponent implements OnInit {


    @Input() document: Document;

    constructor(
        private documentService: DocumentService
    ) {
    }

    save(document: Document) {
        if (this.document.id) {
            this.update(document);
        } else {
            this.create(document);
        }
    }

    update(document: Document) {
        this.documentService.update(document.id, document.getParams()).subscribe({
            next: (document) => {
                this.document = new Document(document);
            }
        });
    }

    create(document: Document) {
        console.log(document.getParams);
        this.documentService.create(document.getParams()).subscribe({
            next: (document) => {
                this.document = new Document(document);
            }
        });
    }

    ngOnInit() {
    }

}
