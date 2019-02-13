import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../models/product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../../services/categories.service';
import {ProducerService} from '../../../services/producer.service';
import {Category} from '../../models/category';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  filesToUpdate: File[];
  categories: Category[] = [];
  producers: Producer[] = [];
  productId = '';
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoriesService: CategoriesService,
    private producerService: ProducerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((res) =>{
      this.categories = res ? res : [];
    });
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res ? res : [];
    });
    this.activatedRoute.queryParams.subscribe((res) => {
      this.productId = JSON.parse(res.id);
    })
  }
  updateProduct(productForm: NgForm) {
    this.product = {...this.product, ...productForm.value};
    this.product._id = this.productId;
    this.productService.updateProduct(this.product._id, this.product).subscribe((res) => {
      if(this.filesToUpdate) {
        this.productService.updatePhotos(this.filesToUpdate, res).subscribe((response) => {
          this.router.navigate(['/products/updatedProduct'], {queryParams: {product: JSON.stringify(response)}}).then();
        });
      }else{
        this.router.navigate(['/products/updatedProduct'], {queryParams: {product: JSON.stringify(res)}}).then();
      }
    });
  }
  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }
}
