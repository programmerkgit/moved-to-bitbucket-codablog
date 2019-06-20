import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeBlogComponent } from './code-blog.component';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';
import { TestComponent } from '../test.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HostComponent } from '../host/host.component';
import { ComponentFactoryComponent } from '../component-factory/component-factory.component';
import { ComponentInjectionComponent } from '../component-injection/component-injection.component';
import { NgCustomElementComponent } from '../ng-custom-element/ng-custom-element.component';
import { LayoutComponent } from '../layout/layout.component';
import { SvgPathComponent } from '../svg-path/svg-path.component';
import { ZoomInComponent } from '../zoom-in/zoom-in.component';
import { PerspectiveComponent } from '../perspective/perspective.component';
import { RotateComponent } from '../rotate/rotate.component';
import { BizierCurveComponent } from '../bizier-curve/bizier-curve.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: CodeBlogComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'git', component: GitComponent},
      {path: 'bitcoin', loadChildren: () => import('../../bitcoin/bitcoin.module').then(m => m.BitcoinModule)},
      {path: 'test', component: TestComponent}
    ]
  }
];

@NgModule({
  declarations: [
    CodeBlogComponent,
    IndexComponent,
    GitComponent,
    NavigationComponent,
    TestComponent,
    HostComponent,
    ComponentFactoryComponent,
    ComponentInjectionComponent,
    NgCustomElementComponent,
    LayoutComponent,
    SvgPathComponent,
    ZoomInComponent,
    PerspectiveComponent,
    RotateComponent,
    BizierCurveComponent
  ],
  imports: [ RouterModule.forChild(routes), CommonModule ],
  exports: [ RouterModule ]
})
export class CodeBlogRoutingModule {
}
