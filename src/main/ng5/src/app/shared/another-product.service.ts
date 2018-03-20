import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';

@Injectable()
export class AnotherProductService implements ProductService {
  getProduct(): Product {
    return new Product(11, '第十一个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']);
  }

  constructor() { }

}
