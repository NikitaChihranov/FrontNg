import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updated-product',
  templateUrl: './updated-product.component.html',
  styleUrls: ['./updated-product.component.css']
})
export class UpdatedProductComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.product = JSON.parse(res.product);
    })
  }
}
