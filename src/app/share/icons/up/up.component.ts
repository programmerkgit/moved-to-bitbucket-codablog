import { Component, OnInit } from '@angular/core';
import { SVG } from '../svg';

@Component({
    selector: 'app-up',
    templateUrl: './up.component.html',
    styleUrls: [ './up.component.scss' ]
})
export class UpComponent extends SVG implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
