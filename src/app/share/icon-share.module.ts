import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsefulComponent } from './icons/useful/useful.component';
import { UpComponent } from './icons/up/up.component';
import { DownComponent } from './icons/down/down.component';
import { LikeComponent } from './icons/like/like.component';
import { ReliableComponent } from './icons/reliable/reliable.component';

@NgModule({
    declarations: [
        UsefulComponent,
        UpComponent,
        DownComponent,
        LikeComponent,
        ReliableComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsefulComponent,
        UpComponent,
        DownComponent,
        LikeComponent,
        ReliableComponent
    ]
})
export class IconShareModule {
}
