import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {CreatedProductComponent} from './created-product/created-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {UpdatedProductComponent} from './updated-product/updated-product.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'productPage', component: ViewProductComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'createdProduct', component: CreatedProductComponent},
  {path: 'update', component: UpdateProductComponent},
  {path: 'updatedProduct', component: UpdatedProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
