import {Component, OnInit, Output} from '@angular/core';
import {Category} from '../models/category';
import {CategoriesService} from '../../services/categories.service';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  authorizedUser: {};
  categories: Category[] = [];
  category: Category;
  updatedCategory: {};
  foundProductsByCategory: Product[] = [];
  msgDelete = '';

  constructor(
    private categoriesService: CategoriesService,
    private userService: UserService) {
      this.categoriesService.getAllCategories().subscribe((res) => {
        this.categories = res;
      });
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });


  }

  ngOnInit() {
  }


  createCategory(categoryForm: NgForm) {
    this.categoriesService.createCategory(categoryForm.value).subscribe((res) => {
    });
  }

  deleteCategory(form) {
    this.categoriesService.deleteCategory(form.value).subscribe((res) => {
      if(res.title === 'err'){
        this.msgDelete = 'Nothing found';
      } else{
        this.msgDelete = '';
      }
    });
  }

  deleteAllCategories() {
    this.categoriesService.deleteAllCategories().subscribe((res) => {});
  }

  viewAllProductsByCategory(id) {
    this.categoriesService.viewAllProductsByCategory(id).subscribe((res) => {
      this.foundProductsByCategory = res;
      this.categoriesService.dataSource.next(res);
    });

  }
}
