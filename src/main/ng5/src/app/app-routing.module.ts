import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './components/guard/LoginGuard';
import {UnsavedGuard} from './components/guard/UnsavedGuard';
import {ProductResolve} from './components/guard/ProductResolve';
import {ProductComponent} from './components/product/product.component';
import {HomeComponent} from './components/home/home.component';
import {ChatComponent} from './components/chat/chat.component';
import {CarouselComponent} from "./components/carousel/carousel.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {AddProductComponent} from "./components/add-product/add-product.component";

const routes: Routes = [
  { path: '', redirectTo: '/carousel', pathMatch: 'full'},
  { path: 'chat', component: ChatComponent, outlet: 'aux'},
  { path: 'home', component: HomeComponent},
  { path: 'carousel/:id', component: CarouselComponent },
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'addProduct', component: AddProductComponent},
  // { path: 'product/:id', component: ProductDetailComponent, children: [
    // {path: '', component: ProductDescComponent},
    // {path: 'seller/:id', component: SellerInfoComponent}
  // ] ,
  //   resolve: {
  //   product: ProductResolve // resolve路由
  // },
  //   canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]   // 进入目标路由、离开当前路由
  // },
  { path: '**', component: CarouselComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})

export class AppRoutingModule { }
