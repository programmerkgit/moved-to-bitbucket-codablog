import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { CustomComponent } from '../custom/custom.component';
import { DocumentService } from '../../document.service';
import { Document } from '../../Document';

@Component({
  selector: 'app-page-routed',
  templateUrl: './document-routed.component.html',
  styleUrls: [ './document-routed.component.scss' ]
})
export class DocumentRoutedComponent implements OnInit {


  document$: Observable<Document>;

  constructor(
    private injector: Injector,
    private activatedRoute: ActivatedRoute,
    private documentService: DocumentService
  ) {
    const customElement = createCustomElement(CustomComponent, {injector});
    if (document.createElement('custom-element').constructor === HTMLElement) {
      customElements.define('custom-element', customElement);
    }
  }

  getDocument(): Observable<Document> {
    return this.documentService.getDocument();
  }

  ngOnInit() {
    this.document$ = this.getDocument();
  }

}
