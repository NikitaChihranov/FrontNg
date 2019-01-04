import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from '../../main-menu/main-menu.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {ProducerComponent} from './producer.component';
import {ViPComponent} from '../../vi-p/vi-p.component';

const routes: Routes = [
  {path: '', component: ProducerComponent},
  {path: 'viewAll', component: ViPComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
