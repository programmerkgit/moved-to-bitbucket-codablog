import { Component, OnInit } from '@angular/core';
import { SVG } from '../svg';

@Component({
    selector: 'app-reliable',
    templateUrl: './reliable.component.html',
    styleUrls: [ './reliable.component.scss' ]
})
export class ReliableComponent extends SVG implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
