import { Component, OnInit } from '@angular/core';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';

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
  foundProductsByProducer: Product[] = [];
  producerCopy: {};
  constructor( private producerService: ProducerService) { }

  ngOnInit() {
  }
  getAllProducers() {
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
    });
  }

  getProducerById(id) {
    this.producerService.getProducerById(id.value).subscribe((res) => {
      this.foundProducerById = res;
    });
  }

  createProducer(producerForm: NgForm) {
    this.producerService.createProducer(producerForm.value).subscribe((res) => {});
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
      this.producerCopy = this.deletedProducer;
    });
  }
  
  deleteAllProducers() {
    this.producerService.deleteAllProducers().subscribe((res) => {} );
  }

  viewAllProductsByProducer(id) {
    this.producerService.viewAllProductsByProducer(id).subscribe((res) => {
      this.foundProductsByProducer = res ? res : [];
      this.producerService.dataSource.next(res);
    });
  }

  hide() {
    this.deletedProducer = undefined;
  }

}
