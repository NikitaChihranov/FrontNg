import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../core/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private host = 'http://localhost:3000/';
  constructor( private http: HttpClient) {

  }
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.host}comments`);
  }
  getCommentById(id: string): Observable<Comment> {
    return this.http.get<Comment>(`${this.host}comments/${id}`);
  }
  getCommentsByProduct(id: string): Observable<any  > {
    return this.http.get<Comment[]>(`${this.host}comments/commentProduct/${id}`);
  }
  createComment(comment: Comment, user: string, productId: string): Observable<Comment> {
    comment.user = user;
    comment.product = productId;
    console.log(comment);
    return this.http.post<Comment>(`${this.host}comments`, comment);
  }
  deleteCommentById(id: string): Observable<Comment> {
    return this.http.delete<Comment>(`${this.host}comments/${id}`);
  }
}
