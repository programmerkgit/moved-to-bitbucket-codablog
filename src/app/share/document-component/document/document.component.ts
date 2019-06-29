import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Document } from '../../../model/document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: [ './document.component.scss' ]
})
export class DocumentComponent implements OnInit, OnChanges {

    @Input() document: Document;

    private color = '#909090';
    private selectedColor = '#013BDA'

    private sanitizedContent: SafeHtml;

    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.document.content);
    }

    ngOnInit() {
    }
}
