import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from '../../main-menu/main-menu.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import {ProducerComponent} from './producer.component';

const routes: Routes = [
  {path: '', component: ProducerComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
