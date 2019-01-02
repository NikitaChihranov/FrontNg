import {MainMenuComponent} from './main-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../core/about/about.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent, children: [
      {path: 'categories', loadChildren: '../core/categories/categories.module#CategoriesModule'},
      {path: 'users', loadChildren: '../core/users/users.module#UserModule'},
      {path: 'about', component: AboutComponent},
      {path: 'products', loadChildren: '../core/categories/products/products.module#ProductsModule'},
      {path: 'producers', loadChildren: '../core/producers/producer.module#ProducerModule'}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }

