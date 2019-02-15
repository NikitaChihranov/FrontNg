import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';
import {About} from '../models/about';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  authorizedUser: {};
  aboutContent: About;

  constructor(
    private aboutService: AboutService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.aboutService.getAbout().subscribe((res) => {
      this.aboutContent = res;
    });
  }


  delete() {
    this.aboutService.delete().subscribe((res) => {
      this.aboutContent = res;
    });
  }

}
