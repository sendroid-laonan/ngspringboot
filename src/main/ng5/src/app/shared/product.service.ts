import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): Product {
    return new Product(10, '第十个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']);
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
