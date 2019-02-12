import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() authorizedUser: User;

  constructor(
  ) { }

  ngOnInit() {
  }

}
