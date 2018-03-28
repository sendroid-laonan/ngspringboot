import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest,  HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {ApiRequestService} from "./api-request.service";

@Injectable()
export class ProductService{

  private url:string;
  private msg:httpMsg;
  private product: any;
  private info: any;

  constructor(
    private http: HttpClient,
    private apiRequest: ApiRequestService,
  ) {
  }

  saveComment(value:any){
    this.url = "../product/comment";
    return this.apiRequest.post(this.url, value);
  }

  saveProduct(value:any){
    this.url = "../product/";
    return this.apiRequest.post(this.url, value);
  }

  updateProduct(value:any){
    this.url = "../product/";
    return this.apiRequest.put(this.url, value);
  }

  getOne(productId: number){
    this.url = "../product/single?id=" + productId;
    return this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
        });
  }

  deleteById(value:number){
    this.url = "../product/?id=" + value;
    return this.apiRequest.delete(this.url)
  }

  getComment(value: number){
    this.url = "../product/comments?id=" + value;
    return this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
        }
      );
  }
}

export class httpMsg {
  constructor(public info: any){
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public url:string,
    public remark: string,
    public rating: number,
    public comments: Array<any>
  ) {

  }
}
