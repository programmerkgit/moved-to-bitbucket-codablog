import { Component, OnInit } from '@angular/core';
import { SVG } from '../svg';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: [ './like.component.scss' ]
})
export class LikeComponent extends SVG implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
