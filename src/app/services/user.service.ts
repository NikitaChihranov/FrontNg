import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../core/models/user';
import {AuthInterceptorService} from './auth-interceptor.service';
import {Product} from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = 'http://localhost:3000/';
  dataSource = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }
  signIn(login: string, password: string): Observable<any> {
    let user = new Object({
      login: login,
      password: password
    });
    return this.http.post<User>(`${this.host}users/signin`, user);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}users/`);
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}users/all`);
  }
  getAllAdmins(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}users/admins`);
  }
  getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.host}users/${login}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post <User>(`${this.host}users`, user);
  }
  createAdmin(user: User): Observable<User>{
    return this.http.post<User>(`${this.host}users/createAdmin`, user);
  }
  uploadPhoto(photos: File[], user: User): Observable<User> {
    const formData: FormData = new FormData();
    formData.append('photo', photos[0], photos[0].name);
    let id = user._id;
    return this.http.post<User>(`${this.host}users/uploadPhoto/${id}`, formData);
  }
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.host}users/${id}`, user);
  }
  updatePhoto(photos: File[], user: User): Observable<User> {
    const formData: FormData = new FormData();
    formData.append('photo', photos[0], photos[0].name);
    const id = user._id;
    return this.http.put<User>(`${this.host}users/updatePhoto/${id}`, formData);
  }
  deleteUser(id: string): Observable<User> {
    console.log(id);
    return this.http.delete<User>(`${this.host}users/delete/${id}`);
  }
  deleteProfile(): Observable<User> {
    return this.http.delete<User>(`${this.host}users/deleteProfile`);
  }
  deleteAllUsers(): Observable<User[]> {
    // @ts-ignore
    return this.http.post<User[]>(`${this.host}users/deleteAll/`);
  }
}
