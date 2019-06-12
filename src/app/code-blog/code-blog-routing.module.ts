import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBlogComponent } from './code-blog.component';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  {
    path: '', component: CodeBlogComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'git', component: GitComponent},
      {path: 'bitcoin', loadChildren: () => import('../bitcoin/bitcoin.module').then(m => m.BitcoinModule)},
      {path: 'test', component: TestComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CodeBlogRoutingModule {
}
