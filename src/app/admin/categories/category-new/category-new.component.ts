import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';

@Component({
    selector: 'app-category-new',
    templateUrl: './category-new.component.html',
    styleUrls: [ './category-new.component.scss' ]
})
export class CategoryNewComponent implements OnInit {

    category = new Category();

    constructor() {
    }

    ngOnInit() {
    }

}
