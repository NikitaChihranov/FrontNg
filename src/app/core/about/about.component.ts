import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import {About} from '../models/about';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: About = Object;
  constructor( private aboutService: AboutService) { }

  ngOnInit() {
  }
  getAbout() {
    this.aboutService.getAbout().subscribe((res) => this.aboutContent = res);
  }
  create(aboutForm: NgForm) {
    console.log(this.aboutContent.text);
    this.aboutService.create(aboutForm.value).subscribe((res) => this.aboutContent = res);
  }
  update(aboutForm: NgForm) {
    this.aboutService.update(aboutForm.value).subscribe((res) => this.aboutContent = res);
  }
  delete() {
    this.aboutService.delete().subscribe((res) => this.aboutContent = res);
  }
}
