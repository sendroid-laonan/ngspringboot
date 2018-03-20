import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Product} from '../product/product.component';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const productId: number = route.params['id'];

    if (productId == 1) {
      return new Product(1, '第一个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']);
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }

  }

}
