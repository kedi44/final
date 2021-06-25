import {RouterModule,Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {NgModule} from '@angular/core';

const routes:Routes=[
    {
        path:'',
        component:TabsPage,
        children:[
              {
                path: 'magaza',
                loadChildren: () => import('../magaza/magaza.module').then( m => m.MagazaPageModule)
              },
              {
                path: 'satici',
                loadChildren: () => import('../satici/satici.module').then( m => m.SaticiPageModule)
              },
              {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
              }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class TabsRoutingModule{}