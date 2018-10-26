module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Estimate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/Estimate.js";


var Estimate = function Estimate() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row pl-5 pb-2 bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Delivery in the next 2 days"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Estimate);

/***/ }),

/***/ "./components/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/about.js";


var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://dummyimage.com/600x400/000/fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./components/buy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/buy.js";


var Buy = function Buy() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row pl-5 pb-2 bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, " Buy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn btn-secondary btn-lg btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, " Cart")));
};

/* harmony default export */ __webpack_exports__["a"] = (Buy);

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/header.js";


var linkStyle = {
  marginRight: 15
};
var layoutStyle = {
  height: 80
};
var bgLogo = {
  backgroundImage: 'url("/static/logo.png")',
  backgroundSize: 'contain',
  backgroundPosition: 'center'
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row bg-secondary",
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-4 col-lg-3 col-sm-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "text-white display-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "NARVAR")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/html-skeleton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/html-skeleton.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/base.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/fonts/fonts.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
    integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children));
});

/***/ }),

/***/ "./components/rating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/rating.js";


var Works = function Works() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row pl-5 pb-2 bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Rating : "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-star-half-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Works);

/***/ }),

/***/ "./components/recommended.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/recommended.js";


var Recommended = function Recommended() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row pl5 pt-5 bg-white border-all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "dispaly-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "RECOMMENDED PRODUCTS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Recommended);

/***/ }),

/***/ "./components/tiles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/components/tiles.js";



var cardHeight = {
  height: 320
};
var cardImageContainerHeight = {
  minHeight: 200
};
var cardImageStyle = {
  minHeight: 200
};

var Tiles = function Tiles(data) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://dummyimage.com/100x100/ccc/000",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Tiles);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_html_skeleton__ = __webpack_require__("./components/html-skeleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__("./components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_buy__ = __webpack_require__("./components/buy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rating__ = __webpack_require__("./components/rating.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tiles__ = __webpack_require__("./components/tiles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Estimate__ = __webpack_require__("./components/Estimate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_recommended__ = __webpack_require__("./components/recommended.js");

var _jsxFileName = "/home/suhaaa/works/codewar/nar-var/pages/index.js";

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
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_buy__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_recommended__["a" /* default */], {
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
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map