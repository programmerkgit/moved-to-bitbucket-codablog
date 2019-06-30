import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDemoComponent } from './drag/drag-demo.component';
import { DroppableModule } from './droppable/droppable.module';

const shareModules = [
    DragDemoComponent
];

@NgModule({
    declarations: [ ...shareModules ],
    imports: [
        CommonModule,
        DroppableModule
    ],
    exports: [ ...shareModules ]
})
export class ShareModule {
}
