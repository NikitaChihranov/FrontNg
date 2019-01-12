import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Producer} from '../core/models/producer';
import {Product} from '../core/models/product';
import {About} from '../core/models/about';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  private host = 'http://localhost:3000/';
  dataSource = new BehaviorSubject<Product[]>([]);
  constructor( private http: HttpClient) {

  }
  getAllProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]> (`${this.host}producers`);
  }
  getProducerById(id: string): Observable<Producer> {
    return this.http.get<Producer>(`${this.host}producers/${id}`);
  }
  createProducer(producer: Producer): Observable<Producer> {
    return this.http.post<Producer>(`${this.host}producers`, producer);
  }
  updateProducer(id: string, producer: Producer): Observable<Producer> {
    return this.http.put<Producer>(`${this.host}producers/${id}`, producer);
  }
  deleteProducer(id: string): Observable<Producer> {
    return this.http.delete<Producer>(`${this.host}producers/${id}`);
  }
  deleteAllProducers(): Observable<Producer[]> {
    return this.http.delete<Producer[]>(`${this.host}producers`);
  }
  viewAllProductsByProducer(id: string): Observable<Product[]> {
      return this.http.get<Producer[]>(`${this.host}producers/viewAll/${id}`);
  }
  uploadPhoto(photos: File[], producer: Producer): Observable<Producer> {
    const formData: FormData = new FormData;
    formData.append('photo', photos[0], photos[0].name);
    let id = producer._id;
    return this.http.post<Producer>(`${this.host}producers/uploadPhoto/${id}`, formData);
  }
  updatePhoto(photos: File[], producer: Producer): Observable<Producer> {
    const formData: FormData = new FormData;
    formData.append('photo', photos[0], photos[0].name);
    let id = producer._id;
    return this.http.put<Producer>(`${this.host}producers/updatePhoto/${id}`, formData);
  }
}
