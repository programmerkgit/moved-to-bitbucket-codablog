import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DotMemoModule } from './dot-memo/dot-memo.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SiteModule } from './site/site.module';
import { CustomComponent } from './dot-memo/custom/custom.component';
import { AceComponent, AceModule } from 'ace-module';
import { UsefulComponent } from './share/icons/useful/useful.component';
import { IconShareModule } from './share/icon-share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDemoComponent } from './share/drag/drag-demo.component';
import { ShareModule } from './share/share.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        /* Basic Modules */
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        /* App Routing */
        AppRoutingModule,
        /*Firebase*/
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        /* Modules */
        IconShareModule,
        DotMemoModule,
        HttpClientModule,
        SiteModule,
        AceModule,
        BrowserAnimationsModule,
        ShareModule
    ],
    providers: [],
    exports: [
        UsefulComponent
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        CustomComponent,
        AceComponent,
        DragDemoComponent
    ]
})
export class AppModule {
}
