import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeDotMemo } from './code-dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
    {
        path: 'documents', component: CodeDotMemo,
        children: [
            {
                path: ':id', component: DocumentRoutedComponent
            },
            {
                path: '', component: DocumentsComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    entryComponents: []
})
export class CodeDotMemoRoutingModule {
}
