webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrePageModule", function() { return ParametrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parametre__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParametrePageModule = /** @class */ (function () {
    function ParametrePageModule() {
    }
    ParametrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parametre__["a" /* ParametrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parametre__["a" /* ParametrePage */]),
            ],
        })
    ], ParametrePageModule);
    return ParametrePageModule;
}());

//# sourceMappingURL=parametre.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aide_aide__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParametrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParametrePage = /** @class */ (function () {
    function ParametrePage(navCtrl, navParams, sc, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sc = sc;
        this.modalCtrl = modalCtrl;
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
    }
    ParametrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParametrePage');
    };
    ParametrePage.prototype.openModalScrawl = function () {
        var modal = this.modalCtrl.create('ModalscrawlPage');
        modal.present();
    };
    ParametrePage.prototype.openModalInfo = function () {
        var modal = this.modalCtrl.create('ModalinfoPage');
        modal.present();
    };
    ParametrePage.prototype.aide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aide_aide__["a" /* AidePage */]);
    };
    ParametrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parametre',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\parametre\parametre.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div style="margin-left: 25%;width: 125px; height: 30px;">\n      <img src="../../assets/imgs/npg.png" />\n    </div>\n\n    <ion-buttons end>\n      <button ion-button (click)="aide()">\n        <ion-icon name="help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div style="background-color: red; ">\n    <ion-title>Paramètres</ion-title>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header color="blue">\n      Paramètres généraux\n    </ion-list-header>\n    <a ion-item (click)="openModalScrawl()">\n      <img src="../../assets/imgs/scrawllogo.png" width="17px" height="17px"/>\n      A propos de Scrawl.\n    </a>\n    <a ion-item (click)="openModalInfo()">\n      <ion-icon name="information-circle"></ion-icon>\n      Version de l\'application.\n    </a>\n    <ion-item>\n      <ion-label>Son</ion-label>\n      <ion-toggle checked=\'true\' color="danger" disabled></ion-toggle>\n    </ion-item>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\parametre\parametre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ParametrePage);
    return ParametrePage;
}());

//# sourceMappingURL=parametre.js.map

/***/ })

});
//# sourceMappingURL=1.js.map