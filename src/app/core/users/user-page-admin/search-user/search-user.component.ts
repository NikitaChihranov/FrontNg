import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  inputValue = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getUserByLogin(userLogin) {
    this.router.navigate(['/users/search'], {queryParams: {login: JSON.stringify(userLogin.value)}}).then();
  }
  getValue(input){
    this.inputValue = input.value;
  }
}
