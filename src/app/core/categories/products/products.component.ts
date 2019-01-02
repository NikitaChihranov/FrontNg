import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {CategoriesService} from '../../../services/categories.service';
import {Category} from '../../models/category';

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

  constructor( private productService: ProductService, private categoriesService: CategoriesService ) {
  }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((res) => this.categories = res ? res : []);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => this.products = res);
  }

  getProductById(id) {
    this.productService.getProductById(id.value).subscribe((res) => this.foundProductById = res);
  }

  createProduct(productForm: NgForm) {
    this.productService.createProduct(productForm.value).subscribe((res) => this.products.push(res));
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
}


