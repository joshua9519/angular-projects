import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('is-active') isLiked: boolean;
  @Input('likes-count') likesCount: number;

  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1
    this.isLiked = !this.isLiked
  }
}
