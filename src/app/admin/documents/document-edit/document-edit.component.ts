import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../../service/document.service';
import { Document } from '../../../model/document';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-document-edit',
    templateUrl: './document-edit.component.html',
    styleUrls: [ './document-edit.component.scss' ]
})
export class DocumentEditComponent implements OnInit {

    document$: Observable<Document>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private documentService: DocumentService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            this.document$ = this.documentService.findById(param.get('id'));
        });
    }

}
