import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private photoService: PhotoService ) { }

  ngOnInit() {
  }

}
