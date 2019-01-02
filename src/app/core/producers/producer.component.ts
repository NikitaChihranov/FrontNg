import { Component, OnInit } from '@angular/core';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  producers: Producer[] = [];
  foundProducerById: {};
  producer: Producer;
  updatedProducer: {};
  deletedProducer: {};
  constructor( private producerService: ProducerService) { }

  ngOnInit() {

  }
  getAllProducers() {
    this.producerService.getAllProducers().subscribe((res) =>{
      console.log(res);
      this.producers = res;
      console.log(this.producers);
    });
  }

  getProducerById(id) {
    this.producerService.getProducerById(id.value).subscribe((res) => this.foundProducerById = res);
  }

  createProducer(producerForm: NgForm) {
    this.producerService.createProducer(producerForm.value).subscribe((res) => this.producers.push(res));
  }

  updateProducer(producerForm: NgForm) {
    this.producer = {...this.producer, ...producerForm.value};
    this.producerService.updateProducer(this.producer._id, this.producer).subscribe((res) => {
      this.updatedProducer = res;
    });
  }

  deleteProducer(id) {
    this.producerService.deleteProducer(id.value).subscribe((res) => {
      this.deletedProducer = res;
    });
  }
}
