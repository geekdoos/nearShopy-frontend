import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private latitude;
  private longitude;
  private position;

  shops: Shop[];
  constructor(private shopservice: ShopService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => this.getNearByShops(pos));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    return this.position;
  }

  getNearByShops(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    return this.shopservice.getShops(this.latitude, this.longitude).subscribe(shops => (this.shops = shops));
  }

  countProgress(shop: Shop) {
    const result =  shop.like_count + shop.dislike_count === 0 ? 100 : 100 * (shop.like_count / (shop.like_count + shop.dislike_count));
    return 'width: ' + result + '%;';
  }

  dislikeButtonClick(e: Event, id: number) {
    e.preventDefault();
    return this.shopservice.dislike(id);
  }

  likeButtonClick(e: Event, id: number) {
    e.preventDefault();
    return this.shopservice.like(id);
  }
}
