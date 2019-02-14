import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProducerComponent} from './producer.component';
import {FormsModule} from '@angular/forms';
import {ProducerRoutingModule} from './producer-routing.module';
import {RouterModule} from '@angular/router';
import {ViPComponent} from './vi-p/vi-p.component';
import {EachProducerComponent} from './each-producer/each-producer.component';
import {SearchProducerComponent} from './search-producer/search-producer.component';
import {SearchProducerByNameComponent} from './search-producer-by-name/search-producer-by-name.component';
import {DeleteAllProducersComponent} from './delete-all-producers/delete-all-producers.component';
import {UpdateProducerComponent} from './update-producer/update-producer.component';
import {CreateProducerComponent} from './create-producer/create-producer.component';

@NgModule({
  declarations: [
    ProducerComponent,
    ViPComponent,
    EachProducerComponent,
    SearchProducerComponent,
    SearchProducerByNameComponent,
    DeleteAllProducersComponent,
    UpdateProducerComponent,
    CreateProducerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProducerRoutingModule
  ],
  exports: [
    ProducerRoutingModule
  ]
})
export class ProducerModule { }
