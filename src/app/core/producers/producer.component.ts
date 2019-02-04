import { Component, OnInit } from '@angular/core';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {UserService} from '../../services/user.service';

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
  filesToUpload: File[];
  filesToUpdate: File[];
  authorizedUser: {};

  constructor( private producerService: ProducerService, private userService: UserService) {
      this.userService.dataSource.subscribe(value => {
        this.authorizedUser = value ? value : null;
        console.log(this.authorizedUser);
      })
    }

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
    this.producerService.createProducer(producerForm.value).subscribe((res) => {
      this.producerService.uploadPhoto(this.filesToUpload, res).subscribe((response) => {
      });
    });
  }

  updateProducer(producerForm: NgForm) {
    this.producer = {...this.producer, ...producerForm.value};
    this.producerService.updateProducer(this.producer._id, this.producer).subscribe((res) => {
      this.producerService.updatePhoto(this.filesToUpdate, res).subscribe((response) => {
        this.updatedProducer = response;
      });
    });
  }

  deleteProducer(id) {
    this.producerService.deleteProducer(id.value).subscribe((res) => {
      this.deletedProducer = res;
    });
  }
  
  deleteAllProducers() {
    this.producerService.deleteAllProducers().subscribe((res) => {
      this.producers = null;
    } );
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
  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }

  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }

}
