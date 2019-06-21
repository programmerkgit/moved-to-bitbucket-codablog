import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodablogComponent } from './codablog.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CustomComponent } from './custom/custom.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
    {
        path: 'documents', component: CodablogComponent,
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
    entryComponents: [ CustomComponent ]
})
export class CodablogRoutingModule {
}
