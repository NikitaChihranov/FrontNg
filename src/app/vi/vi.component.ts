import {Component, Input, OnInit} from '@angular/core';
import {CategoriesComponent} from '../core/categories/categories.component';
import {Product} from '../core/models/product';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-vi',
  templateUrl: './vi.component.html',
  styleUrls: ['./vi.component.css']
})
export class ViComponent implements OnInit {
  data: Product[] = [];
  ngOnInit(): void {
  }
  constructor(private service: CategoriesService) {
    this.service.dataSource.subscribe(value => {
      for (const product of value) {
        this.data.push(product);
      }
  }
    );
}

}
