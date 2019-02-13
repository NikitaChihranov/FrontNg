import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  getAllUsers() {
    this.router.navigate(['/users/allUsers']).then();
  }

}
