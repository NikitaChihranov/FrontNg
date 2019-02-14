import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersRoutingModule} from '../users-routing.module';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-search-user-by-login',
  templateUrl: './search-user-by-login.component.html',
  styleUrls: ['./search-user-by-login.component.css']
})
export class SearchUserByLoginComponent implements OnInit {
  login = '';
  user: User;
  msgFindByName= '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.login = JSON.parse(res.login);
      this.userService.getUserByLogin(this.login).subscribe((res) => {
        if (res.login === 'err') {
          this.user = null;
          this.msgFindByName = 'Nothing found';
        }else {
          this.user = res;
        }
      })
    })
  }

}
