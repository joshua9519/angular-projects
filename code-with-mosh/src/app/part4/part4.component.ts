import { Component } from '@angular/core';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.css']
})
export class Part4Component {

  tweet = {
    body: '...',
    isLiked: false,
    likesCount: 0
  }

}
