import { Component } from '@angular/core';

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent {
  dates = [
    {
      year: "2017",
      month: "1"
    },
    {
      year: "2017",
      month: "5"
    },
    {
      year: "2018",
      month: "11"
    }
  ]

}
