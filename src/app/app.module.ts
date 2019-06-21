import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CodablogModule } from './codablog/codablog.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

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
        HttpClientModule

    ],
    providers: [],
    exports: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
