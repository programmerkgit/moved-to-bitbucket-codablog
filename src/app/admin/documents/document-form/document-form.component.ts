import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../../model/document';
import { DocumentService } from '../../../service/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-document-form',
    templateUrl: './document-form.component.html',
    styleUrls: [ './document-form.component.scss' ]
})
export class DocumentFormComponent implements OnInit {


    @Input() document: Document;

    constructor(
        private documentService: DocumentService,
        private router: Router,
        private activatedRoute: ActivatedRoute
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
        this.documentService.update(document.id, document.dataValues()).subscribe({
            next: (document) => {
                this.document = new Document(document);
            }
        });
    }

    create(document: Document) {
        this.documentService.create(document.dataValues()).subscribe({
            next: (document) => {
                this.document = new Document(document);
            }
        });
    }

    delete() {
        if (confirm('削除しますか')) {
            this.documentService.delete(this.document.id).subscribe({
                next: () => {
                    this.router.navigate([ '../' ], {relativeTo: this.activatedRoute});
                }
            });
        }
    }

    ngOnInit() {
    }

}
