import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
  @Input() authorizedUser: User;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  getAllUsers() {
    this.router.navigate(['/users/allUsers']).then();
  }
  superGetUsers() {
    this.router.navigate(['/users/superAllUsers']).then();
  }

}
