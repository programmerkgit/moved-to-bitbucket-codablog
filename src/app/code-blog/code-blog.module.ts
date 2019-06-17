import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBlogRoutingModule } from './code-blog-routing.module';
import { CodeBlogComponent } from './code-blog.component';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from '../test/test.component';
import { HostComponent } from '../test/host/host.component';
import { ComponentFactoryComponent } from '../test/component-factory/component-factory.component';
import { ComponentInjectionComponent } from '../test/component-injection/component-injection.component';
import { NgCustomElementComponent } from '../test/ng-custom-element/ng-custom-element.component';
import { LayoutComponent } from '../test/layout/layout.component';
import { SvgPathComponent } from '../test/svg-path/svg-path.component';
import { ZoomInComponent } from '../test/zoom-in/zoom-in.component';
import { PerspectiveComponent } from '../test/perspective/perspective.component';
import { RotateComponent } from '../test/rotate/rotate.component';
import { BizierCurveComponent } from '../test/bizier-curve/bizier-curve.component';

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
  imports: [
    CommonModule,
    CodeBlogRoutingModule
  ],
  entryComponents: [HostComponent]
})
export class CodeBlogModule {
}
