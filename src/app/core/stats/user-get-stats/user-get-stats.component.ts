import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  id = '';
  categories: Category[];
  products: Product[];
  producers: Producer[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService

  ){ }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
      this.productService.getProductsByAuthor(this.id).subscribe((res) => {
        this.products = res;
      });
      this.categoriesService.getCategoriesByAuthor(this.id).subscribe((res) => {
        this.categories = res;
      });
      this.producerService.getProducersByAuthor(this.id).subscribe((res) => {
        this.producers = res;
      })
    })
  }

}
