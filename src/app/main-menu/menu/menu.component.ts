import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() authorizedUser: User;
  constructor() { }

  ngOnInit() {
  }

}
