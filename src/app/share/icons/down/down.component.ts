import { Component, OnInit } from '@angular/core';
import { SVG } from '../svg';

@Component({
    selector: 'app-down',
    templateUrl: './down.component.html',
    styleUrls: [ './down.component.scss' ]
})
export class DownComponent extends SVG implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
