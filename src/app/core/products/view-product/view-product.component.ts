import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';
import {UserService} from '../../../services/user.service';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: Product;
  path = '';
  authorizedUser: {};
  comments: Comment[] = [];
  constructor( private activatedRoute: ActivatedRoute,
               private userService: UserService,
               private commentService: CommentService) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
    this.commentService.getAllComments().subscribe((res) => {
      this.comments = res;
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) =>{
        this.product = JSON.parse(res.product);
      }
    )
  }
  createComment(form) {
    this.commentService.createComment(form.value).subscribe((res) => {
    })
  }

}
