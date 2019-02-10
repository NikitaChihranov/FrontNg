import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'app-created-product',
  templateUrl: './created-product.component.html',
  styleUrls: ['./created-product.component.css']
})
export class CreatedProductComponent implements OnInit {
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
