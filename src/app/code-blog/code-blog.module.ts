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
    NgCustomElementComponent
  ],
  imports: [
    CommonModule,
    CodeBlogRoutingModule
  ],
  entryComponents: [HostComponent]
})
export class CodeBlogModule {
}
