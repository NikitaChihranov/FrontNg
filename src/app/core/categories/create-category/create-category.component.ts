import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  authorizedUser: User;
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }
  createCategory(categoryForm: NgForm) {
    this.categoriesService.createCategory(categoryForm.value, this.authorizedUser._id).subscribe((res) => {
      this.router.navigate(['/categories/created'], {queryParams: {category: JSON.stringify(res)}}).then();
    });
  }
}
