webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(41);
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
 * Generated class for the AidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AidePage = /** @class */ (function () {
    function AidePage(navCtrl, navParams, sc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sc = sc;
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
    }
    AidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AidePage');
    };
    AidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aide',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\aide\aide.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div style="margin-left: 13.5%;width: 125px; height: 30px;">\n      <img src="../../assets/imgs/npg.png" />\n    </div>\n\n  </ion-navbar>\n\n  <div style="background-color: red; ">\n    <ion-title>Aide</ion-title>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="font-weight: bold;font-size:20px;color:red;">Demandez-moi par exemple :</div>\n  <ion-list style="font-weight: bold;color:green;">\n      <ion-list-header style="font-weight: bold;font-size:17px;color:green;">\n        Lecture :\n      </ion-list-header>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le Coran.\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le Saint Coran.\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le Saint-Coran.\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le verset 2 du chapitre.\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Lire le verset 2 de ce chapitre.\n      </a>\n      <ion-list-header style="font-weight: bold;font-size:17px;color:green;">\n        Histoire :\n      </ion-list-header>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Qui est Mohamed ?\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Qu\'est-il arrivé lorsque ... ?\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n         Pourquoi Mohamed a fait ... ?\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n         Quand Mohamed a fait ... ?\n      </a>\n      <ion-list-header style="font-weight: bold;font-size:17px;color:green;">\n        Heures de prière :\n      </ion-list-header>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Quelle est l\'heure de prière de Maghrib ?\n      </a>\n      <a ion-item>\n        <ion-icon name="bookmarks"></ion-icon>\n        Heure de prière de Asr ?\n      </a>\n  </ion-list>\n  <div style="font-weight: bold;font-size:20px;color:red;">NB : <span style="color:rgb(22, 0, 83)!important;text-align:justify!important;font-size:15px!important;">Les différentes questions devront être posées sur la sourate 87 (Al-Ala) du Saint Coran !</span></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\aide\aide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], AidePage);
    return AidePage;
}());

//# sourceMappingURL=aide.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aide_aide__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, sc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sc = sc;
        this.rootPage = "TabsPage";
        this.pages = [
            { title: 'Accueil', pageName: 'TabsPage', tabComponent: 'AccueilPage', index: 1, icon: 'home' },
            { title: 'Historique', pageName: 'TabsPage', tabComponent: 'HistoriquePage', index: 0, icon: 'folder-open' },
            { title: 'Paramètres', pageName: 'TabsPage', tabComponent: 'ParametrePage', index: 2, icon: 'settings' }
        ];
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'danger';
            }
            return 'blue';
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'danger';
        }
    };
    MenuPage.prototype.aide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aide_aide__["a" /* AidePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n  <ion-content style="background-color:green;opacity: 0.3;">\n    <div style="background-color:green;">\n      <ion-card text-center class="hide-card" style="background-color:green;">\n        <ion-avatar item-left>\n          <img src="../../assets/imgs/scrawllogo.png" class="avatar">\n          <!--avatar tu charges la photo-->\n        </ion-avatar>\n        <h2 class="avatar-name">App conçue avec <span style="color:red;">♥</span> par Scrawl ☺.</h2>\n        <!--avatar-name tu charges le nom-->\n      </ion-card>\n    </div>\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" style="color:rgb(22, 0, 83);">\n        <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>  \n      <button ion-item (click)="aide()" color="danger">\n        <ion-icon item-start name="help-circle"></ion-icon>\n        Aide\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accueil/accueil.module": [
		276,
		6
	],
	"../pages/aide/aide.module": [
		274,
		8
	],
	"../pages/historique/historique.module": [
		275,
		5
	],
	"../pages/menu/menu.module": [
		281,
		7
	],
	"../pages/modalhisto/modalhisto.module": [
		277,
		4
	],
	"../pages/modalinfo/modalinfo.module": [
		278,
		3
	],
	"../pages/modalscrawl/modalscrawl.module": [
		279,
		2
	],
	"../pages/parametre/parametre.module": [
		282,
		1
	],
	"../pages/tabs/tabs.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, sc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sc = sc;
        this.slides = [
            {
                title: "Bienvenue sur e-Muslim!",
                description: "Assalam aleykoum, merci d'avoir bien voulu tester <b>e-Muslim</b>, ☺. Première application ayant un système IA basé sur le saint Coran.",
                image: "assets/imgs/plane.png",
            },
            {
                title: "Qu'est-ce que e-Muslim?",
                description: "L'application <b>e-Muslim</b> est un système IA qui vous aidera à mieux comprendre le saint Coran. A cet effet, elle répond à toutes vos préoccupations.",
                image: "assets/imgs/emus.png",
            },
            {
                title: "Qui est Scrawl?",
                description: "<b>Scrawl Inc.</b> est une start-up qui a pour but de promulguer le développement du monde en utilisant la technologie.",
                image: "assets/imgs/scrawllogo.png",
            }
        ];
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.launch = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\home\home.html"*/'<ion-content class="tutorial-page">\n\n  <ion-slides pager autoplay="1000" speed="1000" >\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="launch()" color="danger" icon-end>\n            Passer\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/passanger.png" class="slide-image" />\n      <h2 class="slide-title">Prêt pour l\'expérience?</h2>\n      <button (click)="launch()" ion-button large clear icon-end color="danger">\n        Commencer\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aide_aide__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//npm install --save --no-optional --no-shrinkwrap --no-package-lock @ionic-native/speech-recognition
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aide_aide__["a" /* AidePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    backButtonText: 'Retour',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/aide/aide.module#AidePageModule', name: 'AidePage', segment: 'aide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historique/historique.module#HistoriquePageModule', name: 'HistoriquePage', segment: 'historique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accueil/accueil.module#AccueilPageModule', name: 'AccueilPage', segment: 'accueil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalhisto/modalhisto.module#ModalhistoPageModule', name: 'ModalhistoPage', segment: 'modalhisto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalinfo/modalinfo.module#ModalinfoPageModule', name: 'ModalinfoPage', segment: 'modalinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalscrawl/modalscrawl.module#ModalscrawlPageModule', name: 'ModalscrawlPage', segment: 'modalscrawl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parametre/parametre.module#ParametrePageModule', name: 'ParametrePage', segment: 'parametre', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aide_aide__["a" /* AidePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.show(); //hide par défaut
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map