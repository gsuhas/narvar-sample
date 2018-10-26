webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_html_skeleton__ = __webpack_require__("./components/html-skeleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__("./components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_buy__ = __webpack_require__("./components/buy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rating__ = __webpack_require__("./components/rating.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tiles__ = __webpack_require__("./components/tiles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Estimate__ = __webpack_require__("./components/Estimate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_recommended__ = __webpack_require__("./components/recommended.js");

var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// This is the Link API












var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_html_skeleton__["a" /* default */], {
    title: "NARVAR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
    className: "row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
    className: "col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_about__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_tiles__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
    className: "col-md-5 bg-light pl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_rating__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Estimate__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("recommended", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_buy__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var url, res, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.brianemory.com%2Ffeed";
          _context.next = 3;
          return __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default()(url);

        case 3:
          res = _context.sent;
          data = [{
            count: 1
          }, {
            count: 2
          }, {
            count: 3
          }, {
            count: 4
          }, {
            count: 5
          }, {
            count: 6
          }];
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/home/suhaaa/works/codewar/nar-var/pages/index.js");
  reactHotLoader.register(_default, "default", "/home/suhaaa/works/codewar/nar-var/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8cc49b239b8ab2874af4.hot-update.js.map