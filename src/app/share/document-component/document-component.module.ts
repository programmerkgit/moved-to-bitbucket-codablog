import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { DocumentFeedBacksComponent } from './document/document-feedbacks/document-feed-backs.component';
import { IconShareModule } from '../icon-share.module';
import { NgMatShareModule } from '../ng-mat-share.module';
import { AnimatedStickyHeaderComponent } from '../animated-sticky-header/animated-sticky-header.component';

const shareModule = [
    DocumentComponent,
    DocumentFeedBacksComponent,
    AnimatedStickyHeaderComponent
];

@NgModule({
    declarations: [
        ...shareModule
    ],
    imports: [
        CommonModule,
        IconShareModule,
        NgMatShareModule
    ],
    exports: [
        ...shareModule
    ]
})
export class DocumentComponentModule {
}
