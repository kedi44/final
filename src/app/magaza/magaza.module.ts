import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazaPageRoutingModule } from './magaza-routing.module';

import { MagazaPage } from './magaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazaPageRoutingModule
  ],
  declarations: [MagazaPage]
})
export class MagazaPageModule {}
