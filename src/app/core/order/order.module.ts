import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderRoutingModule} from './order-routing.module';
import {CreateOrderComponent} from './create-order/create-order.component';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent,
    UpdateOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
