import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../../model/category';

@Component({
    selector: 'app-category-form-ui',
    templateUrl: './category-form-ui.component.html',
    styleUrls: [ './category-form-ui.component.scss' ]
})
export class CategoryFormUiComponent implements OnInit, OnChanges {


    @Output() saveClicked = new EventEmitter<Category>();
    @Input() category: Category;
    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {
    }

    save() {
        const category = new Category(this.formGroup.getRawValue());
        this.saveClicked.emit(category);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.formGroup = this.fb.group({
            name: this.category.name,
            type: this.category.type,
            id: this.category.id
        });
    }

    ngOnInit() {
    }

}
