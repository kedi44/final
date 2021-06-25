import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaticiPageRoutingModule } from './satici-routing.module';

import { SaticiPage } from './satici.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaticiPageRoutingModule
  ],
  declarations: [SaticiPage]
})
export class SaticiPageModule {}
