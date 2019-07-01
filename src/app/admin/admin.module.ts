import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DocumentFormComponent } from './documents/document-form/document-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentNewComponent } from './documents/document-new/document-new.component';
import { DocumentFormUiComponent } from './documents/document-form-ui/document-form-ui.component';
import { SrcInputComponent } from './documents/document-form-ui/src-input/src-input.component';
import { AdminDocumentsComponent } from './documents/admin-documents/admin-documents.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { AdminDocumentPanelComponent } from './documents/admin-document-panel/admin-document-panel.component';
import { DocumentPreviewComponent } from './documents/document-preview/document-preview.component';
import { DocumentComponentModule } from '../share/document-component/document-component.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { DraftComponent } from './draft/draft.component';
import { IconShareModule } from '../share/icon-share.module';
import { CategoryFormUiComponent } from './categories/category-form-ui/category-form-ui.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { AceDirectiveModule } from '../share/ace-directive/ace-directive.module';
import { DroppableModule } from '../share/droppable/droppable.module';
import { ShareModule } from '../share/share.module';
import { AceModule } from 'ace-module';
@NgModule({
    declarations: [
        AdminComponent,
        DocumentFormComponent, DocumentNewComponent, DocumentFormUiComponent, SrcInputComponent,
        AdminDocumentsComponent, DocumentEditComponent, AdminDocumentPanelComponent, DocumentPreviewComponent,
        AdminHeaderComponent, DraftComponent, CategoryFormUiComponent, CategoryFormComponent, CategoryNewComponent, CategoryComponent, CategoryListComponent, CategoryEditComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        DocumentComponentModule,
        IconShareModule,
        AceDirectiveModule,
        DroppableModule,
        FormsModule,
        ShareModule,
        AceModule
        /* share */
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminModule {
}
