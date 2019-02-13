import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from '../../../services/user.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id = '';
  user: User;
  updatedUser: User;
  photosToUpdate: File[];
  passwordValue = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
    });
  }
  updateUser(userForm: NgForm) {
    console.log(userForm.value);
    this.user = {...this.user, ...userForm.value};
    console.log(this.user);
    this.user._id = this.id;
    this.userService.updateUser(this.user._id, this.user).subscribe((res) => {
      if(this.photosToUpdate!=undefined) {
        this.userService.updatePhoto(this.photosToUpdate, res).subscribe((response) => {
          console.log(response);
          this.router.navigate(['/users/superAllUsers/updated'],{queryParams: {user: JSON.stringify(response)}}).then();
        });
      }else{
        console.log(res);
        this.router.navigate(['/users/superAllUsers/updated'],{queryParams: {user: JSON.stringify(res)}}).then();
      }
    });
  }
  fileUpdateEvent(event: any) {
    this.photosToUpdate = (<any>event.target).files;
  }
  getValue(input){
    this.passwordValue = input.value;
  }


}
