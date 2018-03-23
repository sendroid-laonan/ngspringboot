import {Component, Directive, ElementRef, EventEmitter, HostListener, Injectable, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../shared/product.service';
import {AnotherProductService} from '../../shared/another-product.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [{
    provide: ProductService, useClass: AnotherProductService
  }]
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
    private anotherService: AnotherProductService,
    private el: ElementRef,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.product = this.productService.getProduct();
    // this.anotherProduct = this.anotherService.getProduct();
    // this.products = [
    //   new Product(1, '第一个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(2, '第二个商品', 2.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(3, '第三个商品', 3.99, 4.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(4, '第四个商品', 4.99, 1.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(5, '第五个商品', 5.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(6, '第六个商品', 6.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(7, '第七个商品', 4.99, 1.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(8, '第八个商品', 5.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   new Product(9, '第九个商品', 6.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）'),
    //   this.product,
    //   this.anotherProduct,
    // ];

    // this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // this.routeInfo.data.subscribe((data: {product: Product}) => {
    //   this.productId = data.product.id;
    //   this.productTitle = data.product.title;
    // });

    this.url += "product/batch";
    this.http
      .request(
        "GET",
        this.url,
        {
          responseType:"json",
          params:{"contentType": "application/json;charset=utf-8"}
        }).subscribe( data => this.products = data.valueOf());
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
