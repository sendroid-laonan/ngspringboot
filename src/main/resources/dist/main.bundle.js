webpackJsonp(["main"],{

/***/ "./app-config.ts":
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
/**
 * This is a singleton class
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        //Provide all the Application Configs here
        this.version = "1.0.0";
        this.locale = "en-US";
        this.currencyFormat = { style: "currency", currency: "USD" };
        this.dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        // API Related configs
        this.apiPort = "9119";
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName === undefined) {
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        }
        if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
        }
        else {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
        }
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
    AppConfig = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),

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
var add_product_component_1 = __webpack_require__("./src/app/components/add-product/add-product.component.ts");
var comment_component_1 = __webpack_require__("./src/app/components/comment/comment.component.ts");
var hero_detail_component_1 = __webpack_require__("./src/app/components/hero-detail/hero-detail.component.ts");
var routes = [
    { path: '', redirectTo: '/carousel', pathMatch: 'full' },
    { path: 'chat', component: chat_component_1.ChatComponent, outlet: 'aux' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'carousel/:id', component: carousel_component_1.CarouselComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent,
        children: [
            { path: 'comment/:id', component: comment_component_1.CommentComponent },
        ]
    },
    { path: 'addProduct', component: add_product_component_1.AddProductComponent },
    { path: 'hero', component: hero_detail_component_1.HeroDetailComponent },
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
// { path: 'product/:id', component: ProductDetailComponent, children: [
// {path: '', component: ProductDescComponent},
// {path: 'seller/:id', component: SellerInfoComponent}
// ] ,
//   resolve: {
//   product: ProductResolve // resolve路由
// },
//   canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]   // 进入目标路由、离开当前路由
// },


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
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/chat/chat.component.ts");
var product_detail_component_1 = __webpack_require__("./src/app/components/product-detail/product-detail.component.ts");
var comment_component_1 = __webpack_require__("./src/app/components/comment/comment.component.ts");
var hero_detail_component_1 = __webpack_require__("./src/app/components/hero-detail/hero-detail.component.ts");
var add_product_component_1 = __webpack_require__("./src/app/components/add-product/add-product.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var dropdown_1 = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
var app_config_1 = __webpack_require__("./app-config.ts");
var api_request_service_1 = __webpack_require__("./src/app/service/api-request.service.ts");
var user_info_service_1 = __webpack_require__("./src/app/service/user-info.service.ts");
var product_service_1 = __webpack_require__("./src/app/service/product.service.ts");
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
                product_detail_component_1.ProductDetailComponent,
                add_product_component_1.AddProductComponent,
                comment_component_1.CommentComponent,
                hero_detail_component_1.HeroDetailComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                dropdown_1.BsDropdownModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [
                product_service_1.ProductService,
                api_request_service_1.ApiRequestService,
                user_info_service_1.UserInfoService,
                app_config_1.AppConfig,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = "#msg-background{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0,0,0,0.5);\r\n  position: absolute;\r\n  z-index: 50000;\r\n  text-align: center;\r\n}\r\n\r\n#msg-view{\r\n  margin-top: 10vh;\r\n  height: 20vh;\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.3);\r\n          box-shadow: 0 5px 10px rgba(0,0,0,0.3);\r\n  border-radius: 1rem;\r\n}\r\n\r\n#info{\r\n  height: 70%;\r\n  border: 0;\r\n  background: #fff;\r\n  border-bottom: solid 1px rgba(0,0,0,0.1);\r\n}\r\n\r\n#btn-confirm{\r\n  margin-top: 1vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"msg-background\" [ngStyle]=\"{'display': display}\">\r\n  <div id=\"msg-view\" class=\"col-4 offset-4\">\r\n    <input id=\"info\" class=\"col-12\" type=\"button\"\r\n           *ngIf=\"display == 'block'\" value=\"添加结果:{{msg.info}}\"/>\r\n    <button class=\"btn btn-primary col-lg-2 offset-lg-8\" id=\"btn-confirm\"\r\n            *ngIf=\"display == 'block'\" (click)=\"onSkip(msg.info)\">确定</button>\r\n  </div>\r\n</div>\r\n<div class=\"container\" style=\"height:72vh\">\r\n  <div class=\"row col-sm-12\" style=\"margin-top: 15vh\">\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\" action=\"/product/\" method=\"post\" class=\"col-sm-12\" style=\"padding:20px\">\r\n      <div>\r\n        <p class=\"col-sm-4 offset-4 form-group\">\r\n          商品名称<input type=\"text\" class=\"form-control\" formControlName=\"title\"/>\r\n          <span [ngStyle]=\"{'display':this.errorDisplay ? 'none':'block'}\">\r\n            <span style=\"color: red;\" [hidden]=\"!myForm.hasError('required','title')\">商品名称不能为空</span>\r\n            <span style=\"color: red;\" [hidden]=\"!myForm.hasError('isChinese', 'title')\">{{myForm.getError('isChinese', 'title')?.info}}</span>\r\n          </span>\r\n        </p>\r\n        <p class=\"col-sm-4 offset-4 form-group\">\r\n          商品价格<input type=\"text\" class=\"form-control\" formControlName=\"price\"/>\r\n          <span [ngStyle]=\"{'display':this.errorDisplay ? 'none':'block'}\">\r\n            <span style=\"color: red;\" [hidden]=\"!myForm.hasError('required','price')\">价格不能为空</span>\r\n          </span>\r\n        </p>\r\n        <p class=\"col-sm-4 offset-4 form-group\">\r\n          商品图片<input type=\"text\" class=\"form-control\" formControlName=\"url\"/>\r\n        </p>\r\n        <p class=\"col-sm-4 offset-4 form-group\">\r\n          商品详情<input type=\"text\" class=\"form-control\" formControlName=\"remark\"/>\r\n          <span [ngStyle]=\"{'display':this.errorDisplay ? 'none':'block'}\">\r\n            <span style=\"color: red;\" [hidden]=\"!myForm.hasError('required','remark')\">商品详情不能为空</span>\r\n          </span>\r\n        </p>\r\n        <p class=\"col-sm-4 offset-4 form-group\">\r\n          商品星评<input type=\"text\" class=\"form-control\" formControlName=\"rating\"/>\r\n          <span [ngStyle]=\"{'display':this.errorDisplay ? 'none':'block'}\">\r\n            <span style=\"color: red;\" [hidden]=\"!myForm.hasError('required','rating')\">商品星评不能为空</span>\r\n          </span>\r\n        </p>\r\n      </div>\r\n      <button class=\"col-sm-2 offset-5 btn btn-success\" type=\"submit\" >提交</button>\r\n      <!--<button class=\"col-sm-2 offset-5 btn btn-success\" type=\"submit\" [disabled]=\"!myForm.valid\">提交</button>-->\r\n    </form>\r\n  </div>\r\n</div>\r\n<div>\r\n  {{myForm.value | json}}\r\n</div>\r\n<div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var product_service_1 = __webpack_require__("./src/app/service/product.service.ts");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(routeInfo, http, productService, router, fb) {
        this.routeInfo = routeInfo;
        this.http = http;
        this.productService = productService;
        this.router = router;
        this.fb = fb;
        this.url = "http://localhost:8080/";
        this.createForm();
    }
    // 创建表单元素
    AddProductComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            title: ['', [forms_1.Validators.required, this.titleValidator]],
            price: ['', [forms_1.Validators.required]],
            url: ['', []],
            remark: ['', [forms_1.Validators.required]],
            rating: ['', [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(5)]],
        });
    };
    AddProductComponent.prototype.ngOnInit = function () {
        this.display = 'none';
        this.errorDisplay = true;
    };
    AddProductComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.myForm.valid) {
            this.productService.saveProduct(value).subscribe(function (data) {
                if (data['info'] != null) {
                    _this.msg = data;
                    _this.display = 'block';
                }
            });
        }
        else {
            this.errorDisplay = false;
        }
    };
    AddProductComponent.prototype.onSkip = function (value) {
        if (value == "success") {
            this.router.navigate(['/carousel', 2]);
        }
        else {
            this.display = 'none';
        }
    };
    AddProductComponent.prototype.titleValidator = function (control) {
        var regx = /^[\u4e00-\u9fa5]+$/;
        var valid = regx.test(control.value);
        return valid ? null : { isChinese: { info: '请输入中文' } };
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/components/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/components/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_1.HttpClient,
            product_service_1.ProductService,
            router_1.Router,
            forms_1.FormBuilder])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
var Product = /** @class */ (function () {
    function Product(id, title, price, url, remark, rating, comments) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.url = url;
        this.remark = remark;
        this.rating = rating;
        this.comments = comments;
    }
    return Product;
}());
exports.Product = Product;
var httpMsg = /** @class */ (function () {
    function httpMsg(info) {
        this.info = info;
    }
    return httpMsg;
}());
exports.httpMsg = httpMsg;


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

/***/ "./src/app/components/comment/comment.component.css":
/***/ (function(module, exports) {

module.exports = "#comments-view{\r\n  margin-top: 8vh;\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 5px 20px rgba(0,0,0,0.2);\r\n          box-shadow: 0 5px 20px rgba(0,0,0,0.2);\r\n  padding: 10px;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#comments-view input:first-child{\r\n  margin-top: 1vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" id=\"comments-view\">\n  <div style=\"height: 30vh;overflow-y: auto\" id=\"scroll-view\">\n    <div *ngFor=\"let comment of comments\" class=\"col-12\" style=\"margin-top: 3px;\">\n      <input type=\"text\" class=\"col-12 form-control\" value=\"{{comment.info}}\" readonly/>\n    </div>\n  </div>\n  <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm.value)\"\n        class=\"col-sm-12\">\n    <div class=\"input-group\" style=\"margin-bottom: 1vh\">\n      <input class=\"form-control\" id=\"comment-info\" type=\"text\" #info=\"ngModel\" ngModel name=\"info\"/>\n    </div>\n    <div ngModelGroup=\"product\">\n      <input type=\"hidden\" #id=\"ngModel\" ngModel=\"{{productId}}\" value=\"{{productId}}\" name=\"id\" />\n    </div>\n    <button class=\"label btn btn-success\" type=\"submit\">发送</button>\n  </form>\n  <div>\n    {{myForm.value | json}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
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
var product_service_1 = __webpack_require__("./src/app/service/product.service.ts");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(routeInfo, productService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = this.routeInfo.snapshot.params["id"];
        this.productService.getComment(this.productId).subscribe(function (data) { _this.comments = data.valueOf(); });
    };
    CommentComponent.prototype.onSubmit = function (value) {
        var _this = this;
        $('#comment-info').val(null);
        this.productService.saveComment(value).subscribe(function (data) {
            if (data['info'] != null) {
                _this.productService.getComment(_this.productId).subscribe(function (data) { _this.comments = data.valueOf(); });
            }
        });
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            template: __webpack_require__("./src/app/components/comment/comment.component.html"),
            styles: [__webpack_require__("./src/app/components/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_service_1.ProductService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
var Comment = /** @class */ (function () {
    function Comment(id, info, product) {
        this.id = id;
        this.info = info;
        this.product = product;
    }
    return Comment;
}());
exports.Comment = Comment;
var Product = /** @class */ (function () {
    function Product(id) {
        this.id = id;
    }
    return Product;
}());
exports.Product = Product;
var httpMsg = /** @class */ (function () {
    function httpMsg(info) {
        this.info = info;
    }
    return httpMsg;
}());
exports.httpMsg = httpMsg;


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

/***/ "./src/app/components/hero-detail/hero-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"postDate()\">\n      <div class=\"form-group\">\n        <label for=\"username\">用户名:</label>\n        <input type=\"text\" placeholder=\"请输入用户名\" class=\"form-control\" id=\"username\" formControlName=\"username\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"mobile\">手机号码:</label>\n        <input type=\"text\" placeholder=\"请输入手机号码\" class=\"form-control\" id=\"mobile\" formControlName=\"mobile\"/>\n      </div>\n      <div formGroupName=\"password\" style=\"border:none;\">\n        <div class=\"form-group\">\n          <label>密码:</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"请输入密码\" formControlName=\"pass1\"/>\n        </div>\n        <div class=\"form-group\">\n          <label>确认密码:</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"请再次输入密码\" formControlName=\"pass2\"/>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"提交\" class=\"btn btn-success\" [disabled]=\"!myForm.valid\"/>\n      </div>\n    </form>\n    <div>\n      {{myForm.value | json}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hero-detail/hero-detail.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    // 创建表单元素
    HeroDetailComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(6)]],
            mobile: ['', [forms_1.Validators.required]],
            password: this.fb.group({
                pass1: [''],
                pass2: ['']
            })
        });
    };
    // 提交表单函数
    HeroDetailComponent.prototype.postDate = function () {
        /**
         * valid:是否有效
         * invalid:无效
         * dirty:脏
         * status:状态
         * errors:显示错误
         */
        if (this.myForm.valid) {
            console.log(this.myForm.value);
        }
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-detail',
            template: __webpack_require__("./src/app/components/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;


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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/carousel', 1]\">在线竞拍</a>\n    <button type=\"button\" class=\"navbar-toggler hidden-lg-up\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse navbar-toggleable-md\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/home']\" >关于我们</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/addProduct']\" >添加商品</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/hero']\" >英雄</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"[{outlets:{aux: 'chat'}}]\">开始聊天</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

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

module.exports = "#btn-return-products{\r\n  margin-top: 1vh;\r\n  float: left;\r\n  position: absolute;\r\n  left: 10vw;\r\n}\r\n\r\n#msg-background{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0,0,0,0.5);\r\n  position: absolute;\r\n  z-index: 50000;\r\n  text-align: center;\r\n}\r\n\r\n#msg-view{\r\n  margin-top: 10vh;\r\n  height: 20vh;\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.3);\r\n          box-shadow: 0 5px 10px rgba(0,0,0,0.3);\r\n  border-radius: 1rem;\r\n}\r\n\r\n#info{\r\n  height: 70%;\r\n  border: 0;\r\n  background: #fff;\r\n  border-bottom: solid 1px rgba(0,0,0,0.1);\r\n}\r\n\r\n#btn-confirm{\r\n  margin-top: 1vh;\r\n}\r\n\r\n#btn-update, #btn-delete{\r\n  margin-top: 1vh;\r\n}\r\n\r\n.input-group{\r\n  margin-top: 3px;\r\n}\r\n\r\n#btn-open-comment{\r\n  margin-top: 1vh;\r\n  float: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"msg-background\" [ngStyle]=\"{'display': display}\">\r\n  <div id=\"msg-view\" class=\"col-4 offset-4\">\r\n    <input id=\"info\" class=\"col-12\" type=\"button\" *ngIf=\"display == 'block'\" value=\"操作结果:{{msg.info}}\"/>\r\n    <button class=\"btn btn-primary col-lg-2 offset-lg-8\" id=\"btn-confirm\"\r\n            *ngIf=\"display == 'block'\" (click)=\"onSkip(msg.info)\">确定</button>\r\n  </div>\r\n</div>\r\n<div class=\"col-sm-12\" style=\"text-align: center;min-height: 89.3vh\">\r\n  <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm.value)\"\r\n        action=\"/product/\"\r\n        method=\"put\"\r\n        class=\"col-sm-9\" style=\"padding:20px;float: left\">\r\n    <button type=\"button\" class=\"btn btn-primary\" id=\"btn-return-products\" (click)=\"returnProducts()\">返回</button>\r\n    <p><img src={{product.url}} style=\"margin-top: 5vh;width: 40vw;height: 25vw;\"></p>\r\n    <input type=\"hidden\" #url=\"ngModel\" [(ngModel)]=\"product.url\" value=\"{{product.url}}\" name=\"url\"/>\r\n    <div class=\"col-sm-6 offset-4 input-group\">\r\n      <button class=\"btn btn-info\">商品编号：</button>\r\n      <input type=\"text\" class=\"form-control col-7\" readonly\r\n             value=\"{{product.id}}\" #id=\"ngModel\" [(ngModel)]=\"product.id\" name=\"id\"/>\r\n    </div>\r\n    <div class=\"col-sm-6 offset-4 input-group\">\r\n      <button class=\"btn btn-info\">商品名称：</button>\r\n      <input type=\"text\" class=\"form-control col-7\"\r\n             value=\"{{product.title}}\" #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\"/>\r\n    </div>\r\n    <div class=\"col-sm-6 offset-4 input-group\">\r\n      <button class=\"btn btn-info\">商品价格：</button>\r\n      <input type=\"text\" class=\"form-control col-7\"\r\n             value=\"{{product.price}}\" #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\"/>\r\n    </div>\r\n    <div class=\"col-sm-6 offset-4 input-group\">\r\n      <button class=\"btn btn-info\">商品详情：</button>\r\n      <input type=\"text\" class=\"form-control col-7\"\r\n             value=\"{{product.remark}}\" #remark=\"ngModel\" [(ngModel)]=\"product.remark\" name=\"remark\"/>\r\n    </div>\r\n    <div class=\"col-sm-6 offset-4 input-group\">\r\n      <button class=\"btn btn-info\">商品评价：</button>\r\n      <input type=\"text\" class=\"form-control col-7\" readonly\r\n             value=\"{{product.rating}}\" #rating=\"ngModel\" [(ngModel)]=\"product.rating\" name=\"rating\"/>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <button class=\"col-lg-1 btn btn-success\" id=\"btn-update\" type=\"submit\">修改</button>\r\n      <button class=\"col-lg-1 btn btn-default\" id=\"btn-delete\" type=\"button\" (click)=\"deleteById(product.id)\">删除</button>\r\n    </div>\r\n  </form>\r\n  <div class=\"col-sm-3\" style=\"float: left\">\r\n    <input type=\"hidden\" [(ngModel)]=\"productId\"/>\r\n    <input type=\"button\" class=\"btn btn-default\" [routerLink]=\"['./comment', product.id]\" value=\"打开评论\" id=\"btn-open-comment\"/>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
var product_service_1 = __webpack_require__("./src/app/service/product.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(routeInfo, router, productService, fb) {
        this.routeInfo = routeInfo;
        this.router = router;
        this.productService = productService;
        this.fb = fb;
        this.products = [];
        this.url = "http://localhost:8080/";
        this.productForm = fb.group({
            price: ['金额不能超过6位数', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display = 'none';
        this.productId = this.routeInfo.snapshot.params["id"];
        this.productService.getOne(this.productId).subscribe(function (data) {
            _this.product = data;
        });
    };
    ProductDetailComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.productForm.valid) {
            this.productService.updateProduct(value).subscribe(function (data) {
                if (data['info'] != null) {
                    _this.msg = data;
                    _this.display = 'block';
                }
            });
        }
        else {
            console.log(this.productForm.value);
        }
    };
    ProductDetailComponent.prototype.onSkip = function (value) {
        if (value == "success") {
            this.router.navigate(['/carousel', 2]);
        }
        else {
            this.display = 'none';
        }
    };
    ProductDetailComponent.prototype.deleteById = function (value) {
        var _this = this;
        this.productService.deleteById(value).subscribe(function (data) {
            if (data['info'] != null) {
                _this.msg = data;
                _this.display = 'block';
            }
        });
    };
    ProductDetailComponent.prototype.returnProducts = function () {
        history.back();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/product-detail/product-detail.component.css")],
            providers: [product_service_1.ProductService]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            product_service_1.ProductService,
            forms_1.FormBuilder])
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
var httpMsg = /** @class */ (function () {
    function httpMsg(info) {
        this.info = info;
    }
    return httpMsg;
}());
exports.httpMsg = httpMsg;


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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var product_service_1 = __webpack_require__("./src/app/service/product.service.ts");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(routeInfo, productService, el, http) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.el = el;
        this.http = http;
        this.imgUrl = 'http://placehold.it/320x150';
        this.url = "http://localhost:8080/";
        this.scrollChange = new core_1.EventEmitter();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url += "product/batch";
        this.http
            .request("GET", this.url, {
            responseType: "json",
            params: { "contentType": "application/json;charset=utf-8" }
        }).subscribe(function (data) { _this.products = data.valueOf(); });
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
        }),
        core_1.Directive({
            selector: '[appScroll]'
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_service_1.ProductService,
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

/***/ "./src/app/service/api-request.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var user_info_service_1 = __webpack_require__("./src/app/service/user-info.service.ts");
var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(http, router, userInfoService) {
        this.http = http;
        this.router = router;
        this.userInfoService = userInfoService;
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.getHeaders = function () {
        var headers = new http_1.HttpHeaders();
        var token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        return this.http.get(url, { headers: this.getHeaders(), params: urlParams })
            .catch(function (error) {
            console.log("Some error in catch");
            if (error.status === 401 || error.status === 403) {
                me.router.navigate(['/logout']);
            }
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var me = this;
        return this.http.post(url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        return this.http.put(url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        return this.http.delete(url, { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ApiRequestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            user_info_service_1.UserInfoService])
    ], ApiRequestService);
    return ApiRequestService;
}());
exports.ApiRequestService = ApiRequestService;


/***/ }),

/***/ "./src/app/service/product.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var api_request_service_1 = __webpack_require__("./src/app/service/api-request.service.ts");
var ProductService = /** @class */ (function () {
    function ProductService(http, apiRequest) {
        this.http = http;
        this.apiRequest = apiRequest;
    }
    ProductService.prototype.saveComment = function (value) {
        this.url = "../product/comment";
        return this.apiRequest.post(this.url, value);
    };
    ProductService.prototype.saveProduct = function (value) {
        this.url = "../product/";
        return this.apiRequest.post(this.url, value);
    };
    ProductService.prototype.updateProduct = function (value) {
        this.url = "../product/";
        return this.apiRequest.put(this.url, value);
    };
    ProductService.prototype.getOne = function (productId) {
        this.url = "../product/single?id=" + productId;
        return this.http
            .request("GET", this.url, {
            responseType: "json",
            params: { "contentType": "application/json;charset=utf-8" }
        });
    };
    ProductService.prototype.deleteById = function (value) {
        this.url = "../product/?id=" + value;
        return this.apiRequest.delete(this.url);
    };
    ProductService.prototype.getComment = function (value) {
        this.url = "../product/comments?id=" + value;
        return this.http
            .request("GET", this.url, {
            responseType: "json",
            params: { "contentType": "application/json;charset=utf-8" }
        });
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            api_request_service_1.ApiRequestService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var httpMsg = /** @class */ (function () {
    function httpMsg(info) {
        this.info = info;
    }
    return httpMsg;
}());
exports.httpMsg = httpMsg;
var Product = /** @class */ (function () {
    function Product(id, title, price, url, remark, rating, comments) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.url = url;
        this.remark = remark;
        this.rating = rating;
        this.comments = comments;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/app/service/user-info.service.ts":
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
var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
        this.currentUserKey = "currentUser";
        this.storage = sessionStorage; // <--- you may switch between sessionStorage or LocalStrage (only one place to change)
    }
    //Store userinfo from session storage
    UserInfoService.prototype.storeUserInfo = function (userInfoString) {
        this.storage.setItem(this.currentUserKey, userInfoString);
    };
    //Remove userinfo from session storage
    UserInfoService.prototype.removeUserInfo = function () {
        this.storage.removeItem(this.currentUserKey);
    };
    //Get userinfo from session storage
    UserInfoService.prototype.getUserInfo = function () {
        try {
            var userInfoString = this.storage.getItem(this.currentUserKey);
            if (userInfoString) {
                var userObj = JSON.parse(this.storage.getItem(this.currentUserKey));
                return userObj;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    UserInfoService.prototype.isLoggedIn = function () {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    };
    //Get User's Display name from session storage
    UserInfoService.prototype.getUserName = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.displayName;
        }
        return "no-user";
    };
    UserInfoService.prototype.getStoredToken = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.token;
        }
        return null;
    };
    UserInfoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserInfoService);
    return UserInfoService;
}());
exports.UserInfoService = UserInfoService;


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