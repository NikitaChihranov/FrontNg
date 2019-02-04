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
  foundUserById: {};
  deletedUser: {};
  user: User;
  updatedUser: {};
  deletedUsers: User[] = [];
  photosToUpload: File[];
  photosToUpdate: File[];
  authorizedUser: {};
  nouser = 0;
  registerClicked = 0;
  alreadyExists = 0;
  noName = 0;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });
  }

  ngOnInit() {
  }

  signIn(signForm) {
    this.userService.signIn(signForm.value.login, signForm.value.password).subscribe((res) => {
      this.registerClicked = 0;
      this.alreadyExists = 0;
      this.noName = 0;
      console.log(res);
      if (res.firstName === 'not found') {
        this.nouser = 1;
      } else {
        this.authorizedUser = res;
        this.userService.dataSource.next(res);
        this.nouser = 0;
      }
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res ? res : [];
      this.deletedUser = null;
    });
  }

  getUserById(userId) {
    this.userService.getUserById(userId.value).subscribe((res) => this.foundUserById = res);
  }

  Register() {
    this.registerClicked = 1;
  }

  createUser(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => {
      this.userService.uploadPhoto(this.photosToUpload, res).subscribe(() => {
      });
    });
  }

  createUser2(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => {
      if (res.firstName === 'Already exists!') this.alreadyExists = 1;
      else if (res.firstName === 'err') {
        this.noName = 1;
      } else {
        if (this.photosToUpload) {
          this.userService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {
            console.log(response);
          });
        }
        this.router.navigate(['/users/createdUser']);
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

  deleteUser(userId) {
    this.userService.deleteUser(userId.value).subscribe((res) => this.deletedUser = res ? res : {});
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

  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }

  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
}


