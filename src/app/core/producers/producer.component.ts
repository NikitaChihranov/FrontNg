import {Component, OnInit} from '@angular/core';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {UserService} from '../../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  producers: Producer[] = [];
  foundProducerByName: {};
  producer: Producer;
  updatedProducer: {};
  deletedProducer: {};
  foundProductsByProducer: Product[] = [];
  filesToUpload: File[];
  filesToUpdate: File[];
  authorizedUser: User;

  constructor(private producerService: ProducerService, private userService: UserService) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
    this.producerService.getAllProducers().subscribe((res) => {
      console.log(res);
      this.producers = res;
    });
  }


  ngOnInit() {
  }


  createProducer(producerForm: NgForm) {
    this.producerService.createProducer(producerForm.value, this.authorizedUser._id).subscribe((res) => {
      if (this.filesToUpload) {
        this.producerService.uploadPhoto(this.filesToUpload, res).subscribe((response) => {
        });
      }
    });
  }

  updateProducer(producerForm: NgForm) {
    this.producer = {...this.producer, ...producerForm.value};
    this.producerService.updateProducer(this.producer.title, this.producer).subscribe((res) => {
      if (this.filesToUpdate) {
        this.producerService.updatePhoto(this.filesToUpdate, res).subscribe((response) => {
          this.updatedProducer = response;
        });
      } else {
        this.updatedProducer = res;
      }
    });
  }

  deleteProducer(form) {
    this.producerService.deleteProducer(form.value).subscribe((res) => {
      this.deletedProducer = res;
    });
  }

  deleteAllProducers() {
    this.producerService.deleteAllProducers().subscribe((res) => {
      this.producers = null;
    });
  }


  hide() {
    this.deletedProducer = null;
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }

  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }

}
