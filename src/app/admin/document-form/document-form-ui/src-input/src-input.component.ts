import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-src-input',
    templateUrl: './src-input.component.html',
    styleUrls: [ './src-input.component.scss' ]
})
export class SrcInputComponent implements OnInit {


    reader: FileReader;


    file: File;

    @Input() src: string | ArrayBuffer;

    constructor() {
    }


    dragover(a) {
        a.preventDefault();
    }

    drop(a) {
        a.preventDefault();
        this.file = a.dataTransfer.files[ 0 ];
        this.readFile(this.file);
    }

    fileChange(event) {
        if (event.target) {
            const file = event.target.files[ 0 ];
            this.file = file;
            this.readFile(file);
        }
    }

    readFile(file: File) {
        this.reader.readAsDataURL(file);
    }

    ngOnInit() {
        this.reader = new FileReader();
        this.reader.onload = () => {
            this.src = this.reader.result;
        };
    }

}
