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

  getShops(lat, lng): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.baseUrl}/shops`, {
      params: {
        lat: lat,
        lng: lng
      }
    });
  }

  like(id: number) {
    return this.http.post(`${this.baseUrl}/like/${id}`, id).subscribe((res) => {
      console.log('like : ' + id);
     });
  }

  dislike(id: number) {
    return this.http.post(`${this.baseUrl}/dislike/${id}`, id).subscribe((res) => {
      console.log('dislike : ' + id);
     });
  }
}
