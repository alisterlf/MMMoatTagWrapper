(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">MMMoatTagWrapper</mat-toolbar>\r\n<mat-card>\r\n  <mat-form-field>\r\n    <textarea matInput placeholder=\"Tag\" required #tag></textarea>\r\n  </mat-form-field>\r\n  <button mat-button (click)=\"getTag(tag.value)\" mat-raised-button color=\"primary\">Wrap Me!</button>\r\n  <mat-divider></mat-divider>\r\n  <table *ngIf=\"newTags\">\r\n    <tr>\r\n      <th>Old tag</th>\r\n      <th>New tag</th>\r\n    </tr>\r\n    <tr *ngFor=\"let newTag of newTags\">\r\n      <td>\r\n        {{newTag.originalTag}}\r\n      </td>\r\n      <td>https://svastx.moatads.com/mediamathvpaid176399725163/template.xml?level1=[AD_ATTR.advertiser]&level2=[AD_ATTR.campaign]&level3=[AD_ATTR.strategy]&level4=[AD_ATTR.creative]&slicer1=[BID_ATTR.site]&ad_width={{newTag.width}}&ad_height={{newTag.height}}&ad_title=MEDIAMATH_VPAID_Template_Title_Asset&ad_duration={{newTag.duration}}&zMoatBidId=[BID_ATTR.bid_id]&zMoatOrgID=[AD_ATTR.organization]&tmode=2&vast_url={{newTag.url}}</td>\r\n    </tr>\r\n  </table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  text-align: left;\n  width: 100%; }\n  table td {\n    /* These are technically the same, but use both */\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    -ms-word-break: break-all;\n    /* This is the dangerous one in WebKit, as it breaks things wherever */\n    word-break: break-all;\n    /* Instead use this non-standard one: */\n    word-break: break-word;\n    /* Adds a hyphen where the word breaks, if supported (No Blink) */\n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(ngxXml2jsonService, http) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.http = http;
        // tslint:disable-next-line:max-line-length
        this.xml = "<VAST xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"vast_2.0.1-creativeView.xsd\" version=\"2.0\"><Ad id=\"moat_ad\"><InLine><AdSystem>2.0</AdSystem><AdTitle>Vick_-_PG1_Vick_Winter_Janeiro_2018_Brazil-23562901</AdTitle><Impression/><Creatives><Creative><Linear><Duration>00:00:15</Duration><MediaFiles><MediaFile type=\"application/javascript\" apiFramework=\"VPAID\" height=\"360\" width=\"640\" delivery=\"progressive\"><![CDATA[https://svastx.moatads.com/iprospectpgbrazilsizmekvideo327190469710/moatwrapper.js#vast=https%3a%2f%2fbs.serving-sys.com%2fServing%3fcn%3ddisplay%26c%3d23%26pl%3dVAST%26pli%3d23562901%26PluID%3d0%26pos%3d5815%26ord%3d88178920%26cim%3d1&level1=851181&level2=MediaMath%20BR%20-%20ROS-Video&level3=23562901&level4=vpaid&slicer1=undefined&slicer2=undefined&pcode=iprospectpgbrazilsizmekvideo327190469710&spvb=1]]></MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>";
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.init();
        // tslint:disable-next-line:max-line-length
        this.initTag = 'https://svastx.moatads.com/iprospectpgbrazilsizmekvideo327190469710/Vick_-_PG1_Vick_Winter_Janeiro_2018_Brazil-23562901_js.xml';
    };
    AppComponent.prototype.getTag = function (value) {
        var _this = this;
        if (value === '') {
            return;
        }
        var baseTags = value.split('\n');
        this.newTags = [];
        baseTags.forEach(function (tag) {
            _this.getConfig(tag).subscribe(function (data) {
                var precessedTag = _this.processTag(data);
                _this.newTags.push({
                    originalTag: tag,
                    url: encodeURIComponent(tag),
                    height: precessedTag.height,
                    width: precessedTag.width,
                    duration: precessedTag.duration
                });
            });
        });
    };
    AppComponent.prototype.processTag = function (xml) {
        var obj = this.parseXml(xml);
        var mediaFile = obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
        var attributes = null;
        this.duration = obj.VAST.Ad.InLine.Creatives.Creative.Linear.Duration;
        if (mediaFile.length !== undefined) {
            attributes = mediaFile.find(function (x) { return x['@attributes'].type === 'application/javascript'; })['@attributes'];
        }
        else {
            attributes = mediaFile['@attributes'];
        }
        this.height = attributes.height;
        this.width = attributes.width;
        this.encodedDuration = encodeURIComponent(this.duration);
        return {
            height: attributes.height,
            width: attributes.width,
            duration: encodeURIComponent(this.duration)
        };
    };
    AppComponent.prototype.getConfig = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this.http.get(url, { responseType: 'text' });
    };
    AppComponent.prototype.init = function () {
        var obj = this.parseXml(this.xml);
        this.duration = obj.VAST.Ad.InLine.Creatives.Creative.Linear.Duration;
        this.height =
            obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile['@attributes'].height;
        this.width =
            obj.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile['@attributes'].width;
        this.encodedDuration = encodeURIComponent(this.duration);
    };
    AppComponent.prototype.parseXml = function (xml) {
        var parser = new DOMParser();
        var parsedXml = parser.parseFromString(xml, 'text/xml');
        var obj = this.ngxXml2jsonService.xmlToJson(parsedXml);
        return obj;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GIT\MMMoatTagWrapper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map