import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotAceDirective } from './dot-ace.directive';

@NgModule({
    declarations: [
        DotAceDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DotAceDirective
    ]
})
export class AceDirectiveModule {
}
