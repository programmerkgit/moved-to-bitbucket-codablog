import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-src-input',
    templateUrl: './src-input.component.html',
    styleUrls: [ './src-input.component.scss' ]
})
export class SrcInputComponent implements OnInit {


    reader: FileReader;

    file: File;

    src;

    constructor() {
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
