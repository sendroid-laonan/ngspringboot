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
    this.company = '广州市晟卓软件科技有限责任公司';
  }

  ngOnInit() {
  }

}
