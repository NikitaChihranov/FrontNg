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
  photosToUploadAdmin: File[];
  authorizedUser: {};
  msgFindByName = '';
  msg2 = '';
  msg3 = '';
  registerClicked = 0;
  valueInput = '';


  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
  }



  Register() {
    this.registerClicked = 1;
  }

  createUser() {
    this.router.navigate(['/users/create']).then();
  }

  createAdmin() {
    this.router.navigate(['/users/createAdmin']).then();

  }




  deleteProfile() {
    this.userService.deleteProfile().subscribe((res) => {
    });
    this.userService.dataSource.next(null);
    this.router.navigate(['/users/deletedUser']);
  }


  getValue(input) {
    this.valueInput = input.value;
  }

}


