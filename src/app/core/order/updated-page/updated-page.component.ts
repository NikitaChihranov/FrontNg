import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import {Order} from '../../models/order';

@Component({
  selector: 'app-updated-page',
  templateUrl: './updated-page.component.html',
  styleUrls: ['./updated-page.component.css']
})
export class UpdatedPageComponent implements OnInit {
  authorizedUser: User;
  order: Order;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) =>{
      this.order = JSON.parse(res.order);
      }
    )
  }

}
