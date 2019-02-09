import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  authorizedUser: {};
  order: Order;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.order = JSON.parse(res.order);
    })
  }

}
