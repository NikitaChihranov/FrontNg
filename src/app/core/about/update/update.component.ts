import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  updateAbout(){
    this.router.navigate(['/about/update']).then();
  }
}
