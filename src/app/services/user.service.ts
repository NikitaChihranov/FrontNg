import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../core/models/user';
import {Category} from '../core/models/category';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}users/`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.host}users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post <User>(`${this.host}users`, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.host}users/${id}`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete <User>(`${this.host}users/${id}`);
  }

  deleteAllUsers(): Observable<User[]> {
    // @ts-ignore
    return this.http.post<User[]>(`${this.host}users/deleteAll/`);
  }
}
