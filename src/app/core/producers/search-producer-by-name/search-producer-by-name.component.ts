import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProducerService} from '../../../services/producer.service';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-search-producer-by-name',
  templateUrl: './search-producer-by-name.component.html',
  styleUrls: ['./search-producer-by-name.component.css']
})
export class SearchProducerByNameComponent implements OnInit {
  name = '';
  producer: Producer;
  msg = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private producerService: ProducerService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.name = JSON.parse(res.name);
      this.producerService.getProducerByName(this.name).subscribe((res) => {
        if(res.title === 'err'){
          this.msg = 'No found';
        }else {
          this.producer = res;
        }
      })
    })
  }

}
