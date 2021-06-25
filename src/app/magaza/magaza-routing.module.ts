import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazaPage } from './magaza.page';

const routes: Routes = [
  {
    path: '',
    component: MagazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazaPageRoutingModule {}
