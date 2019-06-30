import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../model/document';

@Component({
    selector: 'app-document-panel',
    templateUrl: './document-panel.component.html',
    styleUrls: [ './document-panel.component.scss' ]
})
export class DocumentPanelComponent implements OnInit {

    @Input() document: Document;
    width = 16;
    height = 16;
    iconColor = '#909090';

    constructor() {
    }

    get documentTitle() {
        if (!this.document.title) {
            return '';
        } else if (this.document.title.length < 45) {
            return this.document.title;
        } else {
            return this.document.title.substring(0, 45) + '...';
        }
    }

    ngOnInit() {
    }

}
