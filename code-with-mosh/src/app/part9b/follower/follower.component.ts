import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent {
  @Input("followers") followers: string

  constructor() {}

}
