import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DraftComponent } from './draft/draft.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {path: 'documents/new', component: DocumentNewComponent},
            {path: 'documents/draft', component: DraftComponent},
            {path: 'documents/:id', component: DocumentEditComponent},
            {path: 'documents', component: AdminDocumentsComponent},
            {path: '', redirectTo: 'documents', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
