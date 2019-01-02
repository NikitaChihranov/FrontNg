import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products.component';
import {CategoriesRoutingModule} from '../categories-routing.module';
import {AboutAllComponent} from './about-all/about-all.component';

const routes: Routes = [
  {path: '', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
