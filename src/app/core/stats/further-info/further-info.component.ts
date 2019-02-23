import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {CategoriesService} from '../../../services/categories.service';
import {ProducerService} from '../../../services/producer.service';
import {Category} from '../../models/category';
import {Product} from '../../models/product';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-further-info',
  templateUrl: './further-info.component.html',
  styleUrls: ['./further-info.component.css']
})
export class FurtherInfoComponent implements OnInit {
  id = '';
  categories: Category[] = [];
  products: Product[] = [];
  producers: Producer[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
      this.categoriesService.getCategoriesByAuthor(this.id).subscribe((res) => {
        this.categories = res;
        this.productService.getProductsByAuthor(this.id).subscribe((res) => {
          this.products = res;
          this.producerService.getProducersByAuthor(this.id).subscribe((res) => {
            this.producers = res;
          })
        });
      });
    })
  }
}
