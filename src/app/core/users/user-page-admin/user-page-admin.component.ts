import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-page-admin',
  templateUrl: './user-page-admin.component.html',
  styleUrls: ['./user-page-admin.component.css']
})
export class UserPageAdminComponent implements OnInit {
  users: User[] = [];
  foundUserById: {};
  deletedUser: {};
  user: User;
  updatedUser: {};
  deletedUsers: User[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => this.users = res ? res : []);
  }

  getUserById(userId) {
    this.userService.getUserById(userId.value).subscribe((res) => this.foundUserById = res);
  }


  createUser(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => this.users.push(res));
  }

  updateUser(userForm: NgForm) {
    this.user = {...this.user, ...userForm.value};
    this.userService.updateUser(this.user._id, this.user).subscribe((res) =>
      this.updatedUser = res);
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId.value).subscribe((res) => this.deletedUser = res ? res : {});
  }

  deleteAllUsers() {
    this.userService.deleteAllUsers().subscribe((res) => {
      const usersToDelete = this.users;
      for ( const user of usersToDelete) {
        this.deletedUsers.push(user);
      }
    });
  }
}


