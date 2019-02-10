import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';
import {Category} from '../../models/category';
import {Product} from '../../models/product';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  authorizedUser: User;
  categories: Category[] = [];
  foundProductsByCategory: Product[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  viewAllProductsByCategory(id) {
    this.categoriesService.viewAllProductsByCategory(id).subscribe((res) => {
      this.foundProductsByCategory = res;
      this.categoriesService.dataSource.next(res);
    });
  }
  deleteCategory(id) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.categoriesService.getAllCategories().subscribe((res) => {
        this.categories = res;
      });
    });
  }
}
