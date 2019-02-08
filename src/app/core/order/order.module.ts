import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderRoutingModule} from './order-routing.module';
import {CreateOrderComponent} from './create-order/create-order.component';

@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
