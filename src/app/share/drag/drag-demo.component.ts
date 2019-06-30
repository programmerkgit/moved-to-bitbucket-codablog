import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-drag-demo',
    templateUrl: './drag-demo.component.html',
    styleUrls: [ './drag-demo.component.scss' ]
})
export class DragDemoComponent implements OnInit {


    counts = {
        drag: 0,
        dragend: 0,
        dragenter: 0,
        dragleave: 0,
        dragover: 0,
        dragstart: 0,
        drop: 0,
    };
    target;

    constructor() {
    }

    ngOnInit() {
    }

    drag(event: DragEvent) {
        this.counts.drag += 1;
    }

    dragend(event) {
        this.counts.dragend += 1;
    }

    dragenter(event: DragEvent) {
        this.counts.dragenter += 1;
    }

    dragleave(event: DragEvent) {
        this.counts.dragleave += 1;
    }

    dragover(event: DragEvent) {
        this.counts.dragover += 1;
    }

    dragstart(event: DragEvent) {
        this.target = event.target;
        this.counts.dragstart += 1;
    }

    drop(event: DragEvent) {
        (<HTMLElement>event.currentTarget).appendChild(this.target);
        this.counts.drop += 1;
    }

}
