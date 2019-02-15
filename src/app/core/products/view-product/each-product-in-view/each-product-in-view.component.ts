import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-each-product-in-view',
  templateUrl: './each-product-in-view.component.html',
  styleUrls: ['./each-product-in-view.component.css']
})
export class EachProductInViewComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
