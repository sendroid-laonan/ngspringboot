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
import {AppRoutingModule} from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ProductService} from './shared/product.service';
import {AnotherProductService} from './shared/another-product.service';
import {HomeComponent} from './components/home/home.component';

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
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ProductService, AnotherProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
