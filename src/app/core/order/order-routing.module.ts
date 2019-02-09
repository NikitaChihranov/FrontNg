import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {FormsModule} from '@angular/forms';
import {UpdateOrderComponent} from './update-order/update-order.component';
import {UpdatedPageComponent} from './updated-page/updated-page.component';

const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: 'create', component: CreateOrderComponent},
  {path: 'updateOrder', component: UpdateOrderComponent},
  {path: 'updatedPage', component: UpdatedPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class OrderRoutingModule { }
