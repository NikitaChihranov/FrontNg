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
  authorizedUser: User;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.router.navigate(['/categories']).then();
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

}
