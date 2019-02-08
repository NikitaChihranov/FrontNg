import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ViewProductComponent} from './view-product/view-product.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'productPage', component: ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
