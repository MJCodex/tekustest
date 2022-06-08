import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CheckLoginGuard } from '../shared/guard/checkLogin.guard';
import { LayoutDefaultComponent } from '../shared/layout/layout-default/layout-default.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [CheckLoginGuard],
    children: [
      {
        path: 'home',
        component: SubscribersComponent,
        canActivate: [CheckLoginGuard]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
