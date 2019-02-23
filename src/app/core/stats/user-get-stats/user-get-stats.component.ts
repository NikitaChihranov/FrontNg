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
    barThickness: 0.1
  };
  public barChartData1;
  public barLabel = 'amount';
  public barChartLabels = ['Categories', 'Products', 'Producers'];
  public barChartType = 'bar';
  public barChartLegend = true;
  id = '';
  barChartData = [];
  categories: Category[] = [];
  products: Product[] = [];
  producers: Producer[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService,
    private router: Router
  ){ }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
      this.categoriesService.getCategoriesByAuthor(this.id).subscribe((res1) => {
        this.barChartData.push(res1.length);
        this.categories = res1;
      this.productService.getProductsByAuthor(this.id).subscribe((res2) => {
        this.barChartData.push(res2.length);
        this.products = res2;
          this.producerService.getProducersByAuthor(this.id).subscribe((res3) => {
            this.barChartData.push(res3.length);
            this.producers = res3;
            this.barChartData1 = this.barChartData;
        })
        });
      });
    })
  }
  getFurther(){
    this.router.navigate(['/stats/getFurther'],{queryParams: {id: JSON.stringify(this.id)}}).then();
  }

}
