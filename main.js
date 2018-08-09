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

/***/ "./src/app/all-countries/all-countries.component.css":
/*!***********************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".country {\n  margin-top: 16px;\n}\n\n.jumbotron-fluid {\n  font-family: 'Sintony', sans-serif;\n  text-align: center;\n  font-size: 100px;\n  padding-top: 3%;\n}\n\n.card-text {\n  font-family: 'Abel', sans-serif;\n  font-size: 18px;\n}\n\n.card-title {\n  font-size: 26px;\n  font-family: 'Abel', sans-serif;\n}\n\n.countryCard{\n  background-color:#434343;\n  opacity: 1;\n  margin-bottom: 5%;\n  margin-top: 5%;\n  box-shadow: 2px 0px 20px 2px black;\n  color:white;\n}\n"

/***/ }),

/***/ "./src/app/all-countries/all-countries.component.html":
/*!************************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"jumbotron-fluid\">\n    <div class=\"pull-left\">\n        <a  href=\"/regions\"><img style=\"width: 4%; float: left; padding-left:20px;\" src=\"../../assets/left-arrow.svg\"  alt=\"\"></a>\n    </div>\n    <h1>All Countries</h1>\n</div>\n<br><br>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <label for=\"Regions\"> <strong style=\"font-size: 25px;\">Filter</strong></label>\n        <ng-multiselect-dropdown\n        [placeholder]=\"'Choose Filter Type'\"\n        [data]=\"filterTypeList\"\n        [(ngModel)]=\"filterTypeSelectedItems\"\n        [settings]=\"filterTypeDropdownSettings\"\n        (onSelect)=\"onFilterTypeItemSelect($event)\"\n\n      >\n      </ng-multiselect-dropdown>\n    </div>\n\n    <div class=\"col-md-6\">\n        <label for=\"\"> <strong style=\"font-size: 25px;\">Insert Value</strong></label>\n        <ng-multiselect-dropdown\n        [placeholder]=\"'Insert Desired Value'\"\n        [data]=\"filterValueList\"\n        [(ngModel)]=\"filterValueSelectedItems\"\n        [settings]=\"filterValueDropdownSettings\"\n        (onSelect)=\"onFilterValueItemSelect($event)\"\n\n      >\n      </ng-multiselect-dropdown>\n    </div>\n  </div>\n</div>\n<br><br>\n\n<div class=\"container-fluid back\">\n  <div class=\"row\" style=\"padding-left: 5%; padding-right: 1%;\">\n    <div class=\"country col-md-4\" *ngFor=\"let country of allCountries$ | async\">\n\n      <!--Countries Card Begins-->\n\n        <div class=\"card countryCard\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\" style=\"height:45%; width:60%; border: 1px solid black\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title text-truncate\"> <strong>{{country.name}}</strong></h5>\n              <p class=\"card-text text-truncate\">Language:\n                <a [routerLink] = \"['/allcountries/language',language.iso639_1]\" *ngFor='let language of country.languages; let first = first; let last = last;'>{{language.name}} {{language.iso639_1}}{{last ? '' : ', '}}</a>\n              </p>\n              <p class=\"card-text text-truncate\">Currency:\n                <a [routerLink] = \"['/allcountries/currency',currency.code]\" *ngFor='let currency of country.currencies; let first = first; let last = last;'>{{currency.code}} {{currency.name }}{{last ? '' : ', '}}</a>\n              </p>\n              <p class=\"card-text\">Region: {{country.region}}</p>\n              <p class=\"card-text\">Capital: {{country.capital}}</p>\n              <p class=\"card-text\">Population: {{country.population}}</p>\n              <a [routerLink] = \"['/country-view',country.name]\" class=\"btn btn-success\" style=\"margin-left:45%\">Country Details</a>\n            </div>\n          </div>\n      <!--Countries Card Ends-->\n    </div>\n  </div>\n  <br><br><br>\n</div>\n"

/***/ }),

