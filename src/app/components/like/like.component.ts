import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  numberOfLikes: number;
  numberOfDislikes: number;

  constructor() {
    this.numberOfLikes = 0;
    this.numberOfDislikes = 0;
  }

  ngOnInit() {
  }

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfDislikes++;
  }

}
