webpackJsonp([6],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccueilPageModule = /** @class */ (function () {
    function AccueilPageModule() {
    }
    AccueilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accueil__["a" /* AccueilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accueil__["a" /* AccueilPage */]),
            ],
        })
    ], AccueilPageModule);
    return AccueilPageModule;
}());

//# sourceMappingURL=accueil.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aide_aide__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccueilPage = /** @class */ (function () {
    function AccueilPage(navCtrl, navParams, platform, tts, speechRecognition, cd, sc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.tts = tts;
        this.speechRecognition = speechRecognition;
        this.cd = cd;
        this.sc = sc;
        this.question = "";
        this.lowerq = "";
        this.rep = "Bonjour, bienvenue sur la version demo de \"e-Muslim\", basé sur la sourate 87 (Al-Ala) du saint Coran. Posez-moi toutes sortes de questions spécifiques à ce chapitre, je vous suis toute ouïe ☻ !";
        this.isSpeechAvailable = false;
        this.isRecording = false;
        this.isSpeak = true;
        //DEFINITION DE LA SOURATE
        this.sourate = [
            "Au nom d’Allah*, le Tout Miséricordieux, le Très Miséricordieux.",
            "Homme, glorifie le nom de ton Seigneur*, le Très Haut.",
            "Celui qui a créé et agencé harmonieusement.",
            "Qui a déterminé et guidé.",
            "Et qui a fait pousser le pâturage.",
            "Et en a fait ensuite un foin sombre.",
            "Nous te ferons réciter le Coran*, de sorte que tu n’oublieras.",
            "Que ce qu’Allah* veut. Car, Il connaît ce qui paraît au grand jour ainsi que ce qui est caché.",
            "Nous te mettrons sur la voie la plus facile.",
            "Rappelle, donc, où le rappel doit être utile.",
            "Quiconque craint Allah*, s’en rappellera.",
            "Et s’en écartera le grand malheureux.",
            "qui brûlera dans le plus grand Feu*.",
            "Où il ne mourra ni ne vivra.",
            "Réussit, certes, celui qui se purifie.",
            "Et se rappelle le nom de son Seigneur, puis célèbre la Salat*.",
            "Mais, vous préférez plutôt la vie présente.",
            "Alors que l’au-delà est meilleur et plus durable.",
            "Ceci se trouve, certes, dans les feuilles anciennes.",
            "Les feuilles d’Abraham* et de Moïse*."
        ];
        //BASE DES CONNAISSANCES
        this.connaissance = [
            /homme/gi,
            /glorifie/gi,
            /miséricordieux/gi,
            /haut/gi,
            /nom/gi,
            /seigneur/gi,
            /créé/gi, /cree/gi,
            /agencé/gi, /agence/gi,
            /déterminé/gi, /determine/gi,
            /guidé/gi, /guide/gi,
            /fait/gi,
            /pouss/gi,
            /pâturage/gi, /paturage/gi,
            /foin/gi,
            /réciter/gi, /reciter/gi,
            /coran/gi,
            /allah/gi,
            /conna/gi,
            /met/gi,
            /rappel/gi,
            /crain/gi,
            /ne crain/gi,
            /brûl/gi, /brul/gi,
            /feu/gi,
            /mour/gi,
            /vivr/gi,
            /réussi/gi, /reussi/gi,
            /célèbr/gi, /célébr/gi, /celebr/gi,
            /salat/gi,
            /préfèr/gi, /préfér/gi, /préfer/gi, /prefer/gi,
            /au-delà/gi, /au-dela/gi,
            /meilleur/gi,
            /durable/gi,
            /trouve/gi,
            /feuille/gi,
            /abraham/gi, /ibrahim/gi,
            /moïse/gi, /moise/gi, /moussa/gi
        ];
        this.sc.lock(this.sc.ORIENTATIONS.PORTRAIT);
        platform.ready().then(function () {
            //Vérifie si Speech Recognition est valable
            _this.speechRecognition.isRecognitionAvailable().then(function (available) { return _this.isSpeechAvailable = available; });
            //Mot de bienvenue
            var options = {
                text: _this.rep,
                locale: 'fr-FR',
                rate: 1.6
            };
            _this.tts.speak(options);
        });
    }
    AccueilPage.prototype.aide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aide_aide__["a" /* AidePage */]);
    };
    AccueilPage.prototype.reponse = function () {
        //PRESENTATION
        if (this.question == "" || this.question.toLowerCase().search(/bonjour/gi) != -1 || this.question.toLowerCase().search(/salut/gi) != -1 || this.question.toLowerCase().search(/salam/gi) != -1)
            this.rep = "Bonjour, bienvenue sur la version demo de \"e-Muslim\", basé sur la sourate 87 (Al-Ala) du saint Coran. Posez-moi toutes sortes de questions spécifiques à ce chapitre, je vous suis toute ouïe ☻ !";
        else if (this.question.toLowerCase().search(this.connaissance[27]) != -1) {
            if (this.question.toLowerCase().search(this.connaissance[5]) != -1 || this.question.toLowerCase().search(/dieu/gi) != -1) {
                this.rep = "Vous ne vous en rappelerez pas des propos de Dieu et vous vous en écarteriez et vous brûleriez dans le grand Feu.";
            }
            else
                this.rep = "Désolé ☻, je ne peux vous répondre à cette question car l'information n'est pas stocké dans ma base de connaissances !";
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/sourate/gi) != -1 || this.question.toLowerCase().search(/87/gi) != -1)) {
            var i;
            this.rep = "";
            for (i = 0; i < this.sourate.length; i++) {
                this.rep += (" - " + this.sourate[i]);
            }
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && this.question.toLowerCase().search(/coran/gi) != -1) {
            this.rep = "La version Démo de e-Muslim ne se limite qu'à la lecture de la sourate 87 du saint Coran.";
            if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/sourate/gi) != -1 || this.question.toLowerCase().search(/87/gi) != -1)) {
                var j;
                this.rep = "";
                for (j = 0; j < this.sourate.length; j++) {
                    this.rep += (" - " + this.sourate[j]);
                }
            }
        }
        else if (this.question.toLowerCase().search(this.connaissance[26]) != -1) {
            if (this.question.toLowerCase().search(this.connaissance[5]) != -1 || this.question.toLowerCase().search(/dieu/gi) != -1) {
                this.rep = this.sourate[10];
            }
            else
                this.rep = "Désolé ☻, je ne peux vous répondre à cette question car l'information n'est pas stocké dans ma base de connaissances !";
        }
        else if (this.question.toLowerCase().search(this.connaissance[0]) != -1) {
            this.rep = this.sourate[1];
        }
        else if (this.question.toLowerCase().search(this.connaissance[1]) != -1) {
            this.rep = "Le nom de ton Seigneur, à savoir Allah le très haut.";
        }
        else if (this.question.toLowerCase().search(/dieu/gi) != -1 || this.question.toLowerCase().search(this.connaissance[2]) != -1 || this.question.toLowerCase().search(this.connaissance[3]) != -1 || this.question.toLowerCase().search(this.connaissance[4]) != -1 || this.question.toLowerCase().search(this.connaissance[5]) != -1) {
            this.rep = "Allah le très haut, le Tout Miséricordieux, le Très Miséricordieux.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[6]) != -1 || this.question.toLowerCase().search(this.connaissance[7]) != -1 || this.question.toLowerCase().search(this.connaissance[8]) != -1 || this.question.toLowerCase().search(this.connaissance[9]) != -1) {
            this.rep = "Allah est " + this.sourate[2].toLowerCase();
        }
        else if (this.question.toLowerCase().search(this.connaissance[10]) != -1 || this.question.toLowerCase().search(this.connaissance[11]) != -1 || this.question.toLowerCase().search(this.connaissance[12]) != -1 || this.question.toLowerCase().search(this.connaissance[13]) != -1) {
            this.rep = "Allah est " + this.sourate[3].toLowerCase();
        }
        else if (this.question.toLowerCase().search(this.connaissance[14]) != -1 || this.question.toLowerCase().search(this.connaissance[16]) != -1 || this.question.toLowerCase().search(this.connaissance[17]) != -1 || this.question.toLowerCase().search(this.connaissance[18]) != -1) {
            this.rep = "Allah est celui qui a fait pousser le pâturage. " + this.sourate[5];
        }
        else if (this.question.toLowerCase().search(this.connaissance[15]) != -1) {
            this.rep = "Le pâturage. ";
        }
        else if (this.question.toLowerCase().search(/pourquoi/gi) != -1 && (this.question.toLowerCase().search(this.connaissance[19]) != -1 || this.question.toLowerCase().search(this.connaissance[20]) != -1)) {
            this.rep = "Car Allah connaît ce qui paraît au grand jour ainsi que ce qui est caché.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[19]) != -1 || this.question.toLowerCase().search(this.connaissance[20]) != -1) {
            this.rep = "Nous te ferons réciter le Coran*, de sorte que tu n’oublieras que ce qu'Allah veut.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[21]) != -1) {
            this.rep = "Le Saint Coran, est un livre saint contenant toute la parole d'Allah. Le Coran originel a été transmis par l'ange Gabriel au prophète Mahommet ou Mouhammad (prononcé en arabe) pour le diffuser au peuple.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[22]) != -1) {
            this.rep = "C'est Allah, le Seigneur de tout l'univers";
        }
        else if (this.question.toLowerCase().search(this.connaissance[23]) != -1) {
            this.rep = "Allah connaît ce qui paraît au grand jour ainsi que ce qui est caché.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[24]) != -1) {
            this.rep = this.sourate[8];
        }
        else if (this.question.toLowerCase().search(this.connaissance[25]) != -1) {
            this.rep = this.sourate[9];
        }
        else if (this.question.toLowerCase().search(this.connaissance[28]) != -1 || this.question.toLowerCase().search(this.connaissance[29]) != -1) {
            this.rep = "Quiconque ne craint pas Allah périra dans le grand Feu*.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[30]) != -1 || this.question.toLowerCase().search(this.connaissance[31]) != -1 || this.question.toLowerCase().search(this.connaissance[32]) != -1) {
            this.rep = "Il s'agit ici de l'Enfer, qui est lieu où serons les mécréants à la fin des temps. Où ils ne mourront ni ne vivront.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[33]) != -1 || this.question.toLowerCase().search(this.connaissance[34]) != -1) {
            this.rep = this.sourate[14] + " " + this.sourate[15];
        }
        else if (this.question.toLowerCase().search(this.connaissance[35]) != -1 || this.question.toLowerCase().search(this.connaissance[36]) != -1 || this.question.toLowerCase().search(this.connaissance[37]) != -1) {
            this.rep = "La Salat.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[38]) != -1) {
            this.rep = "C'est la traduction en arabe de la prière.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[39]) != -1 || this.question.toLowerCase().search(this.connaissance[40]) != -1 || this.question.toLowerCase().search(this.connaissance[41]) != -1 || this.question.toLowerCase().search(this.connaissance[42]) != -1) {
            this.rep = "Les Hommes préfèrent la vie présente. " + this.sourate[14];
        }
        else if (this.question.toLowerCase().search(this.connaissance[43]) != -1 || this.question.toLowerCase().search(this.connaissance[44]) != -1 || this.question.toLowerCase().search(this.connaissance[45]) != -1 || this.question.toLowerCase().search(this.connaissance[46]) != -1) {
            this.rep = "L’au-delà est meilleur et plus durable.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[47]) != -1 || this.question.toLowerCase().search(this.connaissance[48]) != -1) {
            this.rep = "Les propos de Dieu se trouve dans les feuilles anciennes d'Abraham* et de Moïse*.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[26]) != -1) {
            this.rep = this.sourate[10];
        }
        else if (this.question.toLowerCase().search(/versets/gi) != -1) {
            this.rep = "La sourate 87 (Al-Ala), comprend 16 versets.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[49]) != -1 || this.question.toLowerCase().search(this.connaissance[50]) != -1) {
            this.rep = "Si Adam est considéré comme le père de l’humanité et Noé son sauveur, Abraham (Saydina Ibrahim’) représente le père du monothéisme. C'est un hanif, c’est-à-dire un homme immergé dans la Présence, imprégné par l’unicité et totalement soumis à la volonté divine, en référence à la tradition primordiale. Il n’est ni juif ni chrétien et se situe au-dessus de tout esprit dogmatique. Il est au sommet de la pyramide, point de convergence du monothéisme dans ses nuances et sa diversité. Les religions monothéistes constituent une grande famille divisée en trois branches dont Abraham est l’aïeul. C’est par le retour à lui que ces trois familles spirituelles peuvent communiquer et dialoguer.";
        }
        else if (this.question.toLowerCase().search(this.connaissance[51]) != -1 || this.question.toLowerCase().search(this.connaissance[52]) != -1 || this.question.toLowerCase().search(this.connaissance[53]) != -1) {
            this.rep = "En Islam, Le Prophète Moïse ou Moussa (prononcé en arabe) occupe une place particulière auprès de Dieu, ainsi que dans le Coran. En effet, le prophète Moïse est cité 124 fois dans tout le Coran. C'est à lui qu'Allah à charger de diffuser les dix commandements au peuple.";
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/10/gi) != -1 || this.question.toLowerCase().search(/dix/gi) != -1)) {
            this.rep = "Verset 10 : " + this.sourate[10];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/11/gi) != -1 || this.question.toLowerCase().search(/onz/gi) != -1)) {
            this.rep = "Verset 11 : " + this.sourate[11];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/12/gi) != -1 || this.question.toLowerCase().search(/douz/gi) != -1)) {
            this.rep = "Verset 12 : " + this.sourate[12];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/13/gi) != -1 || this.question.toLowerCase().search(/treiz/gi) != -1)) {
            this.rep = "Verset 13 : " + this.sourate[13];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/14/gi) != -1 || this.question.toLowerCase().search(/quatorz/gi) != -1)) {
            this.rep = "Verset 14 : " + this.sourate[14];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/15/gi) != -1 || this.question.toLowerCase().search(/quinz/gi) != -1)) {
            this.rep = "Verset 15 : " + this.sourate[15];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/16/gi) != -1 || this.question.toLowerCase().search(/seiz/gi) != -1)) {
            this.rep = "Verset 16 : " + this.sourate[16];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/1/gi) != -1 || this.question.toLowerCase().search(/un/gi) != -1 || this.question.toLowerCase().search(/premier/gi) != -1)) {
            this.rep = "Verset 1 : " + this.sourate[1];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/2/gi) != -1 || this.question.toLowerCase().search(/deux/gi) != -1)) {
            this.rep = "Verset 2 : " + this.sourate[2];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/3/gi) != -1 || this.question.toLowerCase().search(/trois/gi) != -1)) {
            this.rep = "Verset 3 : " + this.sourate[3];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/4/gi) != -1 || this.question.toLowerCase().search(/quatr/gi) != -1)) {
            this.rep = "Verset 4 : " + this.sourate[4];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/5/gi) != -1 || this.question.toLowerCase().search(/cinq/gi) != -1)) {
            this.rep = "Verset 5 : " + this.sourate[5];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/6/gi) != -1 || this.question.toLowerCase().search(/six/gi) != -1)) {
            this.rep = "Verset 6 : " + this.sourate[6];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/7/gi) != -1 || this.question.toLowerCase().search(/sept/gi) != -1)) {
            this.rep = "Verset 7 : " + this.sourate[7];
            if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/sourate/gi) != -1 || this.question.toLowerCase().search(/87/gi) != -1)) {
                this.rep = "";
                for (j = 0; j < this.sourate.length; j++) {
                    this.rep += (" - " + this.sourate[j]);
                }
            }
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/8/gi) != -1 || this.question.toLowerCase().search(/huit/gi) != -1)) {
            this.rep = "Verset 8 : " + this.sourate[8];
            if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/sourate/gi) != -1 || this.question.toLowerCase().search(/87/gi) != -1)) {
                this.rep = "";
                for (j = 0; j < this.sourate.length; j++) {
                    this.rep += (" - " + this.sourate[j]);
                }
            }
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1 && (this.question.toLowerCase().search(/9/gi) != -1 || this.question.toLowerCase().search(/neu/gi) != -1)) {
            this.rep = "Verset 9 : " + this.sourate[9];
        }
        else if (this.question.toLowerCase().search(/li/gi) != -1) {
            this.rep = "Que voulez-vous lire ?";
        }
        else if (this.question.toLowerCase().search(/asr/gi) != -1) {
            this.rep = "La prière de Asr est à 16h00 GMT.";
        }
        else if (this.question.toLowerCase().search(/fajr/gi) != -1 || this.question.toLowerCase().search(/sob/gi) != -1) {
            this.rep = "La prière de Fajr est à 05h20 GMT.";
        }
        else if (this.question.toLowerCase().search(/zour/gi) != -1) {
            this.rep = "La prière de Zourh est à 13h00 GMT.";
        }
        else if (this.question.toLowerCase().search(/magrib/gi) != -1) {
            this.rep = "La prière de Magrib est à 18h30 GMT.";
        }
        else if (this.question.toLowerCase().search(/icha/gi) != -1) {
            this.rep = "La prière de Icha est à 20h00 GMT.";
        }
        else if (this.question.toLowerCase().search(/prières/gi) != -1 || this.question.toLowerCase().search(/prieres/gi) != -1) {
            this.rep = "Tout musulman doit accomplir 5 prières par jour à savoir : Fajr, Zourh, Asr, Magrib, Icha.";
        }
        else
            this.rep = "Désolé ☻, je ne peux vous répondre à cette question car l'information n'est pas stocké dans ma base de connaissances !";
        //LECTURE DE LA REPONSE
        if (this.isSpeak == true && this.rep != "...") {
            var options = {
                text: this.rep,
                locale: 'fr-FR',
                rate: 1.6
            };
            this.tts.speak(options);
        }
        else {
            var options = {
                text: '',
                locale: 'fr-FR',
                rate: 1.6
            };
            this.tts.speak(options);
        }
    };
    AccueilPage.prototype.stopSpeak = function () {
        this.isSpeak = !this.isSpeak;
        if (this.isSpeak == true && this.rep != "...") {
            var options = {
                text: this.rep,
                locale: 'fr-FR',
                rate: 1.6
            };
            this.tts.speak(options);
        }
        else {
            var options = {
                text: '',
                locale: 'fr-FR',
                rate: 1.6
            };
            this.tts.speak(options);
        }
    };
    AccueilPage.prototype.getPermissions = function () {
        var _this = this;
        this.speechRecognition.hasPermission().then(function (hasPermission) {
            if (!hasPermission)
                _this.speechRecognition.requestPermission;
        });
    };
    AccueilPage.prototype.startListening = function () {
        var _this = this;
        this.isRecording = true;
        var options = {
            text: 'Je vous écoute.',
            locale: 'fr-FR',
            rate: 1.6
        };
        this.tts.speak(options);
        var option = {
            language: 'fr-FR',
            matches: 5,
            prompt: 'Je vous écoute !',
            showPopup: true,
            showPartial: false //ios
        };
        this.speechRecognition.startListening(option).subscribe(function (matches) {
            _this.question = matches[0];
            _this.cd.detectChanges();
        }, function (oneerror) {
            _this.isRecording = false;
            console.log(oneerror);
            _this.cd.detectChanges();
        });
    };
    AccueilPage.prototype.stopListening = function () {
        this.isRecording = false;
        this.speechRecognition.stopListening();
    };
    AccueilPage.prototype.boutonposi = function () {
        this.rep = '...';
    };
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\accueil\accueil.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div style="margin-left: 24%;width: 125px; height: 30px;">\n      <img src="../../assets/imgs/npg.png"/> \n    </div>\n\n    <ion-buttons end>\n      <button ion-button (click)="aide()">\n        <ion-icon name="help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div style="background-color: red; ">\n    <ion-title >Accueil</ion-title>\n  </div>\n</ion-header>\n\n\n<ion-content style="background-color: white; ">\n  <div padding>\n    <ion-list>\n      <ion-item>\n        <ion-label color="danger" floating >Touchez pour modifier</ion-label>\n        <ion-textarea [(ngModel)]="question" (click)="boutonposi()"></ion-textarea>\n      </ion-item>\n      <button style="position: relative; left:54%;" ion-button round color="danger" icon-start (click)="reponse()" (enter)="subcolor()">\n          <ion-icon name="text"></ion-icon>\n          Soumettre\n      </button>\n    </ion-list>\n  \n    <p style="color:green; font-size: 20px; font-weight: bold;background-color: white;">Réponse :</p>\n    \n    <ion-scroll scrollY="true" style="height:200px;">\n      <p style="color:rgb(22, 0, 83); font-size: 20px; font-weight: bold; text-align: justify;">{{rep}}</p>\n    </ion-scroll>\n    <div style="display: inline-block;z-index: 3;">\n      <ion-icon class="audio" [name]="(isReading) ? \'mic\' : \'mic\' " (tap)="(isReading) ? \'stopListening()\' : \'startListening()\' " style="background-color:white; margin-left:34.5%; font-size: 80px;" [color]="(isReading) ? \'danger\': \'blue\' "></ion-icon>\n\n      <ion-icon style="position: relative; left:800%;font-size:60px;" [color]="(isSpeak) ? \'secondary\' : \'blue\'" [name]="(isSpeak) ? \'volume-up\' : \'volume-off\'" (click)="stopSpeak()"></ion-icon>\n    </div>\n  </div> \n</ion-content>\n'/*ion-inline-end:"C:\Users\Yanne Sidibé\Desktop\e-Muslim\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ })

});
//# sourceMappingURL=6.js.map