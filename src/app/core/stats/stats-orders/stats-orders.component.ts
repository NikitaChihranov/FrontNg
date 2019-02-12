import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-stats-orders',
  templateUrl: './stats-orders.component.html',
  styleUrls: ['./stats-orders.component.css']
})
export class StatsOrdersComponent implements OnInit {
  products: Product[] = [];
  amounts = [];

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      for (let product of this.products) {
        this.orderService.getAmountOfOrdersByProduct(product._id).subscribe((res) => {
          this.amounts.push(res);
        });
      }
    })
  }
}
