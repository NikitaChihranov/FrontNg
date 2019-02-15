import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-a',
  templateUrl: './create-a.component.html',
  styleUrls: ['./create-a.component.css']
})
export class CreateAComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  createAbout(){
    this.router.navigate(['/about/create']).then();
  }

}
