import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AddProductComponent} from "../add-product/add-product.component";
import {ApiRequestService} from "../../service/api-request.service";

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
  private msg:httpMsg;
  private display:any;

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private apiRequest: ApiRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.display =  'none';
    this.productId = this.routeInfo.snapshot.params["id"];
    this.url += "product/single?id=" + this.productId;
    this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
      }).subscribe( data => this.product = data.valueOf());
  }

  onSubmit(value:any){

    this.url = "../product/";
    this.apiRequest.put(this.url, value).subscribe(data =>{
      this.msg = data.valueOf();
      this.display  =  'block';
    });
  }

  onSkip(value:string){
    if(value == "success"){
      this.router.navigate(['/carousel', 2]);
    }else {
      this.display = 'none';
    }
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

export class httpMsg {
  constructor(public info: any){
  }
}
