import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {User} from '../core/models/user';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  searchValue = '';
  authorizedUser: User;
  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.router.navigate(['/categories']).then();
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
