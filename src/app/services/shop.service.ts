import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../components/shop/shop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.baseUrl}/shops`);
  }
}
