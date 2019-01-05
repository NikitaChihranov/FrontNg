import {Component, OnInit} from '@angular/core';
import {Product} from '../core/models/product';
import {ProducerService} from '../services/producer.service';

@Component({
  selector: 'app-vi-p',
  templateUrl: './vi-p.component.html',
  styleUrls: ['./vi-p.component.css']
})
export class ViPComponent implements OnInit {

  data: Product[] = [];
  indicator = 0;
  constructor(private service: ProducerService) {

  }



  ngOnInit() {
    this.service.dataSource.subscribe((res) => {
      for (const product of res) {
        this.data.push(product);
      }
    });
  }

}
