import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private host = 'http://localhost:3000/';
  constructor( private Http: HttpClient) { }
}
