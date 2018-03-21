import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

@Injectable()
export class ProductDetailComponent implements OnInit {

  productId: any;
  productTitle: any;
  dataSource:Observable<any>;
  products:Array<any> = [];
  product: any;
  url = "http://localhost:8080/";

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params["id"];
    this.url += "product?id=" + this.productId;
    this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
      }).subscribe( data => this.product = data.valueOf());
  }

  returnProducts(){
    history.back();
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public remark: string,
    public url: string
  ) {

  }
}

