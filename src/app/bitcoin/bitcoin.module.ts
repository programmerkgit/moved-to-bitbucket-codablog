import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { BitcoinComponent } from './bitcoin.component';
import { DraftComponent } from './draft/draft.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { S00Component } from './c00/s00/s00.component';

@NgModule({
  declarations: [
    BitcoinComponent,
    DraftComponent,
    IntroductionComponent,
    S00Component
  ],
  imports: [
    CommonModule,
    BitcoinRoutingModule
  ]
})
export class BitcoinModule {
}
