import {Component, OnInit} from '@angular/core';
import {Product} from '../core/models/product';
import {ProducerService} from '../services/producer.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vi-p',
  templateUrl: './vi-p.component.html',
  styleUrls: ['./vi-p.component.css']
})
export class ViPComponent implements OnInit {
  data: Product[] = [];

  constructor(private producerService: ProducerService,
              private productService: ProductService,
              private router: Router
              ) {
  }

  ngOnInit() {
    this.producerService.dataSource.subscribe((res) => {
      for (const product of res) {
        this.data.push(product);
      }
    });
  }
  viewProduct(title) {
    this.productService.getProductByName(title).subscribe((res) => {
      this.router.navigate(['/products/productPage'],
        {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }

}
