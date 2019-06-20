import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodablogComponent } from './codablog.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: '', component: CodablogComponent,
    children: [
      {
        path: 'document/:id', component: DocumentRoutedComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  entryComponents: [CustomComponent]
})
export class CodablogRoutingModule {
}
