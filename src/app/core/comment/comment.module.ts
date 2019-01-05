import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import {CommentRoutingModule} from './comment-routing.module';

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  exports: [
    CommentRoutingModule
  ]
})
export class CommentModule { }
