import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Category} from '../../models/category';
import {CategoriesService} from '../../../services/categories.service';
import {ProducerService} from '../../../services/producer.service';
import {Producer} from '../../models/producer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  filesToUpload: File[];
  categories: Category[] = [];
  producers: Producer[] = [];
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private producerService: ProducerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((res) =>{
      this.categories = res ? res : [];
    });
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res ? res : [];
    });
  }
  createProduct(productForm: NgForm) {
    this.productService.createProduct(productForm.value).subscribe((res) => {
      if(this.filesToUpload) {
        this.productService.addPhotos(this.filesToUpload, res).subscribe((response) => {
          this.router.navigate(['/products/createdProduct'], {queryParams: {product: JSON.stringify(response)}}).then();
        });
      }else{
        this.router.navigate(['/products/createdProduct'], {queryParams: {product: JSON.stringify(res)}}).then();

      }
    });

  }
  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }
}
