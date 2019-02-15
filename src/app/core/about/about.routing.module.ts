import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from '../../main-menu/main-menu.component';
import {AboutComponent} from './about.component';
import {AllOrdersComponent} from '../order/all-orders/all-orders.component';
import {NgModule} from '@angular/core';
import {CreateAboutComponent} from './create-about/create-about.component';
import {UpdateAboutComponent} from './update-about/update-about.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'create', component: CreateAboutComponent},
  {path: 'update', component: UpdateAboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}

