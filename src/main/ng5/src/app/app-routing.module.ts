import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './components/guard/LoginGuard';
import {UnsavedGuard} from './components/guard/UnsavedGuard';
import {ProductResolve} from './components/guard/ProductResolve';
import {ProductComponent} from './components/product/product.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'chat', component: ChatComponent, outlet: 'aux'},
  { path: 'home', component: HomeComponent },
  // { path: 'product/:id', component: ProductComponent, children: [
    // {path: '', component: ProductDescComponent},
    // {path: 'seller/:id', component: SellerInfoComponent}
  // ] ,
  //   resolve: {
  //   product: ProductResolve // resolve路由
  // },
  //   canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]   // 进入目标路由、离开当前路由
  // },
  // { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})

export class AppRoutingModule { }
