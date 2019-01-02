import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {ProductsRoutingModule} from './products-routing.module';
import {CategoriesComponent} from '../categories.component';
import {RouterModule} from '@angular/router';
import {AboutAllComponent} from './about-all/about-all.component';
import {CategoriesModule} from '../categories.module';

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
