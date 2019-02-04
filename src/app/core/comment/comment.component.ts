import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  authorizedUser: {};

  constructor(
    private userService: UserService) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });
  }

  ngOnInit() {
  }

}
