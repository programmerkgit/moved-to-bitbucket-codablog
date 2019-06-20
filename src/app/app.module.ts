import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CodablogModule } from './codablog/codablog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* Basic Modules */
    BrowserModule,
    /* App Routing */
    AppRoutingModule,
    /* Modules */
    CodablogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
