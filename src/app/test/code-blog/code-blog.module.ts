import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBlogRoutingModule } from './code-blog-routing.module';
import { HostComponent } from '../host/host.component';

@NgModule({
  imports: [
    CommonModule,
    CodeBlogRoutingModule
  ],
  entryComponents: [ HostComponent ]
})
export class CodeBlogModule {
}
