import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../Document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: [ './document.component.scss' ]
})
export class DocumentComponent implements OnInit {

  @Input() document: Document;

  sanitizedContent: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    /* TODO set correct document */
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.document.content);
  }

}
