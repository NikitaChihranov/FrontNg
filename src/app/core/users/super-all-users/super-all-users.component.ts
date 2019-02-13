import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-super-all-users',
  templateUrl: './super-all-users.component.html',
  styleUrls: ['./super-all-users.component.css']
})
export class SuperAllUsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
    })
  }
  toUpdate(id){
    this.router.navigate(['/users/superAllUsers/update'], {queryParams: {id: JSON.stringify(id)}}).then();
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getAllUsers().subscribe((res) => {
        this.users = res;
      })
    });
  }
}
