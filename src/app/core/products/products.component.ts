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
  authorizedUser: {};

  constructor(private productService: ProductService, private categoriesService: CategoriesService, private producerService: ProducerService,
              private userService: UserService, private router: Router) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });

  }

  viewProduct(title) {
    this.productService.getProductByName(title).subscribe((res) => {
      this.router.navigate(['/products/productPage'], {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(() =>{
      this.productService.getAllProducts().subscribe((res) => {
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


}


