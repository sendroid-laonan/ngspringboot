import {Component, Directive, HostListener} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public test($event) {
    console.log('通过(scroll)指令监听');
  }
}

@Directive({
  selector: '[onScroll]',
})
export class OnScrollDirective {
  @HostListener('scroll', ['$event']) public onscroll = ($event) => {
    console.log('通过HostListener监听');
  }

  scrolled(e){
    if(!e.target) {
      alert(666);
    }
  }
}
