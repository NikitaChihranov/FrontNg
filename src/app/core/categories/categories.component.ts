import {Component, OnInit, Output} from '@angular/core';
import {Category} from '../models/category';
import {CategoriesService} from '../../services/categories.service';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  authorizedUser: {};
  categories: Category[] = [];
  foundCategoryById: {};
  category: Category;
  updatedCategory: {};
  deletedCategory: {};
  deletedCategories: Category[] = [];
  foundProductsByCategory: Product[] = [];

  constructor(
    private categoriesService: CategoriesService, private userService: UserService
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });
  }

  ngOnInit() {
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  getCategoryById(id) {
    this.categoriesService.getCategoryById(id.value).subscribe((res) => this.foundCategoryById = res);
  }

  createCategory(categoryForm: NgForm) {
    this.categoriesService.createCategory(categoryForm.value).subscribe((res) => {
    });
  }

  updateCategory(categoryForm: NgForm) {
    this.category = {...this.category, ...categoryForm.value};
    this.categoriesService.updateCategory(this.category._id, this.category).subscribe((res) =>
      this.updatedCategory = res);
  }

  deleteCategory(id) {
    this.categoriesService.deleteCategory(id.value).subscribe((res) => this.deletedCategory = res);
  }

  deleteAllCategories() {
    this.categoriesService.deleteAllCategories().subscribe((res) => {
      const categoriesToDelete = this.categories;
      for (const category of categoriesToDelete) {
        this.deletedCategories.push(category);
      }
    });
  }

  viewAllProductsByCategory(id) {
    this.categoriesService.viewAllProductsByCategory(id).subscribe((res) => {
      this.foundProductsByCategory = res;
      this.categoriesService.dataSource.next(res);
    });

  }
}
