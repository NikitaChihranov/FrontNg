import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../../services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page-admin',
  templateUrl: './user-page-admin.component.html',
  styleUrls: ['./user-page-admin.component.css']
})
export class UserPageAdminComponent implements OnInit {
  users: User[] = [];
  foundUserByLogin: {};
  deletedUser: {};
  user: User;
  updatedUser: {};
  deletedUsers: User[] = [];
  photosToUpload: File[];
  photosToUploadAdmin: File[];
  photosToUpdate: File[];
  authorizedUser: {};
  msg = '';
  msg1 = '';
  msg2 = '';
  msg3 = '';
  registerClicked = 0;
  valueInput = '';

  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService.dataSource.subscribe(value => {
      console.log(value);
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
  }

  signIn(signForm) {
    this.userService.signIn(signForm.value.login, signForm.value.password).subscribe((res) => {
      this.registerClicked = 0;
      if (res.firstName === 'not found') {
        this.msg1 = 'Incorrect login or password';
      } else {
        this.authorizedUser = res;
        this.userService.dataSource.next(res);
        this.msg = '';
        this.msg1 = '';
        this.msg2 = '';
        this.msg3 = '';
      }
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res ? res : [];
      this.deletedUser = null;
    });
  }

  getUserByLogin(userLogin) {
    this.userService.getUserByLogin(userLogin.value).subscribe((res) => this.foundUserByLogin = res);
  }

  Register() {
    this.registerClicked = 1;
  }

  createUser(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => {
      if (res.firstName === 'Already exists!') this.msg = 'User with such login already exists';
      else if (res.firstName === 'err') {
        this.msg = 'You cannot create user without user or password';
      } else {
        if (this.photosToUpload) {
          this.userService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {
          });
        }
        this.router.navigate(['/users/createdUser']);
      }
    });
  }

  createAdmin(adminForm) {
    this.userService.createAdmin(adminForm.value).subscribe((res) => {
      if (res.firstName === 'Already exists!') this.msg2 = 'Admin with such login already exists';
      else if (res.firstName === 'err') {
        this.msg2 = 'You cannot create admin without user or password';
      } else {
        if (this.photosToUploadAdmin) {
          this.userService.uploadPhoto(this.photosToUploadAdmin, res).subscribe((response) => {
          });
        }
        this.router.navigate(['/users/createdAdmin']);
      }
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

  deleteUser(userLogin) {
    this.userService.deleteUser(userLogin.value).subscribe((res) => {
      if (res.firstName === 'can`t delete') this.msg3 = 'You can`t delete yourself here';
      else if (res.firstName === 'nothing to delete') this.msg3 = 'There`s not user with such login';
      else {
        this.deletedUser = res;
        this.msg3 = '';
      }
    });
  }

  deleteAllUsers() {
    this.userService.deleteAllUsers().subscribe((res) => {
      const usersToDelete = this.users;
      for (const user of usersToDelete) {
        this.deletedUsers.push(user);
      }
      this.users = null;
    });
  }

  deleteProfile() {
    this.userService.deleteProfile().subscribe((res) => {
    });
    this.userService.dataSource.next(null);
    this.router.navigate(['/users/deletedUser']);
  }

  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }

  fileUploadEventAdmin(event: any) {
    this.photosToUploadAdmin = (<any>event.target).files;
  }

  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }

  getValue(input) {
    this.valueInput = input.value;
  }
}


