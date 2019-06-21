import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentNewComponent } from './document-new/document-new.component';
import { DocumentFormUiComponent } from './document-form/document-form-ui/document-form-ui.component';
import { SrcInputComponent } from './document-form/document-form-ui/src-input/src-input.component';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { AdminDocumentPanelComponent } from './admin-document-panel/admin-document-panel.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { DocumentComponentModule } from '../share/document-component/document-component.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { DraftComponent } from './draft/draft.component';

@NgModule({
    declarations: [
        AdminComponent,
        DocumentFormComponent, DocumentNewComponent, DocumentFormUiComponent, SrcInputComponent,
        AdminDocumentsComponent, DocumentEditComponent, AdminDocumentPanelComponent, DocumentPreviewComponent,
        AdminHeaderComponent, DraftComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        DocumentComponentModule,
        /* share */
    ],
})
export class AdminModule {
}
