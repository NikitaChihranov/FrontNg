import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/order.service';
import {ProductService} from '../../../services/product.service';
import {CategoriesService} from '../../../services/categories.service';
import {ProducerService} from '../../../services/producer.service';
import {Category} from '../../models/category';
import {Product} from '../../models/product';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-user-get-stats',
  templateUrl: './user-get-stats.component.html',
  styleUrls: ['./user-get-stats.component.css']
})
export class UserGetStatsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartData1;
  public barLabel = 'amount';
  public barChartLabels = ['Categories', 'Products', 'Producers', ''];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  id = '';
  barChartData = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService
    private router: Router
  ){ }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
      this.categoriesService.getCategoriesByAuthor(this.id).subscribe((res) => {
        this.barChartData.push(res.length);
      this.productService.getProductsByAuthor(this.id).subscribe((res) => {
        this.barChartData.push(res.length);

          this.producerService.getProducersByAuthor(this.id).subscribe((res) => {
            this.barChartData.push(res.length);
            this.barChartData1 = this.barChartData;
        })
        });
      });
    })
  }
  getFurther(){
    this.router.navigate(['/orders/getFurther'],{queryParams: {id: JSON.stringify(this.id)}});
  }

}
