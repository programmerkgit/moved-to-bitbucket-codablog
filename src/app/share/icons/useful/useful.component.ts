import { Component, OnInit } from '@angular/core';
import { SVG } from '../svg';

@Component({
    selector: 'app-useful',
    templateUrl: './useful.component.html',
    styleUrls: [ './useful.component.scss' ]
})
export class UsefulComponent extends SVG implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
