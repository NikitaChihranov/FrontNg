import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stats-users',
  templateUrl: './stats-users.component.html',
  styleUrls: ['./stats-users.component.css']
})
export class StatsUsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAllAdmins().subscribe((res) => {
      console.log(res);
      this.users = res;
    })
  }
  getStats(id){
    this.router.navigate(['/stats/usersStats'], {queryParams: {id: JSON.stringify(id)}}).then();
  }

}
