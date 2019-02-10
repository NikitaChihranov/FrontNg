import { Component, OnInit } from '@angular/core';
import {User} from '../../core/models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  authorizedUser: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

}