/***/ "./src/app/all-countries/all-countries.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.ts ***!
  \**********************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../all-region/all-region.component */ "./src/app/all-region/all-region.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCountriesComponent = /** @class */ (function () {
    function AllCountriesComponent(_route, router, _http) {
        this._route = _route;
        this.router = router;
        this._http = _http;
        this.filterTypeList = [];
        this.filterTypeSelectedItems = [];
        this.filterTypeDropdownSettings = {};
        this.filterValueList = [];
        this.filterValueSelectedItems = [];
        this.filterValueDropdownSettings = {};
        this.currencyMap = new Map();
        this.languageMap = new Map();
    }
    AllCountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllCurrencies();
        this.getAllLanguages();
        // Dropdown Menu
        this.filterTypeList = [
            { item_id: 1, item_text: 'Language' },
            { item_id: 2, item_text: 'Region' },
            { item_id: 3, item_text: 'Currency' }
        ];
        this.filterTypeSelectedItems = [];
        this.filterValueList = [
            { item_id: 4, item_text: '' },
            { item_id: 5, item_text: '' },
            { item_id: 5, item_text: '' }
        ];
        this.filterValueSelectedItems = [];
        this.filterTypeDropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true
        };
        this.filterValueDropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        // get countries of same region
        this._route.params.subscribe(function (param) {
            if (param['regionName']) {
                console.log("region called " + param['regionName']);
                _this.allCountries$ = _this._http.getAllCountriesByRegion(param['regionName']);
            }
            else if (param['currencyCode']) {
                console.log("currenct called " + param['currencyCode']);
                _this.allCountries$ = _this._http.getAllCountriesByCurrency(param['currencyCode']);
            }
            else if (param['languageCode']) {
                console.log("language called " + param['languageCode']);
                _this.allCountries$ = _this._http.getAllCountriesByLanguage(param['languageCode']);
            }
        });
    };
    AllCountriesComponent.prototype.onFilterTypeItemSelect = function (item) {
        var _this = this;
        //console.log(item);
        if (item.item_text === "Region") {
            this.filterValueList = [];
            _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_3__["AllRegionComponent"].regions.forEach(function (value, i) {
                //console.log('%d: %s', i, value.regionName);
                _this.filterValueList.push({ item_id: i + 1, item_text: value.regionName });
            });
        }
        else if (item.item_text === "Currency") {
            console.log("I m here curr " + this.currencyMap.size);
            this.filterValueList = [];
            Array.from(this.currencyMap.keys()).forEach(function (currency, i) {
                _this.filterValueList.push({ item_id: i + 1, item_text: currency });
            });
        }
        else if (item.item_text === "Language") {
            console.log("I m here " + this.languageMap.size);
            this.filterValueList = [];
            Array.from(this.languageMap.keys()).forEach(function (language, i) {
                _this.filterValueList.push({ item_id: i + 1, item_text: language });
            });
        }
    };
    AllCountriesComponent.prototype.onFilterValueItemSelect = function (item) {
        console.log(item);
        console.log(this.filterTypeSelectedItems);
        if (this.filterTypeSelectedItems && Array.isArray(this.filterTypeSelectedItems) && this.filterTypeSelectedItems.length > 0) {
            if (this.filterTypeSelectedItems[0].item_text === "Region") {
                var region = item.item_text;
                this.allCountries$ = this._http.getAllCountriesByRegion(region);
            }
            else if (this.filterTypeSelectedItems[0].item_text === "Currency") {
                var currencyName = item.item_text;
                var currencyCode = this.currencyMap.get(currencyName).code;
                this.allCountries$ = this._http.getAllCountriesByCurrency(currencyCode);
            }
            else if (this.filterTypeSelectedItems[0].item_text === "Language") {
                var languageName = item.item_text;
                var languageCode = this.languageMap.get(languageName).iso639_2;
                this.allCountries$ = this._http.getAllCountriesByLanguage(languageCode);
            }
        }
    };
    AllCountriesComponent.prototype.getAllCurrencies = function () {
        var _this = this;
        this._http.getAllCurrencies().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var obj = data_1[_i];
                for (var _a = 0, _b = obj.currencies; _a < _b.length; _a++) {
                    var currency = _b[_a];
                    if (!_this.currencyMap.has(currency.name)) {
                        _this.currencyMap.set(currency.name, currency);
                    }
                }
            }
        });
    };
    AllCountriesComponent.prototype.getAllLanguages = function () {
        var _this = this;
        this._http.getAllLanguages().subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var obj = data_2[_i];
                for (var _a = 0, _b = obj.languages; _a < _b.length; _a++) {
                    var language = _b[_a];
                    if (!_this.languageMap.has(language.name)) {
                        _this.languageMap.set(language.name, language);
                    }
                }
            }
        });
    };
    AllCountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-countries',
            template: __webpack_require__(/*! ./all-countries.component.html */ "./src/app/all-countries/all-countries.component.html"),
            styles: [__webpack_require__(/*! ./all-countries.component.css */ "./src/app/all-countries/all-countries.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_country_service__WEBPACK_IMPORTED_MODULE_0__["CountryService"]])
    ], AllCountriesComponent);
    return AllCountriesComponent;
}());



