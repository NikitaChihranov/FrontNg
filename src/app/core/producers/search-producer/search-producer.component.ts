import { Component, OnInit } from '@angular/core';
import {ProducerService} from '../../../services/producer.service';
import {Router} from '@angular/router';
import {stringify} from 'querystring';

@Component({
  selector: 'searchProducer',
  templateUrl: './search-producer.component.html',
  styleUrls: ['./search-producer.component.css']
})
export class SearchProducerComponent implements OnInit {
  inputValue = '';
  constructor(
    private producerService: ProducerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getProducerByName(form){
    this.router.navigate(['/producers/search'], {queryParams: {name: JSON.stringify(form.value)}}).then();
  }
  getValue(input){
    this.inputValue = input.value;
  }
}
