import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { CategoryServiceService } from '../../../service/category-service.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: [ './category-form.component.scss' ]
})
export class CategoryFormComponent implements OnInit {

    @Input() category: Category = new Category();

    constructor(
        private categoryServiceService: CategoryServiceService
    ) {
    }

    save(category: Category) {
        if (this.category.id) {
            this.update(category.id, category.dataValues()).subscribe();
        } else {
            this.create(category.dataValues()).subscribe();
        }
    }

    update(id: string, values: Partial<Category>) {
        return this.categoryServiceService.update(id, values).pipe(
            tap(res => {
                this.category = new Category(res);
            })
        );
    }

    create(values: Partial<Category>) {
        return this.categoryServiceService.create(values, this.category.dataValues()).pipe(
            tap(res => {
                this.category = new Category(res);
            })
        );
    }

    ngOnInit() {
    }

}
