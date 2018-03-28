import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { StarsComponent } from './components/stars/stars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent} from './components/home/home.component';
import { ChatComponent} from "./components/chat/chat.component";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppConfig} from "../../app-config";
import {ApiRequestService} from "./service/api-request.service";
import {UserInfoService} from "./service/user-info.service";
import {ProductService} from "./service/product.service";
import { CommentComponent } from './components/comment/comment.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    NavbarComponent,
    HomeComponent,
    ChatComponent,
    ProductDetailComponent,
    AddProductComponent,
    CommentComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    ApiRequestService,
    UserInfoService,
    AppConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
