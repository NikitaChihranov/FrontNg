import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {About} from '../../models/about';

@Component({
  selector: 'app-about-itself',
  templateUrl: './about-itself.component.html',
  styleUrls: ['./about-itself.component.css']
})
export class AboutItselfComponent implements OnInit {
  @Input() aboutContent: About;
  constructor(

  ) { }

  ngOnInit() {
  }

}
