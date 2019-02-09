import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../core/models/order';
import {User} from '../core/models/user';
import {Product} from '../core/models/product';

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
  getOrdersByUser(id: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.host}orders/user/${id}`);
  }
  createOrder(order: Order, productTitle: Product, user: User ): Observable<Order> {
    order.product = productTitle.title;
    order.surname = user.surname;
    order.name = user.firstName;
    order.totalPrice = productTitle.price;
    order.userId = user._id;
    return this.http.post<Order>(`${this.host}orders`, order);
  }
  updateOrder(order: Order): Observable<Order> {
    console.log(order);
    let id = order._id;
    return this.http.put<Order>(`${this.host}orders/${id}`, order);
  }
  deleteOrderById(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.host}orders/${id}`);
  }
}
