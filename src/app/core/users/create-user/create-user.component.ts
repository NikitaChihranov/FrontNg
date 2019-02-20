import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  msg = '';
  photosToUpload: File[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  createUser(userForm) {
    this.userService.createUser(userForm.value).subscribe((res) => {
      if (res.firstName === 'Already exists!') this.msg = 'User with such login already exists';
      else if (res.firstName === 'err') {
        this.msg = 'You cannot create user without login or password';
      } else {
        if (this.photosToUpload) {
          this.userService.uploadPhoto(this.photosToUpload, res).subscribe((response) => {
          });
        }
        this.router.navigate(['/users/createdUser']);
      }
    });
  }
  fileUploadEvent(event: any) {
    this.photosToUpload = (<any>event.target).files;
  }

}
