import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

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
  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.host}comments`, comment);
  }
  updateComment(id: string, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.host}comments/${id}`, comment);
  }
  deleteCommentById(id: string): Observable<Comment> {
    return this.http.delete<Comment>(`${this.host}comments/${id}`);
  }
}
