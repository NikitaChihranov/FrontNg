import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  msgDelete = '';
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
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

}
