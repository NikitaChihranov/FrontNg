import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stats-orders',
  templateUrl: './stats-orders.component.html',
  styleUrls: ['./stats-orders.component.css']
})
export class StatsOrdersComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartData = [];
  public barLabel = 'Orders';
  public barChartLabels;
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartBackground = '#ff0c2c';

  amounts = [];
  labelData = [];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit() {

    this.productService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
      for (let product of this.products) {
        this.labelData.push(product.title);
      }
      this.barChartLabels = this.labelData;
    });
    this.orderService.getAmountsOfOrdersByAllProducts().subscribe((response) => {
        this.barChartData = response;
    });
  }
}
