import {Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../shared/product.service';
import {AnotherProductService} from '../../shared/another-product.service';

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

export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';
  private productId: number;
  private product: Product;
  private anotherProduct: Product;
  private productTitle: string;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private anotherService: AnotherProductService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
    this.anotherProduct = this.anotherService.getProduct();
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(3, '第三个商品', 3.99, 4.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(4, '第四个商品', 4.99, 1.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(6, '第六个商品', 6.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(7, '第七个商品', 4.99, 1.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(8, '第八个商品', 5.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      new Product(9, '第九个商品', 6.99, 2.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']),
      this.product,
      this.anotherProduct,
    ];

    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productTitle = data.product.title;
    });
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
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
