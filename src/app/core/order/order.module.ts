import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './order.component';
import {OrderRoutingModule} from './order-routing.module';
import {CreateOrderComponent} from './create-order/create-order.component';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {FormsModule} from '@angular/forms';
import {UpdatedPageComponent} from './updated-page/updated-page.component';

@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    UpdatedPageComponent
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
