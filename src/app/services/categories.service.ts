import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../core/models/category';
import {Product} from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private host = 'http://localhost:3000/';

  dataSource = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.host}categories`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.host}categories`, category);
  }

  updateCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.host}categories/${id}`, category);
  }

  deleteCategory(name: string): Observable<Category> {
    return this.http.delete<Category>(`${this.host}categories/${name}`);
  }

  deleteAllCategories(): Observable<Category[]> {
    // @ts-ignore
    return this.http.post<Category[]>(`${this.host}categories/deleteAll`);
  }

  viewAllProductsByCategory(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.host}categories/viewAll/${id}`);
  }
}
