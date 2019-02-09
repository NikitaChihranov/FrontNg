import {MainMenuComponent} from './main-menu.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from '../core/about/about.component';
import {AllOrdersComponent} from '../core/order/all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '', component: MainMenuComponent, children: [
      {path: 'categories', loadChildren: '../core/categories/categories.module#CategoriesModule'},
      {path: 'users', loadChildren: '../core/users/users.module#UserModule'},
      {path: 'about', component: AboutComponent},
      {path: 'products', loadChildren: '../core/products/products.module#ProductsModule'},
      {path: 'producers', loadChildren: '../core/producers/producer.module#ProducerModule'},
      {path: 'allComments', loadChildren: '../core/comment/comment.module#CommentModule'},
      {path: 'orders', loadChildren: '../core/order/order.module#OrderModule'},
      {path: 'allOrders', component: AllOrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule {
}

