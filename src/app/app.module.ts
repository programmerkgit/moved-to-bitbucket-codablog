import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CodablogModule } from './code-dot-memo/codablog.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SiteModule } from './site/site.module';
import { CustomComponent } from './code-dot-memo/custom/custom.component';
import { AceComponent, AceModule } from 'ace-module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        /* Basic Modules */
        BrowserModule,
        /* App Routing */
        AppRoutingModule,
        /*Firebase*/
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        /* Modules */
        CodablogModule,
        HttpClientModule,
        SiteModule,
        AceModule
    ],
    providers: [],
    exports: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        CustomComponent,
        AceComponent
    ]
})
export class AppModule {
}
