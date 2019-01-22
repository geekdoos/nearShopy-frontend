import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops: Shop[];
  constructor(private shopservice: ShopService) { }

  ngOnInit() {
    this.getShops();
  }

  getShops() {
    console.log(this.shops);
    return this.shopservice.getShops().subscribe(shops => (this.shops = shops));
  }

}
