import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = 'http://localhost:3000/';
  constructor( private http: HttpClient) {

  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.host}orders`);
  }
  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.host}orders/${id}`);
  }
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.host}orders`, order);
  }
  updateOrder(id: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.host}orders/${id}`, order);
  }
  deleteOrderById(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.host}orders/${id}`);
  }
}
