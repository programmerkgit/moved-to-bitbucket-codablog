import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Document } from '../../../model/document';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SrcInputComponent } from './src-input/src-input.component';
import { ThumbnailsStorageService } from '../../../service/course-storage/thumbnails-storage.service';

@Component({
    selector: 'app-document-form-ui',
    templateUrl: './document-form-ui.component.html',
    styleUrls: [ './document-form-ui.component.scss' ]
})
export class DocumentFormUiComponent implements OnInit, OnChanges {

    @Input() document: Document;
    @Output() submitClicked = new EventEmitter<Document>();
    @ViewChild(SrcInputComponent, {static: true}) srcInput;


    src: string | ArrayBuffer;
    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private firebaseStorageService: ThumbnailsStorageService
    ) {
    }


    async fileSave(): Promise<string | null> {
        const file = this.srcInput.file;
        let url = null;
        if (file) {
            const result = await await this.firebaseStorageService.put(file.name, file);
            url = await result.ref.getDownloadURL();
        }
        return url;
    }

    onSubmit() {
        this.fileSave().then(thumbnailUrl => {
            if (thumbnailUrl) {
                this.formGroup.patchValue({thumbnailUrl});
            }
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
            show: this.document.show || false,
        });
        this.src = this.document.thumbnailUrl;
    }


    ngOnInit() {
    };
}
