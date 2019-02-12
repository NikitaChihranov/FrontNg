import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service';
import {ProductService} from '../../../services/product.service';
import {CategoriesService} from '../../../services/categories.service';
import {ProducerService} from '../../../services/producer.service';

@Component({
  selector: 'app-user-get-stats',
  templateUrl: './user-get-stats.component.html',
  styleUrls: ['./user-get-stats.component.css']
})
export class UserGetStatsComponent implements OnInit {
  id = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService

  ){ }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
      console.log(this.id);
      this.productService.getProductsByAuthor(this.id).subscribe((res) => {
        console.log(res);
      });
      this.categoriesService.getCategoriesByAuthor(this.id).subscribe((res) => {
        console.log(res);
      });
      this.producerService.getProducersByAuthor(this.id).subscribe((res) => {
        console.log(res);
      })
    })
  }

}
