import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-updated-user-component',
  templateUrl: './updated-user-component.component.html',
  styleUrls: ['./updated-user-component.component.css']
})
export class UpdatedUserComponentComponent implements OnInit {
  updatedUser: User;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.updatedUser = JSON.parse(res.user);
    })
  }

}
