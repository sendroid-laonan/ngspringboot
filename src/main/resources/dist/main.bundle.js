webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginGuard_1 = __webpack_require__("./src/app/components/guard/LoginGuard.ts");
var UnsavedGuard_1 = __webpack_require__("./src/app/components/guard/UnsavedGuard.ts");
var ProductResolve_1 = __webpack_require__("./src/app/components/guard/ProductResolve.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/chat/chat.component.ts");
var carousel_component_1 = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
var product_detail_component_1 = __webpack_require__("./src/app/components/product-detail/product-detail.component.ts");
var routes = [
    { path: '', redirectTo: '/carousel', pathMatch: 'full' },
    { path: 'chat', component: chat_component_1.ChatComponent, outlet: 'aux' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'carousel/:id', component: carousel_component_1.CarouselComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    // { path: 'product/:id', component: ProductDetailComponent, children: [
    // {path: '', component: ProductDescComponent},
    // {path: 'seller/:id', component: SellerInfoComponent}
    // ] ,
    //   resolve: {
    //   product: ProductResolve // resolve路由
    // },
    //   canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]   // 进入目标路由、离开当前路由
    // },
    { path: '**', component: carousel_component_1.CarouselComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            providers: [LoginGuard_1.LoginGuard, UnsavedGuard_1.UnsavedGuard, ProductResolve_1.ProductResolve]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"aux\"></router-outlet>\n<div>\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.test = function ($event) {
        console.log('通过(scroll)指令监听');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var OnScrollDirective = /** @class */ (function () {
    function OnScrollDirective() {
        this.onscroll = function ($event) {
            console.log('通过HostListener监听');
        };
    }
    OnScrollDirective.prototype.scrolled = function (e) {
        if (!e.target) {
            alert(666);
        }
    };
    __decorate([
        core_1.HostListener('scroll', ['$event']),
        __metadata("design:type", Object)
    ], OnScrollDirective.prototype, "onscroll", void 0);
    OnScrollDirective = __decorate([
        core_1.Directive({
            selector: '[onScroll]',
        })
    ], OnScrollDirective);
    return OnScrollDirective;
}());
exports.OnScrollDirective = OnScrollDirective;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/components/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/components/footer/footer.component.ts");
var search_component_1 = __webpack_require__("./src/app/components/search/search.component.ts");
var carousel_component_1 = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
var product_component_1 = __webpack_require__("./src/app/components/product/product.component.ts");
var stars_component_1 = __webpack_require__("./src/app/components/stars/stars.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var dropdown_1 = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
var product_service_1 = __webpack_require__("./src/app/shared/product.service.ts");
var another_product_service_1 = __webpack_require__("./src/app/shared/another-product.service.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/chat/chat.component.ts");
var product_detail_component_1 = __webpack_require__("./src/app/components/product-detail/product-detail.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                search_component_1.SearchComponent,
                carousel_component_1.CarouselComponent,
                product_component_1.ProductComponent,
                stars_component_1.StarsComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                chat_component_1.ChatComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                dropdown_1.BsDropdownModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            providers: [product_service_1.ProductService, another_product_service_1.AnotherProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"min-height: 89.3vh\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"container\" style=\"text-align: center\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"col-sm-12\" style=\"margin-top: 1vh\">\n                <div class=\"col-md-3\" style=\"float: left\">\n                  <app-search id=\"search-view\"></app-search>\n                </div>\n                <div class=\"col-md-9\" style=\"float: left\">\n                  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n                    <!-- 指示符 -->\n                    <ul class=\"carousel-indicators\">\n                      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n                      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n                    </ul>\n\n                    <!-- 轮播图片 -->\n                    <div class=\"carousel-inner\">\n                      <div class=\"carousel-item active\">\n                        <img src=\"http://static.runoob.com/images/mix/img_fjords_wide.jpg\">\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img src=\"http://static.runoob.com/images/mix/img_nature_wide.jpg\">\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img src=\"http://static.runoob.com/images/mix/img_mountains_wide.jpg\">\n                      </div>\n                    </div>\n\n                    <!-- 左右切换按钮 -->\n                    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\"></span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\"></span>\n                    </a>\n\n                  </div>\n                  <div class=\"row\">\n                    <app-product id=\"product-view\" class=\"col-sm-12\"></app-product>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/components/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;


/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".chat{\r\n  position: absolute;\r\n  z-index: 1000;\r\n  float: right;\r\n  margin-left: 80vw;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 chat no-padding\" id=\"chat-view\"\n     style=\"margin-top: 10vh;box-shadow: 0 5px 10px rgba(0,0,0,0.3);border-radius: 0.5rem;overflow: hidden\">\n  <div>\n    <button class=\"col-sm-12 btn-info btn-sm\" type=\"button\" style=\"border: 0\">\n      聊天窗口\n      <i class=\"icon-remove\" style=\"float: right;margin-top: 3px\" (click)=\"closeAux()\"></i></button>\n    <input class=\"col-sm-12\" type=\"text\"\n           style=\"height: 10vh;border: 0;border-bottom: solid 1px rgba(0,0,0,0.1);outline: none\"/>\n    <div class=\"col-sm-12 no-padding\" style=\"height: 4vh;background: #fff\">\n      <input type=\"text\" class=\"col-sm-7 no-padding form-control\" style=\"margin-top: 0.5vh;margin-left: 8px;float: left\"/>\n      <input type=\"button\" class=\"btn btn-info col-sm-3 no-padding\" style=\"margin-top: 0.5vh;margin-right: 8px;float: right\" value=\"发送\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(router) {
        this.router = router;
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.closeAux = function () {
        this.router.navigate([{ outlets: { aux: null } }]);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "#app-footer{\r\n  width: 100%;\r\n position: relative;\r\n  z-index: 600;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 bg-primary\" id=\"app-footer\">\n  <button>copyright © {{year}} - {{company}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = 2018;
        this.company = '广州市晟卓软件科技有限责任公司';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/guard/LoginGuard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Created by laonan on 2018-03-13*/
var LoginGuard = /** @class */ (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function () {
        var loggedIn = Math.random() < 0.5;
        if (!loggedIn) {
            console.log('用户为登录');
        }
        return loggedIn;
    };
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;


/***/ }),

/***/ "./src/app/components/guard/ProductResolve.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_component_1 = __webpack_require__("./src/app/components/product/product.component.ts");
var ProductResolve = /** @class */ (function () {
    function ProductResolve(router) {
        this.router = router;
    }
    ProductResolve.prototype.resolve = function (route, state) {
        var productId = route.params['id'];
        if (productId == 1) {
            return new product_component_1.Product(1, '第一个商品', 1.56, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）');
        }
        else if (productId == 2) {
            return new product_component_1.Product(2, '第二个商品', 1.43, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）');
        }
        else {
            this.router.navigate(['/home']);
            return undefined;
        }
    };
    ProductResolve = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProductResolve);
    return ProductResolve;
}());
exports.ProductResolve = ProductResolve;


/***/ }),

/***/ "./src/app/components/guard/UnsavedGuard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsavedGuard = /** @class */ (function () {
    function UnsavedGuard() {
    }
    UnsavedGuard.prototype.canDeactivate = function (component) {
        return window.confirm('你还没有保存，确定离开吗？');
    };
    return UnsavedGuard;
}());
exports.UnsavedGuard = UnsavedGuard;


/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#btn-to-carousel{\r\n  margin-top: 35vh;\r\n}\r\n\r\n#bg-home{\r\n  min-height: 89.3vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg-home\" class=\"col-sm-12 no-padding\" style=\"position: relative\">\n  <div class=\"col-sm-12\" style=\"height: 100%;background: rgba(0,0,0,0.3)\">\n    <div class=\"col-lg-2 offset-5\">\n      <input type=\"button\" class=\"btn btn-info col-lg-6 offset-3\" (click)=\"toProductDetails()\" id=\"btn-to-carousel\" value=\"商品详情\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toProductDetails = function () {
        this.router.navigate(['/carousel', 2]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/carousel', 1]\">在线竞拍</a>\n    <button type=\"button\" class=\"navbar-toggler hidden-lg-up\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse navbar-toggleable-md\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/home']\" >关于我们</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" >添加商品</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">网站地图</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"[{outlets:{aux: 'chat'}}]\">开始聊天</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.navClass = ["navbar-brand", "nav-link", "nav-link", "nav-link", "nav-link"];
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = "#btn-return-products{\r\n  margin-top: 1vh;\r\n  float: left;\r\n  position: absolute;\r\n  left: 10vw;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"text-align: center;min-height: 89.3vh\">\n  <button type=\"button\" class=\"btn btn-primary\" id=\"btn-return-products\" (click)=\"returnProducts()\">返回</button>\n  <p><img src={{product.url}} style=\"margin-top: 5vh;width: 40vw;height: 25vw;\"></p>\n  <button class=\"col-sm-6 btn btn-default\">商品编号：{{product.id}}</button>\n  <button class=\"col-sm-6 btn btn-default\">商品名称：{{product.title}}</button>\n  <button class=\"col-sm-6 btn btn-default\">商品价格：{{product.price}}</button>\n  <button class=\"col-sm-6 btn btn-default\">商品详情：{{product.remark}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(routeInfo, http) {
        this.routeInfo = routeInfo;
        this.http = http;
        this.products = [];
        this.url = "http://localhost:8080/";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = this.routeInfo.snapshot.params["id"];
        this.url += "product?id=" + this.productId;
        this.http
            .request("GET", this.url, {
            responseType: "json",
            params: { "contentType": "application/json;charset=utf-8" }
        }).subscribe(function (data) { return _this.product = data.valueOf(); });
    };
    ProductDetailComponent.prototype.returnProducts = function () {
        history.back();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/product-detail/product-detail.component.css")]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_1.HttpClient])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
var Product = /** @class */ (function () {
    function Product(id, title, price, remark, url) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.remark = remark;
        this.url = url;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/app/components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\"\n     class=\"col-lg-4 col-sm-6 no-margin\"\n     style=\"float: left\">\n  <div class=\"img-thumbnail\">\n    <img class=\"img-fluid\" src={{product.url}} style=\"height: 15vh;background-size: cover\"/>\n    <div class=\"figure-caption\">\n      <span class=\"pull-left col-7 product-title\"><a [routerLink]=\"['/product', product.id]\">{{product.title}}</a></span>\n      <span class=\"pull-right col-5 product-price\">{{product.price}}元</span>\n      <span class=\"col-12 product-desc\">{{product.remark}}</span>\n    </div>\n    <div>\n      <app-stars [rating]=\"product.rating\"></app-stars>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_service_1 = __webpack_require__("./src/app/shared/product.service.ts");
var another_product_service_1 = __webpack_require__("./src/app/shared/another-product.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(routeInfo, productService, anotherService, el, http) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.anotherService = anotherService;
        this.el = el;
        this.http = http;
        this.imgUrl = 'http://placehold.it/320x150';
        this.url = "http://localhost:8080/";
        this.scrollChange = new core_1.EventEmitter();
    }
    ProductComponent.prototype.ngOnInit = function () {
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
        var _this = this;
        // this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
        // this.routeInfo.data.subscribe((data: {product: Product}) => {
        //   this.productId = data.product.id;
        //   this.productTitle = data.product.title;
        // });
        this.url += "products";
        this.http
            .request("GET", this.url, {
            responseType: "json",
            params: { "contentType": "application/json;charset=utf-8" }
        }).subscribe(function (data) { return _this.products = data.valueOf(); });
    };
    ProductComponent.prototype.onScroll = function () {
        this.scrollChange.next(this.el.nativeElement);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "scrollChange", void 0);
    __decorate([
        core_1.HostListener('scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductComponent.prototype, "onScroll", null);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/components/product/product.component.css")],
            providers: [{
                    provide: product_service_1.ProductService, useClass: another_product_service_1.AnotherProductService
                }]
        }),
        core_1.Directive({
            selector: '[appScroll]'
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_service_1.ProductService,
            another_product_service_1.AnotherProductService,
            core_1.ElementRef,
            http_1.HttpClient])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, remark) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.remark = remark;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"searchForm\" role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"productTitle\">商品名称</label>\n    <input type=\"text\" id=\"productTitle\" placeholder=\"商品名称\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productPrice\">商品价格</label>\n    <input type=\"text\" id=\"productPrice\" placeholder=\"商品价格\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productCategory\">商品类型</label>\n    <input type=\"text\" id=\"productCategory\" placeholder=\"商品名称\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"搜索\"/>\n  </div>\n</form>\n<!--<input type=\"button\" class=\"btn btn-info\" value=\"商品描述\" [routerLink]=\"['./']\"/>-->\n<!--<input type=\"button\" class=\"btn btn-primary\" value=\"销售员信息\" [routerLink]=\"['./seller', 99]\"/>-->\n<!--<router-outlet></router-outlet>-->\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/components/stars/stars.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span *ngFor=\"let star of stars\" class=\"icon-star \" [class.icon-star-empty]=\"star\"></span>\n  <span>{{rating}}星</span>\n</p>\n"

/***/ }),

/***/ "./src/app/components/stars/stars.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 0;
    }
    StarsComponent.prototype.ngOnInit = function () {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "rating", void 0);
    StarsComponent = __decorate([
        core_1.Component({
            selector: 'app-stars',
            template: __webpack_require__("./src/app/components/stars/stars.component.html"),
            styles: [__webpack_require__("./src/app/components/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());
exports.StarsComponent = StarsComponent;


/***/ }),

/***/ "./src/app/shared/another-product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/shared/product.service.ts");
var AnotherProductService = /** @class */ (function () {
    function AnotherProductService() {
    }
    AnotherProductService.prototype.getProduct = function () {
        return new product_service_1.Product(10, '第十个商品', 1.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']);
    };
    AnotherProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AnotherProductService);
    return AnotherProductService;
}());
exports.AnotherProductService = AnotherProductService;


/***/ }),

/***/ "./src/app/shared/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function () {
        return new Product(10, '第十个商品', 3.99, 3.5, '【聚划算】倩碧小雏菊胭脂腮红（每个ID限购10件）', ['电子产品', '硬件设备']);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map