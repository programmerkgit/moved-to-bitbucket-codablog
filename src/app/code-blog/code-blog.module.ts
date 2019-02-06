import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBlogRoutingModule } from './code-blog-routing.module';
import { CodeBlogComponent } from './code-blog.component';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    CodeBlogComponent,
    IndexComponent,
    GitComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CodeBlogRoutingModule
  ]
})
export class CodeBlogModule {
}
