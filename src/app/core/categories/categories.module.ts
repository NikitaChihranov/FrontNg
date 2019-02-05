import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import {ProductsComponent} from '../products/products.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ViComponent} from '../../vi/vi.component';

@NgModule({
  declarations: [CategoriesComponent, ViComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class CategoriesModule {
}
