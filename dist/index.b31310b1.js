// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
require("../node_modules/font-awesome/scss/font-awesome.scss");
require("./styles/index.scss");
var Handlebars = _interopRequireWildcard(require("handlebars"));
var _serviceLocator = _interopRequireDefault(require("./services/core/serviceLocator"));
var _chats = require("./services/state/chats.service");
var _mutationObserver = require("./services/core/mutationObserver");
var _router = _interopRequireDefault(require("./services/core/router"));
var _navigation = require("./services/core/navigation");
var _login = require("./pages/login");
var _register = require("./pages/register");
var _main = require("./pages/main");
var _profile = require("./pages/profile");
var _ = require("./pages/errors/404");
var _2 = require("./pages/errors/500");
var _chatSettings = require("./pages/chat-settings");
var _user = require("./services/state/user.service");
var _auth = require("./utils/guards/auth.guard");
var _snackbar = require("./services/core/snackbar");
var _users = require("./modules/add-chat-users/services/users.service");
var _chatSelected = require("./utils/guards/chat-selected.guard");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function registerServices() {
    _serviceLocator["default"].registerService(_mutationObserver.MutationsObservation, new _mutationObserver.MutationsObservation());
    _serviceLocator["default"].registerService(_snackbar.SnackBarService, new _snackbar.SnackBarService("body"));
    _serviceLocator["default"].registerService(_user.UserService, new _user.UserService());
    _serviceLocator["default"].registerService(_chats.ChatsService, new _chats.ChatsService());
    _serviceLocator["default"].registerService(_users.AddChatUsersService, new _users.AddChatUsersService());
}
function initRouter() {
    var authGuard = new _auth.AuthGuard();
    var notAuthGuard = new _auth.AuthGuard().invert();
    var chatSelectedGuard = new _chatSelected.ChatSelectedGuard();
    _router["default"].use(_navigation.PAGES.LOGIN, _login.LoginPage, [
        notAuthGuard
    ]).use(_navigation.PAGES.REGISTER, _register.RegisterPage, [
        notAuthGuard
    ]).use(_navigation.PAGES.MAIN, _main.MainPage, [
        authGuard
    ]).use(_navigation.PAGES.PROFILE, _profile.ProfilePage, [
        authGuard
    ]).use(_navigation.PAGES.CHATSETTINGS, _chatSettings.ChatSettings, [
        authGuard,
        chatSelectedGuard
    ]).use(_navigation.PAGES.ERROR404, _.Error404Page).use(_navigation.PAGES.ERROR500, _2.Error500Page).start();
}
document.addEventListener("DOMContentLoaded", function() {
    registerServices();
    initRouter();
}); // Глобальный хэлпер
Handlebars.registerHelper("if_eq", function(a, b, opts) {
    if (a === b) return opts.fn(this);
    return opts.inverse(this);
}); // Отключаем дефолтные подсказки
document.addEventListener("invalid", function() {
    return function(e) {
        e.preventDefault();
    };
}(), true);

},{"../node_modules/font-awesome/scss/font-awesome.scss":"12h4e","./styles/index.scss":"hLoUL","handlebars":"7oyOD","./services/core/serviceLocator":"dHnRI","./services/state/chats.service":"9FwjH","./services/core/mutationObserver":"98Zps","./services/core/router":"hLkRS","./services/core/navigation":"9jcV4","./pages/login":"kcN4S","./pages/register":"43I0J","./pages/main":"fXai3","./pages/profile":"hTFhv","./pages/errors/404":"gPQrz","./pages/errors/500":"23TRY","./pages/chat-settings":"7L8ES","./services/state/user.service":"klVWu","./utils/guards/auth.guard":"cojrF","./services/core/snackbar":"Wv0BN","./modules/add-chat-users/services/users.service":"5rXDj","./utils/guards/chat-selected.guard":"jdMWR"}],"12h4e":[function() {},{}],"hLoUL":[function() {},{}],"7oyOD":[function(require,module,exports) {
// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */ // var local = handlebars.create();
var handlebars = require('../dist/cjs/handlebars')['default'];
var printer = require('../dist/cjs/handlebars/compiler/printer');
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;
module.exports = handlebars;
// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module, filename) {
    var fs = require('fs');
    var templateString = fs.readFileSync(filename, 'utf8');
    module.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */ if (typeof require !== 'undefined' && undefined) {
    undefined['.handlebars'] = extension;
    undefined['.hbs'] = extension;
}

},{"../dist/cjs/handlebars":"5hsYf","../dist/cjs/handlebars/compiler/printer":"75Ds2","fs":"8VSUO"}],"5hsYf":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _handlebarsRuntime = require('./handlebars.runtime');
var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
// Compiler imports
var _handlebarsCompilerAst = require('./handlebars/compiler/ast');
var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
var _handlebarsCompilerBase = require('./handlebars/compiler/base');
var _handlebarsCompilerCompiler = require('./handlebars/compiler/compiler');
var _handlebarsCompilerJavascriptCompiler = require('./handlebars/compiler/javascript-compiler');
var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
var _handlebarsCompilerVisitor = require('./handlebars/compiler/visitor');
var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
var _handlebarsNoConflict = require('./handlebars/no-conflict');
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
var _create = _handlebarsRuntime2['default'].create;
function create() {
    var hb = _create();
    hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2['default'];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2['default'](inst);
inst.Visitor = _handlebarsCompilerVisitor2['default'];
inst['default'] = inst;
exports['default'] = inst;
module.exports = exports['default'];

},{"./handlebars.runtime":"11Nbb","./handlebars/compiler/ast":"2S1yP","./handlebars/compiler/base":"fzbdj","./handlebars/compiler/compiler":"avEUX","./handlebars/compiler/javascript-compiler":"eauQs","./handlebars/compiler/visitor":"2O4Fg","./handlebars/no-conflict":"fXeQ4"}],"11Nbb":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
var _handlebarsBase = require('./handlebars/base');
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = require('./handlebars/safe-string');
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = require('./handlebars/exception');
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = require('./handlebars/utils');
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = require('./handlebars/runtime');
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = require('./handlebars/no-conflict');
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2['default'];
    hb.Exception = _handlebarsException2['default'];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function(spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2['default'](inst);
inst['default'] = inst;
exports['default'] = inst;
module.exports = exports['default'];

},{"./handlebars/base":"5133O","./handlebars/safe-string":"kpckR","./handlebars/exception":"xwrp8","./handlebars/utils":"4oqyo","./handlebars/runtime":"Ocgd0","./handlebars/no-conflict":"fXeQ4"}],"5133O":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require('./utils');
var _exception = require('./exception');
var _exception2 = _interopRequireDefault(_exception);
var _helpers = require('./helpers');
var _decorators = require('./decorators');
var _logger = require('./logger');
var _logger2 = _interopRequireDefault(_logger);
var _internalProtoAccess = require('./internal/proto-access');
var VERSION = '4.7.7';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
    1: '<= 1.0.rc.2',
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1',
    7: '>= 4.0.0 <4.3.0',
    8: '>= 4.3.0'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {
    };
    this.partials = partials || {
    };
    this.decorators = decorators || {
    };
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2['default'],
    log: _logger2['default'].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2['default']('Arg not supported with multiple helpers');
            _utils.extend(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
        else {
            if (typeof partial === 'undefined') throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2['default']('Arg not supported with multiple decorators');
            _utils.extend(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
    }
};
var log = _logger2['default'].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];

},{"./utils":"4oqyo","./exception":"xwrp8","./helpers":"fCe7j","./decorators":"5Xsa3","./logger":"6bWki","./internal/proto-access":"lxgcR"}],"4oqyo":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var isFunction = function isFunction1(value) {
    return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
};
exports.isFunction = isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== 'string') {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return '';
        else if (!string) return string + '';
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = '' + string;
    }
    if (!possible.test(string)) return string;
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) return true;
    else if (isArray(value) && value.length === 0) return true;
    else return false;
}
function createFrame(object) {
    var frame = extend({
    }, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
}

},{}],"xwrp8":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
var errorProps = [
    'description',
    'fileName',
    'lineNumber',
    'endLineNumber',
    'message',
    'name',
    'number',
    'stack'
];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += ' - ' + line + ':' + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, 'column', {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, 'endColumn', {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
Exception.prototype = new Error();
exports['default'] = Exception;
module.exports = exports['default'];

},{}],"fCe7j":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = require('./helpers/each');
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = require('./helpers/helper-missing');
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = require('./helpers/if');
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = require('./helpers/log');
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = require('./helpers/lookup');
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = require('./helpers/with');
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2['default'](instance);
    _helpersEach2['default'](instance);
    _helpersHelperMissing2['default'](instance);
    _helpersIf2['default'](instance);
    _helpersLog2['default'](instance);
    _helpersLookup2['default'](instance);
    _helpersWith2['default'](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) delete instance.helpers[helperName];
    }
}

},{"./helpers/block-helper-missing":"l976d","./helpers/each":"l34Ub","./helpers/helper-missing":"bD5aN","./helpers/if":"7GVXq","./helpers/log":"cIdl5","./helpers/lookup":"inBjT","./helpers/with":"csMdW"}],"l976d":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
var _utils = require('../utils');
exports['default'] = function(instance) {
    instance.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports['default'];

},{"../utils":"4oqyo"}],"l34Ub":[function(require,module,exports) {
var global = arguments[3];
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require('../utils');
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('each', function(context, options) {
        if (!options) throw new _exception2['default']('Must pass iterator to #each');
        var fn = options.fn, inverse = options.inverse, i = 0, ret = '', data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        if (_utils.isFunction(context)) context = context.call(this);
        if (options.data) data = _utils.createFrame(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === 'object') {
            if (_utils.isArray(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
module.exports = exports['default'];

},{"../utils":"4oqyo","../exception":"xwrp8"}],"bD5aN":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('helperMissing', function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
module.exports = exports['default'];

},{"../exception":"xwrp8"}],"7GVXq":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require('../utils');
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('if', function(conditional, options) {
        if (arguments.length != 2) throw new _exception2['default']('#if requires exactly one argument');
        if (_utils.isFunction(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper('unless', function(conditional, options) {
        if (arguments.length != 2) throw new _exception2['default']('#unless requires exactly one argument');
        return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
module.exports = exports['default'];

},{"../utils":"4oqyo","../exception":"xwrp8"}],"cIdl5":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports['default'] = function(instance) {
    instance.registerHelper('log', function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports['default'];

},{}],"inBjT":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports['default'] = function(instance) {
    instance.registerHelper('lookup', function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
module.exports = exports['default'];

},{}],"csMdW":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require('../utils');
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('with', function(context, options) {
        if (arguments.length != 2) throw new _exception2['default']('#with requires exactly one argument');
        if (_utils.isFunction(context)) context = context.call(this);
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
module.exports = exports['default'];

},{"../utils":"4oqyo","../exception":"xwrp8"}],"5Xsa3":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _decoratorsInline = require('./decorators/inline');
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2['default'](instance);
}

},{"./decorators/inline":"e1ZO7"}],"e1ZO7":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
var _utils = require('../utils');
exports['default'] = function(instance) {
    instance.registerDecorator('inline', function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {
            };
            ret = function(context, options1) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({
                }, original, props.partials);
                var ret1 = fn(context, options1);
                container.partials = original;
                return ret1;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
module.exports = exports['default'];

},{"../utils":"4oqyo"}],"6bWki":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
var _utils = require('./utils');
var logger = {
    methodMap: [
        'debug',
        'info',
        'warn',
        'error'
    ],
    level: 'info',
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = 'log';
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports['default'] = logger;
module.exports = exports['default'];

},{"./utils":"4oqyo"}],"lxgcR":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
var _createNewLookupObject = require('./create-new-lookup-object');
var _logger = require('../logger');
var logger = _interopRequireWildcard(_logger);
var loggedProperties = Object.create(null);
function createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList['constructor'] = false;
    defaultMethodWhiteList['__defineGetter__'] = false;
    defaultMethodWhiteList['__defineSetter__'] = false;
    defaultMethodWhiteList['__lookupGetter__'] = false;
    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList['__proto__'] = false;
    return {
        properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === 'function') return checkWhiteList(protoAccessControl.methods, propertyName);
    else return checkWhiteList(protoAccessControl.properties, propertyName);
}
function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
    }
}
function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
    });
}

},{"./create-new-lookup-object":"irB5u","../logger":"6bWki"}],"irB5u":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;
var _utils = require('../utils');
/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */ function createNewLookupObject() {
    for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    return _utils.extend.apply(undefined, [
        Object.create(null)
    ].concat(sources));
}

},{"../utils":"4oqyo"}],"kpckR":[function(require,module,exports) {
// Build out our basic SafeString type
'use strict';
exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return '' + this.string;
};
exports['default'] = SafeString;
module.exports = exports['default'];

},{}],"Ocgd0":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
var _utils = require('./utils');
var Utils = _interopRequireWildcard(_utils);
var _exception = require('./exception');
var _exception2 = _interopRequireDefault(_exception);
var _base = require('./base');
var _helpers = require('./helpers');
var _internalWrapHelper = require('./internal/wrapHelper');
var _internalProtoAccess = require('./internal/proto-access');
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2['default']("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ').');
}
function template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new _exception2['default']('No environment passed to template');
    if (!templateSpec || !templateSpec.main) throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({
            }, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({
        }, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split('\n');
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join('\n');
            }
            return result;
        } else throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return depths[i][name];
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn1 = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn1, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn1);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = Utils.extend({
            }, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({
        }),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {
        } : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) data = initData(context, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context != options.depths[0] ? [
                context
            ].concat(options.depths) : options.depths;
            else depths = [
                context
            ];
        }
        function main(context1 /*, options*/ ) {
            return '' + templateSpec.main(container, context1, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = Utils.extend({
            }, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({
            }, env.decorators, options.decorators);
            container.hooks = {
            };
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new _exception2['default']('must pass block params');
        if (templateSpec.useDepths && !depths) throw new _exception2['default']('must pass parent depths');
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {
        } : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === '@partial-block') partial = options.data['partial-block'];
        else partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data['partial-block'];
    options.partial = true;
    if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) (function() {
        options.data = _base.createFrame(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data['partial-block'] = function partialBlockWrapper(context1) {
            var options1 = arguments.length <= 1 || arguments[1] === undefined ? {
            } : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options1.data = _base.createFrame(options1.data);
            options1.data['partial-block'] = currentPartialBlock;
            return fn(context1, options1);
        };
        if (fn.partials) options.partials = Utils.extend({
        }, options.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new _exception2['default']('The partial ' + options.name + ' could not be found');
    else if (partial instanceof Function) return partial(context, options);
}
function noop() {
    return '';
}
function initData(context, data) {
    if (!data || !('root' in data)) {
        data = data ? _base.createFrame(data) : {
        };
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {
        };
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}
function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
}
function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({
            lookupProperty: lookupProperty
        }, options);
    });
}

},{"./utils":"4oqyo","./exception":"xwrp8","./base":"5133O","./helpers":"fCe7j","./internal/wrapHelper":"imD5X","./internal/proto-access":"lxgcR"}],"imD5X":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== 'function') // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper1() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}

},{}],"fXeQ4":[function(require,module,exports) {
var global = arguments[3];
'use strict';
exports.__esModule = true;
exports['default'] = function(Handlebars) {
    /* istanbul ignore next */ var root = typeof global !== 'undefined' ? global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
        return Handlebars;
    };
};
module.exports = exports['default'];

},{}],"2S1yP":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
var AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports['default'] = AST;
module.exports = exports['default'];

},{}],"fzbdj":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.parseWithoutProcessing = parseWithoutProcessing;
exports.parse = parse;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _parser = require('./parser');
var _parser2 = _interopRequireDefault(_parser);
var _whitespaceControl = require('./whitespace-control');
var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
var _helpers = require('./helpers');
var Helpers = _interopRequireWildcard(_helpers);
var _utils = require('../utils');
exports.parser = _parser2['default'];
var yy = {
};
_utils.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === 'Program') return input;
    _parser2['default'].yy = yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = _parser2['default'].parse(input);
    return ast;
}
function parse(input, options) {
    var ast = parseWithoutProcessing(input, options);
    var strip = new _whitespaceControl2['default'](options);
    return strip.accept(ast);
}

},{"./parser":"2ilsw","./whitespace-control":"jhxyl","./helpers":"aNH8G","../utils":"4oqyo"}],"2ilsw":[function(require,module,exports) {
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
exports.__esModule = true;
var handlebars = function() {
    var parser = {
        trace: function trace() {
        },
        yy: {
        },
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: 'CommentStatement',
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: 'ContentStatement',
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: 'PartialStatement',
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: '',
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: 'SubExpression',
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: 'Hash',
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: 'HashPair',
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: 'StringLiteral',
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: 'NumberLiteral',
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: 'BooleanLiteral',
                        value: $$[$0] === 'true',
                        original: $$[$0] === 'true',
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: 'UndefinedLiteral',
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: 'NullLiteral',
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {
            };
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {
            }, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer = function() {
        var lexer1 = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = [
                    'INITIAL'
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin1(condition) {
                this.begin(condition);
            }
        };
        lexer1.options = {
        };
        lexer1.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin('raw');
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') return 15;
                    else {
                        strip(5, 9);
                        return 'END_RAW_BLOCK';
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin('raw');
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin('com');
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                    return 72;
                case 43:
                    return 'INVALID';
                case 44:
                    return 5;
            }
        };
        lexer1.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer1.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer1;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {
        };
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
exports["default"] = handlebars;
module.exports = exports["default"];

},{}],"jhxyl":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _visitor = require('./visitor');
var _visitor2 = _interopRequireDefault(_visitor);
function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {
    } : arguments[0];
    this.options = options;
}
WhitespaceControl.prototype = new _visitor2['default']();
WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) omitRight(body, i, true);
        if (strip.open) omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === 'PartialStatement') // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) omitLeft(program.body, null, true);
        if (inverseStrip.close) omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) omitLeft(program.body, null, true);
    return strip;
};
WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {
    };
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === 'ContentStatement') return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === 'ContentStatement') return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
exports['default'] = WhitespaceControl;
module.exports = exports['default'];

},{"./visitor":"2O4Fg"}],"2O4Fg":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
function Visitor() {
    this.parents = [];
}
Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new _exception2['default'](node.type + ' requires ' + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new _exception2['default']('Unknown type: ' + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, 'program');
    },
    ContentStatement: function ContentStatement() /* content */ {
    },
    CommentStatement: function CommentStatement() /* comment */ {
    },
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() /* path */ {
    },
    StringLiteral: function StringLiteral() /* string */ {
    },
    NumberLiteral: function NumberLiteral() /* number */ {
    },
    BooleanLiteral: function BooleanLiteral() /* bool */ {
    },
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {
    },
    NullLiteral: function NullLiteral() /* literal */ {
    },
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, 'value');
    }
};
function visitSubExpression(mustache) {
    this.acceptRequired(mustache, 'path');
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, 'hash');
}
function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, 'program');
    this.acceptKey(block, 'inverse');
}
function visitPartial(partial) {
    this.acceptRequired(partial, 'name');
    this.acceptArray(partial.params);
    this.acceptKey(partial, 'hash');
}
exports['default'] = Visitor;
module.exports = exports['default'];

},{"../exception":"xwrp8"}],"aNH8G":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
    }
}
function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function stripFlags(open, close) {
    return {
        open: open.charAt(2) === '~',
        close: close.charAt(close.length - 3) === '~'
    };
}
function stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
}
function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? '@' : '', dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || '') + part;
        if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
            if (dig.length > 0) throw new _exception2['default']('Invalid path: ' + original, {
                loc: loc
            });
            else if (part === '..') depth++;
        } else dig.push(part);
    }
    return {
        type: 'PathExpression',
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== '{' && escapeFlag !== '&';
    var decorator = /\*/.test(open);
    return {
        type: decorator ? 'Decorator' : 'MustacheStatement',
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: 'Program',
        body: contents,
        strip: {
        },
        loc: locInfo
    };
    return {
        type: 'BlockStatement',
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {
        },
        inverseStrip: {
        },
        closeStrip: {
        },
        loc: locInfo
    };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? 'DecoratorBlock' : 'BlockStatement',
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: 'Program',
        body: statements,
        strip: {
        },
        loc: loc
    };
}
function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
        type: 'PartialBlockStatement',
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}

},{"../exception":"xwrp8"}],"avEUX":[function(require,module,exports) {
/* eslint-disable new-cap */ 'use strict';
exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
var _utils = require('../utils');
var _ast = require('./ast');
var _ast2 = _interopRequireDefault(_ast);
var slice = [].slice;
function Compiler() {
}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            'if': true,
            unless: true,
            'with': true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new _exception2['default']('Unknown type: ' + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === 'helper') this.helperSexpr(block, program, inverse);
        else if (type === 'simple') {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('blockValue', block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('ambiguousBlockValue');
        }
        this.opcode('append');
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode('registerDecorator', params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode('pushLiteral', 'undefined');
            else params.push({
                type: 'PathExpression',
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === 'SubExpression';
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || '';
        if (this.options.preventIndent && indent) {
            this.opcode('appendContent', indent);
            indent = '';
        }
        this.opcode('invokePartial', isDynamic, partialName, indent);
        this.opcode('append');
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode('appendEscaped');
        else this.opcode('append');
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode('appendContent', content.value);
    },
    CommentStatement: function CommentStatement() {
    },
    SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === 'simple') this.simpleSexpr(sexpr);
        else if (type === 'helper') this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode('getContext', path.depth);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        path.strict = true;
        this.accept(path);
        this.opcode('invokeAmbiguous', name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode('resolvePossibleLambda');
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode('invokeKnownHelper', params.length, name);
        else if (this.options.knownHelpersOnly) throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode('getContext', path.depth);
        var name = path.parts[0], scoped = _ast2['default'].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode('lookupBlockParam', blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode('pushContext');
        else if (path.data) {
            this.options.data = true;
            this.opcode('lookupData', path.depth, path.parts, path.strict);
        } else this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode('pushString', string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode('pushLiteral', number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode('pushLiteral', bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode('pushLiteral', 'undefined');
    },
    NullLiteral: function NullLiteral() {
        this.opcode('pushLiteral', 'null');
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode('pushHash');
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode('assignToHash', pairs[i].key);
        this.opcode('popHash');
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return 'helper';
        else if (isEligible) return 'ambiguous';
        else return 'simple';
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || '';
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
            if (val.depth) this.addDepth(val.depth);
            this.opcode('getContext', val.depth || 0);
            this.opcode('pushStringParam', value, val.type);
            if (val.type === 'SubExpression') // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join('.');
                    this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                    this.opcode('pushId', val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode('emptyHash', omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function precompile(input, options, env) {
    if (input == null || typeof input !== 'string' && input.type !== 'Program') throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
    options = options || {
    };
    if (!('data' in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
    if (options === undefined) options = {
    };
    if (input == null || typeof input !== 'string' && input.type !== 'Program') throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
    options = _utils.extend({
    }, options);
    if (!('data' in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function argEquals(a, b) {
    if (a === b) return true;
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: 'PathExpression',
            data: false,
            depth: 0,
            parts: [
                literal.original + ''
            ],
            original: literal.original + '',
            loc: literal.loc
        };
    }
}

},{"../exception":"xwrp8","../utils":"4oqyo","./ast":"2S1yP"}],"eauQs":[function(require,module,exports) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _base = require('../base');
var _exception = require('../exception');
var _exception2 = _interopRequireDefault(_exception);
var _utils = require('../utils');
var _codeGen = require('./code-gen');
var _codeGen2 = _interopRequireDefault(_codeGen);
function Literal(value) {
    this.value = value;
}
function JavaScriptCompiler() {
}
JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable('container.lookup'),
            '(depths, ',
            JSON.stringify(name),
            ')'
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!_utils.isArray(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            'return ',
            source,
            ';'
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            'buffer += ',
            source,
            ';'
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString('');
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            'lookupProperty(',
            parent,
            ',',
            JSON.stringify(name),
            ')'
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {
        };
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource('');
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2['default']('Compile completed with content left on stack');
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                'var decorators = container.decorators, ',
                this.lookupPropertyFunctionVarDeclaration(),
                ';\n'
            ]);
            this.decorators.push('return fn;');
            if (asObject) this.decorators = Function.apply(this, [
                'fn',
                'props',
                'container',
                'depth0',
                'data',
                'blockParams',
                'depths',
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                this.decorators.push('}\n');
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++)if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + '_d'] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new _codeGen2['default'](this.options.srcName);
        this.decorators = new _codeGen2['default'](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = '';
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ', ' + locals.join(', ');
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                node.children[0] = 'alias' + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            'container',
            'depth0',
            'helpers',
            'partials',
            'data'
        ];
        if (this.useBlockParams || this.useDepths) params.push('blockParams');
        if (this.useDepths) params.push('depths');
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            'function(',
            params.join(','),
            ') {\n  ',
            source,
            '}'
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend('  + ');
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend('buffer += ');
                    bufferEnd.add(';');
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend('return ');
                bufferEnd.add(';');
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend('return buffer + ');
                bufferEnd.add(';');
            } else this.source.push('return buffer;');
        }
        if (varDeclarations) this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, 'call', params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs('', 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            'if (!',
            this.lastHelper,
            ') { ',
            current,
            ' = ',
            this.source.functionCall(blockHelperMissing, 'call', params),
            '}'
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    ' != null ? ',
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                'if (',
                local,
                ' != null) { ',
                this.appendToBuffer(local, undefined, true),
                ' }'
            ]);
            if (this.environment.isSimple) this.pushSource([
                'else { ',
                this.appendToBuffer("''", undefined, true),
                ' }'
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable('container.escapeExpression'),
            '(',
            this.popStack(),
            ')'
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath('context', parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            'blockParams[',
            blockParamId[0],
            '][',
            blockParamId[1],
            ']'
        ]);
        this.resolvePath('context', parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral('data');
        else this.pushStackLiteral('container.data(data, ' + depth + ')');
        this.resolvePath('data', parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, type));
            return;
        }
        var len = parts.length;
        for(; i < len; i++)/* eslint-disable no-loop-func */ this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            // We want to ensure that zero and false are handled properly if the context (falsy flag)
            // needs to have the special handling for these values.
            if (!falsy) return [
                ' != null ? ',
                lookup,
                ' : ',
                current
            ];
            else // Otherwise we can use generic falsy handling
            return [
                ' && ',
                lookup
            ];
        });
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable('container.lambda'),
            '(',
            this.popStack(),
            ', ',
            this.contextName(0),
            ')'
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== 'SubExpression') {
            if (typeof string === 'string') this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push('{}'); // hashIds
        if (this.stringParams) {
            this.push('{}'); // hashContexts
            this.push('{}'); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {
            },
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup('decorators', name, 'decorator'), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push([
            'fn = ',
            this.decorators.functionCall(foundDecorator, '', [
                'fn',
                'props',
                'container',
                options
            ]),
            ' || fn;'
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
        var functionLookupCode = [
            '(',
            this.itemsSeparatedBy(possibleFunctionCalls, '||'),
            ')'
        ];
        var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister('helper');
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
        var lookup = [
            '(',
            '(helper = ',
            helperName,
            ' || ',
            nonHelper,
            ')'
        ];
        if (!this.options.strict) {
            lookup[0] = '(helper = ';
            lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
        }
        this.push([
            '(',
            lookup,
            helper.paramsInit ? [
                '),(',
                helper.paramsInit
            ] : [],
            '),',
            '(typeof helper === ',
            this.aliasable('"function"'),
            ' ? ',
            this.source.functionCall('helper', 'call', helper.callParams),
            ' : helper))'
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = 'helpers';
        options.partials = 'partials';
        options.decorators = 'container.decorators';
        if (!isDynamic) params.unshift(this.nameLookup('partials', name, 'partial'));
        else params.unshift(name);
        if (this.options.compat) options.depths = 'depths';
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall('container.invokePartial', '', params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === 'BlockParam') this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
        else if (type === 'PathExpression') this.pushString(name);
        else if (type === 'SubExpression') this.pushStackLiteral('true');
        else this.pushStackLiteral('null');
    },
    // HELPERS
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.length;
                child.index = index;
                child.name = 'program' + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = 'program' + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            'data',
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push('blockParams');
        if (this.useDepths) programParams.push('depths');
        return 'container.program(' + programParams.join(', ') + ')';
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            '('
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new _exception2['default']('replaceStack on non-inline');
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                '(',
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                '((',
                this.push(_name),
                ' = ',
                top,
                ')'
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ')'));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push('stack' + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return 'stack' + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    ' = ',
                    entry,
                    ';'
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new _exception2['default']('Invalid stack pop');
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return 'depths[' + context + ']';
        else return 'depth' + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup('helpers', name, 'helper'), callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {
        }, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || 'container.noop';
            options.inverse = inverse || 'container.noop';
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = 'data';
        if (this.useBlockParams) options.blockParams = 'blockParams';
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister1) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister1) {
            this.useRegister('options');
            params.push('options');
            return [
                'options=',
                options
            ];
        } else if (params) {
            params.push(options);
            return '';
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(' ');
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {
    };
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(), i = 0, len = parts.length;
    if (requireTerminal) len--;
    for(; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable('container.strict'),
        '(',
        stack,
        ', ',
        compiler.quotedString(parts[i]),
        ', ',
        JSON.stringify(compiler.source.currentLocation),
        ' )'
    ];
    else return stack;
}
exports['default'] = JavaScriptCompiler;
module.exports = exports['default'];

},{"../base":"5133O","../exception":"xwrp8","../utils":"4oqyo","./code-gen":"5aCio"}],"5aCio":[function(require,module,exports) {
/* global define */ 'use strict';
exports.__esModule = true;
var _utils = require('../utils');
var SourceNode = undefined;
try {
    /* istanbul ignore next */ if (typeof define !== 'function' || !define.amd) {
        // We don't support this in AMD environments. For these environments, we asusme that
        // they are running on the browser and thus have no need for the source-map library.
        var SourceMap = require('source-map');
        SourceNode = SourceMap.SourceNode;
    }
} catch (err) {
}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
        this.src = '';
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ SourceNode.prototype = {
        add: function add(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join('');
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join('');
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === 'boolean' || typeof chunk === 'number') // Handle primitives that the SourceNode will throw up on
    return chunk + '';
    return chunk;
}
function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                '  ',
                line,
                '\n'
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {
            }
        };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {
            }
        } : arguments[1];
        if (chunk instanceof SourceNode) return chunk;
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? '.' + type + '(' : '(',
            params,
            ')'
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== 'undefined') pairs.push([
                _this.quotedString(key),
                ':',
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend('{');
        ret.add('}');
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(',');
            ret.add(castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend('[');
        ret.add(']');
        return ret;
    }
};
exports['default'] = CodeGen;
module.exports = exports['default'];

},{"../utils":"4oqyo","source-map":"jKAA2"}],"jKAA2":[function(require,module,exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require('./lib/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./lib/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./lib/source-node').SourceNode;

},{"./lib/source-map-generator":"7cbxG","./lib/source-map-consumer":"7ggO3","./lib/source-node":"5HN4q"}],"7cbxG":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require('./base64-vlq');
var util = require('./util');
var ArraySet = require('./array-set').ArraySet;
var MappingList = require('./mapping-list').MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {
    };
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's \"file\" property. Both were omitted.");
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile1) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile1);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile1 = util.join(aSourceMapPath, sourceFile1);
            if (sourceRoot != null) sourceFile1 = util.relative(sourceRoot, sourceFile1);
            this.setSourceContent(sourceFile1, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = '';
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ';';
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ',';
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"./base64-vlq":"i7Kec","./util":"hRhg2","./array-set":"gzMdG","./mapping-list":"80Wa8"}],"i7Kec":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require('./base64');
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0)
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation)
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"./base64":"5WRC2"}],"5WRC2":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"hRhg2":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ':';
    url += '//';
    if (aParsedUrl.auth) url += aParsedUrl.auth + '@';
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === '.') parts.splice(i, 1);
        else if (part === '..') up++;
        else if (up > 0) {
            if (part === '') {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join('/');
    if (path === '') path = isAbsolute ? '/' : '.';
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || '/';
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, '');
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + '/') !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !('__proto__' in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return '$' + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || '';
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') sourceRoot += '/';
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf('/');
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"gzMdG":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"./util":"hRhg2"}],"80Wa8":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"./util":"hRhg2"}],"7ggO3":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
var binarySearch = require('./binary-search');
var ArraySet = require('./array-set').ArraySet;
var base64VLQ = require('./base64-vlq');
var quickSort = require('./quick-sort').quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings1(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {
    };
    var temp = {
    };
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ',') index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error('Found a source, but no line and column');
                if (segment.length === 3) throw new Error('Found a source and line, but no column');
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, 'name', null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, 'originalLine', null),
                column: util.getArg(mapping, 'originalColumn', null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error('Support for url field in sections not implemented.');
        var offset = util.getArg(s, 'offset');
        var offsetLine = util.getArg(offset, 'line');
        var offsetColumn = util.getArg(offset, 'column');
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error('Section offsets must be ordered and non-overlapping.');
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle1, section) {
        var cmp = needle1.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle1.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === 'number') this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"./util":"hRhg2","./binary-search":"j7AXc","./array-set":"gzMdG","./base64-vlq":"i7Kec","./quick-sort":"j3F7C"}],"j7AXc":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"j3F7C":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"5HN4q":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
