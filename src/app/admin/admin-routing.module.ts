import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {path: 'documents/new', component: DocumentNewComponent},
            {path: 'documents/:id'},
            {path: 'documents', component: AdminDocumentsComponent},
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
