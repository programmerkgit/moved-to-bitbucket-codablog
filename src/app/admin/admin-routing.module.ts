import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DocumentNewComponent } from './documents/document-new/document-new.component';
import { AdminDocumentsComponent } from './documents/admin-documents/admin-documents.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DraftComponent } from './draft/draft.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {
                path: 'documents', children: [
                    {path: 'new', component: DocumentNewComponent},
                    {path: 'draft', component: DraftComponent},
                    {path: ':id', component: DocumentEditComponent},
                    {path: '', component: AdminDocumentsComponent},
                ]
            },
            {
                path: 'categories', children: [
                    {path: 'new', component: CategoryNewComponent},
                    {path: ':id', component: CategoryEditComponent},
                    {path: '', component: CategoryListComponent}
                ]
            },
            {path: '', redirectTo: 'documents', pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
