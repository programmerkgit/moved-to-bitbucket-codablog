import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
