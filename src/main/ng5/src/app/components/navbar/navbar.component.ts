import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navClass: Array<String>;

  constructor() { }

  ngOnInit() {
    this.navClass = ["navbar-brand", "nav-link", "nav-link", "nav-link", "nav-link"];
  }

}
