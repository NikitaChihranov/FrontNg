import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {Form, NgForm} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {CategoriesService} from '../../services/categories.service';
import {Category} from '../models/category';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  products: Product[] = [];
  product: Product;
  producers: Producer[] = [];
  authorizedUser: User;
  limit = 6;
  skip = 0;

  constructor(private productService: ProductService, private categoriesService: CategoriesService, private producerService: ProducerService,
              private userService: UserService, private router: Router) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }
  ngOnInit() {
    this.productService.getAllProducts(6, 0).subscribe((res) => {
      this.products = res;
    });
  }
  setDisplay(form){
    this.limit = Number(form.value.displayMode);
    this.productService.getAllProducts(form.value.displayMode, 0).subscribe((res) => {
      this.products = res;
    })
  }
  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(() =>{
      this.productService.getAllProducts(this.limit, this.skip).subscribe((res) => {
        this.products = res;
      });
    });
  }
  deleteAllProducts() {
    this.productService.deleteAllProducts().subscribe((res) => {
      this.products = null;
      }
    );
  }
  toNext(){
    this.skip+=this.limit;
    this.productService.getAllProducts(this.limit, this.skip).subscribe((res) => {
        this.products = res;
      });
  }
  toPrevious(){
    this.skip -= this.limit;
    this.productService.getAllProducts(this.limit, this.skip).subscribe((res) => {
        this.products = res;
      });
  }

}


