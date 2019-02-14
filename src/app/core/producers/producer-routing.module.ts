import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProducerComponent} from './producer.component';
import {ViPComponent} from './vi-p/vi-p.component';
import {SearchProducerByNameComponent} from './search-producer-by-name/search-producer-by-name.component';

const routes: Routes = [
  {path: '', component: ProducerComponent},
  {path: 'viewAll', component: ViPComponent},
  {path: 'search', component: SearchProducerByNameComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
