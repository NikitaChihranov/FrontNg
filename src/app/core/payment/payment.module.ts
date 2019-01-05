import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from './payment.component';
import {FormsModule} from '@angular/forms';
import {PaymentRoutingModule} from './payment-routing.module';
import {ProducerRoutingModule} from '../producers/producer-routing.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaymentRoutingModule
  ],
  exports: [
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
