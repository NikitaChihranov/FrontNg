import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../core/models/product';
import {Producer} from '../core/models/producer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get <Product[]>(`${this.host}products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.host}products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.host}products`, product);
  }

  addPhotos(photos: File[], product: Product): Observable<Product> {
    const formData: FormData = new FormData();
     for (const photo of photos) {
       formData.append('photos', photo, photo.name);
    }
     let id = product._id;
     let q = formData.getAll('photos');
    return this.http.post<Product>(`${this.host}products/upload/${id}`, q);
  }
  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.host}products/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.host}products/${id}`);
  }

  deleteAllProducts(): Observable<Product[]> {
    // @ts-ignore
    return this.http.post<Product[]>(`${this.host}products/deleteAll`);
  }
}
