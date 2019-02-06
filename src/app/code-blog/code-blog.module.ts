import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBlogRoutingModule } from './code-blog-routing.module';
import { CodeBlogComponent } from './code-blog.component';

@NgModule({
  declarations: [
    CodeBlogComponent
  ],
  imports: [
    CommonModule,
    CodeBlogRoutingModule
  ]
})
export class CodeBlogModule {
}
