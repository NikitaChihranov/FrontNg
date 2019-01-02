import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProducerComponent} from './producer.component';
import {FormsModule} from '@angular/forms';
import {ProducerRoutingModule} from './producer-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProducerComponent],
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
