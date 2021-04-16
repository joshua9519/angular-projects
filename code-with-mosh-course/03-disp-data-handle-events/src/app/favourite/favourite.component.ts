import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite: boolean;

  onClick() {
    this.isFavourite = !this.isFavourite
  }

  ngOnInit(): void {
  }

}
