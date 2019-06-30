import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../model/document';

@Component({
    selector: 'app-docuemnt-panel-simple',
    templateUrl: './docuemnt-panel-simple.component.html',
    styleUrls: [ './docuemnt-panel-simple.component.scss' ]
})
export class DocuemntPanelSimpleComponent implements OnInit {

    @Input() document: Document;

    width = 16;
    height = 16;
    iconColor = '#909090';

    constructor() {
    }

    get documentTitle() {
        if (!this.document.title) {
            return '';
        } else if (this.document.title.length <= 45) {
            return this.document.title;
        } else {
            return this.document.title.substring(0, 45) + '...';
        }
    }
    ngOnInit() {
    }


}
