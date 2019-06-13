import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { BitcoinComponent } from './bitcoin.component';
import { DraftComponent } from './draft/draft.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    BitcoinComponent,
    DraftComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    BitcoinRoutingModule
  ]
})
export class BitcoinModule {
}
