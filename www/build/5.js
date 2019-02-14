webpackJsonp([5],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriquePageModule", function() { return HistoriquePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historique__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoriquePageModule = /** @class */ (function () {
    function HistoriquePageModule() {
    }
    HistoriquePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historique__["a" /* HistoriquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historique__["a" /* HistoriquePage */]),
            ],
        })
    ], HistoriquePageModule);
    return HistoriquePageModule;
}());

//# sourceMappingURL=historique.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquePage; });
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
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriquePage = /** @class */ (function () {
    function HistoriquePage(navCtrl, navParams, sc, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sc = sc;
        this.modalCtrl = modalCtrl;
        this.question = "";
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
    }
    HistoriquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriquePage');
    };
    HistoriquePage.prototype.aide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aide_aide__["a" /* AidePage */]);
    };
    HistoriquePage.prototype.openModalHisto = function () {
        var modal = this.modalCtrl.create('ModalhistoPage');
        modal.present();
    };
    HistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historique',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\historique\historique.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div style="margin-left: 25%;width: 125px; height: 30px;">\n      <img src="../../assets/imgs/npg.png" />\n    </div>\n\n    <ion-buttons end>\n      <button ion-button (click)="aide()">\n        <ion-icon name="help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div style="background-color: red; ">\n    <ion-title>Historique</ion-title>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="font-weight: bold;font-size:20px;color:red;">Consultez votre historique :</div>\n  <ion-list style="font-weight: bold;color:green;">\n      <ion-list-header style="font-weight: bold;font-size:17px;color:green;">\n        Questions récentes :\n      </ion-list-header>\n      <a ion-item (click)="openModalHisto()">\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le Coran.\n      </a>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\historique\historique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HistoriquePage);
    return HistoriquePage;
}());

//# sourceMappingURL=historique.js.map

/***/ })

});
//# sourceMappingURL=5.js.map