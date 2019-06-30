import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { Document } from '../../../model/document';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SrcInputComponent } from './src-input/src-input.component';
import { ThumbnailsStorageService } from '../../../service/course-storage/thumbnails-storage.service';
import { DotAceDirective } from '../../../share/ace-directive/dot-ace.directive';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-document-form-ui',
    templateUrl: './document-form-ui.component.html',
    styleUrls: [ './document-form-ui.component.scss' ]
})
export class DocumentFormUiComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    @Input() document: Document;
    @Output() submitClicked = new EventEmitter<Document>();
    @Output() deleteClicked = new EventEmitter();
    @ViewChild(SrcInputComponent, {static: true}) srcInput;
    @ViewChild(DotAceDirective, {static: true}) ace;

    src: string | ArrayBuffer;
    formGroup: FormGroup;
    subscription: Subscription;

    thumbnailOn: boolean;

    constructor(
        private fb: FormBuilder,
        private firebaseStorageService: ThumbnailsStorageService
    ) {
    }

    thumbnailToggle(event) {
        this.thumbnailOn = event.target.checked;
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

    ngAfterViewInit(): void {
        this.ace.setValue(this.document.content || 'content');
        this.ace.clearSelection();
        this.subscription = this.ace.sessionChange.subscribe(a => {
            this.formGroup.patchValue({content: this.ace.getValue()});
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.formGroup = this.fb.group({
            id: this.document.id,
            title: this.document.title,
            content: this.document.content,
            thumbnailUrl: this.document.thumbnailUrl,
            show: !!this.document.show,
            type: this.document.type
        });
        this.src = this.document.thumbnailUrl;
        this.thumbnailOn = !!this.document.thumbnailUrl;
    }


    ngOnInit() {
    };
}
