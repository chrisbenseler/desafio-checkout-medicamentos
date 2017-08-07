webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.title = 'Dr. Memed';
        this.hasBackButton = false;
        this.router.events.subscribe(function (e) {
            if (_this.router.navigated) {
                _this.router.navigated = false;
                _this.hasBackButton = e.url.indexOf('prescription') < 0;
            }
        });
    }
    AppComponent.prototype.back = function (event) {
        this.location.back();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(167),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome_angular_font_awesome__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_prescription_page_prescription_page_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bill_page_bill_page_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_bill_exists_guard__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_format_currency_pipe__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_prescription_page_prescription_page_component__["a" /* PrescriptionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bill_page_bill_page_component__["a" /* BillPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_format_currency_pipe__["a" /* FormatCurrencyPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__guards_bill_exists_guard__["a" /* BillExistsGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_prescription_page_prescription_page_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_bill_page_bill_page_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_bill_exists_guard__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var appRoutes = [
    { path: 'prescription', component: __WEBPACK_IMPORTED_MODULE_0__pages_prescription_page_prescription_page_component__["a" /* PrescriptionPageComponent */] },
    { path: 'bill', canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_bill_exists_guard__["a" /* BillExistsGuard */]], component: __WEBPACK_IMPORTED_MODULE_1__pages_bill_page_bill_page_component__["a" /* BillPageComponent */] },
    { path: '', redirectTo: '/prescription', pathMatch: 'full' },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatCurrencyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatCurrencyPipe = (function () {
    function FormatCurrencyPipe() {
    }
    FormatCurrencyPipe.prototype.transform = function (value, args) {
        return 'R$ ' + value.toString().replace('.', ',');
    };
    return FormatCurrencyPipe;
}());
FormatCurrencyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'formatCurrency'
    })
], FormatCurrencyPipe);

//# sourceMappingURL=format-currency.pipe.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "header {\n  background-color: #333333;\n  text-align: center;\n  padding: 10px 0; }\n  header img {\n    height: 30px; }\n\n.backbutton {\n  position: absolute;\n  left: 20px;\n  top: 12px;\n  font-size: 1.8em;\n  cursor: pointer;\n  color: #FFFFFF; }\n\n.backbutton:hover {\n  opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "fa {\n  font-size: 3em;\n  margin-right: 20px; }\n\nsection {\n  margin-top: 20px; }\n\n.price {\n  color: #00a6bf; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "fa {\n  font-size: 3em;\n  margin-right: 20px; }\n\nbutton {\n  text-align: center;\n  line-height: 1.2em;\n  cursor: pointer; }\n\np.subtitle {\n  text-align: center;\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<header>\n  <fa class=\"backbutton\" name=\"arrow-left\" (click)=\"back($event)\" *ngIf=\"hasBackButton\"></fa>\n  <h1>\n    <img src=\"assets/logo.png\" />\n  </h1>\n</header>\n\n<div class=\"offset-md-3 col-md-6\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"billData\">\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"col-2\">\n        <fa name=\"flag-o\"></fa>\n      </div>\n      <div class=\"col-10\">\n        <strong>{{ billData.drugstore.name }}</strong> (a {{ this.distance }} metros)<br />\n        Total: <span class=\"price\">{{ billData.bill.total | formatCurrency }}</span>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let medicine of billData.bill.medicines\">\n      <div class=\"col-2\">\n        <fa name=\"flask\"></fa>\n      </div>\n      <div class=\"col-10\">\n        {{ medicine.amount }} unidade(s) <br />\n        <strong>{{ medicine.name }}</strong> <br />\n        <span class=\"price\">{{ medicine.total | formatCurrency }}</span>\n      </div>\n    </li>\n  </ul>\n\n</section>\n\n<p class=\"disclaimer\">\n  A prescrição Digital Memed não dispensa a apresentação de sua versão impressa à farmácia. O médico repsonsável\n  por esta prescrição não possui qyalquer tipo de vínculo com os preços e/ou farmácias apresentados.\n</p>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<p class=\"subtitle\">\n  prescrição criada em {{ prescription.date }}\n</p>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let item of prescription.items\">\n\n      <div class=\"col-2\">\n        <fa name=\"flask\"></fa>\n      </div>\n      <div class=\"col-10\">\n        {{ item.amount }} unidade(s) <br />\n        <strong>{{ item.name }}</strong>\n      </div>\n\n  </li>\n</ul>\n\n<p class=\"disclaimer\">\n  A prescrição Digital Memed não dispensa a apresentação de sua versão impressa à farmácia. O médico repsonsável\n  por esta prescrição não possui qyalquer tipo de vínculo com os preços e/ou farmácias apresentados.\n</p>\n\n<button (click)=\"getBill($event)\" class=\"btn btn-primary btn-block\">\n  <strong>Encontrar farmácia</strong><br />\n  Serviço oferecido por Memed\n</button>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.lastBill = null;
    }
    Object.defineProperty(ApiService.prototype, "bill", {
        get: function () {
            return this.lastBill;
        },
        set: function (bill) {
            this.lastBill = bill;
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.calculateBill = function (medicines) {
        return this.http.post('http://localhost:3001/farmacias/calculo', { medicines: medicines });
    };
    ApiService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };
    ApiService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillExistsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillExistsGuard = (function () {
    function BillExistsGuard(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    BillExistsGuard.prototype.canActivate = function () {
        if (this.apiService.lastBill) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(true);
        }
        else {
            this.router.navigate(['prescription']);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(false);
        }
    };
    return BillExistsGuard;
}());
BillExistsGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], BillExistsGuard);

var _a, _b;
//# sourceMappingURL=bill-exists.guard.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillPageComponent = (function () {
    function BillPageComponent(apiservice) {
        this.apiservice = apiservice;
        this.billData = null;
        this.userPosition = { lat: -23.5648304, lng: -46.6436604 };
        this.distance = null;
    }
    BillPageComponent.prototype.ngOnInit = function () {
        this.billData = this.apiservice.lastBill;
        var distance = this.apiservice.getDistanceFromLatLonInKm(this.userPosition.lat, this.userPosition.lng, this.billData.drugstore.position.lat, this.billData.drugstore.position.lng);
        this.distance = Math.round(distance * 1000);
    };
    return BillPageComponent;
}());
BillPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-bill-page',
        template: __webpack_require__(168),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], BillPageComponent);

var _a;
//# sourceMappingURL=bill-page.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrescriptionPageComponent = (function () {
    function PrescriptionPageComponent(apiservice, router) {
        this.apiservice = apiservice;
        this.router = router;
        this.prescription = {
            date: (new Date()).toLocaleString('pt-br', { year: 'numeric', month: 'long', day: 'numeric' }),
            items: [
                { name: 'Ácido zoledrônico 4mg', amount: 1 },
                { name: 'Água para injeção 1mL', amount: 1 },
                { name: 'Betaserc 16mg', amount: 1 }
            ]
        };
    }
    PrescriptionPageComponent.prototype.ngOnInit = function () {
    };
    PrescriptionPageComponent.prototype.getBill = function (event) {
        var _this = this;
        this.apiservice.calculateBill(this.prescription.items).subscribe(function (data) {
            _this.apiservice.lastBill = data;
            _this.router.navigate(['bill']);
        });
    };
    return PrescriptionPageComponent;
}());
PrescriptionPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-prescription-page',
        template: __webpack_require__(169),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PrescriptionPageComponent);

var _a, _b;
//# sourceMappingURL=prescription-page.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map