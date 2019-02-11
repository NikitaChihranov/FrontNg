import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../models/product';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css']
})
export class EachProductComponent implements OnInit {
  @Input() authorizedUser: User;
  @Input() product;
  @Output() productToDelete = new EventEmitter();

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }
  viewProduct(title) {
    this.productService.getProductByName(title).subscribe((res) => {
      this.router.navigate(['/products/productPage'], {queryParams: {product: JSON.stringify(res)}}).then();
    });
  }
  update(id){
    this.router.navigate(['/products/update'], {queryParams: {id: JSON.stringify(id)}}).then();
  }

  deleteProduct(id){
    this.productToDelete.emit(id);
  }
}
