import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {ProductsRoutingModule} from './products-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule ,
    RouterModule
  ]
})
export class ProductsModule { }
