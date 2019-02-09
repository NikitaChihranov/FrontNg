import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from './main-menu.component';
import {AboutComponent} from '../core/about/about.component';
import {IndexComponent} from '../index/index.component';
import {CategoriesComponent} from '../core/categories/categories.component';
import {ProducerComponent} from '../core/producers/producer.component';
import {UserPageAdminComponent} from '../core/users/user-page-admin/user-page-admin.component';
import {MainMenuRoutingModule} from './main-menu-routing.module';
import {ProducerRoutingModule} from '../core/producers/producer-routing.module';
import {RouterModule} from '@angular/router';
import {AppModule} from '../app.module';
import {ProductsRoutingModule} from '../core/products/products-routing.module';
import {ProductsComponent} from '../core/products/products.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    AboutComponent,
    IndexComponent,
    CategoriesComponent,
    ProducerComponent,
    UserPageAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    AppModule,
    ProducerRoutingModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    MainMenuRoutingModule
  ]
})
export class MainMenuModule { }
