import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product';
import {UserService} from '../../../services/user.service';
import {CommentService} from '../../../services/comment.service';
import {User} from '../../models/user';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: Product;
  authorizedUser: User;
  comments: Comment[] = [];
  noCommentsMsg = '';
  constructor( private activatedRoute: ActivatedRoute,
               private userService: UserService,
               private commentService: CommentService,
               private router: Router) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) =>{
        this.product = JSON.parse(res.product);
      }
    )
    this.commentService.getCommentsByProduct(this.product._id).subscribe((res) => {
      if (res.text === 'no found') {
        this.noCommentsMsg = 'No comments found. Sign in to add a comment';
      } else{
        this.noCommentsMsg = '';
        this.comments = res;
    }
    })
  }
  createComment(form) {
    this.commentService.createComment(form.value, this.authorizedUser.login, this.product._id).subscribe(() => {
      this.commentService.getCommentsByProduct(this.product._id).subscribe((res) => {
        this.comments = res;
        this.noCommentsMsg = '';
      })
    })
  }
  deleteComment(id){
    this.commentService.deleteCommentById(id).subscribe(() => {
      this.commentService.getCommentsByProduct(this.product._id).subscribe((res) => {
        if(res.length === 0) {
          this.noCommentsMsg = 'No comments found.';
        }else{
          this.comments = res;
        }
    })
  })
  }
  createOrder(id){
    this.router.navigate(['/orders/create'], {queryParams: {productId: id}});
  }
}
