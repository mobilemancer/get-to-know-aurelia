var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'SWETUGG';
            config.map([
                { route: ['', 'home', '0'], name: 'home', moduleId: 'views/0/index', title: '0', nav: 0 },
                { route: '1', name: '1', moduleId: 'views/1/index', title: '1', nav: 1 },
            ]);
            config.mapUnknownRoutes('views/0/index');
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('views/0/index',["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
            this.message = "Hello SweTugg!";
        }
        return Index;
    }());
    exports.Index = Index;
});

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('views/1/index',["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
            this.header = "Data-Binding";
            this.counter = 0;
            this.message = "Hello!";
            this.displayCounter = false;
            this.addOne();
        }
        Index.prototype.enableCounter = function () {
            this.displayCounter = true;
        };
        Index.prototype.addOne = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.sleep(500)];
                        case 1:
                            _a.sent();
                            this.counter++;
                            this.addOne();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Index.prototype.sleep = function (ms) {
            return new Promise(function (resolve) { return setTimeout(resolve, ms); });
        };
        return Index;
    }());
    exports.Index = Index;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <router-view></router-view>\r\n</template>"; });
define('text!views/0/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${message}</h1>\r\n</template>"; });
define('text!views/1/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${header}</h1>\r\n\r\n    <h2>One-Way and One-Time</h2>\r\n    <div>\r\n        <span>One-Time: </span><span textcontent.one-time=\"counter\"></span>\r\n    </div>\r\n\r\n    <div>\r\n        <span>One-Way: </span><span textcontent.one-way=\"counter\"></span>\r\n    </div>\r\n\r\n    <h2>Two-Way</h2>\r\n    <div>\r\n        <span>Two-Way: </span><span contenteditable=\"true\" textcontent.two-way=\"message\"></span>\r\n    </div>\r\n    <div>\r\n        <span>Two-Way: </span><span contenteditable=\"true\" textcontent.two-way=\"message\"></span>\r\n    </div>\r\n\r\n    <h2>Bind</h2>\r\n    <div>\r\n        <span><button click.delegate=\"enableCounter()\">Enable Counter</button></span>\r\n        <span>Counter: </span><span if.bind=\"displayCounter\" textcontent.bind=\"counter\"></span>\r\n    </div>\r\n    <div>\r\n        <span>Message: </span><span contenteditable=\"true\" textcontent.bind=\"message\"></span>\r\n    </div>\r\n    <div>\r\n        <span>Message: </span><span contenteditable=\"true\" textcontent.bind=\"message\"></span>\r\n    </div>\r\n\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map