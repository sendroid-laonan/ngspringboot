import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ ProductService ]
})

@Injectable()
export class ProductDetailComponent implements OnInit {

  productId: any;
  products:Array<any> = [];
  product: any;
  url = "http://localhost:8080/";
  private msg:httpMsg;
  private display:any;
  productForm: FormGroup;

  constructor(
    private routeInfo: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = fb.group({
      price: ['金额不能超过6位数', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
    this.display =  'none';
    this.productId = this.routeInfo.snapshot.params["id"];
    this.productService.getOne(this.productId).subscribe( (data:Product) => {
      this.product = data;
    });
  }

  onSubmit(value:any){
    if(this.productForm.valid) {
      this.productService.updateProduct(value).subscribe((data: httpMsg) => {
        if (data['info'] != null) {
          this.msg = data;
          this.display = 'block';
        }
      })
    }else {
      console.log(this.productForm.value);
    }

  }

  onSkip(value:string){
    if(value == "success"){
      this.router.navigate(['/carousel', 2]);
    }else {
      this.display = 'none';
    }
  }

  deleteById(value:number){
    this.productService.deleteById(value).subscribe((data:httpMsg) => {
      if(data['info'] != null){
        this.msg = data;
        this.display  =  'block';
      }
    });
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
