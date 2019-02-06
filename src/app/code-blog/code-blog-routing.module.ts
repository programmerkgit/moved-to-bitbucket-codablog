import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBlogComponent } from './code-blog.component';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';

const routes: Routes = [
  {
    path: '', component: CodeBlogComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'git', component: GitComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CodeBlogRoutingModule {
}
