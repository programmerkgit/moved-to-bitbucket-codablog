import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotMemoRoutingModule } from './dot-memo-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { DotMemo } from './dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CustomComponent } from './custom/custom.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentPanelComponent } from './document-panel/document-panel.component';
import { IconShareModule } from '../share/icon-share.module';
import { DocumentComponentModule } from '../share/document-component/document-component.module';
import { DocuemntPanelSimpleComponent } from './docuemnt-panel-simple/docuemnt-panel-simple.component';

@NgModule({
    declarations: [
        BlogHeaderComponent,
        DotMemo,
        DocumentRoutedComponent,
        CustomComponent,
        DocumentsComponent,
        DocumentPanelComponent,
        DocuemntPanelSimpleComponent
    ],
    imports: [
        CommonModule,
        DotMemoRoutingModule,
        /* share */
        DocumentComponentModule,
        IconShareModule
    ],
    exports: [
        BlogHeaderComponent
    ]

})
export class DotMemoModule {
}
