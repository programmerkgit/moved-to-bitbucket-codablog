import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: `[appDroppable]`
})
export class DroppableDirective {


    constructor() {
    }

    @HostListener('dragover', [ '$event' ]) dragOver(event: DragEvent) {
        event.preventDefault();
    }

}
