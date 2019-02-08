import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  productToOrder: {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.productService.getProductById(res.productId).subscribe((response) =>{
        console.log(response);
        this.productToOrder = response;
      })
    })
  }
  createOrder(form){
    this.orderService.createOrder(form.value).subscribe((res) => {
      console.log(res);
    })
  }
}
