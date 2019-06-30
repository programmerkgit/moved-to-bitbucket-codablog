import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [
      DroppableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
      DroppableDirective
  ]
})
export class DroppableModule { }
