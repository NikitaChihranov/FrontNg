import { Component, OnInit } from '@angular/core';
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
  foundProductByName: Product;
  deletedProduct: {};
  product: Product;
  producers: Producer[] = [];
  filesToUpload: File[];
  filesToUpdate: File[];
  authorizedUser: {};

  constructor( private productService: ProductService, private categoriesService: CategoriesService, private producerService: ProducerService,
  private userService: UserService, private router: Router){
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
      this.productService.getAllProducts().subscribe((res) => {
        this.products = res;
      });
    this.categoriesService.getAllCategories().subscribe((res) =>{
      this.categories = res ? res : [];
    });
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res ? res : [];
    });
  }
  viewProduct(title){
    this.productService.getProductByName(title).subscribe((res) => {
      this.router.navigate(['/products/productPage'], {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }
  getProductByName(name) {
    this.productService.getProductByName(name.value).subscribe((res) => this.foundProductByName = res);
  }
  createProduct(productForm: NgForm) {
    this.productService.createProduct(productForm.value).subscribe((res) => {
        this.productService.addPhotos(this.filesToUpload, res).subscribe((response) => {
        });
  });
  }
  updateProduct(productForm: NgForm) {
    this.product = {...this.product, ...productForm.value};
    this.productService.updateProduct(this.product.title, this.product).subscribe((res) => {
      this.productService.updatePhotos(this.filesToUpdate, res).subscribe((response) => {});
    });

    }

  deleteProduct(form) {
    this.productService.deleteProduct(form.value).subscribe((res) => this.deletedProduct = res);
  }

  deleteAllProducts() {
    this.productService.deleteAllProducts().subscribe((res) => {
        this.products = null;
      }
    );
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }
  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }
}


