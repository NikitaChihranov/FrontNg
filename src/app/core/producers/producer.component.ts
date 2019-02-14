import {Component, OnInit} from '@angular/core';
import {ProducerService} from '../../services/producer.service';
import {Producer} from '../models/producer';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {UserService} from '../../services/user.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  producers: Producer[] = [];
  producer: Producer;
  authorizedUser: User;

  constructor(
    private producerService: ProducerService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
    });
  }


  ngOnInit() {
  }

  createProducer(){
    this.router.navigate(['/producers/create']).then();
  }

  deleteProducer(id) {
    this.producerService.deleteProducer(id).subscribe((res) => {
      this.producerService.getAllProducers().subscribe((response) => {
        this.producers = response;
      });
    });
  }

  deleteAllProducers() {
    this.producerService.deleteAllProducers().subscribe((res) => {
      this.producers = null;
    });
  }


}
