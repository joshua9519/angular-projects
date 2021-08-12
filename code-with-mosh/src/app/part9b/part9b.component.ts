import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-part9b',
  templateUrl: './part9b.component.html',
  styleUrls: ['./part9b.component.css']
})
export class Part9bComponent implements OnInit {
  followers: any[];

  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => {
          this.followers = (response as any[]);
          console.log(this.followers)
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }
}
