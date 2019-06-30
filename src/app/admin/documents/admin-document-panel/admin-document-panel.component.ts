import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../../model/document';

@Component({
    selector: 'app-admin-document-panel',
    templateUrl: './admin-document-panel.component.html',
    styleUrls: [ './admin-document-panel.component.scss' ]
})
export class AdminDocumentPanelComponent implements OnInit {
    @Input() document: Document;


    constructor() {
    }

    ngOnInit() {
    }

}
