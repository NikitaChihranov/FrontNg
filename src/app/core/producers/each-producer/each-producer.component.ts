import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producer} from '../../models/producer';
import {ProducerService} from '../../../services/producer.service';
import {Product} from '../../models/product';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'eachProducer',
  templateUrl: './each-producer.component.html',
  styleUrls: ['./each-producer.component.css']
})
export class EachProducerComponent implements OnInit {
  @Input() producer: Producer;
  @Input() authorizedUser: User;
  @Output() prod = new EventEmitter();
  constructor(
    private producerService: ProducerService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  viewAllProductsByProducer(id) {
    this.router.navigate(['/producers/viewAll'], {queryParams: {id: JSON.stringify(id)}}).then();
  }
  deleteProducer(){
    this.prod.emit();
  }
  updateProducer(id) {
    this.router.navigate(['/producers/update'], {queryParams: {id: JSON.stringify(id)}}).then();
  }
}
