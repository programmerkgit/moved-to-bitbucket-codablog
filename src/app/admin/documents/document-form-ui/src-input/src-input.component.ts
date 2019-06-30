import { Component, Input, OnInit } from '@angular/core';
import { state, style, trigger } from '@angular/animations';

const animations = [
    trigger('dragover', [
        state('over', style({
            backgroundColor: '#919191'
        })),
        state('out', style({
            backgroundColor: '#ebebeb'
        }))
    ])
];


@Component({
    selector: 'app-src-input',
    templateUrl: './src-input.component.html',
    styleUrls: [ './src-input.component.scss' ],
    animations: animations
})
export class SrcInputComponent implements OnInit {


    reader: FileReader;

    state = 'out';
    file: File;

    @Input() src: string | ArrayBuffer;

    constructor() {
    }


    dragover(a) {
        a.preventDefault();
        this.state = 'over';
    }

    dragleave(a) {
        a.preventDefault();
        this.state = 'out';
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
