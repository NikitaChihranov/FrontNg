import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {About} from '../core/models/about';
import {ignore} from 'selenium-webdriver/testing';
import {For} from 'babel-types';
import {consoleTestResultHandler} from 'tslint/lib/test';

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
  uploadLogo(logo: File[], about: About): Observable<About> {
    const formData: FormData = new FormData;
      formData.append('photo', logo[0], logo[0].name);
      let id = about._id;
      return this.http.post<About>(`${this.host}about/uploadPhoto/${id}`, formData);
  }
  updateLogo(logo: File[]): Observable<About> {
    const formData: FormData = new FormData;
      formData.append('photo', logo[0], logo[0].name);
      return this.http.put<About>(`${this.host}about/updatePhoto`, formData);
  }
  delete(): Observable<About> {
    return this.http.delete<About>(`${this.host}about`);
  }
}
