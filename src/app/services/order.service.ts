import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
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
  getOrdersByUser(id: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.host}orders/user/${id}`);
  }
  getAmountsOfOrdersByAllProducts(fromDate: Date, toDate: Date): Observable<any> {
    return this.http.get<any>(`${this.host}orders/get/forAllProducts/from/${fromDate}/to/${toDate}`);
  }
  createOrder(order: Order, productTitle: Product, user: User ): Observable<Order> {
    order.product = productTitle.title;
    order.surname = user.surname;
    order.name = user.firstName;
    order.totalPrice = productTitle.price;
    order.userId = user._id;
    order.date = Date.now();
    return this.http.post<Order>(`${this.host}orders`, order);
  }
  setPaid(id: string) : Observable<Order> {
    //@ts-ignore
    return this.http.put<Order>(`${this.host}orders/order/setPaid/${id}`);
  }
  setDelivered(id: string): Observable<Order>{
    //@ts-ignore
    return this.http.put<Order>(`${this.host}orders/order/setDelivered/${id}`);
  }
  setClosed(id: string): Observable<Order> {
    //@ts-ignore
    return this.http.put<Order>(`${this.host}orders/order/setClosed/${id}`);
  }
  setOrdered(id: string): Observable<Order> {
    //@ts-ignore
    return this.http.put<Order>(`${this.host}orders/order/setOrdered/${id}`);
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
