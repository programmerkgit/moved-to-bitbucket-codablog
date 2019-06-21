import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Document } from '../../document';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SrcInputComponent } from './src-input/src-input.component';
import { ThumbnailsStorageService } from '../../service/course-storage/thumbnails-storage.service';

@Component({
    selector: 'app-document-form-ui',
    templateUrl: './document-form-ui.component.html',
    styleUrls: [ './document-form-ui.component.scss' ]
})
export class DocumentFormUiComponent implements OnInit, OnChanges {

    @Input() document: Document;
    @Output() submitClicked = new EventEmitter<Document>();
    @ViewChild(SrcInputComponent, {static: true}) srcInput;

    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private firebaseStorageService: ThumbnailsStorageService
    ) {
    }


    fileSave(): Promise<string> {
        return this.firebaseStorageService.put(this.srcInput.file.name, this.srcInput.file).then(v => {
            return v.ref.getDownloadURL();
        });
    }

    onSubmit() {
        this.fileSave().then(thumbnailUrl => {
            this.formGroup.patchValue({thumbnailUrl});
            const document = new Document(this.formGroup.getRawValue());
            this.submitClicked.emit(document);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.formGroup = this.fb.group({
            id: this.document.id,
            title: this.document.title,
            content: this.document.content,
            thumbnailUrl: this.document.thumbnailUrl,
        });
    }


    ngOnInit() {
    };
}
