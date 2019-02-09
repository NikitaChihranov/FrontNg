import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  createCategory(categoryForm: NgForm) {
    this.categoriesService.createCategory(categoryForm.value).subscribe((res) => {
      this.router.navigate(['/categories/created'], {queryParams: {category: JSON.stringify(res)}}).then();
    });

  }
}
