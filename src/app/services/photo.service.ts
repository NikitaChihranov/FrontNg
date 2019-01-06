import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../core/models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private host = 'http://localhost:3000/';
  constructor( private http: HttpClient) { }
  getAllPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.host}photos`);
  }
  uploadPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.host}photos`, photo);
  }
}
