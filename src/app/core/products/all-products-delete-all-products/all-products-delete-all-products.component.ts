import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'deleteAllProducts',
  templateUrl: './all-products-delete-all-products.component.html',
  styleUrls: ['./all-products-delete-all-products.component.css']
})
export class AllProductsDeleteAllProductsComponent implements OnInit {
  @Output() deleteProducts = new EventEmitter();
  constructor(
  ) { }

  ngOnInit() {
  }

  deleteAllProducts() {
    this.deleteProducts.emit();
  }
}
