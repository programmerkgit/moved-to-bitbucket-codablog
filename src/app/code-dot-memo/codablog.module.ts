import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeDotMemoRoutingModule } from './code-dot-memo-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { CodeDotMemo } from './code-dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CustomComponent } from './custom/custom.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentPanelComponent } from './document-panel/document-panel.component';
import { DocumentComponentModule } from '../share/document-component/document-component.module';
import { DocumentFeedbacksComponent } from './document/document-feedbacks/document-feedbacks.component';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [
        BlogHeaderComponent,
        CodeDotMemo,
        DocumentRoutedComponent,
        CustomComponent,
        DocumentsComponent,
        DocumentPanelComponent,
        DocumentFeedbacksComponent
    ],
    imports: [
        CommonModule,
        CodeDotMemoRoutingModule,
        /* share */
        DocumentComponentModule,
        ShareModule
    ],
    exports: [
        BlogHeaderComponent
    ]

})
export class CodablogModule {
}
