import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import {ProductsRoutingModule} from './products-routing.module';
import {RouterModule} from '@angular/router';
import {ViewProductComponent} from './view-product/view-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {CreatedProductComponent} from './created-product/created-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {UpdatedProductComponent} from './updated-product/updated-product.component';
import {EachProductComponent} from './each-product/each-product.component';
import {AllProductsDeleteAllProductsComponent} from './all-products-delete-all-products/all-products-delete-all-products.component';
import {AllProductsCreateProductComponent} from './all-products-create-product/all-products-create-product.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent,
    CreateProductComponent,
    CreatedProductComponent,
    UpdateProductComponent,
    UpdatedProductComponent,
    EachProductComponent,
    AllProductsDeleteAllProductsComponent,
    AllProductsCreateProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }
