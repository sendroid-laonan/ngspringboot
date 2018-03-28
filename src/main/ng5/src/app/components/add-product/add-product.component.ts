import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

@Injectable()
export class AddProductComponent implements OnInit {

  url = "http://localhost:8080/";
  private msg: httpMsg;
  private display: any;
  private info: any;
  private errorDisplay:boolean;
  private myForm: FormGroup;

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  // 创建表单元素
  createForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, this.titleValidator]],
      price: ['', [Validators.required]],
      url: ['', []],
      remark: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
    });
  }

  ngOnInit() {
    this.display = 'none';
    this.errorDisplay = true;
  }

  onSubmit(value:any){
    if(this.myForm.valid) {
      this.productService.saveProduct(value).subscribe((data: httpMsg) => {
        if (data['info'] != null) {
          this.msg = data;
          this.display = 'block';
        }
      });
    }else {
      this.errorDisplay = false;
    }
  }

  onSkip(value:string){
    if(value == "success"){
      this.router.navigate(['/carousel', 2]);
    }else {
      this.display = 'none';
    }
  }

  titleValidator(control: FormControl): any {
    const regx = /^[\u4e00-\u9fa5]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { isChinese: { info: '请输入中文' } };
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
