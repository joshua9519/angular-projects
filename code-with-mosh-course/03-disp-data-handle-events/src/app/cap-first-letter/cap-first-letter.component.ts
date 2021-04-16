import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-first-letter',
  templateUrl: './cap-first-letter.component.html',
  styleUrls: ['./cap-first-letter.component.css']
})
export class CapFirstLetterComponent implements OnInit {
  content = "";
  capsContent: string;
  words: string[];

  ngOnInit(): void {
  }

}
