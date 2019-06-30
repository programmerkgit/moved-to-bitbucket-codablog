import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from '../../../service/category-service.service';
import { Observable } from 'rxjs';
import { Category } from '../../../model/category';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: [ './category-edit.component.scss' ]
})
export class CategoryEditComponent implements OnInit {


    category$: Observable<Category>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private categoryServiceService: CategoryServiceService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            const id = param.get('id');
            this.category$ = this.categoryServiceService.findById(id);
        });
    }

}
