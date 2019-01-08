import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {Form, NgForm} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {CategoriesService} from '../../../services/categories.service';
import {Category} from '../../models/category';
import {ProducerService} from '../../../services/producer.service';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  products: Product[] = [];
  foundProductById: {};
  deletedProduct: {};
  product: Product;
  updatedProduct: {};
  deletedProducts: Product[] = [];
  producers: Producer[] = [];
  filesToUpload: File[];

  constructor( private productService: ProductService, private categoriesService: CategoriesService, private producerService: ProducerService ) {
  }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((res) =>{
      this.categories = res ? res : [];
    });
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res ? res : [];
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

  getProductById(id) {
    this.productService.getProductById(id.value).subscribe((res) => this.foundProductById = res);
  }
  createProduct(productForm: any) {
    console.log(this.filesToUpload);
    this.productService.createProduct(productForm.value).subscribe((res) => {
      this.products.push(res);
        this.productService.addPhotos(this.filesToUpload, res).subscribe((res1) => console.log(res1));
    });
  }

  updateProduct(productForm: NgForm) {
    this.product = {...this.product, ...productForm.value};
    this.productService.updateProduct(this.product._id, this.product).subscribe((res) =>
      this.updatedProduct = res);
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id.value).subscribe((res) => this.deletedProduct = res);
  }

  deleteAllProducts() {
    this.productService.deleteAllProducts().subscribe((res) => {
        const productsToDelete = this.products;
        for (const product of productsToDelete) {
          this.deletedProducts.push(product);
        }
      }
    );
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
    console.log(this.filesToUpload);
  }
}


