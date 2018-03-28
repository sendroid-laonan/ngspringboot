import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import * as $ from "jquery";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  private productId: number;
  private comment: Comment;
  private comments: any;
  private product: Product;
  private msg: httpMsg;
  private display: any;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params["id"];
    this.productService.getComment(this.productId).subscribe(data => {this.comments = data.valueOf()});
  }

  onSubmit(value:any){
    $('#comment-info').val(null);
    this.productService.saveComment(value).subscribe((data:httpMsg) => {
      if(data['info'] != null){
        this.productService.getComment(this.productId).subscribe(data => {this.comments = data.valueOf()});
      }
    });
  }

}

export class Comment{
  constructor(
    private id: number,
    private info: any,
    public product: Product
  ){

  }
}

export class Product{
  constructor(
    public id: number,
  ){

  }
}

export class httpMsg {
  constructor(
    public info: string
  ){

  }
}
