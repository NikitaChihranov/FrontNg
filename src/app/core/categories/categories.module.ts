import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import {ProductsComponent} from '../products/products.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ViComponent} from './vi/vi.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {CreatedComponent} from './created/created.component';
import {AllCategoriesComponent} from './all-categories/all-categories.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ViComponent,
    CreateCategoryComponent,
    CreatedComponent,
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class CategoriesModule {
}