/***/ }),

/***/ "./src/app/all-region/all-region.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-region/all-region.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-3 {\n  font-family: 'Sintony', sans-serif;\n}\n\n.globalhead {\n  font-size: 5rem\n}\n\n.subheading {\n  font-size: 1.5rem;\n}\n\n.masthead {\n  color: whitesmoke;\n  font-family: 'Domine', serif;\n  font-weight: bolder;\n  text-align: center;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\nheader.masthead {\n  margin-bottom: 50px;\n  background: no-repeat center center;\n  background-color: #868e96;\n  background-attachment: scroll;\n  position: relative;\n  background-size: cover;\n}\n\nheader.masthead .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\n\n.portfolio-item{\n  margin-bottom: 55px;\n}\n\n.card {\n\n    margin-bottom: 0px;\n    background-color: #212529;\n    margin: 3%;\n    padding:3%;\n    border-radius: 3px;\n    border: 1px solid #283c86;\n    box-shadow: 2px 0px 20px 2px black;\n    transition: all .2s ease-in-out;\n    font-size: 16px;\n    font-family: 'Dosis', sans-serif;\n    color: whitesmoke;\n}\n\n.card:hover{\n  background-color: #212529;\n  box-shadow: 2px 0px 20px 2px whitesmoke;\n  -webkit-transform: scale(1.09);\n          transform: scale(1.09);\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/all-region/all-region.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-region/all-region.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Page Header -->\n<header class=\"masthead\" style=\"background-image: url('assets/world.jpeg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <div class=\"site-heading\">\n          <h1 class=\"globalhead\">World Mapper</h1>\n          <h4 class=\"subheading\">Explore All About Countries</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n\n<div class=\"container\">\n\n  <!-- Page Heading -->\n  <h1 class=\"my-4\">World Data\n    <small>All Regions</small>\n  </h1>\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let region of staticRegions\" class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div href=\"#\" class=\"card h-100\">\n        <a>\n          <img class=\"card-img-top\" src=\"{{region.image}}\" alt=\"\">\n        </a>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">\n            <a>{{region.regionName}}</a>\n          </h4>\n          <p class=\"card-text\"></p>\n          <p>{{region.description}}</p>\n          <a [routerLink] =\"['/allcountries', region.regionName]\" class=\"btn-lg btn-info\" style=\"float:right\">Details</a>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n  </div>\n  <br><br>\n</div>\n<br><br>\n\n\n\n"

/***/ }),

/***/ "./src/app/all-region/all-region.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-region/all-region.component.ts ***!
  \****************************************************/
