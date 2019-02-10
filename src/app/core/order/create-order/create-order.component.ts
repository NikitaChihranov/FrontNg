import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {UserService} from '../../../services/user.service';
import {Product} from '../../models/product';
import {NgForm} from '@angular/forms';
import {Order} from '../../models/order';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  productToOrder: Product;
  authorizedUser: {};
  createdOrder: Order;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService,
    private userService: UserService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
    this.productService.getProductById(res.productId).subscribe((response) =>{
      this.productToOrder = response;
    })
  });
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });

  }

  ngOnInit() {
  }
  createOrder(form: NgForm){
    this.orderService.createOrder(form.value, this.productToOrder, this.authorizedUser).subscribe((res) => {
      this.createdOrder = res;
      this.router.navigate(['/orders'], {queryParams: {order: JSON.stringify(this.createdOrder)}}).then();
    })
  }
}
