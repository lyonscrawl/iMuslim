webpackJsonp([2],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalscrawlPageModule", function() { return ModalscrawlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalscrawl__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalscrawlPageModule = /** @class */ (function () {
    function ModalscrawlPageModule() {
    }
    ModalscrawlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modalscrawl__["a" /* ModalscrawlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modalscrawl__["a" /* ModalscrawlPage */]),
            ],
        })
    ], ModalscrawlPageModule);
    return ModalscrawlPageModule;
}());

//# sourceMappingURL=modalscrawl.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalscrawlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalscrawlPage = /** @class */ (function () {
    function ModalscrawlPage(navCtrl, navParams, viewCtrl, alertCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
    }
    ModalscrawlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalscrawlPage');
    };
    ModalscrawlPage.prototype.retour = function () {
        this.viewCtrl.dismiss();
    };
    ModalscrawlPage.prototype.position = function () {
        var alert = this.alertCtrl.create({
            title: 'Où nous trouvez ?',
            subTitle: 'Pour le moment, nous sommes situés à l\'INPHB de Yamoussoukro en Côte d\'Ivoire.',
            buttons: ['D\'accord']
        });
        alert.present();
    };
    ModalscrawlPage.prototype.mail = function () {
        //this.emailComposer.addAlias('gmail', 'com.google.ios.gm');
        var email = {
            to: 'yannsid2@gmail.com',
            subject: 'Suggestion',
            body: 'Félicitations pour votre superbe application : e-Muslim',
            isHtml: false,
            app: 'gmail'
        };
        this.emailComposer.open(email);
    };
    ModalscrawlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalscrawl',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\modalscrawl\modalscrawl.html"*/'<!--\n  Generated template for the ModalscrawlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="danger">\n    <ion-title >\n      A Propos de Scrawl\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="retour()" icon-start>\n        <ion-icon name=\'arrow-down\'></ion-icon>\n        <span ion-text>Retour</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-card class="adv-map">\n    <div style="background-color:green;font-weight:bold;color:white;">\n      Nous contacter.\n    </div>\n    <div style="position: relative">\n      <img src="../../assets/imgs/scrawllogo.png" class="avatar">\n      <ion-fab right top>\n        <button ion-fab class="fab-map" color="danger" (click)="position()">\n          <ion-icon name=\'pin\' ></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <div>\n      <p>\n        <span style="color:red;font-weight:bold;">Scrawl Inc.</span> est une start-up qui a pour but de promulguer le développement du monde en utilisant la <span style="color:green;">technologie</span>.\n      </p>\n    </div>\n    <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">Nos contacts <ion-icon name=\'call\'></ion-icon> :</span>\n      <span ion-text item-end color="subtle">(+225) 78 896 664 / 59 797 514</span>\n    </ion-item>\n    <button ion-button color="danger" icon-start style="margin-left:17%" (click)="mail()">\n        <ion-icon name=\'mail\'></ion-icon>\n        Nous envoyer un e-mail\n      </button>\n    <div style="background-color:green;font-weight:bold;color:white;">\n      Les membres de l\'équipe.\n    </div>  \n    <img src="../../assets/imgs/yanne.png" class="avatar"/>\n    <ion-item>\n      <ion-icon color="subtle" large item-start name=\'wine\'></ion-icon>\n      <h2>Yanne Sidibé</h2>\n      <p>CEO de Scrawl</p>\n    </ion-item>\n    <div style="background-color:black;font-weight:bold;color:black;">g</div>\n    <img src="../../assets/imgs/hamid.jpg" class="avatar"/>\n    <ion-item>\n      <ion-icon color="subtle" large item-start name=\'wine\'></ion-icon>\n      <h2>Abdoul-Hamid Coulibaly</h2>\n      <p>Vice-CEO de Scrawl</p>\n    </ion-item>\n    <div style="background-color:black;font-weight:bold;color:black;">d</div>\n    <img src="../../assets/imgs/nana.png" class="avatar"/>\n    <ion-item>\n      <ion-icon color="subtle" large item-start name=\'wine\'></ion-icon>\n      <h2>Kiaribia Nana</h2>\n      <p>Porte-parole de Scrawl</p>\n    </ion-item>\n    <div style="background-color:black;font-weight:bold;color:black;">d</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\modalscrawl\modalscrawl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ModalscrawlPage);
    return ModalscrawlPage;
}());

//# sourceMappingURL=modalscrawl.js.map

/***/ })

});
//# sourceMappingURL=2.js.map