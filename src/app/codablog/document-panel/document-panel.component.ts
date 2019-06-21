import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../model/document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-document-panel',
    templateUrl: './document-panel.component.html',
    styleUrls: [ './document-panel.component.scss' ]
})
export class DocumentPanelComponent implements OnInit {

    @Input() document: Document;


    constructor(
    ) {
    }

    ngOnInit() {
    }

}