var util = require('./util');
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {
    };
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
        return lineContents + newLine;
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || '';
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || '';
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
    return node;
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== '') aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === 'string') this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push(''.replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"./source-map-generator":"7cbxG","./util":"hRhg2"}],"75Ds2":[function(require,module,exports) {
/* eslint-disable new-cap */ 'use strict';
exports.__esModule = true;
exports.print = print;
exports.PrintVisitor = PrintVisitor;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _visitor = require('./visitor');
var _visitor2 = _interopRequireDefault(_visitor);
function print(ast) {
    return new PrintVisitor().accept(ast);
}
function PrintVisitor() {
    this.padding = 0;
}
PrintVisitor.prototype = new _visitor2['default']();
PrintVisitor.prototype.pad = function(string) {
    var out = '';
    for(var i = 0, l = this.padding; i < l; i++)out += '  ';
    out += string + '\n';
    return out;
};
PrintVisitor.prototype.Program = function(program) {
    var out = '', body = program.body, i = undefined, l = undefined;
    if (program.blockParams) {
        var blockParams = 'BLOCK PARAMS: [';
        for(i = 0, l = program.blockParams.length; i < l; i++)blockParams += ' ' + program.blockParams[i];
        blockParams += ' ]';
        out += this.pad(blockParams);
    }
    for(i = 0, l = body.length; i < l; i++)out += this.accept(body[i]);
    this.padding--;
    return out;
};
PrintVisitor.prototype.MustacheStatement = function(mustache) {
    return this.pad('{{ ' + this.SubExpression(mustache) + ' }}');
};
PrintVisitor.prototype.Decorator = function(mustache) {
    return this.pad('{{ DIRECTIVE ' + this.SubExpression(mustache) + ' }}');
};
PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function(block) {
    var out = '';
    out += this.pad((block.type === 'DecoratorBlock' ? 'DIRECTIVE ' : '') + 'BLOCK:');
    this.padding++;
    out += this.pad(this.SubExpression(block));
    if (block.program) {
        out += this.pad('PROGRAM:');
        this.padding++;
        out += this.accept(block.program);
        this.padding--;
    }
    if (block.inverse) {
        if (block.program) this.padding++;
        out += this.pad('{{^}}');
        this.padding++;
        out += this.accept(block.inverse);
        this.padding--;
        if (block.program) this.padding--;
    }
    this.padding--;
    return out;
};
PrintVisitor.prototype.PartialStatement = function(partial) {
    var content = 'PARTIAL:' + partial.name.original;
    if (partial.params[0]) content += ' ' + this.accept(partial.params[0]);
    if (partial.hash) content += ' ' + this.accept(partial.hash);
    return this.pad('{{> ' + content + ' }}');
};
PrintVisitor.prototype.PartialBlockStatement = function(partial) {
    var content = 'PARTIAL BLOCK:' + partial.name.original;
    if (partial.params[0]) content += ' ' + this.accept(partial.params[0]);
    if (partial.hash) content += ' ' + this.accept(partial.hash);
    content += ' ' + this.pad('PROGRAM:');
    this.padding++;
    content += this.accept(partial.program);
    this.padding--;
    return this.pad('{{> ' + content + ' }}');
};
PrintVisitor.prototype.ContentStatement = function(content) {
    return this.pad("CONTENT[ '" + content.value + "' ]");
};
PrintVisitor.prototype.CommentStatement = function(comment) {
    return this.pad("{{! '" + comment.value + "' }}");
};
PrintVisitor.prototype.SubExpression = function(sexpr) {
    var params = sexpr.params, paramStrings = [], hash = undefined;
    for(var i = 0, l = params.length; i < l; i++)paramStrings.push(this.accept(params[i]));
    params = '[' + paramStrings.join(', ') + ']';
    hash = sexpr.hash ? ' ' + this.accept(sexpr.hash) : '';
    return this.accept(sexpr.path) + ' ' + params + hash;
};
PrintVisitor.prototype.PathExpression = function(id) {
    var path = id.parts.join('/');
    return (id.data ? '@' : '') + 'PATH:' + path;
};
PrintVisitor.prototype.StringLiteral = function(string) {
    return '"' + string.value + '"';
};
PrintVisitor.prototype.NumberLiteral = function(number) {
    return 'NUMBER{' + number.value + '}';
};
PrintVisitor.prototype.BooleanLiteral = function(bool) {
    return 'BOOLEAN{' + bool.value + '}';
};
PrintVisitor.prototype.UndefinedLiteral = function() {
    return 'UNDEFINED';
};
PrintVisitor.prototype.NullLiteral = function() {
    return 'NULL';
};
PrintVisitor.prototype.Hash = function(hash) {
    var pairs = hash.pairs, joinedPairs = [];
    for(var i = 0, l = pairs.length; i < l; i++)joinedPairs.push(this.accept(pairs[i]));
    return 'HASH{' + joinedPairs.join(', ') + '}';
};
PrintVisitor.prototype.HashPair = function(pair) {
    return pair.key + '=' + this.accept(pair.value);
}; /* eslint-enable new-cap */ 

},{"./visitor":"2O4Fg"}],"8VSUO":[function(require,module,exports) {
"use strict";

},{}],"dHnRI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ServiceLocator = /*#__PURE__*/ function() {
    function ServiceLocator1() {
        _classCallCheck(this, ServiceLocator1);
        this.services = [];
    }
    _createClass(ServiceLocator1, [
        {
            key: "registerService",
            value: function registerService(interfaceType, instance) {
                var record = this.services.find(function(x) {
                    return x.interfaceType === interfaceType;
                });
                if (!record) {
                    record = {
                        interfaceType: interfaceType,
                        instance: instance
                    };
                    this.services.push(record);
                } else record.instance = instance;
            }
        },
        {
            key: "getService",
            value: function getService(interfaceType) {
                var _this$services$find;
                return ((_this$services$find = this.services.find(function(x) {
                    return x.interfaceType === interfaceType;
                })) === null || _this$services$find === void 0 ? void 0 : _this$services$find.instance) || null;
            }
        }
    ]);
    return ServiceLocator1;
}();
var _default = new ServiceLocator();
exports["default"] = _default;

},{}],"9FwjH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatsService = void 0;
var _chats = require("../../api/chats.api");
var _api = require("../../constants/api");
var _subject = require("../../utils/classes/subject");
var _inject = require("../../utils/decorators/inject");
var _date = require("../../utils/helpers/date.utils");
var _isEqual = _interopRequireDefault(require("../../utils/helpers/isEqual"));
var _snackbar = require("../core/snackbar");
var _user = require("./user.service");
var _messenger = require("../core/messenger");
var _excluded = [
    "id",
    "avatar"
], _excluded2 = [
    "avatar"
];
var _dec, _dec2, _class, _descriptor, _descriptor2;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ChatsService = (_dec = _inject.Inject(_snackbar.SnackBarService), _dec2 = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function() {
    function ChatsService1() {
        _classCallCheck(this, ChatsService1);
        _initializerDefineProperty(this, "_snackBar", _descriptor, this);
        _initializerDefineProperty(this, "_userService", _descriptor2, this);
        this._subscriptions = [];
        this._chatsApi = new _chats.ChatsApi();
        this._chats = [];
        this._chatsSubject = new _subject.Subject();
        this.chatsObservable = this._chatsSubject.asObservable();
        this._chat = null;
        this._chatSubject = new _subject.Subject();
        this.chatObservable = this._chatSubject.asObservable();
        this._chatSubject.next(this._chat);
        var isLoggedIn = Boolean(localStorage.getItem(_user.LOGGED_IN_KEY));
        if (isLoggedIn) this.getChats();
    }
    _createClass(ChatsService1, [
        {
            key: "chat",
            get: function get() {
                return this._chat;
            }
        },
        {
            key: "chats",
            get: function get() {
                return this._chats;
            }
        },
        {
            key: "getChats",
            value: function getChats(data) {
                var _this = this;
                // TODO: Сделать пагинацию
                if (data) data.limit = 1000;
                else data = {
                    limit: 1000
                };
                var getChatsSub = this._chatsApi.request(data).subscribe(function(chats) {
                    // TODO: Подумать о создании новых чатов
                    _this._chats = _this._mapChats(chats);
                    _this._chatsSubject.next(_this._chats);
                }, function(err) {
                    console.log(err);
                    _this._snackBar.open("Сервис не доступен. Попробуйте позже");
                });
                this._subscriptions.push(getChatsSub);
            }
        },
        {
            key: "createChat",
            value: function createChat(title, users, avatar) {
                var _this2 = this;
                var createChatSub = this._chatsApi.create(title).subscribe(function(response) {
                    var _this2$_userService$u;
                    var newChat = {
                        id: response.id,
                        title: title,
                        avatar: null,
                        unread_count: null,
                        last_message: null,
                        messages: [],
                        messenger: _this2._createMessenger(response.id),
                        created_by: (_this2$_userService$u = _this2._userService.user) === null || _this2$_userService$u === void 0 ? void 0 : _this2$_userService$u.id,
                        allMessagesLoaded: true
                    };
                    _this2._chats.unshift(newChat);
                    _this2._chatsSubject.next(_this2._chats);
                    _this2._snackBar.open("Чат создан. Напишите первое сообщение уже сейчас!", _snackbar.SNACKBAR_TYPE.SUCCESS);
                    if (users && users.length) {
                        var data = {
                            users: users.map(function(x) {
                                return x.id;
                            }),
                            chatId: response.id
                        };
                        _this2.addChatUsers(data);
                    }
                    if (avatar) {
                        var _data = {
                            avatar: avatar,
                            chatId: response.id
                        };
                        _this2.uploadChatAvatar(_data);
                    }
                }, function(err) {
                    _this2._snackBar.open("Ошибка создания чата", _snackbar.SNACKBAR_TYPE.ERROR);
                });
                this._subscriptions.push(createChatSub);
            }
        },
        {
            key: "setChat",
            value: function setChat(chatId) {
                this._chat = this._chats.find(function(x) {
                    return x.id === chatId;
                }) || null;
                if (this._chat) {
                    var _this$_chat$messages;
                    var id = this._chat.id;
                    this._chats = this._chats.map(function(x) {
                        return _objectSpread(_objectSpread({
                        }, x), {
                        }, {
                            selected: x.id === id
                        });
                    }); // Если нет сообщений в чате, то получаем с 0го
                    if (!((_this$_chat$messages = this._chat.messages) !== null && _this$_chat$messages !== void 0 && _this$_chat$messages.length)) {
                        var _this$_chat$messenger;
                        (_this$_chat$messenger = this._chat.messenger) === null || _this$_chat$messenger === void 0 || _this$_chat$messenger.getOldMessages(0);
                    }
                    this._chatsSubject.next(this._chats);
                    this._chatSubject.next(this._chat); // Также получаем юзеров чата
                    this.getChatUsers(this._chat.id);
                }
            }
        },
        {
            key: "getChatUsers",
            value: function getChatUsers(chatId) {
                var _this3 = this;
                // TODO: Добавить пагинацию
                var requestParams = {
                    limit: 1000
                };
                var getChatUsersSub = this._chatsApi.requestChatUsers(chatId, requestParams).subscribe(function(users) {
                    if (_this3._chat) {
                        users = users.map(function(x) {
                            return _objectSpread(_objectSpread({
                            }, x), {
                            }, {
                                avatar: x.avatar ? _api.RESOURCES_URL + x.avatar : ''
                            });
                        });
                        _this3._chat.users = users;
                        _this3._chatSubject.next(_this3._chat);
                    }
                }, function(err) {
                    console.log(err);
                });
                this._subscriptions.push(getChatUsersSub);
            }
        },
        {
            key: "uploadChatAvatar",
            value: function uploadChatAvatar(data) {
                var _this4 = this;
                var uploadChatAvatarSub = this._chatsApi.loadChatAvatar(data).subscribe(function(uploadresponse) {
                    var _this4$_chat;
                    _this4._chats = _this4._chats.map(function(x) {
                        if (x.id === uploadresponse.id) x.avatar = _api.RESOURCES_URL + uploadresponse.avatar;
                        return x;
                    });
                    _this4._chatsSubject.next(_this4._chats);
                    if (uploadresponse.id === ((_this4$_chat = _this4._chat) === null || _this4$_chat === void 0 ? void 0 : _this4$_chat.id)) {
                        _this4._chat.avatar = _api.RESOURCES_URL + uploadresponse.avatar;
                        _this4._chatSubject.next(_this4._chat);
                        _this4._snackBar.open("Аватар изменен", _snackbar.SNACKBAR_TYPE.SUCCESS);
                    }
                });
                this._subscriptions.push(uploadChatAvatarSub);
            }
        },
        {
            key: "addChatUsers",
            value: function addChatUsers(data) {
                var _this5 = this;
                var addChatUsersSub = this._chatsApi.addChatUsers(data).subscribe(function() {
                    // Обновляем список пользователей
                    _this5.getChatUsers(data.chatId);
                });
                this._subscriptions.push(addChatUsersSub);
            }
        },
        {
            key: "deleteChatUsers",
            value: function deleteChatUsers(data) {
                var _this6 = this;
                var deleteChatUsersSub = this._chatsApi.deleteChatUsers(data).subscribe(function() {
                    // Обновляем список пользователей
                    _this6.getChatUsers(data.chatId);
                });
                this._subscriptions.push(deleteChatUsersSub);
            }
        },
        {
            key: "deleteChat",
            value: function deleteChat(chatId) {
                var _this7 = this;
                var deleteChatSub = this._chatsApi["delete"](chatId).subscribe(function() {
                    _this7._snackBar.open("Чат успешно удален", _snackbar.SNACKBAR_TYPE.SUCCESS);
                    _this7.leaveChat(chatId);
                }, function(err) {
                    _this7._snackBar.open("Ошибка удаления чата", _snackbar.SNACKBAR_TYPE.ERROR);
                });
                this._subscriptions.push(deleteChatSub);
            }
        },
        {
            key: "leaveChat",
            value: function leaveChat(chatId) {
                this._chats = this._chats.filter(function(x) {
                    return x.id !== chatId;
                });
                this._chatsSubject.next(this._chats);
            }
        },
        {
            key: "loadMoreMessages",
            value: function loadMoreMessages() {
                var _this$_chat$messages2;
                if (this._chat && (_this$_chat$messages2 = this._chat.messages) !== null && _this$_chat$messages2 !== void 0 && _this$_chat$messages2.length) {
                    var _this$_chat$messenger2;
                    var lastMessageId = this._chat.messages[0].id;
                    (_this$_chat$messenger2 = this._chat.messenger) === null || _this$_chat$messenger2 === void 0 || _this$_chat$messenger2.getOldMessages(lastMessageId);
                }
            }
        },
        {
            key: "onGetOldMessages",
            value: function onGetOldMessages(messages, chatId) {
                var chat = this._chats.find(function(x) {
                    return x.id === chatId;
                });
                if (chat) {
                    var _chat$messages;
                    (_chat$messages = chat.messages) === null || _chat$messages === void 0 || _chat$messages.unshift.apply(_chat$messages, _toConsumableArray(messages.reverse())); // Если получили меньше 20, то больше нет сообщений
                    if (messages.length < 20) chat.allMessagesLoaded = true;
                     // NOTE: Вызов функции только для текущего чата!!!
                    this._chat = chat;
                    this._chatSubject.next(chat);
                }
            }
        },
        {
            key: "onNewMessage",
            value: function onNewMessage(message, chatId) {
                var chat = this._chats.find(function(x) {
                    return x.id === chatId;
                });
                if (chat) {
                    var _chat$messages2, _this$_chat;
                    (_chat$messages2 = chat.messages) === null || _chat$messages2 === void 0 || _chat$messages2.push(message);
                    if (chat.id === ((_this$_chat = this._chat) === null || _this$_chat === void 0 ? void 0 : _this$_chat.id)) this._chatSubject.next(chat);
                }
            } // Закрыть все подписки, сокеты и реинициализировать данные
        },
        {
            key: "destroy",
            value: function destroy() {
                // Закрываем подписки
                var _iterator = _createForOfIteratorHelper(this._subscriptions), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var sub = _step.value;
                        sub.unsubscribe();
                    } // Закрываем веб сокеты
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                var _iterator2 = _createForOfIteratorHelper(this._chats), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var _chat$messenger;
                        var chat = _step2.value;
                        (_chat$messenger = chat.messenger) === null || _chat$messenger === void 0 || _chat$messenger.destroy();
                    } // Реинициализируем данные
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                this._chat = null;
                this._chats = [];
                this._chatSubject.next(this._chat);
                this._chatsSubject.next(this._chats);
            }
        },
        {
            key: "_mapChats",
            value: function _mapChats(chats) {
                var _this8 = this;
                var chatIds = this._chats.map(function(x) {
                    return x.id;
                });
                var _ref = this._userService.user, id = _ref.id, avatar = _ref.avatar, authUser = _objectWithoutProperties(_ref, _excluded); // TODO: Заменить поиск на более оптимальный
                return chats.map(function(x) {
                    var lastMessageUser;
                    if (x.last_message) {
                        var _x$last_message$user = x.last_message.user, _avatar = _x$last_message$user.avatar, lastMessageUserData = _objectWithoutProperties(_x$last_message$user, _excluded2);
                        lastMessageUser = lastMessageUserData;
                    }
                    if (x && chatIds.includes(x.id)) {
                        var existingChat = _this8._chats.find(function(c) {
                            return c.id === x.id;
                        });
                        return _objectSpread(_objectSpread({
                        }, existingChat), {
                        }, {
                            avatar: x.avatar ? _api.RESOURCES_URL + x.avatar : null,
                            lastMessageTimeShort: x.last_message ? _date.getShortChatDate(new Date(x.last_message.time)) : undefined,
                            lastMessageSentByUser: _isEqual["default"](lastMessageUser, authUser)
                        });
                    } else return _objectSpread(_objectSpread({
                    }, x), {
                    }, {
                        avatar: x.avatar ? _api.RESOURCES_URL + x.avatar : null,
                        lastMessageTimeShort: x.last_message ? _date.getShortChatDate(new Date(x.last_message.time)) : undefined,
                        lastMessageSentByUser: _isEqual["default"](lastMessageUser, authUser),
                        messages: [],
                        messenger: _this8._createMessenger(x.id)
                    });
                });
            }
        },
        {
            key: "_createMessenger",
            value: function _createMessenger(chatId) {
                return new _messenger.Messenger({
                    chatId: chatId,
                    user: this._userService.user,
                    api: this._chatsApi,
                    onGetOldMessages: this.onGetOldMessages.bind(this),
                    onNewMessage: this.onNewMessage.bind(this)
                });
            }
        }
    ]);
    return ChatsService1;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_snackBar", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
})), _class));
exports.ChatsService = ChatsService;

},{"../../api/chats.api":"a58d2","../../constants/api":"7Odsh","../../utils/classes/subject":"4aKKF","../../utils/decorators/inject":"3QEUB","../../utils/helpers/date.utils":"kEqZL","../../utils/helpers/isEqual":"82JcZ","../core/snackbar":"Wv0BN","./user.service":"klVWu","../core/messenger":"2cIZm"}],"a58d2":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatsApi = void 0;
var _api = require("../constants/api");
var _baseApi = require("../utils/classes/base-api");
var _fetch = require("../utils/classes/fetch/fetch");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var ChatsApi1 = /*#__PURE__*/ function(_BaseAPI) {
    _inherits(ChatsApi2, _BaseAPI);
    var _super = _createSuper(ChatsApi2);
    function ChatsApi2() {
        var _this;
        _classCallCheck(this, ChatsApi2);
        _this = _super.call(this);
        _this._api = new _fetch.HttpClient(_api.BASE_URL + "chats");
        return _this;
    }
    _createClass(ChatsApi2, [
        {
            key: "request",
            value: function request(data) {
                return this._api.get("", {
                    data: data
                });
            }
        },
        {
            key: "create",
            value: function create(title) {
                return this._api.post("", {
                    data: {
                        title: title
                    }
                });
            }
        },
        {
            key: "delete",
            value: function _delete(chatId) {
                return this._api["delete"]("", {
                    data: {
                        chatId: chatId
                    }
                });
            }
        },
        {
            key: "requestChatUsers",
            value: function requestChatUsers(chatId, requstParams) {
                return this._api.get("/".concat(chatId, "/users"), {
                    data: requstParams
                });
            }
        },
        {
            key: "requestChatNewMessages",
            value: function requestChatNewMessages(chatId) {
                return this._api.get("/new/".concat(chatId));
            }
        },
        {
            key: "requestToken",
            value: function requestToken(chatId) {
                return this._api.post("/token/".concat(chatId));
            }
        },
        {
            key: "loadChatAvatar",
            value: function loadChatAvatar(data) {
                var form = new FormData();
                form.set("chatId", data.chatId.toString());
                form.set("avatar", data.avatar, data.avatar.name);
                return this._api.put("/avatar", {
                    data: form
                });
            }
        },
        {
            key: "addChatUsers",
            value: function addChatUsers(data) {
                return this._api.put("/users", {
                    data: data
                });
            }
        },
        {
            key: "deleteChatUsers",
            value: function deleteChatUsers(data) {
                return this._api["delete"]("/users", {
                    data: data
                });
            }
        }
    ]);
    return ChatsApi2;
}(_baseApi.BaseAPI);
exports.ChatsApi = ChatsApi1;

},{"../constants/api":"7Odsh","../utils/classes/base-api":"3tSGV","../utils/classes/fetch/fetch":"5mKsU"}],"7Odsh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WEBSOCKET_BASE_URL = exports.RESOURCES_URL = exports.BASE_URL = void 0;
var BASE_URL = "https://ya-praktikum.tech/api/v2/";
exports.BASE_URL = BASE_URL;
var WEBSOCKET_BASE_URL = "wss://ya-praktikum.tech/ws/chats/";
exports.WEBSOCKET_BASE_URL = WEBSOCKET_BASE_URL;
var RESOURCES_URL = BASE_URL + "resources";
exports.RESOURCES_URL = RESOURCES_URL;

},{}],"3tSGV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseAPI = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var BaseAPI = /*#__PURE__*/ function() {
    function BaseAPI1() {
        _classCallCheck(this, BaseAPI1);
    }
    _createClass(BaseAPI1, [
        {
            key: "create",
            value: function create(data) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "request",
            value: function request(data) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "update",
            value: function update(data) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "delete",
            value: function _delete(data) {
                throw new Error('Not implemented');
            }
        }
    ]);
    return BaseAPI1;
}();
exports.BaseAPI = BaseAPI;

},{}],"5mKsU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpClient = exports.HTTP_METHODS = void 0;
var _queryStringify = require("../../helpers/query-stringify");
var _observable = require("../observable");
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var HTTP_METHODS;
exports.HTTP_METHODS = HTTP_METHODS;
(function(HTTP_METHODS1) {
    HTTP_METHODS1["GET"] = "GET";
    HTTP_METHODS1["PUT"] = "PUT";
    HTTP_METHODS1["POST"] = "POST";
    HTTP_METHODS1["DELETE"] = "DELETE";
})(HTTP_METHODS || (exports.HTTP_METHODS = HTTP_METHODS = {
}));
var HttpClient = /*#__PURE__*/ function() {
    function HttpClient1(baseUrl) {
        var _this = this;
        _classCallCheck(this, HttpClient1);
        _defineProperty(this, "get", function(url, options) {
            return _this.request(_this._baseUrl + url + _queryStringify.queryStringify((options === null || options === void 0 ? void 0 : options.data) || {
            }), _objectSpread(_objectSpread({
            }, options), {
            }, {
                method: HTTP_METHODS.GET
            }), options === null || options === void 0 ? void 0 : options.timeout);
        });
        _defineProperty(this, "put", function(url, options) {
            return _this.request(_this._baseUrl + url, _objectSpread(_objectSpread({
            }, options), {
            }, {
                method: HTTP_METHODS.PUT
            }), options === null || options === void 0 ? void 0 : options.timeout);
        });
        _defineProperty(this, "post", function(url, options) {
            return _this.request(_this._baseUrl + url, _objectSpread(_objectSpread({
            }, options), {
            }, {
                method: HTTP_METHODS.POST
            }), options === null || options === void 0 ? void 0 : options.timeout);
        });
        _defineProperty(this, "delete", function(url, options) {
            return _this.request(_this._baseUrl + url, _objectSpread(_objectSpread({
            }, options), {
            }, {
                method: HTTP_METHODS.DELETE
            }), options === null || options === void 0 ? void 0 : options.timeout);
        });
        _defineProperty(this, "_request", function(url, options, timeout) {
            return new Promise(function(resolve, reject) {
                /* eslint-enable */ if (!options.method) throw new Error("Укажите метод HTTP запроса");
                var xhr = new XMLHttpRequest();
                _this._xhr = xhr; // Открываем запрос
                xhr.open(options.method, url);
                xhr.withCredentials = true; // Устанавливаем headers
                if (options.headers) for(var _i = 0, _Object$entries = Object.entries(options.headers); _i < _Object$entries.length; _i++){
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                    xhr.setRequestHeader(key, value.toString());
                }
                if (!(options.data instanceof FormData)) xhr.setRequestHeader("content-type", "application/json");
                xhr.onload = function() {
                    resolve(xhr);
                };
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (options.method === HTTP_METHODS.GET || !options.data) xhr.send();
                else {
                    var body;
                    if (options.data instanceof FormData) body = options.data;
                    else body = JSON.stringify(options.data);
                    xhr.send(body);
                }
                if (timeout !== undefined) setTimeout(function() {
                    if (xhr.readyState !== 4) {
                        reject(xhr);
                        console.warn("Таймаут запроса ", url);
                    }
                }, timeout);
            });
        });
        this._baseUrl = baseUrl || '';
    }
    _createClass(HttpClient1, [
        {
            key: "xhr",
            get: function get() {
                return this._xhr;
            }
        },
        {
            key: "request",
            value: function request(url, options, timeout) {
                var _this2 = this;
                return new _observable.Observable(function(observer) {
                    _this2._request(url, options, timeout).then(function(xhr) {
                        var response = xhr.response;
                        try {
                            response = JSON.parse(response);
                        } catch (err) {
                        }
                        if (xhr.status < 400) observer.onNext(response);
                        else observer.onError(response);
                    })["catch"](function(err) {
                        observer.onError(err);
                    })["finally"](function() {
                        observer.onCompleted();
                    });
                    return {
                        unsubscribe: function unsubscribe() {
                            observer = {
                                onNext: function onNext() {
                                },
                                onError: function onError() {
                                },
                                onCompleted: function onCompleted() {
                                }
                            };
                        }
                    };
                });
            }
        }
    ]);
    return HttpClient1;
}();
exports.HttpClient = HttpClient;

},{"../../helpers/query-stringify":"1tF63","../observable":"4xKFc"}],"1tF63":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryStringify = queryStringify;
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function queryStringify(data) {
    var entriesArray = Object.entries(data);
    if (!entriesArray.length) return "";
    var output = "?";
    var _iterator = _createForOfIteratorHelper(entriesArray.entries()), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var _step$value = _slicedToArray(_step.value, 2), index = _step$value[0], _step$value$ = _slicedToArray(_step$value[1], 2), key = _step$value$[0], value = _step$value$[1];
            output += "".concat(key, "=").concat(value.toString());
            if (index !== entriesArray.length - 1) output += "&";
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    return output;
}

},{}],"4xKFc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = void 0;
var _throttle2 = require("../helpers/throttle");
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Observable = /*#__PURE__*/ function() {
    function Observable1(subcribe) {
        _classCallCheck(this, Observable1);
        if (subcribe) this._subscribe = subcribe;
    }
    _createClass(Observable1, [
        {
            key: "subscribe",
            value: function subscribe(onNext, onError, onCompleted) {
                return this._subscribe({
                    onNext: onNext,
                    onError: onError || function() {
                    },
                    onCompleted: onCompleted || function() {
                    }
                });
            }
        },
        {
            key: "throttle",
            value: function throttle(ms) {
                var _this = this;
                return new Observable1(function(observer) {
                    return _this.subscribe(_throttle2.throttle(function(val) {
                        return observer.onNext(val);
                    }, ms), _throttle2.throttle(function(err) {
                        return observer.onError(err);
                    }, ms), _throttle2.throttle(function() {
                        return observer.onCompleted();
                    }, ms));
                });
            }
        }
    ], [
        {
            key: "of",
            value: function of() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                return new Observable1(function(observer) {
                    args.forEach(function(val) {
                        return observer.onNext(val);
                    });
                    observer.onCompleted();
                    return {
                        unsubscribe: function unsubscribe() {
                            observer = {
                                onNext: function onNext() {
                                },
                                onError: function onError() {
                                },
                                onCompleted: function onCompleted() {
                                }
                            };
                        }
                    };
                });
            }
        },
        {
            key: "from",
            value: function from(iterable) {
                return new Observable1(function(observer) {
                    var _iterator = _createForOfIteratorHelper(iterable), _step;
                    try {
                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                            var item = _step.value;
                            observer.onNext(item);
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally{
                        _iterator.f();
                    }
                    observer.onCompleted();
                    return {
                        unsubscribe: function unsubscribe() {
                            observer = {
                                onNext: function onNext() {
                                },
                                onError: function onError() {
                                },
                                onCompleted: function onCompleted() {
                                }
                            };
                        }
                    };
                });
            }
        },
        {
            key: "fromEvent",
            value: function fromEvent(source, eventName) {
                return new Observable1(function(observer) {
                    var callbackFn = function callbackFn1(e) {
                        return observer.onNext(e);
                    };
                    source.addEventListener(eventName, callbackFn);
                    return {
                        unsubscribe: function unsubscribe() {
                            return source.removeEventListener(eventName, callbackFn);
                        }
                    };
                });
            }
        }
    ]);
    return Observable1;
}();
exports.Observable = Observable;

},{"../helpers/throttle":"4GfKR"}],"4GfKR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttle = throttle;
function throttle(target, ms) {
    var isThrottled = false;
    var savedArgs;
    var savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        target.apply(this, arguments);
        isThrottled = true;
        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}

},{}],"4aKKF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subject = void 0;
var _observable = require("./observable");
var _eventBus = require("./event-bus");
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Subject = /*#__PURE__*/ function() {
    function Subject1() {
        _classCallCheck(this, Subject1);
        this.observers = [];
        this._eventBus = new _eventBus.EventBus();
    }
    _createClass(Subject1, [
        {
            key: "subscribe",
            value: function subscribe(onNext, onError, onCompleted) {
                var _this = this;
                var onErrorFn = onError || function() {
                };
                var onCompletedFn = onCompleted || function() {
                };
                var observer = {
                    onNext: onNext,
                    onError: onErrorFn,
                    onCompleted: onCompletedFn
                };
                this.observers.push(observer);
                return {
                    unsubscribe: function unsubscribe() {
                        _this.observers = _this.observers.filter(function(o) {
                            return o !== observer;
                        });
                    }
                };
            }
        },
        {
            key: "next",
            value: function next(value) {
                var _iterator = _createForOfIteratorHelper(this.observers), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var observer = _step.value;
                        observer.onNext(value);
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                this._eventBus.emit(Subject1.EVENTS.NEXT, value);
            }
        },
        {
            key: "error",
            value: function error(err) {
                var _iterator2 = _createForOfIteratorHelper(this.observers), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var observer = _step2.value;
                        observer.onError(err);
                    }
                } catch (err1) {
                    _iterator2.e(err1);
                } finally{
                    _iterator2.f();
                }
                this._eventBus.emit(Subject1.EVENTS.ERROR, err);
            }
        },
        {
            key: "complete",
            value: function complete() {
                var _iterator3 = _createForOfIteratorHelper(this.observers), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var observer = _step3.value;
                        observer.onCompleted();
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
                this._eventBus.emit(Subject1.EVENTS.COMPLETE);
            }
        },
        {
            key: "asObservable",
            value: function asObservable() {
                var _this2 = this;
                var handler = function handler1(observer) {
                    // Выполнять инструкции при срабатывании функций внутри Subject
                    _this2._eventBus.on(Subject1.EVENTS.NEXT, observer.onNext);
                    _this2._eventBus.on(Subject1.EVENTS.ERROR, observer.onError);
                    _this2._eventBus.on(Subject1.EVENTS.COMPLETE, observer.onCompleted);
                    return {
                        unsubscribe: function unsubscribe() {
                            // Отписываемся от событий
                            _this2._eventBus.off(Subject1.EVENTS.NEXT, observer.onNext);
                            _this2._eventBus.off(Subject1.EVENTS.ERROR, observer.onError);
                            _this2._eventBus.off(Subject1.EVENTS.COMPLETE, observer.onCompleted); // И очищаем колбэки
                            observer = {
                                onNext: function onNext() {
                                },
                                onError: function onError() {
                                },
                                onCompleted: function onCompleted() {
                                }
                            };
                        }
                    };
                };
                var observable = new _observable.Observable(handler);
                return observable;
            }
        }
    ]);
    return Subject1;
}();
exports.Subject = Subject;
_defineProperty(Subject, "EVENTS", {
    NEXT: "NEXT",
    ERROR: "ERROR",
    COMPLETE: "COMPLETE"
});

},{"./observable":"4xKFc","./event-bus":"k9YAx"}],"k9YAx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventBus = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var EventBus = /*#__PURE__*/ function() {
    function EventBus1() {
        _classCallCheck(this, EventBus1);
        this._listeners = new Map();
    }
    _createClass(EventBus1, [
        {
            key: "on",
            value: function on(event, callback) {
                var events = this._listeners.get(event) || [];
                events.push(callback);
                this._listeners.set(event, events);
            }
        },
        {
            key: "off",
            value: function off(event, callback) {
                var events = this._listeners.get(event);
                if (!events) return;
                this._listeners.set(event, events.filter(function(listener) {
                    return listener !== callback;
                }));
            }
        },
        {
            key: "emit",
            value: function emit(event) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                var events = this._listeners.get(event);
                if (!events) return;
                events.forEach(function(listener) {
                    listener.apply(void 0, args);
                });
            }
        }
    ]);
    return EventBus1;
}();
exports.EventBus = EventBus;

},{}],"3QEUB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Inject = Inject;
var _serviceLocator = _interopRequireDefault(require("../../services/core/serviceLocator"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/* eslint-disable */ function Inject(propType) {
    return function(target, propKey) {
        // Переопределяем декорируемое свойство
        var descriptor = {
            get: function get() {
                return _serviceLocator["default"].getService(propType);
            }
        };
        Object.defineProperty(target, propKey, descriptor);
        return descriptor;
    };
} /* eslint-enable */ 

},{"../../services/core/serviceLocator":"dHnRI"}],"kEqZL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getShortChatDate = exports.getDateHoursAndMinutes = void 0;
var getDateHoursAndMinutes = function getDateHoursAndMinutes1(date) {
    var hours = date.getHours();
    var hoursString = hours < 10 ? "0".concat(hours) : hours;
    var minutes = date.getMinutes();
    var minutesString = minutes < 10 ? "0".concat(minutes) : minutes;
    return "".concat(hoursString, ":").concat(minutesString);
};
exports.getDateHoursAndMinutes = getDateHoursAndMinutes;
var getShortChatDate = function getShortChatDate1(date) {
    // Сравниваем с сегодня
    var now = new Date();
    var diff = Math.abs(date.getTime() - now.getTime());
    var day = 86400000;
    var week = day * 7; // Если сегодня, то время
    if (diff < day) return getDateHoursAndMinutes(date);
     // Если до недели, то день недели
    if (diff < week) return "".concat(date.toLocaleString("ru-Ru", {
        weekday: "long"
    }));
     // Иначе дату в формате: "01.01.2021"
    return "".concat(date.toLocaleString("ru-Ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    }));
};
exports.getShortChatDate = getShortChatDate;

},{}],"82JcZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function isPlainObject(value) {
    return _typeof(value) === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]';
}
function isArray(value) {
    return Array.isArray(value);
}
function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
function isEqual(lhs, rhs) {
    if (!lhs || !rhs) return false;
    if (Object.keys(lhs).length !== Object.keys(rhs).length) return false;
    for(var _i = 0, _Object$entries = Object.entries(lhs); _i < _Object$entries.length; _i++){
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
        var rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) continue;
            return false;
        }
        if (value !== rightValue) return false;
    }
    return true;
}
var _default = isEqual;
exports["default"] = _default;

},{}],"Wv0BN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SnackBarService = exports.SNACKBAR_TYPE_CLASS = exports.SNACKBAR_TYPE = void 0;
var _button = require("../../components/button");
var _button2 = require("../../constants/button");
var _observable = require("../../utils/classes/observable");
var _SNACKBAR_TYPE_CLASS;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SNACKBAR_TYPE;
exports.SNACKBAR_TYPE = SNACKBAR_TYPE;
(function(SNACKBAR_TYPE1) {
    SNACKBAR_TYPE1["INFO"] = "INFO";
    SNACKBAR_TYPE1["ERROR"] = "ERROR";
    SNACKBAR_TYPE1["SUCCESS"] = "SUCCESS";
})(SNACKBAR_TYPE || (exports.SNACKBAR_TYPE = SNACKBAR_TYPE = {
}));
var SNACKBAR_TYPE_CLASS = (_SNACKBAR_TYPE_CLASS = {
}, _defineProperty(_SNACKBAR_TYPE_CLASS, SNACKBAR_TYPE.INFO, "snackbar-info"), _defineProperty(_SNACKBAR_TYPE_CLASS, SNACKBAR_TYPE.ERROR, "snackbar-error"), _defineProperty(_SNACKBAR_TYPE_CLASS, SNACKBAR_TYPE.SUCCESS, "snackbar-success"), _SNACKBAR_TYPE_CLASS);
exports.SNACKBAR_TYPE_CLASS = SNACKBAR_TYPE_CLASS;
var SnackBarService = /*#__PURE__*/ function() {
    function SnackBarService1(rootQuery) {
        _classCallCheck(this, SnackBarService1);
        if (SnackBarService1.__instance) return SnackBarService1.__instance;
        this._title = '';
        this._type = SNACKBAR_TYPE.INFO;
        this._duration = 2000;
        this._createElement();
        var root = document.querySelector(rootQuery);
        root.appendChild(this._overlayContainer);
        SnackBarService1.__instance = this;
    }
    _createClass(SnackBarService1, [
        {
            key: "open",
            value: function open(title, type, duration) {
                var _this = this;
                this._title = title;
                this._type = type || this._type;
                this._duration = duration || this._duration;
                this._overlayContainer.appendChild(this._globalOverlayWrapper); // Для того, чтобы transition срабатывал
                setTimeout(function() {
                    _this._resetSnackBar();
                    _this._element.classList.add(SNACKBAR_TYPE_CLASS[_this._type]);
                    _this._elementText.textContent = _this._title;
                    _this._element.classList.add("snackbar-shown");
                }, 5);
                this._timer = setTimeout(function() {
                    return _this.close();
                }, this._duration);
            }
        },
        {
            key: "close",
            value: function close() {
                this._element.classList.remove("snackbar-shown");
                clearTimeout(this._timer);
                this._overlayContainer.removeChild(this._globalOverlayWrapper);
            }
        },
        {
            key: "_createElement",
            value: function _createElement() {
                var _this2 = this;
                this._overlayContainer = document.createElement("div");
                this._overlayContainer.classList.add("overlay-container");
                this._globalOverlayWrapper = document.createElement("div");
                this._globalOverlayWrapper.classList.add("global-overlay");
                this._overlayElementContainer = document.createElement("div");
                this._overlayElementContainer.classList.add("snackbar-overlay-container");
                this._element = document.createElement("div");
                this._element.classList.add("snackbar");
                this._element.classList.add("snackbar-hidden");
                this._elementText = document.createElement("span");
                this._elementButton = new _button.Button({
                    title: 'ОК',
                    theme: _button2.BUTTON_THEMES.PRIMARY,
                    type: _button2.BUTTON_TYPES.LINK
                });
                _observable.Observable.fromEvent(this._elementButton.element, "click").subscribe(function() {
                    _this2.close();
                });
                this._element.appendChild(this._elementText);
                this._element.appendChild(this._elementButton.element);
                this._overlayElementContainer.appendChild(this._element);
                this._globalOverlayWrapper.appendChild(this._overlayElementContainer);
            }
        },
        {
            key: "_resetSnackBar",
            value: function _resetSnackBar() {
                this._element.classList.remove("snackbar-error");
                this._element.classList.remove("snackbar-success");
                this._element.classList.remove("snackbar-info");
            }
        }
    ]);
    return SnackBarService1;
}();
exports.SnackBarService = SnackBarService;

},{"../../components/button":"3uBrB","../../constants/button":"b791F","../../utils/classes/observable":"4xKFc"}],"3uBrB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function get() {
        return _button.Button;
    }
});
var _button = require("./button");

},{"./button":"lQKnV"}],"lQKnV":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = void 0;
require("./button.scss");
var _button2 = _interopRequireDefault(require("./button.tmpl"));
var _button3 = require("../../constants/button");
var _component = require("../../utils/classes/component");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Button1 = /*#__PURE__*/ function(_Component) {
    _inherits(Button2, _Component);
    var _super = _createSuper(Button2);
    function Button2(props) {
        _classCallCheck(this, Button2);
        return _super.call(this, "button", props, _button2["default"]);
    }
    _createClass(Button2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "button",
                    title: props.title || "",
                    type: props.type || _button3.BUTTON_TYPES.BASIC,
                    theme: props.theme || _button3.BUTTON_THEMES.PRIMARY
                });
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                var buttonTypeClass = _button3.BUTTON_TYPE_CLASS[this.props.type || _button3.BUTTON_TYPES.BASIC];
                var buttonThemeClass = _button3.BUTTON_THEME_CLASS[this.props.theme || _button3.BUTTON_THEMES.PRIMARY];
                this.element.classList.add(buttonTypeClass, buttonThemeClass);
            }
        }
    ]);
    return Button2;
}(_component.Component);
exports.Button = Button1;

},{"./button.scss":"b9eGy","./button.tmpl":"ijy1d","../../constants/button":"b791F","../../utils/classes/component":"6snG1"}],"b9eGy":[function() {},{}],"ijy1d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    {{ title }}\n    {{#if iconClass}}\n        <i class=\"{{ iconClass }}\"></i>\n    {{/if}}\n";
exports["default"] = _default;

},{}],"b791F":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BUTTON_TYPE_CLASS = exports.BUTTON_TYPES = exports.BUTTON_THEME_CLASS = exports.BUTTON_THEMES = void 0;
var _BUTTON_TYPE_CLASS, _BUTTON_THEME_CLASS;
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var BUTTON_TYPES;
exports.BUTTON_TYPES = BUTTON_TYPES;
(function(BUTTON_TYPES1) {
    BUTTON_TYPES1["BASIC"] = "BASIC";
    BUTTON_TYPES1["STROKED"] = "STROKED";
    BUTTON_TYPES1["LINK"] = "LINK";
    BUTTON_TYPES1["ROUND"] = "ROUND";
})(BUTTON_TYPES || (exports.BUTTON_TYPES = BUTTON_TYPES = {
}));
var BUTTON_THEMES;
exports.BUTTON_THEMES = BUTTON_THEMES;
(function(BUTTON_THEMES1) {
    BUTTON_THEMES1["PRIMARY"] = "PRIMARY";
    BUTTON_THEMES1["DANGER"] = "DANGER";
    BUTTON_THEMES1["NORMAL"] = "NORMAL";
})(BUTTON_THEMES || (exports.BUTTON_THEMES = BUTTON_THEMES = {
}));
var BUTTON_TYPE_CLASS = (_BUTTON_TYPE_CLASS = {
}, _defineProperty(_BUTTON_TYPE_CLASS, BUTTON_TYPES.BASIC, "button_basic"), _defineProperty(_BUTTON_TYPE_CLASS, BUTTON_TYPES.STROKED, "button_stroked"), _defineProperty(_BUTTON_TYPE_CLASS, BUTTON_TYPES.LINK, "button_link"), _defineProperty(_BUTTON_TYPE_CLASS, BUTTON_TYPES.ROUND, "button_round"), _BUTTON_TYPE_CLASS);
exports.BUTTON_TYPE_CLASS = BUTTON_TYPE_CLASS;
var BUTTON_THEME_CLASS = (_BUTTON_THEME_CLASS = {
}, _defineProperty(_BUTTON_THEME_CLASS, BUTTON_THEMES.PRIMARY, "button_primary"), _defineProperty(_BUTTON_THEME_CLASS, BUTTON_THEMES.DANGER, "button_danger"), _defineProperty(_BUTTON_THEME_CLASS, BUTTON_THEMES.NORMAL, "button_normal"), _BUTTON_THEME_CLASS);
exports.BUTTON_THEME_CLASS = BUTTON_THEME_CLASS;

},{}],"6snG1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Component", {
    enumerable: true,
    get: function get() {
        return _component.Component;
    }
});
var _component = require("./component");

},{"./component":"1ZBx8"}],"1ZBx8":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = void 0;
var Handlebars = _interopRequireWildcard(require("handlebars"));
var _mutationObserver = require("../../../services/core/mutationObserver");
var _inject = require("../../decorators/inject");
var _eventBus = require("../event-bus");
var _dec, _class, _descriptor, _class2, _temp;
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var Component = (_dec = _inject.Inject(_mutationObserver.MutationsObservation), (_class = (_temp = _class2 = /*#__PURE__*/ function() {
    function Component1() {
        var _this = this;
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        var template = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        _classCallCheck(this, Component1);
        _initializerDefineProperty(this, "_mutationsObservation", _descriptor, this);
        _defineProperty(this, "setProps", function(nextProps) {
            try {
                if (!nextProps) return;
                Object.assign(_this.props, nextProps);
                _this._eventBus.emit(Component1.EVENTS.FLOW_CDU);
            } catch (err) {
                console.error(err);
                throw new Error("\n                \u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443.\n                \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u0441\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u0431\u044B\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 this._subscriptions !\n                ");
            }
        });
        this._eventBus = new _eventBus.EventBus();
        this._subscriptions = [];
        this._onMountSubscriptions = [];
        this._meta = {
            tagName: tagName,
            props: props
        };
        this._template = template;
        var defaultProps = this.setDefaultProps(props);
        this.props = this._makePropsProxy(defaultProps);
        this._registerEvents(this._eventBus);
        this._eventBus.emit(Component1.EVENTS.INIT);
    }
    _createClass(Component1, [
        {
            key: "element",
            get: function get() {
                return this._element;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.element;
            }
        },
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread({
                }, props);
            }
        },
        {
            key: "_registerEvents",
            value: function _registerEvents(eventBus) {
                eventBus.on(Component1.EVENTS.INIT, this._init.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_RENDER, this._render.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_CDR, this._componentDidRender.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_CDI, this._componentDidInit.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_CDUM, this._componentDidUnmount.bind(this));
                eventBus.on(Component1.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
            }
        },
        {
            key: "_createResources",
            value: function _createResources() {
                var tagName = this._meta.tagName;
                this._element = this._createDocumentElement(tagName);
            } // Внутренняя инициализация
        },
        {
            key: "_init",
            value: function _init() {
                var _this2 = this;
                this._isDefaultDestroyLogicEnabled = true;
                this._createResources(); // Компонент должен быть удален если его нет в дереве
                if (this._mutationsObservation) this._subscriptions.push(this._mutationsObservation.mutationsObservable.subscribe(function() {
                    if (!document.body.contains(_this2._element) && _this2._isDefaultDestroyLogicEnabled) _this2._eventBus.emit(Component1.EVENTS.FLOW_CDUM);
                }));
                 // Отключаем дефолтное уничтожение при отсутствии в дереве для детей
                var _iterator = _createForOfIteratorHelper(this.props.children || []), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var child = _step.value;
                        child.component.disableDefaultDestroyLogic();
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                this._eventBus.emit(Component1.EVENTS.FLOW_CDI);
            } // Компонент проинициализирован
        },
        {
            key: "_componentDidInit",
            value: function _componentDidInit() {
                this.componentDidInit();
                this._eventBus.emit(Component1.EVENTS.FLOW_CDU);
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
            } // Компонент был обновлен
        },
        {
            key: "_componentDidUpdate",
            value: function _componentDidUpdate() {
                // oldProps: ComponentProps, newProps: ComponentProps
                this.componentDidUpdate(); // oldProps, newProps
                var _iterator2 = _createForOfIteratorHelper(this._onMountSubscriptions), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var sub = _step2.value;
                        sub.unsubscribe();
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                this._onMountSubscriptions = [];
                this._eventBus.emit(Component1.EVENTS.FLOW_RENDER);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                // oldProps: ComponentProps, newProps: ComponentProps
                return true;
            }
        },
        {
            key: "_render",
            value: function _render() {
                var block = this.render();
                this._element.innerHTML = block; // Добавляем класс для элемента компонента (если есть)
                if (this.props.componentClassName) this._element.classList.add(this.props.componentClassName);
                 // Устанавливаем стили
                var styles = Object.entries(this.props.styles || {
                });
                for(var _i = 0, _styles = styles; _i < _styles.length; _i++){
                    var _styles$_i = _slicedToArray(_styles[_i], 2), styleName = _styles$_i[0], value = _styles$_i[1];
                    try {
                        this._element.style[styleName] = value;
                    } catch (err) {
                        throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0441\u0442\u0438\u043B\u044F ".concat(styleName, " \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C ").concat(value));
                    }
                } // Устанавливаем аттрибуты
                var attributes = Object.entries(this.props.attributes || {
                });
                for(var _i2 = 0, _attributes = attributes; _i2 < _attributes.length; _i2++){
                    var _attributes$_i = _slicedToArray(_attributes[_i2], 2), attributeName = _attributes$_i[0], _value = _attributes$_i[1];
                    try {
                        this._element.setAttribute(attributeName, _value);
                    } catch (err) {
                        throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ".concat(attributeName, " \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C ").concat(_value));
                    }
                } // Получаем ссылки на компоненты
                this._getComponentChildrenReferences(); // Заменяем заглушки на дочерние компоненты
                this._replaceComponentChildren(); // Вызываем FLOW_CDR
                this._eventBus.emit(Component1.EVENTS.FLOW_CDR);
            }
        },
        {
            key: "render",
            value: function render() {
                var template = Handlebars.compile(this._template);
                var result = template(this.props);
                return result;
            } // TODO: Разобраться с контекстом при вызове
        },
        {
            key: "_componentDidRender",
            value: function _componentDidRender() {
                this.componentDidRender();
                this._eventBus.emit(Component1.EVENTS.FLOW_CDM);
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
            } // Компонент полностью собран
        },
        {
            key: "_componentDidMount",
            value: function _componentDidMount() {
                this.componentDidMount();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
            } // Компонент исчез из дерева
        },
        {
            key: "_componentDidUnmount",
            value: function _componentDidUnmount() {
                this.componentDidUnmount(); // Удаляем все подписки
                var _iterator3 = _createForOfIteratorHelper(this._subscriptions), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var sub = _step3.value;
                        sub.unsubscribe();
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
                this._subscriptions = [];
                var _iterator4 = _createForOfIteratorHelper(this._onMountSubscriptions), _step4;
                try {
                    for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                        var _sub = _step4.value;
                        _sub.unsubscribe();
                    }
                } catch (err) {
                    _iterator4.e(err);
                } finally{
                    _iterator4.f();
                }
                this._onMountSubscriptions = []; // Уничтожаем подписки детей
                var _iterator5 = _createForOfIteratorHelper(this.props.children || []), _step5;
                try {
                    for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                        var child = _step5.value;
                        child.component.destroy();
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally{
                    _iterator5.f();
                }
            }
        },
        {
            key: "componentDidUnmount",
            value: function componentDidUnmount() {
            } // TODO: Додумать обработку утечек
        },
        {
            key: "_makePropsProxy",
            value: function _makePropsProxy(props) {
                return new Proxy(props, {
                    get: function get(target, prop) {
                        var value = target[prop];
                        return typeof value === "function" ? value.bind(target) : value;
                    },
                    set: function set(target, prop, value) {
                        target[prop] = value;
                        return true;
                    },
                    deleteProperty: function deleteProperty() {
                        throw new Error("Нельзя удалять свойства блока");
                    }
                });
            }
        },
        {
            key: "_createDocumentElement",
            value: function _createDocumentElement(tagName) {
                return document.createElement(tagName);
            } // Получить ссылки на дочерние компоненты внутри
        },
        {
            key: "_getComponentChildrenReferences",
            value: function _getComponentChildrenReferences() {
                var childrenComponents = this._element.querySelectorAll("[data-ref]");
                for(var _i3 = 0, _Array$from = Array.from(childrenComponents); _i3 < _Array$from.length; _i3++){
                    var child = _Array$from[_i3];
                    var childName = child.getAttribute("data-ref");
                    if (childName) this[childName] = child;
                }
            } // Заменяем заглушки на дочерние компоненты и сохраняем ссылку на компонент
        },
        {
            key: "_replaceComponentChildren",
            value: function _replaceComponentChildren() {
                var _this3 = this;
                if (this.props.children === undefined || !this.props.children.length) return;
                var childrenComponents = this._element.querySelectorAll("[data-component]");
                var _loop = function _loop1() {
                    var child = _Array$from2[_i4];
                    var childName = child.getAttribute("data-component");
                    var parentNode = child.parentNode;
                    var componentChild = _this3.props.children.find(function(x) {
                        return x.name === childName;
                    });
                    if (!componentChild) throw new Error("\u041D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E\u0447\u0435\u0440\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C ".concat(childName));
                     // Заменяем заглушку на компонент
                    parentNode.replaceChild(componentChild.component.element, child);
                };
                for(var _i4 = 0, _Array$from2 = Array.from(childrenComponents); _i4 < _Array$from2.length; _i4++)_loop();
                 // Отдельно сохраняем компоненты (даже если они не отрендерелись)
                var _iterator6 = _createForOfIteratorHelper(this.props.children), _step6;
                try {
                    for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                        var componentChild = _step6.value;
                        // Сохраняем ссылку
                        this[componentChild.name] = componentChild.component;
                    }
                } catch (err) {
                    _iterator6.e(err);
                } finally{
                    _iterator6.f();
                }
            }
        },
        {
            key: "disableDefaultDestroyLogic",
            value: function disableDefaultDestroyLogic() {
                this._isDefaultDestroyLogicEnabled = false;
            }
        },
        {
            key: "enableDefaultDestroyLogic",
            value: function enableDefaultDestroyLogic() {
                this._isDefaultDestroyLogicEnabled = true;
            }
        },
        {
            key: "show",
            value: function show() {
                this.getContent().style.display = "flex";
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.getContent().style.display = "none";
            }
        },
        {
            key: "setDisabled",
            value: function setDisabled() {
                this.getContent().setAttribute("disabled", "");
            }
        },
        {
            key: "setEnabled",
            value: function setEnabled() {
                this.getContent().removeAttribute("disabled");
            }
        },
        {
            key: "setVisible",
            value: function setVisible() {
                this.getContent().style.visibility = "visible";
            }
        },
        {
            key: "setInvisible",
            value: function setInvisible() {
                this.getContent().style.visibility = "hidden";
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._componentDidUnmount();
            }
        }
    ]);
    return Component1;
}(), _defineProperty(_class2, "EVENTS", {
    INIT: "init",
    FLOW_CDI: "flow:component-did-init",
    FLOW_CDR: "flow:component-did-render",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDUM: "flow:component-did-unmount",
    FLOW_RENDER: "flow:render"
}), _temp), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_mutationsObservation", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.Component = Component;

},{"handlebars":"7oyOD","../../../services/core/mutationObserver":"98Zps","../../decorators/inject":"3QEUB","../event-bus":"k9YAx"}],"98Zps":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MutationsObservation = void 0;
var _subject = require("../../utils/classes/subject");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var MutationsObservation = function MutationsObservation1() {
    var _this = this;
    _classCallCheck(this, MutationsObservation1);
    this._mutationObserber = new MutationObserver(function(mutationRecords) {
        _this._mutationsSubject.next(mutationRecords);
    });
    this._mutationObserber.observe(document.body, {
        childList: true,
        subtree: true
    });
    this._mutationsSubject = new _subject.Subject();
    this.mutationsObservable = this._mutationsSubject.asObservable();
};
exports.MutationsObservation = MutationsObservation;

},{"../../utils/classes/subject":"4aKKF"}],"klVWu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserService = exports.LOGGED_IN_KEY = void 0;
var _auth = require("../../api/auth.api");
var _users = require("../../api/users.api");
var _api = require("../../constants/api");
var _subject = require("../../utils/classes/subject");
var _inject = require("../../utils/decorators/inject");
var _navigation = require("../core/navigation");
var _router = _interopRequireDefault(require("../core/router"));
var _snackbar = require("../core/snackbar");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var LOGGED_IN_KEY = "authorized";
exports.LOGGED_IN_KEY = LOGGED_IN_KEY;
var UserService = (_dec = _inject.Inject(_snackbar.SnackBarService), (_class = /*#__PURE__*/ function() {
    function UserService1() {
        _classCallCheck(this, UserService1);
        _initializerDefineProperty(this, "_snackBar", _descriptor, this);
        this._user = null;
        this._userSubject = new _subject.Subject();
        this.userObservable = this._userSubject.asObservable();
        this._logInLoadingSubject = new _subject.Subject();
        this.logInLoadingObservable = this._logInLoadingSubject.asObservable();
        this._registerLoadingSubject = new _subject.Subject();
        this.registerLoadingObservable = this._registerLoadingSubject.asObservable();
        this._authApi = new _auth.AuthApi();
        this._usersApi = new _users.UsersApi();
        var isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY));
        if (isLoggedIn) this.getUserData();
        else // На случай если юзер руками удалил переменную в lS
        this.logOut();
    }
    _createClass(UserService1, [
        {
            key: "user",
            get: function get() {
                return this._user;
            }
        },
        {
            key: "logIn",
            value: function logIn(data) {
                var _this = this;
                this._logInLoadingSubject.next(true);
                this._authApi.signin(data).subscribe(function() {
                    _this._logInLoadingSubject.next(false);
                    localStorage.setItem(LOGGED_IN_KEY, "online");
                    _router["default"].go(_navigation.PAGES.MAIN);
                    _this.getUserData();
                }, function(err) {
                    _this._logInLoadingSubject.next(false);
                    _this._snackBar.open("Неверный логин или пароль", _snackbar.SNACKBAR_TYPE.ERROR);
                    console.error(err);
                });
            }
        },
        {
            key: "signUp",
            value: function signUp(data) {
                var _this2 = this;
                this._registerLoadingSubject.next(true);
                this._authApi.signup(data).subscribe(function() {
                    _this2._registerLoadingSubject.next(false);
                    _this2._snackBar.open("Добро пожаловать в Fast messenger!", _snackbar.SNACKBAR_TYPE.SUCCESS);
                    _this2.logIn({
                        login: data.login,
                        password: data.password
                    });
                }, function(err) {
                    _this2._registerLoadingSubject.next(false);
                    _this2._snackBar.open("Ошибка регистрации. Попробуйте еще раз", _snackbar.SNACKBAR_TYPE.ERROR);
                    console.error(err);
                });
            }
        },
        {
            key: "getUserData",
            value: function getUserData() {
                var _this3 = this;
                this._authApi.requestUser().subscribe(function(user) {
                    if (!user.display_name) user.display_name = "".concat(user.first_name, " ").concat(user.second_name);
                    if (user.avatar) user.avatar = _api.RESOURCES_URL + user.avatar;
                    _this3._user = user;
                    _this3._userSubject.next(_this3._user);
                }, function(err) {
                    console.error(err);
                    if (err.reason === "Cookie is not valid") _this3.logOut();
                });
            }
        },
        {
            key: "logOut",
            value: function logOut() {
                var _this4 = this;
                this._authApi.logout().subscribe(function() {
                    localStorage.removeItem(LOGGED_IN_KEY);
                    _this4._user = null;
                    _this4._userSubject.next(_this4._user);
                    _router["default"].go(_navigation.PAGES.LOGIN);
                }, function() {
                    localStorage.removeItem(LOGGED_IN_KEY);
                    _this4._user = null;
                    _this4._userSubject.next(_this4._user);
                    _router["default"].go(_navigation.PAGES.LOGIN);
                });
            }
        },
        {
            key: "updateProfile",
            value: function updateProfile(user) {
                var _this5 = this;
                this._usersApi.update(user).subscribe(function(user1) {
                    if (user1.avatar) user1.avatar = _api.RESOURCES_URL + user1.avatar;
                    _this5._user = user1;
                    _this5._userSubject.next(_this5._user);
                    _this5._snackBar.open("Данные успешно изменены", _snackbar.SNACKBAR_TYPE.SUCCESS);
                }, function(err) {
                    _this5._snackBar.open("Ошибка изменения данных", _snackbar.SNACKBAR_TYPE.ERROR);
                });
            }
        },
        {
            key: "updateProfileAvatar",
            value: function updateProfileAvatar(avatar) {
                var _this6 = this;
                this._usersApi.updateAvatar(avatar).subscribe(function(user) {
                    user.avatar = _api.RESOURCES_URL + user.avatar;
                    _this6._user = user;
                    _this6._userSubject.next(_this6._user);
                    _this6._snackBar.open("Аватар успешно изменен", _snackbar.SNACKBAR_TYPE.SUCCESS);
                }, function(err) {
                    _this6._snackBar.open("Ошибка смены аватара", _snackbar.SNACKBAR_TYPE.ERROR);
                });
            }
        },
        {
            key: "updatePassword",
            value: function updatePassword(oldPassword, newPassword) {
                var _this7 = this;
                this._usersApi.updatePassword(oldPassword, newPassword).subscribe(function() {
                    _this7._snackBar.open("Пароль успешно изменен", _snackbar.SNACKBAR_TYPE.SUCCESS);
                }, function(err) {
                    if (err.reason === "Password is incorrect") _this7._snackBar.open("Пароль неверный", _snackbar.SNACKBAR_TYPE.ERROR);
                    else _this7._snackBar.open("Ошибка смены пароля", _snackbar.SNACKBAR_TYPE.ERROR);
                });
            }
        }
    ]);
    return UserService1;
}(), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_snackBar", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.UserService = UserService;

},{"../../api/auth.api":"kqskx","../../api/users.api":"emC8n","../../constants/api":"7Odsh","../../utils/classes/subject":"4aKKF","../../utils/decorators/inject":"3QEUB","../core/navigation":"9jcV4","../core/router":"hLkRS","../core/snackbar":"Wv0BN"}],"kqskx":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthApi = void 0;
var _api = require("../constants/api");
var _baseApi = require("../utils/classes/base-api");
var _fetch = require("../utils/classes/fetch/fetch");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var AuthApi1 = /*#__PURE__*/ function(_BaseAPI) {
    _inherits(AuthApi2, _BaseAPI);
    var _super = _createSuper(AuthApi2);
    function AuthApi2() {
        var _this;
        _classCallCheck(this, AuthApi2);
        _this = _super.call(this);
        _this._api = new _fetch.HttpClient(_api.BASE_URL + "auth/");
        return _this;
    }
    _createClass(AuthApi2, [
        {
            key: "signup",
            value: function signup(data) {
                return this._api.post("signup", {
                    data: data
                });
            }
        },
        {
            key: "signin",
            value: function signin(data) {
                return this._api.post("signin", {
                    data: data
                });
            }
        },
        {
            key: "requestUser",
            value: function requestUser() {
                return this._api.get("user");
            }
        },
        {
            key: "logout",
            value: function logout() {
                return this._api.post("logout");
            }
        }
    ]);
    return AuthApi2;
}(_baseApi.BaseAPI);
exports.AuthApi = AuthApi1;

},{"../constants/api":"7Odsh","../utils/classes/base-api":"3tSGV","../utils/classes/fetch/fetch":"5mKsU"}],"emC8n":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsersApi = void 0;
var _api = require("../constants/api");
var _baseApi = require("../utils/classes/base-api");
var _fetch = require("../utils/classes/fetch/fetch");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var UsersApi1 = /*#__PURE__*/ function(_BaseAPI) {
    _inherits(UsersApi2, _BaseAPI);
    var _super = _createSuper(UsersApi2);
    function UsersApi2() {
        var _this;
        _classCallCheck(this, UsersApi2);
        _this = _super.call(this);
        _this._api = new _fetch.HttpClient(_api.BASE_URL + "user/");
        return _this;
    }
    _createClass(UsersApi2, [
        {
            key: "request",
            value: function request(userId) {
                return this._api.get("".concat(userId));
            }
        },
        {
            key: "requestUsers",
            value: function requestUsers(login) {
                return this._api.post("search", {
                    data: {
                        login: login
                    }
                });
            }
        },
        {
            key: "update",
            value: function update(data) {
                return this._api.put("profile", {
                    data: data
                });
            }
        },
        {
            key: "updateAvatar",
            value: function updateAvatar(avatar) {
                var form = new FormData();
                form.append("avatar", avatar);
                return this._api.put("profile/avatar", {
                    data: form
                });
            }
        },
        {
            key: "updatePassword",
            value: function updatePassword(oldPassword, newPassword) {
                var data = {
                    oldPassword: oldPassword,
                    newPassword: newPassword
                };
                return this._api.put("password", {
                    data: data
                });
            }
        }
    ]);
    return UsersApi2;
}(_baseApi.BaseAPI);
exports.UsersApi = UsersApi1;

},{"../constants/api":"7Odsh","../utils/classes/base-api":"3tSGV","../utils/classes/fetch/fetch":"5mKsU"}],"9jcV4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAGES = void 0;
var PAGES;
exports.PAGES = PAGES;
(function(PAGES1) {
    PAGES1["REGISTER"] = "/sign-up";
    PAGES1["LOGIN"] = "/";
    PAGES1["MAIN"] = "/messenger";
    PAGES1["PROFILE"] = "/settings";
    PAGES1["ERROR404"] = "/404";
    PAGES1["ERROR500"] = "/500";
    PAGES1["CHATSETTINGS"] = "/chat-settings";
})(PAGES || (exports.PAGES = PAGES = {
}));

},{}],"hLkRS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _router = require("./router");
var _default = new _router.Router("#root");
exports["default"] = _default;

},{"./router":"aBmQm"}],"aBmQm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Router = void 0;
var _route = require("../../../utils/classes/route");
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Router = /*#__PURE__*/ function() {
    function Router1(rootQuery) {
        _classCallCheck(this, Router1);
        if (Router1.__instance) return Router1.__instance;
        this.routes = [];
        this.history = window.history;
        this._rootQuery = rootQuery;
        this._defaultRoute = "/";
        Router1.__instance = this;
    }
    _createClass(Router1, [
        {
            key: "currentRoute",
            get: function get() {
                return this._currentRoute;
            }
        },
        {
            key: "use",
            value: function use(pathname, block, guards) {
                var route = new _route.Route(pathname, block, {
                    rootQuery: this._rootQuery
                }, guards); // Если путь существует, то заменяем
                var pathNames = this.routes.map(function(x) {
                    return x.pathname;
                });
                if (pathNames.includes(pathname)) this.routes = this.routes.filter(function(x) {
                    return x.pathname !== pathname;
                });
                this.routes.push(route);
                return this;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this = this;
                // Реагируем на изменения в адресной строке и вызываем перерисовку
                window.onpopstate = function(event) {
                    var location = event.currentTarget.location.pathname;
                    var _this$_getPathParams = _this._getPathParams(location), path = _this$_getPathParams.path, params = _this$_getPathParams.params;
                    _this._onRoute(path, params);
                };
                var _this$_getPathParams2 = this._getPathParams(window.location.pathname), path = _this$_getPathParams2.path, params = _this$_getPathParams2.params;
                this._onRoute(path, params);
            }
        },
        {
            key: "_onRoute",
            value: function _onRoute(pathname, data) {
                var route = this.getRoute(pathname);
                if (this._currentRoute) this._currentRoute.leave();
                if (route) {
                    this._currentRoute = route;
                    route.render(data);
                } else if (pathname !== "/") this.go(this._defaultRoute);
                else throw Error("Задайте страницу для дефолтного пути");
            }
        },
        {
            key: "go",
            value: function go(fullPathName) {
                var _this$_getPathParams3 = this._getPathParams(fullPathName), path = _this$_getPathParams3.path, params = _this$_getPathParams3.params;
                this.history.pushState({
                    path: path,
                    params: params
                }, "", fullPathName);
                this._onRoute(path, params);
            }
        },
        {
            key: "back",
            value: function back() {
                this.history.back();
            }
        },
        {
            key: "forward",
            value: function forward() {
                this.history.forward();
            }
        },
        {
            key: "getRoute",
            value: function getRoute(pathname) {
                return this.routes.find(function(route) {
                    return route.match(pathname);
                });
            }
        },
        {
            key: "setDefault",
            value: function setDefault(defaulteRoute) {
                this._defaultRoute = defaulteRoute;
            }
        },
        {
            key: "_getPathParams",
            value: function _getPathParams(pathname) {
                var _pathname$split = pathname.split('/'), _pathname$split2 = _slicedToArray(_pathname$split, 3), _ = _pathname$split2[0], pathName = _pathname$split2[1], param = _pathname$split2[2];
                var path = "/".concat(pathName);
                var params = {
                    data: param
                };
                return {
                    path: path,
                    params: params
                };
            }
        }
    ]);
    return Router1;
}();
exports.Router = Router;

},{"../../../utils/classes/route":"aH56l"}],"aH56l":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Route = void 0;
var _isEqual = _interopRequireDefault(require("../helpers/isEqual"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Route = /*#__PURE__*/ function() {
    function Route1(pathname, view, props, guards) {
        _classCallCheck(this, Route1);
        this._pathname = pathname;
        this._blockClass = view;
        this._props = props;
        this._guards = guards || [];
    }
    _createClass(Route1, [
        {
            key: "pathname",
            get: function get() {
                return this._pathname;
            }
        },
        {
            key: "navigate",
            value: function navigate(pathname) {
                if (this.match(pathname)) {
                    this._pathname = pathname;
                    this.render();
                }
            }
        },
        {
            key: "leave",
            value: function leave() {
                if (this._block) {
                    var root = window.document.querySelector(this._props.rootQuery);
                    if (root.contains(this._block.getContent())) root.removeChild(this._block.getContent());
                }
            }
        },
        {
            key: "match",
            value: function match(pathname) {
                return _isEqual["default"]({
                    pathname: pathname
                }, {
                    pathname: this._pathname
                });
            }
        },
        {
            key: "render",
            value: function render(data) {
                // Проверяем Guards перед рендером
                var accessApproved = true;
                var _iterator = _createForOfIteratorHelper(this._guards), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var guard = _step.value;
                        if (!guard.checkAccess()) {
                            accessApproved = false;
                            guard.actionOnNoAccess();
                            break;
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                if (!accessApproved) return;
                var props = {
                    routeData: data
                };
                this._block = new this._blockClass(props);
                this._render(this._props.rootQuery, this._block);
            }
        },
        {
            key: "_render",
            value: function _render(query, block) {
                var root = window.document.querySelector(query);
                root.appendChild(block.getContent());
                return root;
            }
        }
    ]);
    return Route1;
}();
exports.Route = Route;

},{"../helpers/isEqual":"82JcZ"}],"2cIZm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Messenger = void 0;
var _api = require("../../constants/api");
var _messenger = require("../../constants/messenger");
var _observable = require("../../utils/classes/observable");
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Messenger = /*#__PURE__*/ function() {
    function Messenger1(props) {
        _classCallCheck(this, Messenger1);
        var chatId = props.chatId, api = props.api, user = props.user;
        this._chatId = chatId;
        this._api = api;
        this._user = user;
        this._onNewMessage = props.onNewMessage;
        this._onGetOldMessages = props.onGetOldMessages;
        this._subscriptions = [];
        this.connect();
    }
    _createClass(Messenger1, [
        {
            key: "connect",
            value: function connect() {
                var _this = this;
                this._subscriptions.push(this._api.requestToken(this._chatId).subscribe(function(_ref) {
                    var token = _ref.token;
                    if (token) {
                        _this._token = token;
                        _this._socket = new WebSocket(_api.WEBSOCKET_BASE_URL + "".concat(_this._user.id, "/").concat(_this._chatId, "/").concat(token));
                        _this.init();
                    }
                }, function(err) {
                    console.log(err);
                }));
            }
        },
        {
            key: "init",
            value: function init() {
                var _this2 = this;
                this._subscriptions.push(_observable.Observable.fromEvent(this._socket, "open").subscribe(function() {
                    // NOTE: Пингуем сокет раз в секунду
                    _this2._pingTimer = setInterval(function() {
                        _this2.pingChat();
                    }, 5000);
                }));
                this._subscriptions.push(_observable.Observable.fromEvent(this._socket, "close").subscribe(function(event) {
                    event.wasClean;
                    clearInterval(_this2._pingTimer);
                }));
                this._subscriptions.push(_observable.Observable.fromEvent(this._socket, "message").subscribe(function(event) {
                    var data = JSON.parse(event.data);
                    var type;
                    if (Array.isArray(data)) {
                        var _data$;
                        type = (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.type;
                    } else type = data.type;
                    switch(type){
                        case _messenger.MESSENGER_EVENTS.MESSAGE:
                            if (Array.isArray(data)) _this2._onGetOldMessages(data, _this2._chatId);
                            else _this2._onNewMessage(data, _this2._chatId);
                            break;
                        case _messenger.MESSENGER_EVENTS.PONG:
                            break;
                        case _messenger.MESSENGER_EVENTS.USER_CONNECTED:
                            break;
                        case _messenger.MESSENGER_EVENTS.FILE:
                            data = event.data; //
                            break;
                        case _messenger.MESSENGER_EVENTS.STICKER:
                            data = event.data; //
                            break;
                        default:
                            break;
                    }
                }));
                this._subscriptions.push(_observable.Observable.fromEvent(this._socket, "error").subscribe(function(event) {
                    console.log('Ошибка', event.message);
                }));
            }
        },
        {
            key: "sendMessage",
            value: function sendMessage(content) {
                this._send(content, _messenger.MESSENGER_EVENTS.MESSAGE);
            }
        },
        {
            key: "getOldMessages",
            value: function getOldMessages(content) {
                this._send(content, _messenger.MESSENGER_EVENTS.GET_OLD);
            }
        },
        {
            key: "pingChat",
            value: function pingChat() {
                this._send("ping", _messenger.MESSENGER_EVENTS.PING);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _iterator = _createForOfIteratorHelper(this._subscriptions), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var sub = _step.value;
                        sub.unsubscribe();
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                clearInterval(this._pingTimer);
                this._socket.close(1000);
            }
        },
        {
            key: "_send",
            value: function _send(content, type) {
                this._socket.send(JSON.stringify({
                    content: content,
                    type: type
                }));
            }
        }
    ]);
    return Messenger1;
}();
exports.Messenger = Messenger;

},{"../../constants/api":"7Odsh","../../constants/messenger":"5bAeG","../../utils/classes/observable":"4xKFc"}],"5bAeG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MESSENGER_EVENTS = void 0;
var MESSENGER_EVENTS;
exports.MESSENGER_EVENTS = MESSENGER_EVENTS;
(function(MESSENGER_EVENTS1) {
    MESSENGER_EVENTS1["USER_CONNECTED"] = "user connected";
    MESSENGER_EVENTS1["PING"] = "ping";
    MESSENGER_EVENTS1["PONG"] = "pong";
    MESSENGER_EVENTS1["GET_OLD"] = "get old";
    MESSENGER_EVENTS1["MESSAGE"] = "message";
    MESSENGER_EVENTS1["FILE"] = "file";
    MESSENGER_EVENTS1["STICKER"] = "sticker";
})(MESSENGER_EVENTS || (exports.MESSENGER_EVENTS = MESSENGER_EVENTS = {
}));

},{}],"kcN4S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginPage", {
    enumerable: true,
    get: function get() {
        return _login.LoginPage;
    }
});
var _login = require("./login");

},{"./login":"b2nx9"}],"b2nx9":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginPage = void 0;
require("./login.scss");
var _login2 = _interopRequireDefault(require("./login.tmpl"));
var _index = require("../../components/login-register-block/index");
var _index2 = require("../../components/input/index");
var _index3 = require("../../components/header/index");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _component = require("../../utils/classes/component");
var _form = require("../../components/form");
var _observable = require("../../utils/classes/observable");
var _validators = require("../../utils/classes/validators");
var _validators2 = require("../../constants/validators");
var _navigation = require("../../services/core/navigation");
var _inject = require("../../utils/decorators/inject");
var _user = require("../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var LoginPage1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(LoginPage2, _Component);
    var _super = _createSuper(LoginPage2);
    function LoginPage2() {
        var _this;
        _classCallCheck(this, LoginPage2);
        _this = _super.call(this, "div", {
        }, _login2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(LoginPage2, [
        {
            key: "valid",
            get: function get() {
                return this._valid;
            }
        },
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "login",
                    children: [
                        {
                            name: "header",
                            component: new _index3.Header()
                        },
                        {
                            name: "loginBlock",
                            component: new _index.LoginRegisterBlock({
                                title: "Вход",
                                form: new _form.Form({
                                    children: [
                                        {
                                            name: "login",
                                            component: new _index2.Input({
                                                name: "login",
                                                title: "Логин",
                                                type: "text",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR
                                                ]),
                                                isValidationHidden: true
                                            })
                                        },
                                        {
                                            name: "password",
                                            component: new _index2.Input({
                                                name: "password",
                                                title: "Пароль",
                                                type: "password",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR
                                                ]),
                                                isValidationHidden: true
                                            })
                                        }
                                    ],
                                    attributes: {
                                        id: "loginFormId"
                                    }
                                }),
                                mainActionTitle: "Авторизоваться",
                                secondActionTitle: "Ещё не зарегистрированы?"
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._userService.logInLoadingObservable.subscribe(function(isLoading) {
                    if (isLoading) _this2.loginBlock.mainButton.setDisabled();
                    else _this2.loginBlock.mainButton.setEnabled();
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                // Определяем состояние кнопки по валидности формы
                this._setLoginButtonValidity(this.loginBlock.form.isValid);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.loginBlock.mainButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    if (_this3.loginBlock.form.isValid) {
                        var logInData = {
                        };
                        var _iterator = _createForOfIteratorHelper(_this3.loginBlock.form.formElements), _step;
                        try {
                            for(_iterator.s(); !(_step = _iterator.n()).done;){
                                var formElement = _step.value;
                                logInData[formElement.name] = formElement.value;
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally{
                            _iterator.f();
                        }
                        _this3._userService.logIn({
                            login: logInData.login,
                            password: logInData.password
                        });
                    }
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.loginBlock.secondButton.element, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.REGISTER);
                }));
                this._onMountSubscriptions.push(this.loginBlock.form.onValidityChange.subscribe(function(isValid) {
                    return _this3._setLoginButtonValidity(isValid);
                }));
            }
        },
        {
            key: "_setLoginButtonValidity",
            value: function _setLoginButtonValidity(isValid) {
                if (isValid) this.loginBlock.mainButton.setEnabled();
                else this.loginBlock.mainButton.setDisabled();
            }
        }
    ]);
    return LoginPage2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.LoginPage = LoginPage1;

},{"./login.scss":"j3gJq","./login.tmpl":"dwPbl","../../components/login-register-block/index":"jDf0w","../../components/input/index":"ajhmn","../../components/header/index":"1WBLn","../../services/core/router":"hLkRS","../../utils/classes/component":"6snG1","../../components/form":"le7SC","../../utils/classes/observable":"4xKFc","../../utils/classes/validators":"ejgnC","../../constants/validators":"kKSIW","../../services/core/navigation":"9jcV4","../../utils/decorators/inject":"3QEUB","../../services/state/user.service":"klVWu"}],"j3gJq":[function() {},{}],"dwPbl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-component=\"header\"></div>\n    <div data-component=\"loginBlock\"></div>\n";
exports["default"] = _default;

},{}],"jDf0w":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginRegisterBlock", {
    enumerable: true,
    get: function get() {
        return _loginRegisterBlock.LoginRegisterBlock;
    }
});
var _loginRegisterBlock = require("./login-register-block");

},{"./login-register-block":"2fTW2"}],"2fTW2":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginRegisterBlock = void 0;
require("./login-register-block.scss");
var _loginRegisterBlock2 = _interopRequireDefault(require("./login-register-block.tmpl"));
var _index = require("../button/index");
var _button = require("../../constants/button");
var _component = require("../../utils/classes/component");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var LoginRegisterBlock1 = /*#__PURE__*/ function(_Component) {
    _inherits(LoginRegisterBlock2, _Component);
    var _super = _createSuper(LoginRegisterBlock2);
    function LoginRegisterBlock2(props) {
        _classCallCheck(this, LoginRegisterBlock2);
        return _super.call(this, "div", props, _loginRegisterBlock2["default"]);
    }
    _createClass(LoginRegisterBlock2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "login-register-block",
                    children: [
                        {
                            name: "form",
                            component: props.form
                        },
                        {
                            name: "mainButton",
                            component: new _index.Button({
                                title: props.mainActionTitle,
                                attributes: {
                                    type: "submit",
                                    form: props.form.element.id
                                }
                            })
                        },
                        {
                            name: "secondButton",
                            component: new _index.Button({
                                title: props.secondActionTitle,
                                type: _button.BUTTON_TYPES.LINK
                            })
                        }
                    ]
                });
            }
        }
    ]);
    return LoginRegisterBlock2;
}(_component.Component);
exports.LoginRegisterBlock = LoginRegisterBlock1;

},{"./login-register-block.scss":"5pXv9","./login-register-block.tmpl":"gfNd8","../button/index":"3uBrB","../../constants/button":"b791F","../../utils/classes/component":"6snG1"}],"5pXv9":[function() {},{}],"gfNd8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-ref=\"blockContainer\" class=\"login-register-block__container\">\n        <h1 class=\"login-register-block__title\">{{ title }}</h1>\n        <div data-component=\"form\"></div>\n        <div data-ref=\"actionsBlock\" class=\"login-register-block__actions\">\n            <div data-component=\"mainButton\"></div>\n            <div data-component=\"secondButton\"></div>\n        </div>\n    </div>\n";
exports["default"] = _default;

},{}],"ajhmn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Input", {
    enumerable: true,
    get: function get() {
        return _input.Input;
    }
});
var _input = require("./input");

},{"./input":"k9f01"}],"k9f01":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = void 0;
var _component = require("../../utils/classes/component");
var _observable = require("../../utils/classes/observable");
var _subject = require("../../utils/classes/subject");
require("./input.scss");
var _input2 = _interopRequireDefault(require("./input.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Input1 = /*#__PURE__*/ function(_Component) {
    _inherits(Input2, _Component);
    var _super = _createSuper(Input2);
    function Input2(props) {
        _classCallCheck(this, Input2);
        return _super.call(this, "div", props, _input2["default"]);
    }
    _createClass(Input2, [
        {
            key: "isValid",
            get: function get() {
                return this._checkInputValidity();
            }
        },
        {
            key: "name",
            get: function get() {
                return this.input.name;
            }
        },
        {
            key: "value",
            get: function get() {
                return this.input.value;
            },
            set: function set(value) {
                this.input.value = value;
            }
        },
        {
            key: "inputElement",
            get: function get() {
                return this.input;
            }
        },
        {
            key: "onValueChange",
            get: function get() {
                return this._onValueChangeObservable;
            }
        },
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    value: props.value || "",
                    componentClassName: "input-container"
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                this._onValueChange = new _subject.Subject();
                this._onValueChangeObservable = this._onValueChange.asObservable();
                this._subscriptions.push();
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                var _this$props$validator;
                (_this$props$validator = this.props.validators) === null || _this$props$validator === void 0 || _this$props$validator.setValidators(this.input);
                if (this.props.isValidationHidden) this.requiredSymbol.style.display = "none";
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.input, "focus").subscribe(function() {
                    if (!_this._checkInputValidity() && _this.touched && !_this.props.isValidationHidden) _this.showErrors();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.input, "blur").subscribe(function() {
                    if (!_this.props.isValidationHidden) {
                        _this.setMessage(_this._checkInputValidity());
                        _this.hideErrors();
                    }
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.input, "input").subscribe(function() {
                    if (!_this.props.isValidationHidden) {
                        if (!_this.touched) {
                            _this.touched = true;
                            _this.input.classList.add("input-container__input-check-validity");
                        }
                        var isValid = _this._checkInputValidity();
                        _this.setMessage(isValid);
                        if (isValid) _this.hideErrors();
                        else _this.showErrors();
                    }
                    _this._onValueChange.next(_this.input.value);
                }));
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.touched = false;
                return true;
            }
        },
        {
            key: "setMessage",
            value: function setMessage(isValid) {
                this.messageContainer.style.visibility = "visible";
                this.messageContainer.classList.remove("input-container__message-valid");
                this.messageContainer.classList.remove("input-container__message-invalid");
                if (isValid) {
                    this.messageContainer.classList.add("input-container__message-valid");
                    this.messageContainer.textContent = "Все хорошо";
                } else {
                    this.messageContainer.classList.add("input-container__message-invalid");
                    this.messageContainer.textContent = "Поле содержит ошибку";
                }
            }
        },
        {
            key: "setErrors",
            value: function setErrors(errors) {
                this.errorsContainer.textContent = errors;
            }
        },
        {
            key: "showErrors",
            value: function showErrors() {
                this.errorsContainer.style.visibility = "visible";
            }
        },
        {
            key: "hideErrors",
            value: function hideErrors() {
                this.errorsContainer.style.visibility = "hidden";
            }
        },
        {
            key: "_checkInputValidity",
            value: function _checkInputValidity() {
                if (this.props.validators === undefined) return true;
                if (!this.input.checkValidity()) {
                    this.props.validators.checkValidity(this.input);
                    this.setErrors(this.props.validators.getInvalidities());
                    return false;
                }
                return true;
            }
        }
    ]);
    return Input2;
}(_component.Component);
exports.Input = Input1;

},{"../../utils/classes/component":"6snG1","../../utils/classes/observable":"4xKFc","../../utils/classes/subject":"4aKKF","./input.scss":"cF5vR","./input.tmpl":"l9ZuJ"}],"cF5vR":[function() {},{}],"l9ZuJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div class=\"input-container__input-group\">\n        <input \n            data-ref=\"input\"\n            type=\"{{ type }}\" \n            id=\"{{ name }}\" \n            name=\"{{ name }}\" \n            class=\"input-container__input\" \n            placeholder=\"{{ title }}\" \n            value=\"{{ value }}\" \n        />\n        <label for=\"{{ name }}\" class=\"input-container__label\">\n            <span data-ref=\"requiredSymbol\" class=\"input-container__required-label\">*</span>\n            {{title}}\n        </label>\n    </div>\n    <div data-ref=\"errorsContainer\" class=\"input-container__errors-block\"></div>\n    <span data-ref=\"messageContainer\" class=\"input-container__message\"></span>\n";
exports["default"] = _default;

},{}],"1WBLn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Header", {
    enumerable: true,
    get: function get() {
        return _header.Header;
    }
});
var _header = require("./header");

},{"./header":"7azGs"}],"7azGs":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = void 0;
var _component = require("../../utils/classes/component");
require("./header.scss");
var _header2 = _interopRequireDefault(require("./header.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Header1 = /*#__PURE__*/ function(_Component) {
    _inherits(Header2, _Component);
    var _super = _createSuper(Header2);
    function Header2() {
        _classCallCheck(this, Header2);
        return _super.call(this, "header", {
        }, _header2["default"]);
    }
    _createClass(Header2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    title: "Fast messenger",
                    componentClassName: "header",
                    children: []
                });
            }
        }
    ]);
    return Header2;
}(_component.Component);
exports.Header = Header1;

},{"../../utils/classes/component":"6snG1","./header.scss":"aGNZR","./header.tmpl":"axjpQ"}],"aGNZR":[function() {},{}],"axjpQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div class=\"header__items\">\n        <i class=\"header__icon fa fa-paper-plane\"></i>\n        <p class=\"header__title\">{{ title }}</p>\n    </div>\n";
exports["default"] = _default;

},{}],"le7SC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Form", {
    enumerable: true,
    get: function get() {
        return _form.Form;
    }
});
var _form = require("./form");

},{"./form":"lr83n"}],"lr83n":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Form = void 0;
var _component = require("../../utils/classes/component");
var _subject = require("../../utils/classes/subject");
require("./form.scss");
var _form2 = _interopRequireDefault(require("./form.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Form1 = /*#__PURE__*/ function(_Component) {
    _inherits(Form2, _Component);
    var _super = _createSuper(Form2);
    function Form2(props) {
        _classCallCheck(this, Form2);
        return _super.call(this, "form", props, _form2["default"]);
    }
    _createClass(Form2, [
        {
            key: "formElements",
            get: function get() {
                return this.props.children.map(function(x) {
                    return x.component;
                });
            }
        },
        {
            key: "onValidityChange",
            get: function get() {
                return this._onValidityChangeObservable;
            }
        },
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "form"
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                this._onValidityChange = new _subject.Subject();
                this._onValidityChangeObservable = this._onValidityChange.asObservable();
                this.isValid = this._checkValidity();
                this._onValidityChange.next(this.isValid);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                // TODO: Сделать более эффективно
                // NOTE: Абстрагировать логику от события на валидность
                // Навешиваем обработчик валидации
                var _iterator = _createForOfIteratorHelper(this.props.children), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var formChild = _step.value;
                        this._onMountSubscriptions.push(formChild.component.onValueChange.subscribe(function() {
                            var isValid = _this._checkValidity();
                            if (_this.isValid !== isValid) {
                                _this.isValid = isValid;
                                _this._onValidityChange.next(_this.isValid);
                            }
                        }));
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "_checkValidity",
            value: function _checkValidity() {
                var isValid = true;
                var _iterator2 = _createForOfIteratorHelper(this.props.children), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var formChild = _step2.value;
                        if (!formChild.component.isValid) isValid = false;
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                return isValid;
            }
        }
    ]);
    return Form2;
}(_component.Component);
exports.Form = Form1;

},{"../../utils/classes/component":"6snG1","../../utils/classes/subject":"4aKKF","./form.scss":"loitF","./form.tmpl":"fzKED"}],"loitF":[function() {},{}],"fzKED":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    {{#each children}}\n        <div data-component={{ this.name }}></div>\n    {{/each}}\n";
exports["default"] = _default;

},{}],"ejgnC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validators = exports.VALIDITY_TYPES = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var VALIDITY_TYPES;
exports.VALIDITY_TYPES = VALIDITY_TYPES;
(function(VALIDITY_TYPES1) {
    VALIDITY_TYPES1["required"] = "required";
    VALIDITY_TYPES1["pattern"] = "pattern";
    VALIDITY_TYPES1["max"] = "max";
    VALIDITY_TYPES1["min"] = "min";
    VALIDITY_TYPES1["maxLength"] = "maxLength";
    VALIDITY_TYPES1["minLength"] = "minLength";
    VALIDITY_TYPES1["type"] = "type";
})(VALIDITY_TYPES || (exports.VALIDITY_TYPES = VALIDITY_TYPES = {
}));
var Validators = /*#__PURE__*/ function() {
    function Validators1(validators) {
        _classCallCheck(this, Validators1);
        this._checkValidators(validators);
        this._setValidityFields();
        this._validators = validators;
        this._invalidities = [];
    }
    _createClass(Validators1, [
        {
            key: "setValidators",
            value: function setValidators(input) {
                // Тип всегда проверяется
                if (!this._validators.map(function(x) {
                    return x.type;
                }).includes(VALIDITY_TYPES.type)) this._validators.push({
                    type: VALIDITY_TYPES.type,
                    value: input.type
                });
                var _iterator = _createForOfIteratorHelper(this._validators), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var validator = _step.value;
                        input.setAttribute(validator.type, validator.value.toString());
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "checkValidity",
            value: function checkValidity(input) {
                this._invalidities = [];
                var validity = input.validity;
                var _iterator2 = _createForOfIteratorHelper(this._validators), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var validator = _step2.value;
                        var validityField = this._getValidityField(validator.type);
                        if (validity[validityField]) switch(validator.type){
                            case VALIDITY_TYPES.required:
                                this.addInvalidity(validator.error || "Это поле обязательное");
                                break;
                            case VALIDITY_TYPES.max:
                                this.addInvalidity(validator.error || "Значение выше маскимума");
                                break;
                            case VALIDITY_TYPES.min:
                                this.addInvalidity(validator.error || "Значение ниже минимума");
                                break;
                            case VALIDITY_TYPES.maxLength:
                                this.addInvalidity(validator.error || "Превышен маскимум символов");
                                break;
                            case VALIDITY_TYPES.minLength:
                                this.addInvalidity(validator.error || "Символов недостаточно");
                                break;
                            case VALIDITY_TYPES.pattern:
                                this.addInvalidity(validator.error || "Значение не совпадает с шаблоном");
                                break;
                            case VALIDITY_TYPES.type:
                                this.addInvalidity(validator.error || "Значение не соответствует типу поля");
                                break;
                            default:
                                break;
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
            }
        },
        {
            key: "addInvalidity",
            value: function addInvalidity(message) {
                this._invalidities.push("\u2022 ".concat(message));
            }
        },
        {
            key: "getInvalidities",
            value: function getInvalidities() {
                return this._invalidities.join("\n") || "";
            }
        },
        {
            key: "_checkValidators",
            value: function _checkValidators(validators) {
                var _iterator3 = _createForOfIteratorHelper(validators), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var validator = _step3.value;
                        var validityOptions = Object.values(VALIDITY_TYPES);
                        if (!validityOptions.includes(validator.type)) throw new Error("\u041D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u0430 ".concat(validator.type));
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
            }
        },
        {
            key: "_setValidityFields",
            value: function _setValidityFields() {
                this._validityFields = new Map();
                this._validityFields.set(VALIDITY_TYPES.required, "valueMissing");
                this._validityFields.set(VALIDITY_TYPES.pattern, "patternMismatch");
                this._validityFields.set(VALIDITY_TYPES.max, "rangeOverflow");
                this._validityFields.set(VALIDITY_TYPES.min, "rangeUnderflow");
                this._validityFields.set(VALIDITY_TYPES.maxLength, "tooLong");
                this._validityFields.set(VALIDITY_TYPES.minLength, "tooShort");
                this._validityFields.set(VALIDITY_TYPES.type, "typeMismatch");
            }
        },
        {
            key: "_getValidityField",
            value: function _getValidityField(validityType) {
                return this._validityFields.get(validityType) || "";
            }
        }
    ]);
    return Validators1;
}();
exports.Validators = Validators;

},{}],"kKSIW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REQUIRED_VALIDATOR = exports.PHONE_PATTERN_VALIDATOR = exports.PHONE_MIN_LENGTH_VALIDATOR = exports.PHONE_MAX_LENGTH_VALIDATOR = exports.PASSWORD_PATTERN_VALIDATOR = exports.PASSWORD_MIN_LENGTH_VALIDATOR = exports.PASSWORD_MAX_LENGTH_VALIDATOR = exports.NAME_PATTERN_VALIDATOR = exports.LOGIN_PATTERN_VALIDATOR = exports.LOGIN_MIN_LENGTH_VALIDATOR = exports.LOGIN_MAX_LENGTH_VALIDATOR = exports.EMAIL_VALIDATOR = void 0;
var _validators = require("../utils/classes/validators");
var REQUIRED_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.required,
    value: ""
};
exports.REQUIRED_VALIDATOR = REQUIRED_VALIDATOR;
var EMAIL_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.pattern,
    value: "^.+@[A-Za-z]+\\.[A-za-z]+$",
    error: "Введите e-mail корректно"
};
exports.EMAIL_VALIDATOR = EMAIL_VALIDATOR;
var LOGIN_PATTERN_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.pattern,
    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я0-9\_\-]+$",
    error: "Логин должен содержать только символы [A-z][0-9]-_ и начинаться с буквы"
};
exports.LOGIN_PATTERN_VALIDATOR = LOGIN_PATTERN_VALIDATOR;
var LOGIN_MIN_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.minLength,
    value: 3,
    error: "Не менее 3 символов"
};
exports.LOGIN_MIN_LENGTH_VALIDATOR = LOGIN_MIN_LENGTH_VALIDATOR;
var LOGIN_MAX_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.maxLength,
    value: 20,
    error: "Не более 20 символов"
};
exports.LOGIN_MAX_LENGTH_VALIDATOR = LOGIN_MAX_LENGTH_VALIDATOR;
var NAME_PATTERN_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.pattern,
    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$",
    error: "Латиница или кириллица. Допустим дефис. Первая буква заглавная"
};
exports.NAME_PATTERN_VALIDATOR = NAME_PATTERN_VALIDATOR;
var PHONE_MIN_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.minLength,
    value: 10,
    error: "Не менее 10 символов"
};
exports.PHONE_MIN_LENGTH_VALIDATOR = PHONE_MIN_LENGTH_VALIDATOR;
var PHONE_MAX_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.maxLength,
    value: 15,
    error: "Не более 15 символов"
};
exports.PHONE_MAX_LENGTH_VALIDATOR = PHONE_MAX_LENGTH_VALIDATOR;
var PHONE_PATTERN_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.pattern,
    value: "^\\+{0,1}[0-9]+$",
    error: "Только цифры. Может начинаться с +"
};
exports.PHONE_PATTERN_VALIDATOR = PHONE_PATTERN_VALIDATOR;
var PASSWORD_MIN_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.minLength,
    value: 8,
    error: "Не менее 8 символов"
};
exports.PASSWORD_MIN_LENGTH_VALIDATOR = PASSWORD_MIN_LENGTH_VALIDATOR;
var PASSWORD_MAX_LENGTH_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.maxLength,
    value: 40,
    error: "Не более 40 символов"
};
exports.PASSWORD_MAX_LENGTH_VALIDATOR = PASSWORD_MAX_LENGTH_VALIDATOR;
var PASSWORD_PATTERN_VALIDATOR = {
    type: _validators.VALIDITY_TYPES.pattern,
    value: "^(?=.*[\\p{Lu}])(?=.*\\d).*$",
    error: "Обязательно хотя бы одна заглавная буква и цифра"
};
exports.PASSWORD_PATTERN_VALIDATOR = PASSWORD_PATTERN_VALIDATOR;

},{"../utils/classes/validators":"ejgnC"}],"43I0J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RegisterPage", {
    enumerable: true,
    get: function get() {
        return _register.RegisterPage;
    }
});
var _register = require("./register");

},{"./register":"7gcyj"}],"7gcyj":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegisterPage = void 0;
require("./register.scss");
var _register2 = _interopRequireDefault(require("./register.tmpl"));
var _index = require("../../components/login-register-block/index");
var _index2 = require("../../components/input/index");
var _index3 = require("../../components/header/index");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _component = require("../../utils/classes/component");
var _form = require("../../components/form");
var _observable = require("../../utils/classes/observable");
var _validators = require("../../utils/classes/validators");
var _validators2 = require("../../constants/validators");
var _navigation = require("../../services/core/navigation");
var _inject = require("../../utils/decorators/inject");
var _user = require("../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var RegisterPage1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(RegisterPage2, _Component);
    var _super = _createSuper(RegisterPage2);
    // Форма
    function RegisterPage2() {
        var _this;
        _classCallCheck(this, RegisterPage2);
        _this = _super.call(this, "div", {
        }, _register2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(RegisterPage2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "register",
                    children: [
                        {
                            name: "header",
                            component: new _index3.Header()
                        },
                        {
                            name: "registerBlock",
                            component: new _index.LoginRegisterBlock({
                                title: "Регистрация",
                                form: new _form.Form({
                                    children: [
                                        {
                                            name: "email",
                                            component: new _index2.Input({
                                                name: "email",
                                                title: "Почта",
                                                type: "email",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.EMAIL_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "login",
                                            component: new _index2.Input({
                                                name: "login",
                                                title: "Логин",
                                                type: "text",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.LOGIN_PATTERN_VALIDATOR,
                                                    _validators2.LOGIN_MIN_LENGTH_VALIDATOR,
                                                    _validators2.LOGIN_MAX_LENGTH_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "first_name",
                                            component: new _index2.Input({
                                                name: "first_name",
                                                title: "Имя",
                                                type: "text",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.NAME_PATTERN_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "second_name",
                                            component: new _index2.Input({
                                                name: "second_name",
                                                title: "Фамилия",
                                                type: "text",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.NAME_PATTERN_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "phone",
                                            component: new _index2.Input({
                                                name: "phone",
                                                title: "Телефон",
                                                type: "text",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.PHONE_MIN_LENGTH_VALIDATOR,
                                                    _validators2.PHONE_MAX_LENGTH_VALIDATOR,
                                                    _validators2.PHONE_PATTERN_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "password",
                                            component: new _index2.Input({
                                                name: "password",
                                                title: "Пароль",
                                                type: "password",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    _validators2.PASSWORD_MAX_LENGTH_VALIDATOR,
                                                    _validators2.PASSWORD_MIN_LENGTH_VALIDATOR,
                                                    _validators2.PASSWORD_PATTERN_VALIDATOR
                                                ])
                                            })
                                        },
                                        {
                                            name: "password_check",
                                            component: new _index2.Input({
                                                name: "password_check",
                                                title: "Пароль еще раз",
                                                type: "password",
                                                validators: new _validators.Validators([
                                                    _validators2.REQUIRED_VALIDATOR,
                                                    {
                                                        type: _validators.VALIDITY_TYPES.pattern,
                                                        value: "",
                                                        error: "Пароли не совпадают"
                                                    }
                                                ])
                                            })
                                        }
                                    ],
                                    attributes: {
                                        id: "registerFormId"
                                    }
                                }),
                                mainActionTitle: "Зарегистрироваться",
                                secondActionTitle: "Войти"
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._userService.registerLoadingObservable.subscribe(function(isLoading) {
                    if (isLoading) _this2.registerBlock.mainButton.setDisabled();
                    else _this2.registerBlock.mainButton.setEnabled();
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                // Определяем состояние кнопки по валидности формы
                this._setRegisterButtonValidity(this.registerBlock.form.isValid);
                this.passwordInput = this.registerBlock.form.props.children[5].component;
                this.passwordCheckInput = this.registerBlock.form.props.children[6].component;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.registerBlock.mainButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    if (_this3.registerBlock.form.isValid) {
                        var registerData = {
                        };
                        var _iterator = _createForOfIteratorHelper(_this3.registerBlock.form.formElements), _step;
                        try {
                            for(_iterator.s(); !(_step = _iterator.n()).done;){
                                var formElement = _step.value;
                                registerData[formElement.name] = formElement.value;
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally{
                            _iterator.f();
                        }
                        _this3._userService.signUp({
                            first_name: registerData.first_name,
                            second_name: registerData.second_name,
                            login: registerData.login,
                            email: registerData.email,
                            password: registerData.password,
                            phone: registerData.phone
                        });
                    }
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.registerBlock.secondButton.element, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.LOGIN);
                }));
                this._onMountSubscriptions.push(this.registerBlock.form.onValidityChange.subscribe(function(isValid) {
                    _this3._setRegisterButtonValidity(isValid);
                }));
                this._onMountSubscriptions.push(this.passwordInput.onValueChange.subscribe(function(value) {
                    _this3.passwordCheckInput.setProps({
                        validators: new _validators.Validators([
                            _validators2.REQUIRED_VALIDATOR,
                            {
                                type: _validators.VALIDITY_TYPES.pattern,
                                value: value,
                                error: "Пароли не совпадают"
                            }
                        ])
                    });
                }));
            }
        },
        {
            key: "_setRegisterButtonValidity",
            value: function _setRegisterButtonValidity(isValid) {
                if (isValid) this.registerBlock.mainButton.setEnabled();
                else this.registerBlock.mainButton.setDisabled();
            }
        }
    ]);
    return RegisterPage2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.RegisterPage = RegisterPage1;

},{"./register.scss":"1o0Kw","./register.tmpl":"96tBr","../../components/login-register-block/index":"jDf0w","../../components/input/index":"ajhmn","../../components/header/index":"1WBLn","../../services/core/router":"hLkRS","../../utils/classes/component":"6snG1","../../components/form":"le7SC","../../utils/classes/observable":"4xKFc","../../utils/classes/validators":"ejgnC","../../constants/validators":"kKSIW","../../services/core/navigation":"9jcV4","../../utils/decorators/inject":"3QEUB","../../services/state/user.service":"klVWu"}],"1o0Kw":[function() {},{}],"96tBr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-component=\"header\"></div>\n    <div data-component=\"registerBlock\"></div>\n";
exports["default"] = _default;

},{}],"fXai3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MainPage", {
    enumerable: true,
    get: function get() {
        return _main.MainPage;
    }
});
var _main = require("./main");

},{"./main":"b3AhD"}],"b3AhD":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainPage = void 0;
require("./main.scss");
var _main2 = _interopRequireDefault(require("./main.tmpl"));
var _chats = require("./modules/chats/chats");
var _chat = require("./modules/chat/chat");
var _component = require("../../utils/classes/component");
var _createChat = require("./modules/create-chat");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var MainPage1 = /*#__PURE__*/ function(_Component) {
    _inherits(MainPage2, _Component);
    var _super = _createSuper(MainPage2);
    function MainPage2() {
        _classCallCheck(this, MainPage2);
        return _super.call(this, "main", {
        }, _main2["default"]);
    }
    _createClass(MainPage2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _this = this;
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "main",
                    children: [
                        {
                            name: "chats",
                            component: new _chats.Chats({
                                onAddChatButton: function onAddChatButton() {
                                    _this.createChat.show();
                                }
                            })
                        },
                        {
                            name: "chat",
                            component: new _chat.Chat()
                        },
                        {
                            name: "createChat",
                            component: new _createChat.CreateChat({
                            })
                        }
                    ]
                });
            }
        }
    ]);
    return MainPage2;
}(_component.Component);
exports.MainPage = MainPage1;

},{"./main.scss":"6krVT","./main.tmpl":"39oDR","./modules/chats/chats":"5rMMa","./modules/chat/chat":"9NNU1","../../utils/classes/component":"6snG1","./modules/create-chat":"jIEa1"}],"6krVT":[function() {},{}],"39oDR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-component=\"chats\"></div>\n    <div data-component=\"chat\"></div>\n    <div data-component=\"createChat\"></div>\n";
exports["default"] = _default;

},{}],"5rMMa":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chats = void 0;
require("./chats.scss");
var _chats2 = _interopRequireDefault(require("./chats.tmpl"));
var _index = require("../../../../components/button/index");
var _button = require("../../../../constants/button");
var _component = require("../../../../utils/classes/component");
var _router = _interopRequireDefault(require("../../../../services/core/router"));
var _inject = require("../../../../utils/decorators/inject");
var _chats3 = require("../../../../services/state/chats.service");
var _observable = require("../../../../utils/classes/observable");
var _chatPreview = require("./components/chat-preview");
var _navigation = require("../../../../services/core/navigation");
var _searchInput = require("./components/search-input");
var _user = require("../../../../services/state/user.service");
var _dec, _dec2, _class, _descriptor, _descriptor2;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var Chats1 = (_dec = _inject.Inject(_chats3.ChatsService), _dec2 = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(Chats2, _Component);
    var _super = _createSuper(Chats2);
    function Chats2(props) {
        var _this;
        _classCallCheck(this, Chats2);
        _this = _super.call(this, "div", props, _chats2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor2, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(Chats2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var chatsChildComponents = this._getChatsPreviewComponents(this._chatsService.chats);
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chats",
                    chats: chatsChildComponents,
                    children: [
                        {
                            name: "addChatButton",
                            component: new _index.Button({
                                type: _button.BUTTON_TYPES.ROUND,
                                theme: _button.BUTTON_THEMES.PRIMARY,
                                iconClass: "fa fa-plus fa-md"
                            })
                        },
                        {
                            name: "searchInput",
                            component: new _searchInput.SearchInput({
                            })
                        }
                    ].concat(_toConsumableArray(chatsChildComponents))
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._chatsService.chatsObservable.subscribe(function(chats) {
                    _this2.setProps({
                        chats: _this2._getChatsPreviewComponents(chats)
                    });
                }));
                this._subscriptions.push(this._userService.userObservable.subscribe(function(x) {
                    if (x) _this2._chatsService.getChats();
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                if (this.isInputFocused) this.searchInput.input.focus();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.profileLink, "click").subscribe(function(event) {
                    event.preventDefault();
                    _router["default"].go(_navigation.PAGES.PROFILE);
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.addChatButton.element, "click").subscribe(function(event) {
                    event.preventDefault();
                    _this3.props.onAddChatButton();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.searchInput.input, "input").throttle(500).subscribe(function() {
                    var request = {
                        title: _this3.searchInput.input.value
                    };
                    _this3._chatsService.getChats(request);
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.searchInput.input, "focus").subscribe(function() {
                    return _this3.isInputFocused = true;
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.searchInput.input, "blur").subscribe(function() {
                    return _this3.isInputFocused = false;
                }));
            }
        },
        {
            key: "_getChatsPreviewComponents",
            value: function _getChatsPreviewComponents(chats) {
                var _this$props;
                var chatsPreviewComponents = chats.map(function(x, i) {
                    return {
                        name: "chatsPreviewComponent__".concat(i),
                        component: new _chatPreview.ChatPreview(x)
                    };
                }); // Обновляем children компонента для ререндера
                if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.children) {
                    var _this$props$children;
                    this.props.children = this.props.children.filter(function(x) {
                        return !x.name.includes("chatsPreviewComponent");
                    });
                    (_this$props$children = this.props.children).push.apply(_this$props$children, _toConsumableArray(chatsPreviewComponents));
                }
                return chatsPreviewComponents;
            }
        }
    ]);
    return Chats2;
}(_component.Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
})), _class));
exports.Chats = Chats1;

},{"./chats.scss":"39knC","./chats.tmpl":"gbr06","../../../../components/button/index":"3uBrB","../../../../constants/button":"b791F","../../../../utils/classes/component":"6snG1","../../../../services/core/router":"hLkRS","../../../../utils/decorators/inject":"3QEUB","../../../../services/state/chats.service":"9FwjH","../../../../utils/classes/observable":"4xKFc","./components/chat-preview":"ceE1a","../../../../services/core/navigation":"9jcV4","./components/search-input":"eUcEA","../../../../services/state/user.service":"klVWu"}],"39knC":[function() {},{}],"gbr06":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div class=\"chats__controls\">\n        <div class=\"chats__actions\">\n            <div data-component=\"addChatButton\"></div>\n            <a data-ref=\"profileLink\" href=\"\" class=\"chats__profile-link\">\n                \u041F\u0440\u043E\u0444\u0438\u043B\u044C\n                <i class=\"fa fa-chevron-right\"></i>\n            </a>                   \n        </div>\n        <div data-component=\"searchInput\"></div>\n    </div>\n    <ul class=\"chats__chats-list\">\n        {{#each chats}}\n            <div data-component=\"{{ this.name }}\"></div>\n        {{/each}}\n    </ul>\n";
exports["default"] = _default;

},{}],"ceE1a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatPreview", {
    enumerable: true,
    get: function get() {
        return _chatPreview.ChatPreview;
    }
});
var _chatPreview = require("./chat-preview");

},{"./chat-preview":"jQbgQ"}],"jQbgQ":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatPreview = void 0;
var _component = require("../../../../../../utils/classes/component");
var _chatPreview = _interopRequireDefault(require("./chat-preview.tmpl"));
require("./chat-preview.scss");
var _chats = require("../../../../../../services/state/chats.service");
var _observable = require("../../../../../../utils/classes/observable");
var _inject = require("../../../../../../utils/decorators/inject");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ChatPreview1 = (_dec = _inject.Inject(_chats.ChatsService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ChatPreview2, _Component);
    var _super = _createSuper(ChatPreview2);
    function ChatPreview2(props) {
        var _this;
        _classCallCheck(this, ChatPreview2);
        _this = _super.call(this, "li", props, _chatPreview["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ChatPreview2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chats__chat-container"
                });
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                if (this.props.selected) this.element.classList.add("chats__chat-selected");
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.element, "click").subscribe(function() {
                    _this2._chatsService.setChat(_this2.props.id);
                }));
            }
        }
    ]);
    return ChatPreview2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.ChatPreview = ChatPreview1;

},{"../../../../../../utils/classes/component":"6snG1","./chat-preview.tmpl":"b6uIa","./chat-preview.scss":"cpbzI","../../../../../../services/state/chats.service":"9FwjH","../../../../../../utils/classes/observable":"4xKFc","../../../../../../utils/decorators/inject":"3QEUB"}],"b6uIa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div class=\"chats__chat-avatar\">\n        {{#if avatar}}\n            <img class=\"chats__chat-avatar-image\" src=\"{{avatar}}\" crossorigin=\"use-credentials\"/>\n        {{else}}\n            <img class=\"chats__chat-avatar-image\" src=\"static/img/chat_default.png\" crossorigin=\"use-credentials\"/>\n        {{/if}}\n    </div>\n    {{#if last_message}}\n        <div class=\"chats__chat-info-group chats__chat-no-last-message\">\n            <div class=\"chats__chat-message\">\n                <span class=\"chats__chat-name\">{{ title }}</span>\n                <span class=\"chats__chat-last-message-time\">\n                    {{ lastMessageTimeShort }}\n                </span>\n            </div>\n            <div class=\"chats__chat-info\">\n                <span class=\"chats__chat-last-message\">\n                    {{#if lastMessageSentByUser}}\n                        <span class=\"chats__chat-last-message-sent-by-user\">\u0412\u044B:</span>\n                    {{/if}}\n                    {{ last_message.content }}\n                </span>\n                {{#if unread_count}}\n                    <div class=\"chats__chat-unread-count\">\n                        {{ unread_count }}\n                    </div>\n                {{/if}}\n            </div> \n        </div>\n    {{else}}\n        <div class=\"chats__chat-info-group chats__chat-no-last-message\">\n            <div class=\"chats__chat-message\">\n                <span class=\"chats__chat-name\">{{ title }}</span>\n            </div>\n        </div>\n    {{/if}}               \n";
exports["default"] = _default;

},{}],"cpbzI":[function() {},{}],"eUcEA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchInput", {
    enumerable: true,
    get: function get() {
        return _searchInput.SearchInput;
    }
});
var _searchInput = require("./search-input");

},{"./search-input":"jnj8n"}],"jnj8n":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchInput = void 0;
var _component = require("../../../../../../utils/classes/component");
require("./search-input.scss");
var _searchInput2 = _interopRequireDefault(require("./search-input.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var SearchInput1 = /*#__PURE__*/ function(_Component) {
    _inherits(SearchInput2, _Component);
    var _super = _createSuper(SearchInput2);
    function SearchInput2(props) {
        _classCallCheck(this, SearchInput2);
        return _super.call(this, "div", props, _searchInput2["default"]);
    }
    _createClass(SearchInput2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chats__search"
                });
            }
        }
    ]);
    return SearchInput2;
}(_component.Component);
exports.SearchInput = SearchInput1;

},{"../../../../../../utils/classes/component":"6snG1","./search-input.scss":"kyftc","./search-input.tmpl":"lmjhg"}],"kyftc":[function() {},{}],"lmjhg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<input \n    data-ref=\"input\"\n    id=\"chatSearch\"\n    type=\"search\" \n    name=\"chatSearch\" \n    class=\"chats__search__input\" \n    placeholder=\"\u041F\u043E\u0438\u0441\u043A\"\n/>\n<label for=\"chatSearch\" class=\"chats__search__label\">\n    <i class=\"fa fa-search\"></i>\n    \u041F\u043E\u0438\u0441\u043A\n</label>\n";
exports["default"] = _default;

},{}],"9NNU1":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chat = void 0;
var Handlebars = _interopRequireWildcard(require("handlebars"));
require("./chat.scss");
var _chat2 = _interopRequireWildcard(require("./chat.tmpl"));
var _index = require("../../../../components/button/index");
var _button = require("../../../../constants/button");
var _component = require("../../../../utils/classes/component");
var _chats = require("../../../../services/state/chats.service");
var _inject = require("../../../../utils/decorators/inject");
var _form = require("../../../../components/form");
var _messageInput = require("./components/message-Input");
var _observable = require("../../../../utils/classes/observable");
var _validators = require("../../../../utils/classes/validators");
var _validators2 = require("../../../../constants/validators");
var _router = _interopRequireDefault(require("../../../../services/core/router"));
var _navigation = require("../../../../services/core/navigation");
var _message = require("./components/message/message");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
Handlebars.registerPartial("emptyChat", _chat2.emptyChat);
var Chat1 = (_dec = _inject.Inject(_chats.ChatsService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(Chat2, _Component);
    var _super = _createSuper(Chat2);
    function Chat2() {
        var _this;
        _classCallCheck(this, Chat2);
        _this = _super.call(this, "div", {
        }, _chat2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(Chat2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chat",
                    messagesComponents: [],
                    children: [
                        {
                            name: "sendButton",
                            component: new _index.Button({
                                type: _button.BUTTON_TYPES.ROUND,
                                theme: _button.BUTTON_THEMES.PRIMARY,
                                iconClass: "fa fa-arrow-right",
                                attributes: {
                                    form: "sendMessageFormId",
                                    type: "submit"
                                },
                                styles: {
                                    visibility: "hidden"
                                }
                            })
                        },
                        {
                            name: "openChatSettingsButton",
                            component: new _index.Button({
                                type: _button.BUTTON_TYPES.ROUND,
                                theme: _button.BUTTON_THEMES.NORMAL,
                                iconClass: "fa fa-cog fa-lg"
                            })
                        },
                        {
                            name: "sendForm",
                            component: new _form.Form({
                                children: [
                                    {
                                        name: "messageInput",
                                        component: new _messageInput.MessageInput({
                                            validators: new _validators.Validators([
                                                _validators2.REQUIRED_VALIDATOR
                                            ])
                                        })
                                    }
                                ],
                                attributes: {
                                    id: "sendMessageFormId"
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._chatsService.chatObservable.subscribe(function(chat) {
                    _this2.setProps(_objectSpread(_objectSpread({
                    }, chat), {
                    }, {
                        messagesComponents: _this2._getMessagesComponents(chat.messages || [])
                    })); // TODO: Скролить только тогда, когда сообщение было отправело мною
                    // Иначе показывать типо не прочитанное сообщение и скролл вниз
                    if (!_this2.onLoadMoreWasTriggered) _this2.messagesContainer.scrollTop = _this2.messagesContainer.scrollHeight;
                    else _this2.onLoadMoreWasTriggered = false;
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                if (!this.props.id) this.element.classList.add("chat_empty");
                else {
                    this.element.classList.remove("chat_empty"); // Добавляем класс к форме
                    this.sendForm.element.classList.add("chat__input-width"); //
                    if (this.isInputFocused) this.sendForm.formElements[0].inputElement.focus();
                }
            } // TODO: Добавление сообщения со скролом
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                if (this.props.id) {
                    this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.sendButton.element, "click").subscribe(function(e) {
                        e.preventDefault();
                        if (_this3.sendForm.isValid) {
                            var _this3$props$messenge;
                            var messageInput = _this3.sendForm.formElements[0];
                            (_this3$props$messenge = _this3.props.messenger) === null || _this3$props$messenge === void 0 || _this3$props$messenge.sendMessage(messageInput.value);
                            messageInput.value = '';
                            _this3.isInputFocused = true;
                        }
                    }));
                    this._onMountSubscriptions.push(this.sendForm.onValidityChange.subscribe(function(isValid) {
                        return _this3._setSendButtonVisibility(isValid);
                    }));
                    this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.openChatSettingsButton.element, "click").subscribe(function(e) {
                        e.preventDefault();
                        _router["default"].go(_navigation.PAGES.CHATSETTINGS + "/".concat(_this3.props.id));
                    }));
                    this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.sendForm.formElements[0].inputElement, "focus").subscribe(function() {
                        return _this3.isInputFocused = true;
                    }));
                    this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.sendForm.formElements[0].inputElement, "blur").subscribe(function() {
                        return _this3.isInputFocused = false;
                    }));
                    if (this.loadMoreButton) _observable.Observable.fromEvent(this.loadMoreButton, "click").subscribe(function() {
                        _this3.onLoadMoreWasTriggered = true;
                        _this3._chatsService.loadMoreMessages();
                    });
                }
            }
        },
        {
            key: "_setSendButtonVisibility",
            value: function _setSendButtonVisibility(visible) {
                if (visible) this.sendButton.setVisible();
                else this.sendButton.setInvisible();
            }
        },
        {
            key: "_getMessagesComponents",
            value: function _getMessagesComponents(messages) {
                var messagesComponents = messages.map(function(x, i) {
                    return {
                        name: "message__".concat(i),
                        component: new _message.MessageView(x)
                    };
                }); // Обновляем children компонента для ререндера
                if (this.props.children) {
                    var _this$props$children;
                    this.props.children = this.props.children.filter(function(x) {
                        return !x.name.includes("message");
                    });
                    (_this$props$children = this.props.children).push.apply(_this$props$children, _toConsumableArray(messagesComponents));
                }
                return messagesComponents;
            }
        }
    ]);
    return Chat2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.Chat = Chat1;

},{"handlebars":"7oyOD","./chat.scss":"fGfvd","./chat.tmpl":"1ra85","../../../../components/button/index":"3uBrB","../../../../constants/button":"b791F","../../../../utils/classes/component":"6snG1","../../../../services/state/chats.service":"9FwjH","../../../../utils/decorators/inject":"3QEUB","../../../../components/form":"le7SC","./components/message-Input":"CbnFc","../../../../utils/classes/observable":"4xKFc","../../../../utils/classes/validators":"ejgnC","../../../../constants/validators":"kKSIW","../../../../services/core/router":"hLkRS","../../../../services/core/navigation":"9jcV4","./components/message/message":"3kZQJ"}],"fGfvd":[function() {},{}],"1ra85":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.emptyChat = exports["default"] = void 0;
var _default = "\n    {{#if id}}\n        <div data-ref=\"chatHeader\" class=\"chat__header\">\n            <div class=\"chat__header-chat-info\">\n                {{#if avatar}}\n                <img class=\"chat__avatar-image\" src=\"{{avatar}}\" crossorigin=\"use-credentials\"/>\n                {{else}}\n                    <img class=\"chat__avatar-image\" src=\"static/img/chat_default.png\" crossorigin=\"use-credentials\"/>\n                {{/if}}\n                <span class=\"chat__name\">{{ title }}</span>   \n            </div>\n            <div data-component=\"openChatSettingsButton\"></div>             \n        </div>\n        <div data-ref=\"messagesContainer\" class=\"chat__messages\">\n            {{#unless messagesComponents}}\n                <div class=\"chat__messages-no-messages\">\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</div>\n            {{/unless}}\n            {{#if messagesComponents}}\n                {{#unless allMessagesLoaded}}\n                    <div data-ref=\"loadMoreButton\" class=\"chat__messages-load-more\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435</div>\n                {{/unless}}\n                {{#each messagesComponents}}\n                    <div data-component=\"{{ this.name }}\"></div>\n                {{/each}}\n            {{/if}}\n        </div>\n        <div data-ref=\"chatInput\" class=\"chat__input\">\n            <i class=\"chat__attach fa fa-paperclip\"></i>\n            <div data-component=\"sendForm\"></div>\n            <div data-component=\"sendButton\"></div>\n        </div>    \n    {{else}}\n        {{> emptyChat}}\n    {{/if}}\n";
exports["default"] = _default;
var emptyChat = "\n    <span class=\"chat__empty-text\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442 \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</span>\n";
exports.emptyChat = emptyChat;

},{}],"CbnFc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MessageInput", {
    enumerable: true,
    get: function get() {
        return _messageInput.MessageInput;
    }
});
var _messageInput = require("./message-input");

},{"./message-input":"dC1q0"}],"dC1q0":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageInput = void 0;
var _component = require("../../../../../../utils/classes/component");
var _observable = require("../../../../../../utils/classes/observable");
var _subject = require("../../../../../../utils/classes/subject");
require("./message-input.scss");
var _messageInput2 = _interopRequireDefault(require("./message-input.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var MessageInput1 = /*#__PURE__*/ function(_Component) {
    _inherits(MessageInput2, _Component);
    var _super = _createSuper(MessageInput2);
    function MessageInput2(props) {
        _classCallCheck(this, MessageInput2);
        return _super.call(this, "input", props, _messageInput2["default"]);
    }
    _createClass(MessageInput2, [
        {
            key: "name",
            get: function get() {
                return this.element.getAttribute("name") || "chatMessage";
            }
        },
        {
            key: "value",
            get: function get() {
                return this.element.value;
            },
            set: function set(val) {
                this.element.value = val;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this._checkInputValidity(this.element);
            }
        },
        {
            key: "inputElement",
            get: function get() {
                return this.element;
            }
        },
        {
            key: "onValueChange",
            get: function get() {
                return this._onValueChangeObservable;
            }
        },
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chat__input-text"
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                this._onValueChange = new _subject.Subject();
                this._onValueChangeObservable = this._onValueChange.asObservable();
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                // TODO: Fix
                this.element.setAttribute("type", "text");
                this.element.setAttribute("id", "chatMessage");
                this.element.setAttribute("name", "chatMessage");
                this.element.setAttribute("placeholder", "Сообщение");
                this.props.validators.setValidators(this.element);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.element, "input").subscribe(function() {
                    var element = _this.element;
                    _this._checkInputValidity(element);
                    _this._onValueChange.next(element.value);
                }));
            }
        },
        {
            key: "_checkInputValidity",
            value: function _checkInputValidity(element) {
                if (!element.checkValidity()) {
                    this.props.validators.checkValidity(element);
                    return false;
                }
                return true;
            }
        }
    ]);
    return MessageInput2;
}(_component.Component);
exports.MessageInput = MessageInput1;

},{"../../../../../../utils/classes/component":"6snG1","../../../../../../utils/classes/observable":"4xKFc","../../../../../../utils/classes/subject":"4aKKF","./message-input.scss":"9thBw","./message-input.tmpl":"jJgzW"}],"9thBw":[function() {},{}],"jJgzW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n";
exports["default"] = _default;

},{}],"3kZQJ":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageView = void 0;
require("./message.scss");
var _message2 = _interopRequireDefault(require("./message.tmpl"));
var _message3 = require("../../../../../../constants/message");
var _date = require("../../../../../../utils/helpers/date.utils");
var _component = require("../../../../../../utils/classes/component");
var _inject = require("../../../../../../utils/decorators/inject");
var _user = require("../../../../../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var MessageView1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(MessageView2, _Component);
    var _super = _createSuper(MessageView2);
    function MessageView2(props) {
        var _this;
        _classCallCheck(this, MessageView2);
        _this = _super.call(this, "div", props, _message2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(MessageView2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "message",
                    time: _date.getDateHoursAndMinutes(new Date(props.time)) // TODO: Fix
                });
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                this._defineClass();
            }
        },
        {
            key: "_defineClass",
            value: function _defineClass() {
                var _this$_userService$us;
                var messageTypeClass = _message3.MESSAGE_TYPE_CLASS[this.props.type];
                var sentByClass = "";
                if (this.props.user_id === ((_this$_userService$us = this._userService.user) === null || _this$_userService$us === void 0 ? void 0 : _this$_userService$us.id)) sentByClass = "message_sent-by-user";
                else sentByClass = "message_sent-not-by-user";
                this.element.classList.add(messageTypeClass);
                this.element.classList.add(sentByClass);
            }
        }
    ]);
    return MessageView2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.MessageView = MessageView1;

},{"./message.scss":"51qth","./message.tmpl":"adqSW","../../../../../../constants/message":"3gc3b","../../../../../../utils/helpers/date.utils":"kEqZL","../../../../../../utils/classes/component":"6snG1","../../../../../../utils/decorators/inject":"3QEUB","../../../../../../services/state/user.service":"klVWu"}],"51qth":[function() {},{}],"adqSW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    {{#if_eq type 'message'}}\n        <span class=\"message_text-value\">{{ content }}</span>\n    {{/if_eq}}\n    {{#if_eq type 'IMAGE'}}\n        <img class=\"message_image-value\" src=\"{{ value }}\" />\n    {{/if_eq}}\n    <span class=\"message__time\">{{ time }}</span>\n";
exports["default"] = _default;

},{}],"3gc3b":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MESSAGE_TYPE_CLASS = exports.MESSAGE_TYPES = void 0;
var _MESSAGE_TYPE_CLASS;
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var MESSAGE_TYPES;
exports.MESSAGE_TYPES = MESSAGE_TYPES;
(function(MESSAGE_TYPES1) {
    MESSAGE_TYPES1["TEXT"] = "message";
    MESSAGE_TYPES1["IMAGE"] = "IMAGE";
})(MESSAGE_TYPES || (exports.MESSAGE_TYPES = MESSAGE_TYPES = {
}));
var MESSAGE_TYPE_CLASS = (_MESSAGE_TYPE_CLASS = {
}, _defineProperty(_MESSAGE_TYPE_CLASS, MESSAGE_TYPES.TEXT, "message_text"), _defineProperty(_MESSAGE_TYPE_CLASS, MESSAGE_TYPES.IMAGE, "message_image"), _MESSAGE_TYPE_CLASS);
exports.MESSAGE_TYPE_CLASS = MESSAGE_TYPE_CLASS;

},{}],"jIEa1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateChat", {
    enumerable: true,
    get: function get() {
        return _createChat.CreateChat;
    }
});
var _createChat = require("./create-chat");

},{"./create-chat":"bjQtH"}],"bjQtH":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateChat = void 0;
var _component = require("../../../../utils/classes/component");
var _createChat2 = _interopRequireDefault(require("./create-chat.tmpl"));
require("./create-chat.scss");
var _chatName = require("./components/chat-name");
var _addChatUsers = require("../../../../modules/add-chat-users");
var _changeAvatar = require("../../../../modules/change-avatar");
var _observable = require("../../../../utils/classes/observable");
var _inject = require("../../../../utils/decorators/inject");
var _chats = require("../../../../services/state/chats.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var CreateChat1 = (_dec = _inject.Inject(_chats.ChatsService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(CreateChat2, _Component);
    var _super = _createSuper(CreateChat2);
    function CreateChat2(props) {
        var _this;
        _classCallCheck(this, CreateChat2);
        _this = _super.call(this, "div", props, _createChat2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(CreateChat2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _this2 = this;
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "modal-container",
                    children: [
                        {
                            name: "chatName",
                            component: new _chatName.ChatName({
                                onNextButton: function onNextButton() {
                                    _this2.chatName.hide();
                                    _this2.addChatUsers.show();
                                }
                            })
                        },
                        {
                            name: "addChatUsers",
                            component: new _addChatUsers.AddChatUsers({
                                onNextButton: function onNextButton() {
                                    _this2.addChatUsers.hide();
                                    _this2.selectAvatar.show();
                                }
                            })
                        },
                        {
                            name: "selectAvatar",
                            component: new _changeAvatar.ChangeAvatar({
                                onApplyButton: function onApplyButton() {
                                    _this2.selectAvatar.hide();
                                    _this2.hide();
                                    _this2.chatName.show(); // Здесь создаем чат
                                    _this2._createChat(); // После чего стираем все значения
                                    _this2.chatName.titleInput.value = '';
                                    _this2.addChatUsers.userNameInput.value = '';
                                    _this2.addChatUsers.setProps({
                                        selectedUsers: [],
                                        fetchedUsers: []
                                    });
                                    _this2.selectAvatar.file = null;
                                    _this2.selectAvatar.selectFileLabel.textContent = "Загрузите файл";
                                },
                                applyButtonText: "Создать",
                                headerTitle: "Загрузите лого"
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                this.hide();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.element, "click").subscribe(function(e) {
                    var isVisible = _this3.element.style.display === "flex";
                    if (e.target === _this3.element && isVisible) {
                        // Скрываем
                        _this3.hide();
                        _this3.addChatUsers.hide();
                        _this3.selectAvatar.hide(); // При открытии начинаем с названия
                        _this3.chatName.show();
                    }
                }));
            }
        },
        {
            key: "_createChat",
            value: function _createChat() {
                var chatTitle = this.chatName.titleInput.value;
                var chatUsers = this.addChatUsers.props.selectedUsers || [];
                var chatLogoFile = this.selectAvatar.file; // TODO: Вызов функции 
                this._chatsService.createChat(chatTitle, chatUsers, chatLogoFile);
            }
        }
    ]);
    return CreateChat2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.CreateChat = CreateChat1;

},{"../../../../utils/classes/component":"6snG1","./create-chat.tmpl":"9y8dW","./create-chat.scss":"1qFGl","./components/chat-name":"6dK24","../../../../modules/add-chat-users":"91oXT","../../../../modules/change-avatar":"4Qkwh","../../../../utils/classes/observable":"4xKFc","../../../../utils/decorators/inject":"3QEUB","../../../../services/state/chats.service":"9FwjH"}],"9y8dW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-component=\"chatName\"></div>\n    <div data-component=\"addChatUsers\"></div>\n    <div data-component=\"selectAvatar\"></div>\n";
exports["default"] = _default;

},{}],"1qFGl":[function() {},{}],"6dK24":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatName", {
    enumerable: true,
    get: function get() {
        return _chatName.ChatName;
    }
});
var _chatName = require("./chat-name");

},{"./chat-name":"fKQNc"}],"fKQNc":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatName = void 0;
var _component = require("../../../../../../utils/classes/component");
var _chatName = _interopRequireDefault(require("./chat-name.tmpl"));
require("./chat-name.scss");
var _input = require("../../../../../../components/input");
var _validators = require("../../../../../../constants/validators");
var _validators2 = require("../../../../../../utils/classes/validators");
var _button = require("../../../../../../components/button");
var _observable = require("../../../../../../utils/classes/observable");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var ChatName1 = /*#__PURE__*/ function(_Component) {
    _inherits(ChatName2, _Component);
    var _super = _createSuper(ChatName2);
    function ChatName2(props) {
        _classCallCheck(this, ChatName2);
        return _super.call(this, "div", props, _chatName["default"]);
    }
    _createClass(ChatName2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "modal-content",
                    children: [
                        {
                            name: "titleInput",
                            component: new _input.Input({
                                name: "chatTitle",
                                title: "Название",
                                type: "text",
                                validators: new _validators2.Validators([
                                    _validators.REQUIRED_VALIDATOR
                                ]),
                                isValidationHidden: true,
                                styles: {
                                    width: "100%"
                                }
                            })
                        },
                        {
                            name: "nextButton",
                            component: new _button.Button({
                                title: "Далее",
                                styles: {
                                    width: "100%"
                                },
                                attributes: {
                                    disabled: ''
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.nextButton.element, 'click').subscribe(function(e) {
                    e.preventDefault();
                    _this.props.onNextButton();
                }));
                this._onMountSubscriptions.push(this.titleInput.onValueChange.subscribe(function() {
                    var isValid = _this.titleInput.isValid;
                    if (isValid) _this.nextButton.setEnabled();
                    else _this.nextButton.setDisabled();
                }));
            }
        }
    ]);
    return ChatName2;
}(_component.Component);
exports.ChatName = ChatName1;

},{"../../../../../../utils/classes/component":"6snG1","./chat-name.tmpl":"dUOLR","./chat-name.scss":"466Bg","../../../../../../components/input":"ajhmn","../../../../../../constants/validators":"kKSIW","../../../../../../utils/classes/validators":"ejgnC","../../../../../../components/button":"3uBrB","../../../../../../utils/classes/observable":"4xKFc"}],"dUOLR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <h3>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0447\u0430\u0442</h3>\n    <div data-component=\"titleInput\"></div>\n    <div data-component=\"nextButton\"></div>\n";
exports["default"] = _default;

},{}],"466Bg":[function() {},{}],"91oXT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddChatUsers", {
    enumerable: true,
    get: function get() {
        return _addChatUsers.AddChatUsers;
    }
});
var _addChatUsers = require("./add-chat-users");

},{"./add-chat-users":"8oVr6"}],"8oVr6":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddChatUsers = void 0;
require("./add-chat-users.scss");
var _addChatUsers2 = _interopRequireDefault(require("./add-chat-users.tmpl"));
var _index = require("../../components/button/index");
var _component = require("../../utils/classes/component");
var _input = require("../../components/input");
var _usersList = require("./components/users-list");
var _inject = require("../../utils/decorators/inject");
var _observable = require("../../utils/classes/observable");
var _users = require("./services/users.service");
var _isEqual = _interopRequireDefault(require("../../utils/helpers/isEqual"));
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var AddChatUsers1 = (_dec = _inject.Inject(_users.AddChatUsersService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(AddChatUsers2, _Component);
    var _super = _createSuper(AddChatUsers2);
    function AddChatUsers2(props) {
        var _this;
        _classCallCheck(this, AddChatUsers2);
        _this = _super.call(this, "div", props, _addChatUsers2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(AddChatUsers2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: props.isModal ? "modal-container" : "modal-content",
                    selectedUsers: [],
                    fetchedUsers: [],
                    children: [
                        {
                            name: "userNameInput",
                            component: new _input.Input({
                                name: "userName",
                                title: "Логин",
                                type: "text",
                                styles: {
                                    width: "100%"
                                },
                                isValidationHidden: true
                            })
                        },
                        {
                            name: "nextButton",
                            component: new _index.Button({
                                title: props.nextButtonTitle || "Далее",
                                styles: {
                                    width: "100%"
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this.hide();
                if (this.props.isModal) this._subscriptions.push(_observable.Observable.fromEvent(this.element, "click").subscribe(function(e) {
                    var target = e.target;
                    if (target.classList.contains(_this2.props.componentClassName)) _this2.hide();
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                this.userNameInput.input.focus();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(this.userNameInput.onValueChange.throttle(500).subscribe(function(value) {
                    _this3._userService.getUsersByLogin(value);
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.nextButton.element, 'click').subscribe(function(e) {
                    e.preventDefault();
                    _this3.props.onNextButton();
                }));
                this._onMountSubscriptions.push(this._userService.usersObservable.subscribe(function(users) {
                    return _this3._updateFetchedUsers(users);
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.seclectedUsersContainer, "click").subscribe(function(e) {
                    var target = e.target;
                    var cancelButton = target.closest(".add-chat__selected-user-cancel-icon"); // Тогда удаляем из списка
                    if (cancelButton) {
                        var _this3$props$selected, _this3$props$fetchedU;
                        var selectedUser = target.closest(".add-chat__selected-user-container");
                        var login = selectedUser.getElementsByTagName("span")[0].textContent;
                        var selectedUsers = (_this3$props$selected = _this3.props.selectedUsers) === null || _this3$props$selected === void 0 ? void 0 : _this3$props$selected.filter(function(x) {
                            return x.login !== login;
                        });
                        (_this3$props$fetchedU = _this3.props.fetchedUsers) === null || _this3$props$fetchedU === void 0 || _this3$props$fetchedU.map(function(x) {
                            if (x.component.props.user.login === login) x.component.setProps({
                                disabled: false
                            });
                            return x;
                        });
                        _this3.setProps({
                            selectedUsers: selectedUsers
                        });
                    }
                }));
            }
        },
        {
            key: "_updateFetchedUsers",
            value: function _updateFetchedUsers(users) {
                var usersList = this._getChildComponentsFromUserList(users);
                this.setProps({
                    fetchedUsers: usersList
                });
            }
        },
        {
            key: "_getChildComponentsFromUserList",
            value: function _getChildComponentsFromUserList(users) {
                var _this4 = this;
                var usersList = users.map(function(u, i) {
                    var _this4$props$selected;
                    var disabled = false; // Если юзер уже есть в списке выбранных, то дисейблим его
                    var selectedUsersLength = (_this4$props$selected = _this4.props.selectedUsers) === null || _this4$props$selected === void 0 ? void 0 : _this4$props$selected.length;
                    if (selectedUsersLength) {
                        var selectedUsers = _this4.props.selectedUsers;
                        if (selectedUsersLength === 1) disabled = _isEqual["default"](u, selectedUsers[0]);
                        else disabled = Boolean(selectedUsers.reduce(function(acc, val, i1) {
                            if (i1 > 1) return acc || _isEqual["default"](u, val);
                            else return _isEqual["default"](u, acc) || _isEqual["default"](u, val);
                        }));
                    }
                    return {
                        name: "usersListItem__".concat(i),
                        component: new _usersList.UsersListItem({
                            user: u,
                            onAddButtonFunc: function onAddButtonFunc() {
                                _this4.setProps({
                                    selectedUsers: [].concat(_toConsumableArray(_this4.props.selectedUsers || []), [
                                        u
                                    ])
                                });
                            },
                            disabled: disabled
                        })
                    };
                }); // Обновляем children компонента для ререндера
                if (this.props.children) {
                    var _this$props$children;
                    this.props.children = this.props.children.filter(function(x) {
                        return !x.name.includes("usersListItem");
                    });
                    (_this$props$children = this.props.children).push.apply(_this$props$children, _toConsumableArray(usersList));
                }
                return usersList;
            }
        }
    ]);
    return AddChatUsers2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.AddChatUsers = AddChatUsers1;

},{"./add-chat-users.scss":"khVle","./add-chat-users.tmpl":"ezY84","../../components/button/index":"3uBrB","../../utils/classes/component":"6snG1","../../components/input":"ajhmn","./components/users-list":"1SJHl","../../utils/decorators/inject":"3QEUB","../../utils/classes/observable":"4xKFc","./services/users.service":"5rXDj","../../utils/helpers/isEqual":"82JcZ"}],"khVle":[function() {},{}],"ezY84":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var addChatUsersTemplate = "\n<h3>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</h3>\n<div data-ref=\"seclectedUsersContainer\" class=\"add-chat__selected-users\">\n    {{#each selectedUsers}}\n        <div class=\"add-chat__selected-user-container\">\n            <div class=\"add-chat__selected-user\">\n                <span>{{this.login}}</span>\n                <div class=\"add-chat__selected-user-cancel-icon\">\n                    <i class=\"fa fa-times\"></i>\n                </div>\n            </div>\n        </div>\n    {{/each}}\n</div>\n<div data-component=\"userNameInput\"></div>\n<div class=\"add-chat__users-list\">\n    {{#each fetchedUsers}}\n        <div data-component=\"{{ this.name }}\"></div>\n    {{/each}}\n</div>\n<div data-component=\"nextButton\"></div>\n";
var _default = "\n{{#if isModal}}\n    <div class=\"modal-content\">\n        ".concat(addChatUsersTemplate, "\n    </div>\n{{else}}\n    ").concat(addChatUsersTemplate, "\n{{/if}}\n");
exports["default"] = _default;

},{}],"1SJHl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersListItem", {
    enumerable: true,
    get: function get() {
        return _usersListItem.UsersListItem;
    }
});
var _usersListItem = require("./users-list-item");

},{"./users-list-item":"hCPaV"}],"hCPaV":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsersListItem = void 0;
var _button = require("../../../../components/button");
var _button2 = require("../../../../constants/button");
var _component = require("../../../../utils/classes/component");
var _observable = require("../../../../utils/classes/observable");
require("./users-list-item.scss");
var _usersListItem2 = _interopRequireDefault(require("./users-list-item.tmpl"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var UsersListItem1 = /*#__PURE__*/ function(_Component) {
    _inherits(UsersListItem2, _Component);
    var _super = _createSuper(UsersListItem2);
    function UsersListItem2(props) {
        _classCallCheck(this, UsersListItem2);
        return _super.call(this, "div", props, _usersListItem2["default"]);
    }
    _createClass(UsersListItem2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "add-chat__fetched-user",
                    children: [
                        {
                            name: "addUserButton",
                            component: new _button.Button({
                                type: _button2.BUTTON_TYPES.ROUND,
                                iconClass: "fa fa-plus"
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                if (this.props.disabled) this.addUserButton.setDisabled();
                else this.addUserButton.setEnabled();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.addUserButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    _this.props.onAddButtonFunc();
                    _this.addUserButton.setDisabled();
                }));
            }
        }
    ]);
    return UsersListItem2;
}(_component.Component);
exports.UsersListItem = UsersListItem1;

},{"../../../../components/button":"3uBrB","../../../../constants/button":"b791F","../../../../utils/classes/component":"6snG1","../../../../utils/classes/observable":"4xKFc","./users-list-item.scss":"kFcCi","./users-list-item.tmpl":"1jxi2"}],"kFcCi":[function() {},{}],"1jxi2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<span class=\"add-chat__fetched-user-login\">{{user.login}}</span>\n<div data-component=\"addUserButton\"></div>\n";
exports["default"] = _default;

},{}],"5rXDj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddChatUsersService = void 0;
var _users = require("../../../api/users.api");
var _subject = require("../../../utils/classes/subject");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var AddChatUsersService = /*#__PURE__*/ function() {
    function AddChatUsersService1() {
        _classCallCheck(this, AddChatUsersService1);
        this._usersApi = new _users.UsersApi();
        this._users = null;
        this._usersSubject = new _subject.Subject();
        this.usersObservable = this._usersSubject.asObservable();
    }
    _createClass(AddChatUsersService1, [
        {
            key: "getUsersByLogin",
            value: function getUsersByLogin(login) {
                var _this = this;
                this._usersApi.requestUsers(login).subscribe(function(users) {
                    _this._users = users;
                    _this._usersSubject.next(_this._users);
                });
            }
        }
    ]);
    return AddChatUsersService1;
}();
exports.AddChatUsersService = AddChatUsersService;

},{"../../../api/users.api":"emC8n","../../../utils/classes/subject":"4aKKF"}],"4Qkwh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChangeAvatar", {
    enumerable: true,
    get: function get() {
        return _changeAvatar.ChangeAvatar;
    }
});
var _changeAvatar = require("./change-avatar");

},{"./change-avatar":"s4kMF"}],"s4kMF":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChangeAvatar = void 0;
require("./change-avatar.scss");
var _changeAvatar2 = _interopRequireDefault(require("./change-avatar.tmpl"));
var _index = require("../../components/button/index");
var _component = require("../../utils/classes/component");
var _observable = require("../../utils/classes/observable");
var _inject = require("../../utils/decorators/inject");
var _snackbar = require("../../services/core/snackbar");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ACCEPT_TYPE = "image/";
var ChangeAvatar1 = (_dec = _inject.Inject(_snackbar.SnackBarService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ChangeAvatar2, _Component);
    var _super = _createSuper(ChangeAvatar2);
    function ChangeAvatar2(props) {
        var _this;
        _classCallCheck(this, ChangeAvatar2);
        _this = _super.call(this, "div", props, _changeAvatar2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_snackBar", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ChangeAvatar2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: props.isModal ? "modal-container" : "",
                    children: [
                        {
                            name: "applyButton",
                            component: new _index.Button({
                                title: props.applyButtonText,
                                styles: {
                                    width: "100%"
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this.hide();
                if (this.props.isModal) this._subscriptions.push(_observable.Observable.fromEvent(this.element, "click").subscribe(function(e) {
                    var target = e.target;
                    if (target.classList.contains(_this2.props.componentClassName)) _this2.hide();
                }));
            }
        },
        {
            key: "componentDidRender",
            value: function componentDidRender() {
                if (this.props.isFileRequired) this.applyButton.setDisabled();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.applyButton.element, "click").subscribe(function() {
                    _this3.props.onApplyButton(_this3.file);
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.fileInput, "input").subscribe(function() {
                    var _this3$fileInput$file;
                    var file = (_this3$fileInput$file = _this3.fileInput.files) === null || _this3$fileInput$file === void 0 ? void 0 : _this3$fileInput$file.item(0);
                    if (file.type.startsWith(ACCEPT_TYPE)) {
                        _this3.selectFileLabel.textContent = file.name;
                        _this3.file = file;
                        if (_this3.props.isFileRequired) _this3.applyButton.setEnabled();
                    } else {
                        _this3.selectFileLabel.textContent = "Выберите файл";
                        _this3.fileInput.files = null;
                        _this3.file = null;
                        _this3._snackBar.open("Выберите изображение", _snackbar.SNACKBAR_TYPE.ERROR);
                        if (_this3.props.isFileRequired) _this3.applyButton.setDisabled();
                    }
                }));
            }
        }
    ]);
    return ChangeAvatar2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_snackBar", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.ChangeAvatar = ChangeAvatar1;

},{"./change-avatar.scss":"fet9f","./change-avatar.tmpl":"4q1GK","../../components/button/index":"3uBrB","../../utils/classes/component":"6snG1","../../utils/classes/observable":"4xKFc","../../utils/decorators/inject":"3QEUB","../../services/core/snackbar":"Wv0BN"}],"fet9f":[function() {},{}],"4q1GK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-ref=\"block\" class=\"modal-content\">\n        <h3>{{ headerTitle }}</h3>\n        <label data-ref=\"selectFileLabel\" for=\"avatar\" class=\"change-avatar__file-upload-label\">\n            \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\n        </label>\n        <input data-ref=\"fileInput\" id=\"avatar\" name=\"avatar\" type=\"file\" accept=\"image/*\" />   \n        <div data-component=\"applyButton\"></div>             \n    </div>\n";
exports["default"] = _default;

},{}],"hTFhv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProfilePage", {
    enumerable: true,
    get: function get() {
        return _profile.ProfilePage;
    }
});
var _profile = require("./profile");

},{"./profile":"kuBnB"}],"kuBnB":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfilePage = void 0;
require("./profile.scss");
var _profile2 = _interopRequireDefault(require("./profile.tmpl"));
var _index = require("../../components/button/index");
var _button = require("../../constants/button");
var _changeAvatar = require("../../modules/change-avatar");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _profile3 = require("../../mock/profile");
var _component = require("../../utils/classes/component");
var _inject = require("../../utils/decorators/inject");
var _observable = require("../../utils/classes/observable");
var _navigation = require("../../services/core/navigation");
var _profileView = require("./components/profile-view");
var _profileEdit = require("./components/profile-edit");
var _passwordEdit = require("./components/password-edit");
var _user = require("../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ProfilePage1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ProfilePage2, _Component);
    var _super = _createSuper(ProfilePage2);
    // Кнопки
    // Вернуться в профиль
    // Модуль смены аватара
    function ProfilePage2() {
        var _this;
        _classCallCheck(this, ProfilePage2);
        _this = _super.call(this, "div", {
        }, _profile2["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ProfilePage2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _this2 = this;
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    profileIsEditable: false,
                    changePasswordFormIsShown: false,
                    componentClassName: "settings",
                    user: this._userService.user,
                    children: [
                        {
                            name: "сhangeAvatar",
                            component: new _changeAvatar.ChangeAvatar({
                                onApplyButton: function onApplyButton(file) {
                                    // Обновить аватар
                                    _this2._userService.updateProfileAvatar(file);
                                    _this2.сhangeAvatar.hide();
                                },
                                applyButtonText: "Загрузить",
                                headerTitle: "Выберите аватар",
                                isModal: true,
                                isFileRequired: true
                            })
                        },
                        {
                            name: "returnButton",
                            component: new _index.Button({
                                type: _button.BUTTON_TYPES.ROUND,
                                theme: _button.BUTTON_THEMES.PRIMARY,
                                iconClass: "fa fa-arrow-left"
                            })
                        },
                        {
                            name: "profileView",
                            component: new _profileView.ProfileView({
                                user: this._userService.user,
                                profileData: _profile3.PROFILE_DATA,
                                onEditDataButton: function onEditDataButton() {
                                    // Переходим в режим редактирования
                                    _this2.setProps({
                                        changePasswordFormIsShown: false,
                                        profileIsEditable: true
                                    });
                                },
                                onChangePasswordButton: function onChangePasswordButton() {
                                    _this2.setProps({
                                        changePasswordFormIsShown: true,
                                        profileIsEditable: true
                                    });
                                },
                                onAvatar: function onAvatar() {
                                    _this2.сhangeAvatar.show();
                                }
                            })
                        },
                        {
                            name: "profileEdit",
                            component: new _profileEdit.ProfileEdit({
                                user: this._userService.user,
                                onSaveButton: function onSaveButton() {
                                    // Переходим в режим просмотра
                                    _this2.setProps({
                                        changePasswordFormIsShown: false,
                                        profileIsEditable: false
                                    });
                                }
                            })
                        },
                        {
                            name: "passwordEdit",
                            component: new _passwordEdit.PasswordEdit({
                                onSaveButton: function onSaveButton() {
                                    // Переходим в режим просмотра
                                    _this2.setProps({
                                        changePasswordFormIsShown: false,
                                        profileIsEditable: false
                                    });
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                // Перейти к чатам
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.profileReturn, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.MAIN);
                }));
            }
        }
    ]);
    return ProfilePage2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.ProfilePage = ProfilePage1;

},{"./profile.scss":"3HHO2","./profile.tmpl":"6JIVY","../../components/button/index":"3uBrB","../../constants/button":"b791F","../../modules/change-avatar":"4Qkwh","../../services/core/router":"hLkRS","../../mock/profile":"feAtt","../../utils/classes/component":"6snG1","../../utils/decorators/inject":"3QEUB","../../utils/classes/observable":"4xKFc","../../services/core/navigation":"9jcV4","./components/profile-view":"daGc0","./components/profile-edit":"5nVyB","./components/password-edit":"ikaGD","../../services/state/user.service":"klVWu"}],"3HHO2":[function() {},{}],"6JIVY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <div data-ref=\"profileReturn\" class=\"settings__return\">\n        <div data-component=\"returnButton\"></div>\n    </div>\n    {{#if profileIsEditable}}\n        {{#if changePasswordFormIsShown}}\n            <div data-component=\"passwordEdit\"></div>\n        {{else}}\n            <div data-component=\"profileEdit\"></div>\n        {{/if}}\n    {{else}}\n        <div data-component=\"profileView\"></div>\n    {{/if}}\n    <div data-component=\"\u0441hangeAvatar\"></div>\n";
exports["default"] = _default;

},{}],"feAtt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PROFILE_DATA = void 0;
var PROFILE_DATA = [
    {
        name: "email",
        type: "email",
        title: "Почта",
        value: "pochta@yandex.ru"
    },
    {
        name: "login",
        type: "text",
        title: "Логин",
        value: "ivanovivan"
    },
    {
        name: "first_name",
        type: "text",
        title: "Имя",
        value: "Иван"
    },
    {
        name: "second_name",
        type: "text",
        title: "Фамилия",
        value: "Иванов"
    },
    {
        name: "dispalay_name",
        type: "text",
        title: "Имя в чате",
        value: "Иван"
    },
    {
        name: "phone",
        type: "text",
        title: "Телефон",
        value: "+7444234123"
    }
];
exports.PROFILE_DATA = PROFILE_DATA;

},{}],"daGc0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProfileView", {
    enumerable: true,
    get: function get() {
        return _profileView.ProfileView;
    }
});
var _profileView = require("./profile-view");

},{"./profile-view":"4LAyg"}],"4LAyg":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfileView = void 0;
var _button = require("../../../../components/button");
var _button2 = require("../../../../constants/button");
var _component = require("../../../../utils/classes/component");
var _observable = require("../../../../utils/classes/observable");
var _inject = require("../../../../utils/decorators/inject");
var _profileView = _interopRequireDefault(require("./profile-view.tmpl"));
require("./profile-view.scss");
var _user = require("../../../../services/state/user.service");
var _chats = require("../../../../services/state/chats.service");
var _dec, _dec2, _class, _descriptor, _descriptor2;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ProfileView1 = (_dec = _inject.Inject(_user.UserService), _dec2 = _inject.Inject(_chats.ChatsService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ProfileView2, _Component);
    var _super = _createSuper(ProfileView2);
    function ProfileView2(props) {
        var _this;
        _classCallCheck(this, ProfileView2);
        _this = _super.call(this, "div", props, _profileView["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor2, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ProfileView2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "settings__main",
                    children: [
                        {
                            name: "editDataButton",
                            component: new _button.Button({
                                title: "Изменить данные",
                                type: _button2.BUTTON_TYPES.LINK
                            })
                        },
                        {
                            name: "changePasswordButton",
                            component: new _button.Button({
                                title: "Изменить пароль",
                                type: _button2.BUTTON_TYPES.LINK
                            })
                        },
                        {
                            name: "logoutButton",
                            component: new _button.Button({
                                title: "Выйти",
                                type: _button2.BUTTON_TYPES.LINK,
                                theme: _button2.BUTTON_THEMES.DANGER
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._userService.userObservable.subscribe(function(user) {
                    _this2.setProps({
                        user: user
                    });
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                // Кнопки
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.editDataButton.element, "click").subscribe(function() {
                    return _this3.props.onEditDataButton();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.changePasswordButton.element, "click").subscribe(function() {
                    return _this3.props.onChangePasswordButton();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.logoutButton.element, "click").subscribe(function() {
                    _this3._userService.logOut();
                    _this3._chatsService.destroy();
                })); // Аватар
                if (this.avatar) this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.avatar, "click").subscribe(function() {
                    return _this3.props.onAvatar();
                }));
            }
        }
    ]);
    return ProfileView2;
}(_component.Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
})), _class));
exports.ProfileView = ProfileView1;

},{"../../../../components/button":"3uBrB","../../../../constants/button":"b791F","../../../../utils/classes/component":"6snG1","../../../../utils/classes/observable":"4xKFc","../../../../utils/decorators/inject":"3QEUB","./profile-view.tmpl":"k96zU","./profile-view.scss":"cpeg5","../../../../services/state/user.service":"klVWu","../../../../services/state/chats.service":"9FwjH"}],"k96zU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n{{#if user}}\n    <div data-ref=\"avatar\" class=\"settings__main-avatar-container\">\n        {{#if user.avatar}}\n            <img src=\"{{user.avatar}}\" class=\"settings__main-avatar\" crossorigin=\"use-credentials\"/>\n        {{else}}\n            <img src=\"static/img/avatar_default.jpg\" class=\"settings__main-avatar\" crossorigin=\"use-credentials\"/>\n        {{/if}}\n        <div class=\"settings__main-avatar-hover-block\">\n            <span class=\"settings__main-avatar-hover-block-title\">\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C</span>\n            <span class=\"settings__main-avatar-hover-block-title\">\u0430\u0432\u0430\u0442\u0430\u0440</span>\n        </div>\n    </div>            \n    <h3 class=\"settings__main-name\">{{ user.first_name }} {{ user.second_name }}</h3>\n    <div class=\"settings__main-info\">\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u041F\u043E\u0447\u0442\u0430</span>\n            <span class=\"profile__main-info-item-value\">{{ user.email }}</span>\n        </div>\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u041B\u043E\u0433\u0438\u043D</span>\n            <span class=\"profile__main-info-item-value\">{{ user.login }}</span>\n        </div>\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u0418\u043C\u044F</span>\n            <span class=\"profile__main-info-item-value\">{{ user.first_name }}</span>\n        </div>\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u0424\u0430\u043C\u0438\u043B\u044F</span>\n            <span class=\"profile__main-info-item-value\">{{ user.second_name }}</span>\n        </div>\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435</span>\n            <span class=\"profile__main-info-item-value\">{{ user.login }}</span>\n        </div>\n        <div class=\"profile__main-info-item\">\n            <span class=\"profile__main-info-item-title\">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</span>\n            <span class=\"profile__main-info-item-value\">{{ user.phone }}</span>\n        </div>                                        \n    </div>\n    <div class=\"settings__main-actions\">\n        <div data-component=\"editDataButton\"></div>\n        <div data-component=\"changePasswordButton\"></div>\n        <div data-component=\"logoutButton\"></div>\n    </div>\n{{/if}}\n";
exports["default"] = _default;

},{}],"cpeg5":[function() {},{}],"5nVyB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProfileEdit", {
    enumerable: true,
    get: function get() {
        return _profileEdit.ProfileEdit;
    }
});
var _profileEdit = require("./profile-edit");

},{"./profile-edit":"hYuT7"}],"hYuT7":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfileEdit = void 0;
var _button = require("../../../../components/button");
var _component = require("../../../../utils/classes/component");
var _observable = require("../../../../utils/classes/observable");
var _inject = require("../../../../utils/decorators/inject");
var _profileEdit = _interopRequireDefault(require("./profile-edit.tmpl"));
require("./profile-edit.scss");
var _input = require("../../../../components/input");
var _validators = require("../../../../constants/validators");
var _validators2 = require("../../../../utils/classes/validators");
var _form = require("../../../../components/form");
var _button2 = require("../../../../constants/button");
var _user = require("../../../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ProfileEdit1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ProfileEdit2, _Component);
    var _super = _createSuper(ProfileEdit2);
    // Форма для данных
    function ProfileEdit2(props) {
        var _this;
        _classCallCheck(this, ProfileEdit2);
        _this = _super.call(this, "div", props, _profileEdit["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ProfileEdit2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _props$user, _props$user2, _props$user3, _props$user4, _props$user5, _props$user6;
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "settings__main",
                    children: [
                        {
                            name: "profileEditForm",
                            component: new _form.Form({
                                children: [
                                    {
                                        name: "email",
                                        component: new _input.Input({
                                            name: "email",
                                            title: "Почта",
                                            type: "email",
                                            value: (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.email,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.EMAIL_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "first_name",
                                        component: new _input.Input({
                                            name: "first_name",
                                            title: "Имя",
                                            type: "text",
                                            value: (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.first_name,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.NAME_PATTERN_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "second_name",
                                        component: new _input.Input({
                                            name: "second_name",
                                            title: "Фамилия",
                                            type: "text",
                                            value: (_props$user3 = props.user) === null || _props$user3 === void 0 ? void 0 : _props$user3.second_name,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.NAME_PATTERN_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "login",
                                        component: new _input.Input({
                                            name: "login",
                                            title: "Логин",
                                            type: "text",
                                            value: (_props$user4 = props.user) === null || _props$user4 === void 0 ? void 0 : _props$user4.login,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.LOGIN_PATTERN_VALIDATOR,
                                                _validators.LOGIN_MIN_LENGTH_VALIDATOR,
                                                _validators.LOGIN_MAX_LENGTH_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "display_name",
                                        component: new _input.Input({
                                            name: "display_name",
                                            title: "Имя в чате",
                                            type: "text",
                                            value: (_props$user5 = props.user) === null || _props$user5 === void 0 ? void 0 : _props$user5.display_name,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.NAME_PATTERN_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "phone",
                                        component: new _input.Input({
                                            name: "phone",
                                            title: "Телефон",
                                            type: "text",
                                            value: (_props$user6 = props.user) === null || _props$user6 === void 0 ? void 0 : _props$user6.phone,
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.PHONE_MIN_LENGTH_VALIDATOR,
                                                _validators.PHONE_MAX_LENGTH_VALIDATOR,
                                                _validators.PHONE_PATTERN_VALIDATOR
                                            ])
                                        })
                                    }
                                ],
                                attributes: {
                                    id: "profileEditFormId"
                                }
                            })
                        },
                        {
                            name: "profileSaveButton",
                            component: new _button.Button({
                                title: "Сохранить",
                                attributes: {
                                    type: "submit",
                                    form: "profileEditFormId"
                                }
                            })
                        },
                        {
                            name: "cancelButton",
                            component: new _button.Button({
                                title: "Отмена",
                                type: _button2.BUTTON_TYPES.STROKED,
                                theme: _button2.BUTTON_THEMES.NORMAL
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._userService.userObservable.subscribe(function(user) {
                    _this2.setProps({
                        user: user
                    });
                    if (user) _this2._updateFormValue(user);
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                // Сохранить инфо по нажатию
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.profileSaveButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    var user = {
                    };
                    var elements = _this3.profileEditForm.formElements;
                    var _iterator = _createForOfIteratorHelper(elements), _step;
                    try {
                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                            var el = _step.value;
                            user[el.name] = el.value;
                        } // Меняем значения через сервис
                    } catch (err) {
                        _iterator.e(err);
                    } finally{
                        _iterator.f();
                    }
                    _this3._userService.updateProfile(user); //
                    _this3.props.onSaveButton();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.cancelButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    _this3.props.onSaveButton();
                })); // Валидация кнопки сохранения
                this._onMountSubscriptions.push(this.profileEditForm.onValidityChange.subscribe(function(isValid) {
                    _this3._setSaveButtonValidity(isValid);
                }));
            }
        },
        {
            key: "_setSaveButtonValidity",
            value: function _setSaveButtonValidity(isValid) {
                if (isValid) this.profileSaveButton.setEnabled();
                else this.profileSaveButton.setDisabled();
            }
        },
        {
            key: "_updateFormValue",
            value: function _updateFormValue(user) {
                var formElements = this.profileEditForm.formElements;
                var _iterator2 = _createForOfIteratorHelper(formElements), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var element = _step2.value;
                        var userFieldValue = user[element.name];
                        element.value = userFieldValue;
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
            }
        }
    ]);
    return ProfileEdit2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.ProfileEdit = ProfileEdit1;

},{"../../../../components/button":"3uBrB","../../../../utils/classes/component":"6snG1","../../../../utils/classes/observable":"4xKFc","../../../../utils/decorators/inject":"3QEUB","./profile-edit.tmpl":"dLzRT","./profile-edit.scss":"cpSEG","../../../../components/input":"ajhmn","../../../../constants/validators":"kKSIW","../../../../utils/classes/validators":"ejgnC","../../../../components/form":"le7SC","../../../../constants/button":"b791F","../../../../services/state/user.service":"klVWu"}],"dLzRT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div class=\"settings__main-info\">\n    <div data-component=\"profileEditForm\"></div>\n</div>\n<div class=\"profile__save-actions\">\n    <div data-component=\"profileSaveButton\"></div>\n    <div data-component=\"cancelButton\"></div>\n</div>\n";
exports["default"] = _default;

},{}],"cpSEG":[function() {},{}],"ikaGD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordEdit", {
    enumerable: true,
    get: function get() {
        return _passwordEdit.PasswordEdit;
    }
});
var _passwordEdit = require("./password-edit");

},{"./password-edit":"cYF0C"}],"cYF0C":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PasswordEdit = void 0;
var _button = require("../../../../components/button");
var _component = require("../../../../utils/classes/component");
var _observable = require("../../../../utils/classes/observable");
var _inject = require("../../../../utils/decorators/inject");
var _passwordEdit = _interopRequireDefault(require("./password-edit.tmpl"));
require("./password-edit.scss");
var _input = require("../../../../components/input");
var _validators = require("../../../../constants/validators");
var _validators2 = require("../../../../utils/classes/validators");
var _form = require("../../../../components/form");
var _button2 = require("../../../../constants/button");
var _user = require("../../../../services/state/user.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var PasswordEdit1 = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(PasswordEdit2, _Component);
    var _super = _createSuper(PasswordEdit2);
    // Форма для данных
    function PasswordEdit2(props) {
        var _this;
        _classCallCheck(this, PasswordEdit2);
        _this = _super.call(this, "div", props, _passwordEdit["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(PasswordEdit2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "settings__main",
                    children: [
                        {
                            name: "passwordForm",
                            component: new _form.Form({
                                children: [
                                    {
                                        name: "oldPassword",
                                        component: new _input.Input({
                                            name: "oldPassword",
                                            title: "Старый пароль",
                                            type: "password",
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR
                                            ])
                                        })
                                    },
                                    {
                                        name: "newPassword",
                                        component: new _input.Input({
                                            name: "newPassword",
                                            title: "Новый пароль",
                                            type: "password",
                                            validators: new _validators2.Validators([
                                                _validators.REQUIRED_VALIDATOR,
                                                _validators.PASSWORD_MIN_LENGTH_VALIDATOR,
                                                _validators.PASSWORD_MAX_LENGTH_VALIDATOR,
                                                _validators.PASSWORD_PATTERN_VALIDATOR
                                            ])
                                        })
                                    }
                                ],
                                attributes: {
                                    id: "passwordFormId"
                                }
                            })
                        },
                        {
                            name: "profileSaveButton",
                            component: new _button.Button({
                                title: "Сохранить",
                                attributes: {
                                    type: "submit",
                                    form: "passwordFormId",
                                    disabled: ''
                                }
                            })
                        },
                        {
                            name: "cancelButton",
                            component: new _button.Button({
                                title: "Отмена",
                                type: _button2.BUTTON_TYPES.STROKED,
                                theme: _button2.BUTTON_THEMES.NORMAL
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                // Сохранить инфо по нажатию
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.profileSaveButton.element, "click").subscribe(function(e) {
                    var _elements$find, _elements$find2;
                    e.preventDefault();
                    var elements = _this2.passwordForm.formElements;
                    var oldPassword = (_elements$find = elements.find(function(x) {
                        return x.name === "oldPassword";
                    })) === null || _elements$find === void 0 ? void 0 : _elements$find.value;
                    var newPassword = (_elements$find2 = elements.find(function(x) {
                        return x.name === "newPassword";
                    })) === null || _elements$find2 === void 0 ? void 0 : _elements$find2.value; // Меняем значения через сервис
                    _this2._userService.updatePassword(oldPassword, newPassword); //
                    _this2.props.onSaveButton(); // Сбрасываем значения
                    var oldP = _this2.passwordForm.formElements[0];
                    var newP = _this2.passwordForm.formElements[1];
                    oldP.setProps({
                        value: ''
                    });
                    newP.setProps({
                        value: ''
                    });
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.cancelButton.element, "click").subscribe(function(e) {
                    e.preventDefault();
                    _this2.props.onSaveButton();
                })); // Валидация кнопки сохранения
                this._onMountSubscriptions.push(this.passwordForm.onValidityChange.subscribe(function(isValid) {
                    _this2._setSaveButtonValidity(isValid);
                    console.log(isValid);
                }));
            }
        },
        {
            key: "_setSaveButtonValidity",
            value: function _setSaveButtonValidity(isValid) {
                if (isValid) this.profileSaveButton.setEnabled();
                else this.profileSaveButton.setDisabled();
            }
        }
    ]);
    return PasswordEdit2;
}(_component.Component), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.PasswordEdit = PasswordEdit1;

},{"../../../../components/button":"3uBrB","../../../../utils/classes/component":"6snG1","../../../../utils/classes/observable":"4xKFc","../../../../utils/decorators/inject":"3QEUB","./password-edit.tmpl":"8U3AP","./password-edit.scss":"27g3R","../../../../components/input":"ajhmn","../../../../constants/validators":"kKSIW","../../../../utils/classes/validators":"ejgnC","../../../../components/form":"le7SC","../../../../constants/button":"b791F","../../../../services/state/user.service":"klVWu"}],"8U3AP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div class=\"settings__main-info\">\n    <div data-component=\"passwordForm\"></div>\n</div>\n<div class=\"profile__save-actions\">\n    <div data-component=\"profileSaveButton\"></div>\n    <div data-component=\"cancelButton\"></div>\n</div>\n";
exports["default"] = _default;

},{}],"27g3R":[function() {},{}],"gPQrz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Error404Page", {
    enumerable: true,
    get: function get() {
        return _.Error404Page;
    }
});
var _ = require("./404");

},{"./404":"dtODQ"}],"dtODQ":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Error404Page = void 0;
require("./404.scss");
var _2 = _interopRequireDefault(require("./404.tmpl"));
var _button = require("../../../components/button");
var _button2 = require("../../../constants/button");
var _router = _interopRequireDefault(require("../../../services/core/router"));
var _component = require("../../../utils/classes/component");
var _observable = require("../../../utils/classes/observable");
var _navigation = require("../../../services/core/navigation");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Error404Page1 = /*#__PURE__*/ function(_Component) {
    _inherits(Error404Page2, _Component);
    var _super = _createSuper(Error404Page2);
    function Error404Page2() {
        _classCallCheck(this, Error404Page2);
        return _super.call(this, "div", {
        }, _2["default"]);
    }
    _createClass(Error404Page2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "error404",
                    children: [
                        {
                            name: "goToMainButton",
                            component: new _button.Button({
                                title: "Назад к чатам",
                                type: _button2.BUTTON_TYPES.LINK
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.goToMainButton.element, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.MAIN);
                }));
            }
        }
    ]);
    return Error404Page2;
}(_component.Component);
exports.Error404Page = Error404Page1;

},{"./404.scss":"2lyfc","./404.tmpl":"aFA4w","../../../components/button":"3uBrB","../../../constants/button":"b791F","../../../services/core/router":"hLkRS","../../../utils/classes/component":"6snG1","../../../utils/classes/observable":"4xKFc","../../../services/core/navigation":"9jcV4"}],"2lyfc":[function() {},{}],"aFA4w":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <h1>404</h1>\n    <h4>\u041D\u0435 \u0442\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u043B\u0438</h4>\n    <div data-component=\"goToMainButton\"></div>\n";
exports["default"] = _default;

},{}],"23TRY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Error500Page", {
    enumerable: true,
    get: function get() {
        return _.Error500Page;
    }
});
var _ = require("./500");

},{"./500":"3Dk7F"}],"3Dk7F":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Error500Page = void 0;
require("./500.scss");
var _2 = _interopRequireDefault(require("./500.tmpl"));
var _button = require("../../../components/button");
var _button2 = require("../../../constants/button");
var _router = _interopRequireDefault(require("../../../services/core/router"));
var _component = require("../../../utils/classes/component");
var _observable = require("../../../utils/classes/observable");
var _navigation = require("../../../services/core/navigation");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var Error500Page1 = /*#__PURE__*/ function(_Component) {
    _inherits(Error500Page2, _Component);
    var _super = _createSuper(Error500Page2);
    function Error500Page2() {
        _classCallCheck(this, Error500Page2);
        return _super.call(this, "div", {
        }, _2["default"]);
    }
    _createClass(Error500Page2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "error500",
                    children: [
                        {
                            name: "goToMainButton",
                            component: new _button.Button({
                                title: "Назад к чатам",
                                type: _button2.BUTTON_TYPES.LINK
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.goToMainButton.element, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.MAIN);
                }));
            }
        }
    ]);
    return Error500Page2;
}(_component.Component);
exports.Error500Page = Error500Page1;

},{"./500.scss":"if3sP","./500.tmpl":"hY2k6","../../../components/button":"3uBrB","../../../constants/button":"b791F","../../../services/core/router":"hLkRS","../../../utils/classes/component":"6snG1","../../../utils/classes/observable":"4xKFc","../../../services/core/navigation":"9jcV4"}],"if3sP":[function() {},{}],"hY2k6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n    <h1>500</h1>\n    <h4>\u041C\u044B \u0443\u0436\u0435 \u0444\u0438\u043A\u0441\u0438\u043C</h4>\n    <div data-component=\"goToMainButton\"></div>\n";
exports["default"] = _default;

},{}],"7L8ES":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatSettings", {
    enumerable: true,
    get: function get() {
        return _chatSettings.ChatSettings;
    }
});
var _chatSettings = require("./chat-settings");

},{"./chat-settings":"bU9Gf"}],"bU9Gf":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatSettings = void 0;
var _component = require("../../utils/classes/component");
var _chatSettings = _interopRequireDefault(require("./chat-settings.tmpl"));
require("./chat-settings.scss");
var _button = require("../../components/button");
var _button2 = require("../../constants/button");
var _changeAvatar = require("../../modules/change-avatar");
var _chats = require("../../services/state/chats.service");
var _inject = require("../../utils/decorators/inject");
var _observable = require("../../utils/classes/observable");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _navigation = require("../../services/core/navigation");
var _chatView = require("./components/chat-view");
var _confirmModal = require("../../modules/confirm-modal");
var _addChatUsers = require("../../modules/add-chat-users");
var _user = require("../../services/state/user.service");
var _dec, _dec2, _class, _descriptor, _descriptor2;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ChatSettings1 = (_dec = _inject.Inject(_chats.ChatsService), _dec2 = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ChatSettings2, _Component);
    var _super = _createSuper(ChatSettings2);
    // Кнопки
    // Вернуться в профиль
    // Модуль смены аватара
    //
    //
    function ChatSettings2(props) {
        var _this;
        _classCallCheck(this, ChatSettings2);
        _this = _super.call(this, "div", props, _chatSettings["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor2, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ChatSettings2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _this2 = this;
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    profileIsEditable: false,
                    changePasswordFormIsShown: false,
                    chat: this._chatsService.chat,
                    componentClassName: "settings",
                    children: [
                        {
                            name: "сhangeAvatar",
                            component: new _changeAvatar.ChangeAvatar({
                                onApplyButton: function onApplyButton(file) {
                                    // Обновить аватар
                                    var data = {
                                        chatId: _this2.props.chat.id,
                                        avatar: file
                                    };
                                    _this2._chatsService.uploadChatAvatar(data);
                                    _this2.сhangeAvatar.hide();
                                },
                                applyButtonText: "Загрузить",
                                headerTitle: "Выберите лого",
                                isModal: true,
                                isFileRequired: true
                            })
                        },
                        {
                            name: "returnButton",
                            component: new _button.Button({
                                type: _button2.BUTTON_TYPES.ROUND,
                                theme: _button2.BUTTON_THEMES.PRIMARY,
                                iconClass: "fa fa-arrow-left"
                            })
                        },
                        {
                            name: "chatView",
                            component: new _chatView.ChatView({
                                chat: this._chatsService.chat,
                                onAddUsersButton: function onAddUsersButton() {
                                    _this2.addChatUsers.show();
                                },
                                onDeleteChatButton: function onDeleteChatButton() {
                                    var user = _this2._userService.user; // Если создатель, то удялаем чат
                                    if (_this2._isUserChatCreator(user)) _this2._onChatDelete();
                                    else {
                                        // Иначе покидаем
                                        var data = {
                                            chatId: _this2.props.chat.id,
                                            users: [
                                                user.id
                                            ]
                                        };
                                        _this2._onDeleteChatUser(data, "Вы уверены, что хотите покинуть чат?", true);
                                    }
                                },
                                onDeleteUserButton: function onDeleteUserButton(user) {
                                    var data = {
                                        chatId: _this2.props.chat.id,
                                        users: [
                                            user.id
                                        ]
                                    };
                                    _this2._onDeleteChatUser(data, "Вы уверены, что хотите удалить пользователя?");
                                },
                                onAvatar: function onAvatar() {
                                    _this2.сhangeAvatar.show();
                                }
                            })
                        },
                        {
                            name: "confirmModal",
                            component: new _confirmModal.ConfirmModal({
                                onConfirm: function onConfirm() {
                                },
                                onDecline: function onDecline() {
                                    return _this2.confirmModal.hide();
                                }
                            })
                        },
                        {
                            name: "addChatUsers",
                            component: new _addChatUsers.AddChatUsers({
                                isModal: true,
                                onNextButton: function onNextButton() {
                                    _this2.addChatUsers.hide();
                                    var chatUsers = _this2.addChatUsers.props.selectedUsers || [];
                                    var data = {
                                        chatId: _this2.props.chat.id,
                                        users: chatUsers.map(function(x) {
                                            return x.id;
                                        })
                                    };
                                    _this2._chatsService.addChatUsers(data);
                                },
                                nextButtonTitle: "Добавить"
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this3 = this;
                this._subscriptions.push(this._chatsService.chatObservable.subscribe(function(chat) {
                    _this3.setProps({
                        chat: chat
                    });
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                // Перейти к чатам
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.profileReturn, "click").subscribe(function() {
                    return _router["default"].go(_navigation.PAGES.MAIN);
                }));
            }
        },
        {
            key: "_onChatDelete",
            value: function _onChatDelete() {
                var _this4 = this;
                this.confirmModal.setProps({
                    description: "Вы уверены, что хотите удалить чат?",
                    onConfirm: function onConfirm() {
                        _this4._chatsService.deleteChat(_this4.props.chat.id);
                        _router["default"].go(_navigation.PAGES.MAIN);
                    }
                });
                this.confirmModal.show();
            }
        },
        {
            key: "_onDeleteChatUser",
            value: function _onDeleteChatUser(data, description, leavePage) {
                var _this5 = this;
                this.confirmModal.setProps({
                    description: description,
                    onConfirm: function onConfirm() {
                        _this5._chatsService.deleteChatUsers(data);
                        _this5.confirmModal.hide(); // Покинуть страницу и обновить чаты
                        if (leavePage) {
                            var _this5$_chatsService$;
                            _this5._chatsService.leaveChat(((_this5$_chatsService$ = _this5._chatsService.chat) === null || _this5$_chatsService$ === void 0 ? void 0 : _this5$_chatsService$.id) || 0);
                            _router["default"].go(_navigation.PAGES.MAIN);
                        }
                    }
                });
                this.confirmModal.show();
            }
        },
        {
            key: "_isUserChatCreator",
            value: function _isUserChatCreator(user) {
                var _this$_chatsService$c;
                return ((_this$_chatsService$c = this._chatsService.chat) === null || _this$_chatsService$c === void 0 ? void 0 : _this$_chatsService$c.created_by) === user.id;
            }
        }
    ]);
    return ChatSettings2;
}(_component.Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
})), _class));
exports.ChatSettings = ChatSettings1;

},{"../../utils/classes/component":"6snG1","./chat-settings.tmpl":"fYTTv","./chat-settings.scss":"5ypa8","../../components/button":"3uBrB","../../constants/button":"b791F","../../modules/change-avatar":"4Qkwh","../../services/state/chats.service":"9FwjH","../../utils/decorators/inject":"3QEUB","../../utils/classes/observable":"4xKFc","../../services/core/router":"hLkRS","../../services/core/navigation":"9jcV4","./components/chat-view":"1D8Ay","../../modules/confirm-modal":"8khW9","../../modules/add-chat-users":"91oXT","../../services/state/user.service":"klVWu"}],"fYTTv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div data-ref=\"profileReturn\" class=\"settings__return\">\n    <div data-component=\"returnButton\"></div>\n</div>\n<div data-component=\"chatView\"></div>\n<div data-component=\"\u0441hangeAvatar\"></div>\n<div data-component=\"confirmModal\"></div>\n<div data-component=\"addChatUsers\"></div>\n";
exports["default"] = _default;

},{}],"5ypa8":[function() {},{}],"1D8Ay":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatView", {
    enumerable: true,
    get: function get() {
        return _chatView.ChatView;
    }
});
var _chatView = require("./chat-view");

},{"./chat-view":"8OBQC"}],"8OBQC":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatView = void 0;
var _button = require("../../../../components/button");
var _button2 = require("../../../../constants/button");
var _component = require("../../../../utils/classes/component");
var _observable = require("../../../../utils/classes/observable");
var _inject = require("../../../../utils/decorators/inject");
var _chatView = _interopRequireDefault(require("./chat-view.tmpl"));
require("./chat-view.scss");
var _chats = require("../../../../services/state/chats.service");
var _chatUserItem = require("../chat-user-item");
var _user = require("../../../../services/state/user.service");
var _dec, _dec2, _class, _descriptor, _descriptor2;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ChatView1 = (_dec = _inject.Inject(_chats.ChatsService), _dec2 = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function(_Component) {
    _inherits(ChatView2, _Component);
    var _super = _createSuper(ChatView2);
    function ChatView2(props) {
        var _this;
        _classCallCheck(this, ChatView2);
        _this = _super.call(this, "div", props, _chatView["default"]);
        _initializerDefineProperty(_assertThisInitialized(_this), "_chatsService", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_assertThisInitialized(_this), "_userService", _descriptor2, _assertThisInitialized(_this));
        return _this;
    }
    _createClass(ChatView2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                var _this$_chatsService$c;
                var usersChildComponents = this._getChatUserItemComponents(((_this$_chatsService$c = this._chatsService.chat) === null || _this$_chatsService$c === void 0 ? void 0 : _this$_chatsService$c.users) || []);
                var onDeleteTitle = this._isUserChatCreator(this._userService.user) ? "Удалить чат" : "Покинуть чат";
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "settings__main",
                    children: [
                        {
                            name: "addUsersButton",
                            component: new _button.Button({
                                title: "Добавить пользователей",
                                type: _button2.BUTTON_TYPES.LINK
                            })
                        },
                        {
                            name: "deleteChatButton",
                            component: new _button.Button({
                                title: onDeleteTitle,
                                type: _button2.BUTTON_TYPES.LINK,
                                theme: _button2.BUTTON_THEMES.DANGER
                            })
                        }
                    ].concat(_toConsumableArray(usersChildComponents)),
                    users: usersChildComponents
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this2 = this;
                this._subscriptions.push(this._chatsService.chatObservable.subscribe(function(chat) {
                    _this2.setProps({
                        chat: chat,
                        users: _this2._getChatUserItemComponents(chat.users || [])
                    });
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;
                // Кнопки
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.addUsersButton.element, "click").subscribe(function() {
                    _this3.props.onAddUsersButton();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.deleteChatButton.element, "click").subscribe(function() {
                    _this3.props.onDeleteChatButton();
                })); // Аватар
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.avatar, "click").subscribe(function() {
                    return _this3.props.onAvatar();
                }));
            }
        },
        {
            key: "_getChatUserItemComponents",
            value: function _getChatUserItemComponents(users) {
                var _this4 = this, _this$props;
                var chatsUserItemComponents = users.map(function(x, i) {
                    return {
                        name: "chatUserItemComponent__".concat(i),
                        component: new _chatUserItem.ChatUserItem({
                            user: x,
                            onUserDelete: function onUserDelete() {
                                _this4.props.onDeleteUserButton(x);
                            },
                            isChatCreatorOrAuthUser: _this4._isUserChatCreator(x) || _this4._isAuthUser(x)
                        })
                    };
                }); // Обновляем children компонента для ререндера
                if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.children) {
                    var _this$props$children;
                    this.props.children = this.props.children.filter(function(x) {
                        return !x.name.includes("chatUserItemComponent");
                    });
                    (_this$props$children = this.props.children).push.apply(_this$props$children, _toConsumableArray(chatsUserItemComponents));
                }
                return chatsUserItemComponents;
            }
        },
        {
            key: "_isUserChatCreator",
            value: function _isUserChatCreator(user) {
                var _this$_chatsService$c2;
                return ((_this$_chatsService$c2 = this._chatsService.chat) === null || _this$_chatsService$c2 === void 0 ? void 0 : _this$_chatsService$c2.created_by) === user.id;
            }
        },
        {
            key: "_isAuthUser",
            value: function _isAuthUser(user) {
                var _this$_userService$us;
                return ((_this$_userService$us = this._userService.user) === null || _this$_userService$us === void 0 ? void 0 : _this$_userService$us.id) === user.id;
            }
        }
    ]);
    return ChatView2;
}(_component.Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
})), _class));
exports.ChatView = ChatView1;

},{"../../../../components/button":"3uBrB","../../../../constants/button":"b791F","../../../../utils/classes/component":"6snG1","../../../../utils/classes/observable":"4xKFc","../../../../utils/decorators/inject":"3QEUB","./chat-view.tmpl":"9amms","./chat-view.scss":"6Bubj","../../../../services/state/chats.service":"9FwjH","../chat-user-item":"jcTdp","../../../../services/state/user.service":"klVWu"}],"9amms":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div data-ref=\"avatar\" class=\"settings__main-avatar-container\">\n    {{#if chat.avatar}}\n        <img src=\"{{chat.avatar}}\" class=\"settings__main-avatar\" crossorigin=\"use-credentials\"/>\n    {{else}}\n        <img src=\"../static/img/chat_default.png\" class=\"settings__main-avatar\" crossorigin=\"use-credentials\"/>\n    {{/if}}\n    <div class=\"settings__main-avatar-hover-block\">\n        <span class=\"settings__main-avatar-hover-block-title\">\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C</span>\n        <span class=\"settings__main-avatar-hover-block-title\">\u0430\u0432\u0430\u0442\u0430\u0440</span>\n    </div>\n</div>            \n<h3 class=\"settings__main-name\">{{ chat.title }}</h3>\n<div class=\"settings__main-info chat__users-container\">\n    {{#each users}}\n        <div data-component=\"{{ this.name }}\"></div>\n    {{/each}}\n</div>\n<div class=\"settings__main-actions\">\n    <div data-component=\"addUsersButton\"></div>\n    <div data-component=\"deleteChatButton\"></div>\n</div>\n";
exports["default"] = _default;

},{}],"6Bubj":[function() {},{}],"jcTdp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatUserItem", {
    enumerable: true,
    get: function get() {
        return _chatUserItem.ChatUserItem;
    }
});
var _chatUserItem = require("./chat-user-item");

},{"./chat-user-item":"gqJ3e"}],"gqJ3e":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatUserItem = void 0;
var _component = require("../../../../utils/classes/component");
var _chatUserItem = _interopRequireDefault(require("./chat-user-item.tmpl"));
require("./chat-user-item.scss");
var _observable = require("../../../../utils/classes/observable");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var ChatUserItem1 = /*#__PURE__*/ function(_Component) {
    _inherits(ChatUserItem2, _Component);
    var _super = _createSuper(ChatUserItem2);
    function ChatUserItem2(props) {
        _classCallCheck(this, ChatUserItem2);
        return _super.call(this, "div", props, _chatUserItem["default"]);
    }
    _createClass(ChatUserItem2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "chat__user-container",
                    children: []
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                if (!this.props.isChatCreatorOrAuthUser) this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.deleteElement, "click").subscribe(function() {
                    _this.props.onUserDelete();
                }));
            }
        }
    ]);
    return ChatUserItem2;
}(_component.Component);
exports.ChatUserItem = ChatUserItem1;

},{"../../../../utils/classes/component":"6snG1","./chat-user-item.tmpl":"cC8Fy","./chat-user-item.scss":"p1KVZ","../../../../utils/classes/observable":"4xKFc"}],"cC8Fy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div class=\"chat__user-main-info\">\n    {{#if user.avatar}}\n        <img src=\"{{user.avatar}}\" class=\"chat__user-avatar\" crossorigin=\"use-credentials\"/>\n    {{else}}\n        <img src=\"../static/img/avatar_default.jpg\" class=\"chat__user-avatar\" crossorigin=\"use-credentials\"/>\n    {{/if}}\n    <div class=\"chat__user-name\">\n        <span>{{user.first_name}} {{user.second_name}}</span>\n    </div>\n    <div class=\"chat__user-login\">\n        <span>{{user.login}}</span>\n    </div>\n</div>\n{{#unless isChatCreatorOrAuthUser}}\n<div class=\"chat__user-delete\">\n    <i data-ref=\"deleteElement\" class=\"fa fa-times\"></i>\n</div>\n{{/unless}}\n";
exports["default"] = _default;

},{}],"p1KVZ":[function() {},{}],"8khW9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfirmModal", {
    enumerable: true,
    get: function get() {
        return _confirmModal.ConfirmModal;
    }
});
var _confirmModal = require("./confirm-modal");

},{"./confirm-modal":"lWE8G"}],"lWE8G":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfirmModal = void 0;
require("./confirm-modal.scss");
var _confirmModal2 = _interopRequireDefault(require("./confirm-modal.tmpl"));
var _index = require("../../components/button/index");
var _component = require("../../utils/classes/component");
var _observable = require("../../utils/classes/observable");
var _button = require("../../constants/button");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
var ConfirmModal1 = /*#__PURE__*/ function(_Component) {
    _inherits(ConfirmModal2, _Component);
    var _super = _createSuper(ConfirmModal2);
    function ConfirmModal2(props) {
        _classCallCheck(this, ConfirmModal2);
        return _super.call(this, "div", props, _confirmModal2["default"]);
    }
    _createClass(ConfirmModal2, [
        {
            key: "setDefaultProps",
            value: function setDefaultProps(props) {
                return _objectSpread(_objectSpread({
                }, props), {
                }, {
                    componentClassName: "modal-container",
                    title: props.title || "Подтверждение",
                    description: props.description || "Вы уверены?",
                    children: [
                        {
                            name: "confirmButton",
                            component: new _index.Button({
                                title: props.onConfirmTitle || "Да",
                                type: _button.BUTTON_TYPES.STROKED,
                                theme: _button.BUTTON_THEMES.PRIMARY,
                                styles: {
                                    width: "100px"
                                }
                            })
                        },
                        {
                            name: "declineButton",
                            component: new _index.Button({
                                title: props.onDeclineTitle || "Отмена",
                                type: _button.BUTTON_TYPES.BASIC,
                                theme: _button.BUTTON_THEMES.DANGER,
                                styles: {
                                    width: "100px"
                                }
                            })
                        }
                    ]
                });
            }
        },
        {
            key: "componentDidInit",
            value: function componentDidInit() {
                var _this = this;
                this.hide();
                this._subscriptions.push(_observable.Observable.fromEvent(this.element, "click").subscribe(function(e) {
                    var target = e.target;
                    if (target.classList.contains(_this.props.componentClassName)) _this.hide();
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.confirmButton.element, "click").subscribe(function() {
                    _this2.props.onConfirm();
                }));
                this._onMountSubscriptions.push(_observable.Observable.fromEvent(this.declineButton.element, "click").subscribe(function() {
                    _this2.props.onDecline();
                }));
            }
        }
    ]);
    return ConfirmModal2;
}(_component.Component);
exports.ConfirmModal = ConfirmModal1;

},{"./confirm-modal.scss":"ecPVw","./confirm-modal.tmpl":"2yh5g","../../components/button/index":"3uBrB","../../utils/classes/component":"6snG1","../../utils/classes/observable":"4xKFc","../../constants/button":"b791F"}],"ecPVw":[function() {},{}],"2yh5g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = "\n<div data-ref=\"block\" class=\"modal-content confirm-modal\">\n    <h3>{{ title }}</h3>\n    <div class=\"confirm-modal__description\">{{ description }}</div>\n    <div class=\"confirm-modal__buttons\">\n        <div data-component=\"confirmButton\"></div>      \n        <div data-component=\"declineButton\"></div>                    \n    </div>\n</div>\n";
exports["default"] = _default;

},{}],"cojrF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthGuard = void 0;
var _user = require("../../services/state/user.service");
var _inject = require("../decorators/inject");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _navigation = require("../../services/core/navigation");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var AuthGuard = (_dec = _inject.Inject(_user.UserService), (_class = /*#__PURE__*/ function() {
    function AuthGuard1() {
        var _this = this;
        _classCallCheck(this, AuthGuard1);
        _initializerDefineProperty(this, "_userService", _descriptor, this);
        this._userService.userObservable.subscribe(function(user) {
            _this._user = user;
        });
        this._isLoggedIn = Boolean(localStorage.getItem(_user.LOGGED_IN_KEY));
    }
    _createClass(AuthGuard1, [
        {
            key: "checkAccess",
            value: function checkAccess() {
                this._isLoggedIn = Boolean(localStorage.getItem(_user.LOGGED_IN_KEY));
                return Boolean(this._user) || this._isLoggedIn;
            }
        },
        {
            key: "actionOnNoAccess",
            value: function actionOnNoAccess() {
                _router["default"].go(_navigation.PAGES.LOGIN);
            }
        },
        {
            key: "invert",
            value: function invert() {
                var _this2 = this;
                this.checkAccess = function() {
                    _this2._isLoggedIn = Boolean(localStorage.getItem(_user.LOGGED_IN_KEY));
                    return !(Boolean(_this2._user) || _this2._isLoggedIn);
                };
                this.actionOnNoAccess = function() {
                    _router["default"].go(_navigation.PAGES.MAIN);
                };
                return this;
            }
        }
    ]);
    return AuthGuard1;
}(), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_userService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.AuthGuard = AuthGuard;

},{"../../services/state/user.service":"klVWu","../decorators/inject":"3QEUB","../../services/core/router":"hLkRS","../../services/core/navigation":"9jcV4"}],"jdMWR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatSelectedGuard = void 0;
var _inject = require("../decorators/inject");
var _router = _interopRequireDefault(require("../../services/core/router"));
var _navigation = require("../../services/core/navigation");
var _chats = require("../../services/state/chats.service");
var _dec, _class, _descriptor;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator(target, property, desc1) || desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
var ChatSelectedGuard = (_dec = _inject.Inject(_chats.ChatsService), (_class = /*#__PURE__*/ function() {
    function ChatSelectedGuard1() {
        var _this = this;
        _classCallCheck(this, ChatSelectedGuard1);
        _initializerDefineProperty(this, "_chatsService", _descriptor, this);
        this._chatsService.chatObservable.subscribe(function(chat) {
            _this._chat = chat;
        });
    }
    _createClass(ChatSelectedGuard1, [
        {
            key: "checkAccess",
            value: function checkAccess() {
                return Boolean(this._chat);
            }
        },
        {
            key: "actionOnNoAccess",
            value: function actionOnNoAccess() {
                _router["default"].go(_navigation.PAGES.MAIN);
            }
        }
    ]);
    return ChatSelectedGuard1;
}(), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_chatsService", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class));
exports.ChatSelectedGuard = ChatSelectedGuard;

},{"../decorators/inject":"3QEUB","../../services/core/router":"hLkRS","../../services/core/navigation":"9jcV4","../../services/state/chats.service":"9FwjH"}]},["8uBhv","4aleK"], "4aleK", "parcelRequireab20")

//# sourceMappingURL=index.b31310b1.js.map
