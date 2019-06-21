import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from '../../codablog/document/document.component';

const shareMdouel = [
    DocumentComponent
];

@NgModule({
    declarations: [
        ...shareMdouel
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ...shareMdouel
    ]
})
export class DocumentComponentModule {
}
