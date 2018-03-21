import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeAux(){
    this.router.navigate([{outlets:{aux: null}}]);
  }
}
