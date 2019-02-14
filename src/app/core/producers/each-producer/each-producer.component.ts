import {Component, Input, OnInit} from '@angular/core';
import {Producer} from '../../models/producer';
import {ProducerService} from '../../../services/producer.service';
import {Product} from '../../models/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-each-producer',
  templateUrl: './each-producer.component.html',
  styleUrls: ['./each-producer.component.css']
})
export class EachProducerComponent implements OnInit {
  @Input() producer: Producer;
  constructor(
    private producerService: ProducerService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  viewAllProductsByProducer(id) {
    this.router.navigate(['/producers/viewAll'], {queryParams: {id: JSON.stringify(id)}}).then();
  }

}
