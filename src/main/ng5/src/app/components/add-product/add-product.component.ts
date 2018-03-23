import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {stringify} from "querystring";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  url = "http://localhost:8080/";

  formModel:FormGroup = new FormGroup({
    product: new FormControl()
  });

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
    const httpOptions = {
      headers: new HttpHeaders({
        'contentType': "application/x-www-form-urlencoded; charset=UTF-8"
      })
    };
    this.url = "../product/add";
    // this.http.post(this.url, value, httpOptions).subscribe(data =>{
    //   console.log(data);
    // })
    $.ajax({
      url : this.url,
      type : "POST",
      data : value,
      dataType : "json",
      success : function (data) {
        console.log(data);
      },
      error : function (data) {
        console.log(data);
      },
    });
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
