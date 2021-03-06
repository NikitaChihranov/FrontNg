import {Component, Input, OnInit} from '@angular/core';
import {CategoriesComponent} from '../categories.component';
import {Product} from '../../models/product';
import {CategoriesService} from '../../../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-vi',
  templateUrl: './vi.component.html',
  styleUrls: ['./vi.component.css']
})
export class ViComponent implements OnInit {
  data: Product[] = [];

  constructor(private categoriesService: CategoriesService,
              private productService: ProductService,
              private router: Router) {
    this.categoriesService.dataSource.subscribe((res) => {
      this.data.length = 0;
      for (let product of res) {
        this.data.push(product);
      }
    });
  }

  ngOnInit(): void {
  }

  viewProduct(title) {
    this.productService.getProductByName(title).subscribe((res) => {
      this.router.navigate(['/products/productPage'],
        {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }
}
