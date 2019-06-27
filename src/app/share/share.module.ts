import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsefulComponent } from './icons/useful/useful.component';

@NgModule({
    declarations: [
        UsefulComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsefulComponent
    ]
})
export class ShareModule {
}
