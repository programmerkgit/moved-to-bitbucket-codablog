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
        SiteModule

    ],
    providers: [],
    exports: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
