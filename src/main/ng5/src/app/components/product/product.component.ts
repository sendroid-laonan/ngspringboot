import {Component, Directive, ElementRef, EventEmitter, HostListener, Injectable, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

@Directive({
  selector: '[appScroll]'
})

@Injectable()
export class ProductComponent implements OnInit {

  private products: any;
  private imgUrl = 'http://placehold.it/320x150';
  private productId: number;
  private product: Product;
  private anotherProduct: Product;
  private productTitle: string;
  url = "http://localhost:8080/";

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private el: ElementRef,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.url += "product/batch";
    this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
        }).subscribe( data => {this.products = data.valueOf()});
  }

  @Output()
  scrollChange = new EventEmitter<number>();

  @HostListener('scroll') onScroll() {
    this.scrollChange.next(this.el.nativeElement);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public remark: string,
  ) {

  }
}
