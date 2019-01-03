import {Component, OnInit, Output} from '@angular/core';
import {Category} from '../models/category';
import {CategoriesService} from '../../services/categories.service';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  foundCategoryById: {};
  category: Category;
  createdcategories: Category[] = [];
  updatedCategory: {};
  deletedCategory: {};
  deletedCategories: Category[] = [];
  foundProductsByCategory: Product[] = [];

  constructor(
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit() {

  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe((res) =>{
      this.categories = res;
      for (const c of this.createdcategories) {
        this.categories.push(c);
      }
    });
  }

  getCategoryById(id) {
    this.categoriesService.getCategoryById(id.value).subscribe((res) => this.foundCategoryById = res);
  }

  createCategory(categoryForm: NgForm) {
    this.categoriesService.createCategory(categoryForm.value).subscribe((res) => this.createdcategories.push(res));
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
