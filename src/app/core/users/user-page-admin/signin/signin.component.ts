import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  users: User[] = [];
  deletedUser: {};
  user: User;
  photosToUpload: File[];
  authorizedUser: {};
  msg = '';
  msg1 = '';
  msg2 = '';
  msg3 = '';
  registerClicked = 0;
  loginValue = '';
  passwordValue = '';

  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService.dataSource.subscribe(value => {
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
        this.msg = '';
      } else {
        this.authorizedUser = res;
        this.userService.dataSource.next(res);
        this.msg = '';
        this.msg1 = '';
      }
    });
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
        this.router.navigate(['/users/createdUser']).then();
      }
    });
  }
  logout() {
    this.userService.dataSource.next(null);
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }

  getValueSignInLogin(login){
    this.loginValue = login.value;
  }
  getValueSignInPassword(password){
    this.passwordValue = password.value;
  }
}
