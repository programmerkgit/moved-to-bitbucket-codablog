import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-document-preview',
    templateUrl: './document-preview.component.html',
    styleUrls: [ './document-preview.component.scss' ]
})
export class DocumentPreviewComponent implements OnInit {

    @Input() document: Document;

    constructor() {
    }

    ngOnInit() {
    }

}
