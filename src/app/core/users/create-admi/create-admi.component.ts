import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-admi',
  templateUrl: './create-admi.component.html',
  styleUrls: ['./create-admi.component.css']
})
export class CreateAdmiComponent implements OnInit {
  msg = '';
  photosToUploadAdmin: File[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  createAdmin(adminForm) {
    this.userService.createAdmin(adminForm.value).subscribe((res) => {
      if (res.firstName === 'Already exists!') this.msg = 'Admin with such login already exists';
      else if (res.firstName === 'err') {
        this.msg = 'You cannot create admin without user or password';
      } else {
        if (this.photosToUploadAdmin) {
          this.userService.uploadPhoto(this.photosToUploadAdmin, res).subscribe((response) => {
          });
        }
        this.router.navigate(['/users/createdAdmin']);
      }
    });
  }



  fileUploadEventAdmin(event: any) {
    this.photosToUploadAdmin = (<any>event.target).files;
  }


}
