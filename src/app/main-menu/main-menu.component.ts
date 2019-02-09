import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  searchValue = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }
  getProductByName(name) {
    this.productService.getProductByName(name.value).subscribe((res) => {
      this.router.navigate(['/products/productPage'], {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }
  getValue1(input){
    this.searchValue = input.value;
    console.log(this.searchValue);
  }
}
