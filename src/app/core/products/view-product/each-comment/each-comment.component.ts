import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user';

@Component({
  selector: 'app-each-comment',
  templateUrl: './each-comment.component.html',
  styleUrls: ['./each-comment.component.css']
})
export class EachCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() authorizedUser: User;
  @Output() deleteClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteComment(){
    this.deleteClicked.emit();
  }
}
