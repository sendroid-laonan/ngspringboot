import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {stringify} from "querystring";
import {UserInfoService} from '../../service/user-info.service';
import {ApiRequestService} from "../../service/api-request.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  url = "http://localhost:8080/";
  private msg:httpMsg;
  private display:any;

  formModel:FormGroup = new FormGroup({
    product: new FormControl()
  });

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private apiRequest: ApiRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.display = 'none';
  }

  getHeaders():HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=utf-8');
    return headers;
  }

  onSubmit(value:any){
    console.log(value);
    this.url = "../product/";
    this.msg.info = null;
    this.apiRequest.post(this.url, value).subscribe(data =>{
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

export class httpMsg {
  constructor(public info: string){

  }
}
