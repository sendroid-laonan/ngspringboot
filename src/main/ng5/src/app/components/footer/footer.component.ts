import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private year: number;
  private company: string;

  constructor() {
    this.year = 2018;
    this.company = '没想到吧';
  }

  ngOnInit() {
  }

}
