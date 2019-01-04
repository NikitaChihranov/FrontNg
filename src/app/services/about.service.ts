import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {About} from '../core/models/about';
import {ignore} from 'selenium-webdriver/testing';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private host = 'http://localhost:3000/';
  constructor( private http: HttpClient) {

  }
  getAbout(): Observable<About> {
    return this.http.get<About>(`${this.host}about`);
  }
  create(about: About): Observable<About> {
    return this.http.post<About>(`${this.host}about`, about);
  }
  update(about: About): Observable<About> {
    return this.http.put<About>(`${this.host}about`, about);
  }
  delete(): Observable<About> {
    return this.http.delete<About>(`${this.host}about`);
  }
}
