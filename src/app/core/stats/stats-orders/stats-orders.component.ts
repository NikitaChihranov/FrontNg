import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {Product} from '../../models/product';

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

  fromDate: Date;
  toDate: Date;
  amounts = [];
  labelData = [];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit() {

  }
  getStats() {
        if (this.fromDate!=undefined && this.toDate!=undefined){
          this.productService.getAllProducts(1000000, 0).subscribe((res) => {
            this.labelData = [];
            this.products = res;
            for (let product of this.products) {
            this.labelData.push(product.title);
          }
          this.barChartLabels = this.labelData;
        });
          this.orderService.getAmountsOfOrdersByAllProducts(this.fromDate, this.toDate).subscribe((res) => {
              this.barChartData = res;
          });
        }
      }
  cl(input1) {
    this.fromDate = input1.value;
    console.log(this.fromDate);
  }
  cl2(input){
    this.toDate = input.value;
    console.log(this.toDate);
  }

}
// this.productService.getAllProducts().subscribe((res) => {
//   console.log(res);
//   this.products = res;
//   for (let product of this.products) {
//     this.labelData.push(product.title);
//   }
//   this.barChartLabels = this.labelData;
// });
// this.orderService.getAmountsOfOrdersByAllProducts().subscribe((response) => {
//   this.barChartData = response;
// });
// }
// }
