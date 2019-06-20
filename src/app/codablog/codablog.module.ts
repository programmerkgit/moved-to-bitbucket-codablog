import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodablogRoutingModule } from './codablog-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { CodablogComponent } from './codablog.component';
import { DocumentComponent } from './document/document.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { CodeBlogRoutingModule } from '../test/code-blog/code-blog-routing.module';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    BlogHeaderComponent,
    CodablogComponent,
    DocumentComponent,
    DocumentRoutedComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    CodablogRoutingModule
  ],
  exports: [
  ]

})
export class CodablogModule {
}
