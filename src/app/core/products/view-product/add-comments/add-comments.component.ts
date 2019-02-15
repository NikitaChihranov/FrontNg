import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../../../services/comment.service';
import {User} from '../../../models/user';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {
  @Input() authorizedUser: User;
  @Input() product: Product;
  @Output() create = new EventEmitter();
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  createComment(form) {
    this.commentService.createComment(form.value, this.authorizedUser.login, this.product._id).subscribe(() => {
     this.create.emit();
    });
  }

}
