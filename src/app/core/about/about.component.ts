import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import {About} from '../models/about';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  authorizedUser: {};
  aboutContent: About;
  filesToUpload: File[];
  filesToUpdate: File[];

  constructor(private aboutService: AboutService, private userService: UserService) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });
  }

  ngOnInit() {
    this.aboutService.getAbout().subscribe((res) => {
      this.aboutContent = res;
    });
  }

  create(aboutForm: NgForm) {
    this.aboutService.create(aboutForm.value).subscribe((res) => {
      if (this.filesToUpload!== undefined) {
      this.aboutService.uploadLogo(this.filesToUpload, res).subscribe((response) => {
        this.aboutContent = response;
      });
        } else {
        this.aboutContent = res;
        console.log(res);
      }
    });
  }

  update(aboutForm: NgForm) {
    this.aboutService.update(aboutForm.value).subscribe((res) => {
      if (this.filesToUpdate!== undefined){
        this.aboutService.updateLogo(this.filesToUpdate).subscribe((response) => {
        this.aboutContent = response;
      });
        } else{
        this.aboutContent = res;
      }
    });
  }

  delete() {
    this.aboutService.delete().subscribe((res) => {
      this.aboutContent = res;
    });
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  };

  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }
}