/*! exports provided: AllRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRegionComponent", function() { return AllRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllRegionComponent = /** @class */ (function () {
    function AllRegionComponent(countryService, router) {
        this.countryService = countryService;
        this.router = router;
    }
    AllRegionComponent_1 = AllRegionComponent;
    AllRegionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AllRegionComponent.prototype, "staticRegions", {
        get: function () {
            return AllRegionComponent_1.regions;
        },
        enumerable: true,
        configurable: true
    });
    AllRegionComponent.regions = [
        {
            regionName: 'Asia',
            image: '../../assets/asia1.jpg',
            description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres."
        },
        {
            regionName: 'Europe',
            image: '../../assets/euro.jpg',
            description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere."
        },
        {
            regionName: 'Africa',
            image: '../../assets/africa.jpg',
            description: 'Africa is the world\'s second largest and second most-populous continent (behind Asia in both categories).'
        },
        {
            regionName: 'Oceania',
            image: '../../assets/oceanic.jpg',
            description: "Oceania is a geographic region comprising Australasia, Melanesia, Micronesia and Polynesia."
        },
        {
            regionName: 'Americas',
            image: '../../assets/americas.jpg',
            description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America."
        }
    ];
    AllRegionComponent = AllRegionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-region',
            template: __webpack_require__(/*! ./all-region.component.html */ "./src/app/all-region/all-region.component.html"),
            styles: [__webpack_require__(/*! ./all-region.component.css */ "./src/app/all-region/all-region.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllRegionComponent);
    return AllRegionComponent;
    var AllRegionComponent_1;
}());



/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/all-countries/all-countries.component.ts");
/* harmony import */ var _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-region/all-region.component */ "./src/app/all-region/all-region.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-country/single-country.component */ "./src/app/single-country/single-country.component.ts");





var appRoutes = [
    { path: 'regions', component: _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_1__["AllRegionComponent"] },
    { path: '', redirectTo: 'regions', pathMatch: 'full' },
    { path: 'allcountries/:regionName', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_0__["AllCountriesComponent"] },
    { path: 'allcountries/language/:languageCode', pathMatch: 'full', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_0__["AllCountriesComponent"] },
    { path: 'allcountries/currency/:currencyCode', pathMatch: 'full', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_0__["AllCountriesComponent"] },
    { path: 'country-view/:country.name', component: _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_4__["SingleCountryComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-region/all-region.component */ "./src/app/all-region/all-region.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/all-countries/all-countries.component.ts");
/* harmony import */ var _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-country/single-country.component */ "./src/app/single-country/single-country.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _all_region_all_region_component__WEBPACK_IMPORTED_MODULE_7__["AllRegionComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
                _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_9__["AllCountriesComponent"],
                _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_10__["SingleCountryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_0__["appRouting"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);\n\nbody {\n  width:100%;\n  height:100%;\n  background:#48A9E6;\n  font-family: 'Raleway', sans-serif;\n  font-weight:300;\n  margin:0;\n  padding:0;\n}\n\n#title {\n  text-align:center;\n  font-size:40px;\n  margin-top:40px;\n  margin-bottom:-40px;\n  position:relative;\n  color:#fff;\n}\n\n.circles:after {\n  content:'';\n  display:inline-block;\n  width:100%;\n  height:100px;\n  background:#fff;\n  position:absolute;\n  top:-50px;\n  left:0;\n  transform:skewY(-4deg);\n  -webkit-transform:skewY(-4deg);\n}\n\n.circles {\n\tbackground:#fff;\n\ttext-align: center;\n\tposition: relative;\n  margin-top:-60px;\n  box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);\n}\n\n.circles p {\n\tfont-size: 240px;\n\tcolor: #fff;\n\tpadding-top: 60px;\n\tposition: relative;\n  z-index: 9;\n  line-height: 100%;\n}\n\n.circles p small {\n  font-size: 40px;\n  line-height: 100%;\n  vertical-align: top;\n}\n\n.circles .circle.small {\n\twidth: 140px;\n\theight: 140px;\n\tborder-radius: 50%;\n\tbackground: #48A9E6;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 80px;\n\tleft: 50%;\n\tanimation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\n\t-webkit-animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\n\tanimation-delay: 1.2s;\n\t-webkit-animation-delay: 1.2s;\n}\n\n.circles .circle.med {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 50%;\n\tbackground: #48A9E6;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 10%;\n\tanimation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\n\t-webkit-animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\n\tanimation-delay: 0.4s;\n\t-webkit-animation-delay: 0.4s;\n}\n\n.circles .circle.big {\n\twidth: 400px;\n\theight: 400px;\n\tborder-radius: 50%;\n\tbackground: #48A9E6;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 200px;\n\tright: 0;\n\tanimation: 8s bigmove infinite;\n\t-webkit-animation: 8s bigmove infinite;\n\tanimation-delay: 3s;\n\t-webkit-animation-delay: 1s;\n}\n\n@-webkit-keyframes smallmove {\n\t0% { top: 10px; left: 45%; opacity: 1; }\n\t25% { top: 300px; left: 40%; opacity:0.7; }\n\t50% { top: 240px; left: 55%; opacity:0.4; }\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\n\t100% { top: 10px; left: 45%; opacity: 1; }\n}\n\n@keyframes smallmove {\n\t0% { top: 10px; left: 45%; opacity: 1; }\n\t25% { top: 300px; left: 40%; opacity:0.7; }\n\t50% { top: 240px; left: 55%; opacity:0.4; }\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\n\t100% { top: 10px; left: 45%; opacity: 1; }\n}\n\n@-webkit-keyframes medmove {\n\t0% { top: 0px; left: 20%; opacity: 1; }\n\t25% { top: 300px; left: 80%; opacity:0.7; }\n\t50% { top: 240px; left: 55%; opacity:0.4; }\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\n\t100% { top: 0px; left: 20%; opacity: 1; }\n}\n\n@keyframes medmove {\n\t0% { top: 0px; left: 20%; opacity: 1; }\n\t25% { top: 300px; left: 80%; opacity:0.7; }\n\t50% { top: 240px; left: 55%; opacity:0.4; }\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\n\t100% { top: 0px; left: 20%; opacity: 1; }\n}\n\n@-webkit-keyframes bigmove {\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\n\t25% { top: 100px; right: 40%; opacity:0.4; }\n\t50% { top: 240px; right: 45%; opacity:0.8; }\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\n}\n\n@keyframes bigmove {\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\n\t25% { top: 100px; right: 40%; opacity:0.4; }\n\t50% { top: 240px; right: 45%; opacity:0.8; }\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\n}\n\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <section id=\"not-found\">\n      <div id=\"title\">Simple Pure CSS3 &bull; 404 Error Page</div>\n      <div class=\"circles\">\n        <p>404<br>\n         <small>PAGE NOT FOUND</small>\n        </p>\n        <span class=\"circle big\"></span>\n        <span class=\"circle med\"></span>\n        <span class=\"circle small\"></span>\n      </div>\n    </section>\n   </body>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = /** @class */ (function () {
    function CountryService(_http) {
        this._http = _http;
        this.baseUrl = "https://restcountries.eu/rest/v2";
        console.log("service constructor is called.");
    }
    // method to get all countries by region
    CountryService.prototype.getAllCountriesByRegion = function (regionName) {
        return this._http.get(this.baseUrl + '/region' + '/' + regionName);
    };
    // method to get single country details
    CountryService.prototype.getSingleCountryDetails = function (countryName) {
        return this._http.get(this.baseUrl + '/name' + '/' + countryName + '?fullText=true');
    };
    // method to get all countries with common currency
    CountryService.prototype.getAllCountriesByCurrency = function (currencyCode) {
        return this._http.get(this.baseUrl + '/currency' + '/' + currencyCode);
    };
    // method to get all countries with common language
    CountryService.prototype.getAllCountriesByLanguage = function (languageCode) {
        return this._http.get(this.baseUrl + '/lang' + '/' + languageCode);
    };
    CountryService.prototype.getAllCurrencies = function () {
        //https://restcountries.eu/rest/v2/all?fields=currencies
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fields', 'currencies');
        return this._http.get(this.baseUrl + '/all', { params: params });
    };
    CountryService.prototype.getAllLanguages = function () {
        //https://restcountries.eu/rest/v2/all?fields=languages
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fields', 'languages');
        return this._http.get(this.baseUrl + '/all', { params: params });
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/single-country/single-country.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-country/single-country.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text {\n  font-family: 'Abel', sans-serif;\n  font-size: 22px;\n  text-align: center;\n}\n\n.card-title {\n  font-size: 45px;\n  font-family: 'Abel', sans-serif;\n}\n\n.countryCard{\n  background-color: #434343;\n  opacity: 1;\n  margin-bottom: 5%;\n  margin-top: 5%;\n  box-shadow: 2px 0px 20px 2px black;\n  color:white;\n}\n"

/***/ }),

/***/ "./src/app/single-country/single-country.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-country/single-country.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"container back\">\n    <div class=\"pull-left\">\n        <a  href=\"/allcountries/Europe\"><img style=\"width: 4%; float: left;\" src=\"../../assets/left-arrow.svg\"  alt=\"\"></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <!--Country Detail Box starts-->\n            <div class=\"col-md-8\" *ngIf=\"currentCountry\">\n                <div class=\"card countryCard text-center\" style=\"width: 100%;\" *ngFor=\"let currentCountry of currentCountry\">\n                <img class=\"card-img-top\" src=\"{{currentCountry.flag}}\" alt=\"Card image cap\" style=\"height:400px; width:100%; border: 1px solid white\">\n                    <div class=\"card-body\">\n                      <h3 class=\"card-title text-truncate\">{{currentCountry.name}}</h3>\n                      <p class=\"card-text\">Native name: {{currentCountry.nativeName}}</p>\n                      <p class=\"card-text text-truncate\">Language:\n                        <a [routerLink] = \"['/allcountries/language',language.iso639_1]\"  *ngFor='let language of currentCountry.languages; let first = first; let last = last;'>{{language.name}}{{last ? '' : ', '}}\n                        </a></p>\n                      <p class=\"card-text text-truncate\">Currency:\n                        <a [routerLink] = \"['/allcountries/currency',currency.code]\"  *ngFor='let currency of currentCountry.currencies; let first = first; let last = last;'>{{currency.name}}{{last ? '' : ', '}}\n                        </a></p>\n                      <p class=\"card-text\">Capital: {{currentCountry.capital}}</p>\n                      <p class=\"card-text\">Population: {{currentCountry.population}}</p>\n                      <p class=\"card-text\">Region: {{currentCountry.region}}</p>\n                      <p class=\"card-text\">Sub-Region: {{currentCountry.subregion}}</p>\n                      <p class=\"card-text\">TimeZones: {{currentCountry.timezones}}</p>\n                      <p class=\"card-text\">Area: {{currentCountry.area}}</p>\n                    </div>\n                  </div>\n            </div>\n      <!--Country Detail Box ends-->\n      <div class=\"col-md-2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/single-country/single-country.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-country/single-country.component.ts ***!
  \************************************************************/
/*! exports provided: SingleCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCountryComponent", function() { return SingleCountryComponent; });
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleCountryComponent = /** @class */ (function () {
    function SingleCountryComponent(_route, router, _http) {
        this._route = _route;
        this.router = router;
        this._http = _http;
        console.log("Single Country constructor called.");
    }
    SingleCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // to get single country details
        var country_name = this._route.snapshot.paramMap.get('country.name');
        console.log(country_name);
        this._http.getSingleCountryDetails(country_name).subscribe(function (data) {
            console.log(data);
            _this.currentCountry = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        // get countries of same region
        this._route.params.subscribe(function (param) {
            if (param['regionName']) {
                console.log("region called " + param['regionName']);
                _this.allCountries$ = _this._http.getAllCountriesByRegion(param['regionName']);
            }
            else if (param['currencyCode']) {
                console.log("currenct called " + param['currencyCode']);
                _this.allCountries$ = _this._http.getAllCountriesByCurrency(param['currencyCode']);
            }
            else if (param['languageCode']) {
                console.log("language called " + param['languageCode']);
                _this.allCountries$ = _this._http.getAllCountriesByLanguage(param['languageCode']);
            }
        });
    };
    SingleCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-country',
            template: __webpack_require__(/*! ./single-country.component.html */ "./src/app/single-country/single-country.component.html"),
            styles: [__webpack_require__(/*! ./single-country.component.css */ "./src/app/single-country/single-country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_country_service__WEBPACK_IMPORTED_MODULE_0__["CountryService"]])
    ], SingleCountryComponent);
    return SingleCountryComponent;
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

module.exports = __webpack_require__(/*! /home/anurag/Documents/Edwisor-angular/world-info-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map