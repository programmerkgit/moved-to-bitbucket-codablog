import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotMemo } from './dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
    {
        path: 'documents', component: DotMemo,
        children: [
            {
                path: ':id', component: DocumentRoutedComponent, data: {
                    page: 'visible'
                }
            },
            {
                path: '', component: DocumentsComponent, data: {
                    page: 'disappear'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    entryComponents: []
})
export class DotMemoRoutingModule {
}
