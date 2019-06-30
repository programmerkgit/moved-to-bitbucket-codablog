import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../service/category-service.service';
import { Observable } from 'rxjs';
import { Category } from '../../../model/category';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: [ './category-list.component.scss' ]
})
export class CategoryListComponent implements OnInit {

    categories$: Observable<Category[]>;

    constructor(
        private categoryServiceService: CategoryServiceService
    ) {
    }

    ngOnInit() {
        this.categories$ = this.categoryServiceService.findAll();
    }

}
