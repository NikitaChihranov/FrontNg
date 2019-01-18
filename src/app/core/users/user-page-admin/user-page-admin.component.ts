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
  photosToUpload: File[];
  photosToUpdate: File[];
  authorizedUser: User;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }
  signIn(signForm) {
    console.log(signForm.value);
    this.userService.signIn(signForm.value.login, signForm.value.password).subscribe((res) => {
      this.authorizedUser = res;
      console.log('Authorized user: ' + res.login);
    });
}
  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) =>{
      this.users = res ? res : [];
    } );
  }

  getUserById(userId) {
    this.userService.getUserById(userId.value).subscribe((res) => this.foundUserById = res);
  }


  createUser(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => {
      this.userService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {});
    });
  }

  updateUser(userForm: NgForm) {
    this.user = {...this.user, ...userForm.value};
    this.userService.updateUser(this.user._id, this.user).subscribe((res) => {
      this.userService.updatePhoto(this.photosToUpdate, res).subscribe((response) => {
        this.updatedUser = response;
      });
    });
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
      this.users = null;
    });
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }
  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}


