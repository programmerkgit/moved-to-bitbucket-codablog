import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentNewComponent } from './document-new/document-new.component';
import { DocumentFormUiComponent } from './document-form-ui/document-form-ui.component';
import { SrcInputComponent } from './document-form-ui/src-input/src-input.component';
import { DocumentsComponent } from './documents/documents.component';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';

@NgModule({
    declarations: [
        AdminComponent, DocumentFormComponent, DocumentNewComponent, DocumentFormUiComponent, SrcInputComponent, DocumentsComponent, AdminDocumentsComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        /* share */
    ],
})
export class AdminModule {
}
