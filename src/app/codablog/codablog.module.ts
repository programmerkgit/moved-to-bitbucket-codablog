import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodablogRoutingModule } from './codablog-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { CodablogComponent } from './codablog.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CustomComponent } from './custom/custom.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentPanelComponent } from './document-panel/document-panel.component';
import { DocumentComponentModule } from '../share/document-component/document-component.module';

@NgModule({
    declarations: [
        BlogHeaderComponent,
        CodablogComponent,
        DocumentRoutedComponent,
        CustomComponent,
        DocumentsComponent,
        DocumentPanelComponent
    ],
    imports: [
        CommonModule,
        CodablogRoutingModule,
        /* share */
        DocumentComponentModule
    ],
    exports: [
        BlogHeaderComponent
    ]

})
export class CodablogModule {
}
