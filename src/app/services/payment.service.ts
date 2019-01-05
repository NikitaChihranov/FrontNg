import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from '../core/models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private host = 'http://localhost:3000/';
  constructor( private http: HttpClient) {

  }
  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.host}payments`);
  }
  getPaymentById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.host}payments/${id}`);
  }
  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.host}payments`, payment);
  }
  updatePayment(id: string, payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.host}payments/${id}`, payment);
  }
  deletePaymentById(id: string): Observable<Payment> {
    return this.http.delete<Payment>(`${this.host}payments/${id}`);
  }
}
