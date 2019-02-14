import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProducerService} from '../../../services/producer.service';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vi-p',
  templateUrl: './vi-p.component.html',
  styleUrls: ['./vi-p.component.css']
})
export class ViPComponent implements OnInit {
  id = '';
  products: Product[] = [];
  msg = '';

  constructor(private activatedRoute: ActivatedRoute,
              private producerService: ProducerService,
              private productService: ProductService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
    });
    this.producerService.viewAllProductsByProducer(this.id).subscribe((res) => {
      if (res.length === 0) {
        this.msg = 'There are no products made by this producer';
      } else {
        this.products = res;
      }
    });
  }

  viewProduct(id) {
    this.productService.getProductById(id).subscribe((res) => {
      this.router.navigate(['/products/productPage'],
        {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }

}
