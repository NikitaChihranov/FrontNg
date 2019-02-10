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

  constructor(
    private categoriesService: CategoriesService,
    private userService: UserService) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
  }

  deleteAllCategories(){
    this.categoriesService.deleteAllCategories().subscribe(() => {});
  }

}
