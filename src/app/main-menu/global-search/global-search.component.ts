import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  searchValue = '';
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  getProductByName(name) {
    this.productService.getProductByName(name.value).subscribe((res) => {
      this.router.navigate(['/products/productPage'], {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }
  getValue(input){
    this.searchValue = input.value;
  }
}
