/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf */ "./src/global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./global-assets/images/O-charcoal.png */ "./src/global-assets/images/O-charcoal.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./global-assets/images/X-charcoal.png */ "./src/global-assets/images/X-charcoal.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: VarelaRound;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  /* colors */\n  --charcoal: #264653ff;\n  --persian-green: #2a9d8fff;\n  --saffron: #e9c46aff;\n  --sandy-brown: #f4a261ff;\n  --burnt-sienna: #e76f51ff;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1.2rem;\n  --tile-size: 150px;\n\n  --small-br: 5px;\n  --med-br: 10px;\n  --def-spacing: 25px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 100px;\n  font-family: VarelaRound, sans-serif;\n}\n\n.content {\n  width: 100%;\n  background-color: var(--persian-green);\n  display: grid;\n  grid-template-rows: max-content max-content 1fr;\n  padding: var(--def-spacing);\n  overflow-y: scroll;\n}\n\n.start-button {\n  padding: var(--def-spacing);\n  margin-bottom: var(--def-spacing);\n  border-radius: 20px;\n  background-color: var(--burnt-sienna);\n  font-size: 3rem;\n  color: var(--charcoal);\n  max-width: 100%;\n  text-align: center;\n  justify-self: center;\n  -webkit-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  -moz-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  box-shadow: 10px 10px 7px -4px var(--charcoal);\n  cursor: pointer;\n}\n\n.start-button:hover {\n  scale: 1.05;\n}\n\n.start-button:active {\n  scale: 1;\n}\n\n.game-prompt {\n  text-align: center;\n  color: var(--charcoal);\n  font-size: 1.5rem;\n  margin-bottom: var(--def-spacing);\n}\n\n.game-board {\n  height: min(95vw, 100%);\n  aspect-ratio: 1;\n  border-radius: var(--med-br);\n  padding: 20px;\n  background-color: var(--saffron);\n\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 1.2rem;\n}\n\n.game-tile {\n  aspect-ratio: 1;\n  background-color: sandybrown;\n  border-radius: var(--med-br);\n  border: 4px solid var(--burnt-sienna);\n  cursor: pointer;\n}\n\n.game-tile:hover {\n  scale: 1.05;\n}\n.game-tile:active {\n  scale: 1;\n}\n\n.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.O,\n.X {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-origin: content-box;\n  padding: 10px;\n}\n\nfooter {\n  padding: 20px;\n  background-color: var(--charcoal);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n  margin-left: var(--marginSpace);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\nfooter .top-attribution {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n\nfooter .top-link {\n  color: var(--burnt-sienna);\n  margin-left: var(--marginSpace);\n}\n\nfooter .top-link:visited {\n  color: var(--burnt-sienna);\n}\n\n.placeholder:nth-child(even) {\n  background-color: green;\n}\n\n.placeholder:nth-child(odd) {\n  background-color: red;\n}\n\n/* ---------------UTILITY CLASSES--------------- */\n.unselectable {\n  user-select: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.disabled:hover {\n  scale: 1;\n}\n\n/* --------------- MEDIA QUERY --------------- */\n@media only screen and (max-width: 400px) {\n  .start-button {\n    font-size: 2rem;\n  }\n  .start-button:hover {\n    scale: 1;\n  }\n  .game-tile:hover {\n    scale: 1;\n  }\n  .game-board {\n    height: 80vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA2E;AAC7E;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,0BAA0B;EAC1B,oBAAoB;EACpB,wBAAwB;EACxB,yBAAyB;;EAEzB,qBAAqB;EACrB,0BAA0B;EAC1B,kBAAkB;;EAElB,eAAe;EACf,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,aAAa;EACb,+CAA+C;EAC/C,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,iCAAiC;EACjC,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,sDAAsD;EACtD,mDAAmD;EACnD,8CAA8C;EAC9C,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,4BAA4B;EAC5B,aAAa;EACb,gCAAgC;;EAEhC,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,4BAA4B;EAC5B,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;AACA;EACE,QAAQ;AACV;;AAEA;EACE,yDAA8D;AAChE;;AAEA;EACE,yDAA8D;AAChE;;AAEA;;EAEE,4BAA4B;EAC5B,wBAAwB;EACxB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;EAC9C,+BAA+B;AACjC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,+BAA+B;AACjC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,kDAAkD;AAClD;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,QAAQ;AACV;;AAEA,gDAAgD;AAChD;EACE;IACE,eAAe;EACjB;EACA;IACE,QAAQ;EACV;EACA;IACE,QAAQ;EACV;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@font-face {\n  font-family: VarelaRound;\n  src: url(./global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf);\n}\n\n:root {\n  /* colors */\n  --charcoal: #264653ff;\n  --persian-green: #2a9d8fff;\n  --saffron: #e9c46aff;\n  --sandy-brown: #f4a261ff;\n  --burnt-sienna: #e76f51ff;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1.2rem;\n  --tile-size: 150px;\n\n  --small-br: 5px;\n  --med-br: 10px;\n  --def-spacing: 25px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 100px;\n  font-family: VarelaRound, sans-serif;\n}\n\n.content {\n  width: 100%;\n  background-color: var(--persian-green);\n  display: grid;\n  grid-template-rows: max-content max-content 1fr;\n  padding: var(--def-spacing);\n  overflow-y: scroll;\n}\n\n.start-button {\n  padding: var(--def-spacing);\n  margin-bottom: var(--def-spacing);\n  border-radius: 20px;\n  background-color: var(--burnt-sienna);\n  font-size: 3rem;\n  color: var(--charcoal);\n  max-width: 100%;\n  text-align: center;\n  justify-self: center;\n  -webkit-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  -moz-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  box-shadow: 10px 10px 7px -4px var(--charcoal);\n  cursor: pointer;\n}\n\n.start-button:hover {\n  scale: 1.05;\n}\n\n.start-button:active {\n  scale: 1;\n}\n\n.game-prompt {\n  text-align: center;\n  color: var(--charcoal);\n  font-size: 1.5rem;\n  margin-bottom: var(--def-spacing);\n}\n\n.game-board {\n  height: min(95vw, 100%);\n  aspect-ratio: 1;\n  border-radius: var(--med-br);\n  padding: 20px;\n  background-color: var(--saffron);\n\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 1.2rem;\n}\n\n.game-tile {\n  aspect-ratio: 1;\n  background-color: sandybrown;\n  border-radius: var(--med-br);\n  border: 4px solid var(--burnt-sienna);\n  cursor: pointer;\n}\n\n.game-tile:hover {\n  scale: 1.05;\n}\n.game-tile:active {\n  scale: 1;\n}\n\n.O {\n  background-image: url(\"./global-assets/images/O-charcoal.png\");\n}\n\n.X {\n  background-image: url(\"./global-assets/images/X-charcoal.png\");\n}\n\n.O,\n.X {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-origin: content-box;\n  padding: 10px;\n}\n\nfooter {\n  padding: 20px;\n  background-color: var(--charcoal);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n  margin-left: var(--marginSpace);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\nfooter .top-attribution {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n\nfooter .top-link {\n  color: var(--burnt-sienna);\n  margin-left: var(--marginSpace);\n}\n\nfooter .top-link:visited {\n  color: var(--burnt-sienna);\n}\n\n.placeholder:nth-child(even) {\n  background-color: green;\n}\n\n.placeholder:nth-child(odd) {\n  background-color: red;\n}\n\n/* ---------------UTILITY CLASSES--------------- */\n.unselectable {\n  user-select: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.disabled:hover {\n  scale: 1;\n}\n\n/* --------------- MEDIA QUERY --------------- */\n@media only screen and (max-width: 400px) {\n  .start-button {\n    font-size: 2rem;\n  }\n  .start-button:hover {\n    scale: 1;\n  }\n  .game-tile:hover {\n    scale: 1;\n  }\n  .game-board {\n    height: 80vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Content":
/*!********************************!*\
  !*** ./src/components/Content ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartButton */ "./src/components/StartButton.js");
/* harmony import */ var _GamePrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GamePrompt */ "./src/components/GamePrompt.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ "./src/components/GameBoard.js");




const placeholder = () => {
  const placeholder = Object.assign(document.createElement("div"), {
    className: "placeholder",
  });
  return placeholder;
};

const Content = () => {
  const content = Object.assign(document.createElement("div"), {
    className: "content",
  });

  content.appendChild((0,_StartButton__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_GamePrompt__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])());

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/github-mark-white.png */ "./src/components/Footer/logos/github-mark-white.png");


const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${new Date().getFullYear()}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    className: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: "https://github.com/carlin-mitchell/TicTacToe-webpack-TOP",
  });

  const githubIcon = Object.assign(document.createElement("img"), {
    src: _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,
  });

  githubLink.appendChild(githubIcon);
  copyrightContainer.appendChild(githubLink);
  topContainer.appendChild(topLink);
  footer.appendChild(copyrightContainer);
  footer.appendChild(topContainer);

  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/GameBoard.js":
/*!*************************************!*\
  !*** ./src/components/GameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameTile */ "./src/components/GameTile.js");


const GameBoard = () => {
  const gameBoard = Object.assign(document.createElement("div"), {
    className: "game-board",
  });

  for (let i = 0; i < 9; i++) {
    gameBoard.appendChild((0,_GameTile__WEBPACK_IMPORTED_MODULE_0__["default"])(`game-tile-${i}`));
  }

  return gameBoard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/components/GamePrompt.js":
/*!**************************************!*\
  !*** ./src/components/GamePrompt.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GamePrompt = () => {
  const prompt = Object.assign(document.createElement("div"), {
    className: "game-prompt",
    innerText: "Press the button above to play!",
  });

  return prompt;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePrompt);


/***/ }),

/***/ "./src/components/GameTile.js":
/*!************************************!*\
  !*** ./src/components/GameTile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GameTile = (id) => {
  const tile = Object.assign(document.createElement("div"), {
    id: id,
    className: "game-tile",
  });

  return tile;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameTile);


/***/ }),

/***/ "./src/components/StartButton.js":
/*!***************************************!*\
  !*** ./src/components/StartButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/GameController */ "./src/logic/GameController.js");


const StartButton = () => {
  const startingText = "Tic Tac Toe";
  const button = Object.assign(document.createElement("div"), {
    className: "start-button unselectable",
    innerText: startingText,
    onmouseover: function () {
      if (!_logic_GameController__WEBPACK_IMPORTED_MODULE_0__["default"].getGameIsRunning()) {
        this.innerText = startingText.replace("Toe", "Go!");
      }
    },
    onmouseout: function () {
      if (!_logic_GameController__WEBPACK_IMPORTED_MODULE_0__["default"].getGameIsRunning()) {
        this.innerText = startingText;
      }
    },
  });
  return button;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartButton);


/***/ }),

/***/ "./src/logic/GameController.js":
/*!*************************************!*\
  !*** ./src/logic/GameController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenController */ "./src/logic/ScreenController.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/logic/Player.js");



const GameController = (() => {
  let gameBoard = Array(9).fill("");
  const getGameBoard = () => gameBoard;
  const updateGameBoard = (index) => {
    gameBoard[index] = activePlayer.marker;
    console.log(gameBoard);
  };
  const resetGameBoard = () => {
    gameBoard = gameBoard.map((e) => "");
  };

  let gameIsRunning = false;
  const getGameIsRunning = () => gameIsRunning;

  const player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("X", "X");
  const player2 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("O", "O");
  let activePlayer = player1;
  const toggleActivePlayer = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(`It's ${activePlayer.name}'s turn`);
  };

  const playRound = () => {
    if (!gameIsRunning) {
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].disableStartButton();
      activePlayer = player1;
      resetGameBoard();
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].resetGameTiles();
      gameIsRunning = true;
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(`It's ${activePlayer.name}'s turn`);
    }
  };

  const placeMarker = (index) => {
    if (gameIsRunning && gameBoard[index] === "") {
      updateGameBoard(index);
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGameTile(index, activePlayer.marker);
      checkForWin();
      if (gameIsRunning) {
        toggleActivePlayer();
      }
    }
  };

  const gameOver = (winner) => {
    gameIsRunning = false;
    if (winner) {
      console.log(winner);
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(
        `${activePlayer.name} wins! Press the button to play again!`
      );
    } else {
      _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(`It's a draw! Press the button to play again!`);
    }
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateStartButtonText("Tic Tac Toe");
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].enableStartButton();
  };

  const checkForWin = () => {
    const row1 = gameBoard.slice(0, 3).join("");
    const row2 = gameBoard.slice(3, 6).join("");
    const row3 = gameBoard.slice(6, 9).join("");

    const col1 = gameBoard[0] + gameBoard[3] + gameBoard[6];
    const col2 = gameBoard[1] + gameBoard[4] + gameBoard[7];
    const col3 = gameBoard[2] + gameBoard[5] + gameBoard[8];

    const diag1 = gameBoard[0] + gameBoard[4] + gameBoard[8];
    const diag2 = gameBoard[2] + gameBoard[4] + gameBoard[6];

    const winRegex = /XXX|OOO/;

    if (winRegex.test(row1) || winRegex.test(row2) || winRegex.test(row3)) {
      console.log("row win!");
      gameOver(activePlayer);
    } else if (
      winRegex.test(col1) ||
      winRegex.test(col2) ||
      winRegex.test(col3)
    ) {
      console.log("column win!");
      gameOver(activePlayer);
      return activePlayer;
    } else if (winRegex.test(diag1) || winRegex.test(diag2)) {
      console.log("diag win!");
      gameOver(activePlayer);
      return activePlayer;
    } else if (gameBoard.filter((tile) => tile === "").length === 0) {
      console.log("its a draw");
      gameOver("");
    }
  };

  return {
    getGameBoard,
    getGameIsRunning,
    resetGameBoard,
    playRound,
    placeMarker,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

/***/ "./src/logic/Player.js":
/*!*****************************!*\
  !*** ./src/logic/Player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (name, marker) => {
  function getName() {
    return name;
  }

  function getMarker() {
    return marker;
  }

  return {
    name,
    getName,
    marker,
    getMarker,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/logic/ScreenController.js":
/*!***************************************!*\
  !*** ./src/logic/ScreenController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content");
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameController */ "./src/logic/GameController.js");





const ScreenController = (() => {
  //Start Button

  const setInitialView = () => {
    document.body.appendChild((0,_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"])());
    document.body.appendChild((0,_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_0__["default"])());

    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", _GameController__WEBPACK_IMPORTED_MODULE_2__["default"].playRound);

    const gameTiles = document.querySelectorAll(".game-tile");
    gameTiles.forEach((tile) => {
      tile.addEventListener("click", function () {
        // extract the tile's number from the id
        const index = this.id.split("-")[2];
        _GameController__WEBPACK_IMPORTED_MODULE_2__["default"].placeMarker(index);
      });
    });
  };

  const updateStartButtonText = (string) => {
    const button = document.querySelector(".start-button");
    button.innerText = string;
  };

  const disableStartButton = () => {
    const button = document.querySelector(".start-button");
    button.classList.add("disabled");
  };

  const enableStartButton = () => {
    const button = document.querySelector(".start-button");
    button.classList.remove("disabled");
  };

  const updateGameTile = (index, marker) => {
    const tile = document.querySelector("#game-tile-" + index);
    tile.classList.add(marker);
  };

  const resetGameTiles = () => {
    const gameTiles = document.querySelectorAll(".game-tile");
    gameTiles.forEach((tile) => {
      tile.className = "game-tile";
    });
  };

  const updateGamePrompt = (string) => {
    console.log(string);
    const prompt = document.querySelector(".game-prompt");
    prompt.innerText = string;
  };

  return {
    setInitialView,
    updateGamePrompt,
    updateGameTile,
    resetGameTiles,
    updateStartButtonText,
    disableStartButton,
    enableStartButton,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


/***/ }),

/***/ "./src/components/Footer/logos/github-mark-white.png":
/*!***********************************************************!*\
  !*** ./src/components/Footer/logos/github-mark-white.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf":
/*!*****************************************************************************!*\
  !*** ./src/global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5bd09202b6c1ec4ec3b.ttf";

/***/ }),

/***/ "./src/global-assets/images/O-charcoal.png":
/*!*************************************************!*\
  !*** ./src/global-assets/images/O-charcoal.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7200cbef6e676a1ffec.png";

/***/ }),

/***/ "./src/global-assets/images/X-charcoal.png":
/*!*************************************************!*\
  !*** ./src/global-assets/images/X-charcoal.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df036aab7c7783ad4317.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_ScreenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/ScreenController */ "./src/logic/ScreenController.js");
/* harmony import */ var _logic_GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/GameController */ "./src/logic/GameController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//################# LOGIC IMPORTS ###################



//################# STYLE IMPORTS ###################


_logic_ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].setInitialView();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDOEM7QUFDTTs7QUFFcEQ7QUFDcUI7O0FBRXJCLDhFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvR2FtZVByb21wdC5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9HYW1lVGlsZS5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9TdGFydEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvbG9naWMvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL1BsYXllci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvbG9naWMvU2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9WYXJlbGFSb3VuZC1SZWd1bGFyL1ZhcmVsYVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ltYWdlcy9PLWNoYXJjb2FsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9pbWFnZXMvWC1jaGFyY29hbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFZhcmVsYVJvdW5kO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBjb2xvcnMgKi9cXG4gIC0tY2hhcmNvYWw6ICMyNjQ2NTNmZjtcXG4gIC0tcGVyc2lhbi1ncmVlbjogIzJhOWQ4ZmZmO1xcbiAgLS1zYWZmcm9uOiAjZTljNDZhZmY7XFxuICAtLXNhbmR5LWJyb3duOiAjZjRhMjYxZmY7XFxuICAtLWJ1cm50LXNpZW5uYTogI2U3NmY1MWZmO1xcblxcbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xcbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjJyZW07XFxuICAtLXRpbGUtc2l6ZTogMTUwcHg7XFxuXFxuICAtLXNtYWxsLWJyOiA1cHg7XFxuICAtLW1lZC1icjogMTBweDtcXG4gIC0tZGVmLXNwYWNpbmc6IDI1cHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IFZhcmVsYVJvdW5kLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgcGFkZGluZzogdmFyKC0tZGVmLXNwYWNpbmcpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLWRlZi1zcGFjaW5nKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWRlZi1zcGFjaW5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggN3B4IC00cHggdmFyKC0tY2hhcmNvYWwpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggN3B4IC00cHggdmFyKC0tY2hhcmNvYWwpO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtNHB4IHZhcigtLWNoYXJjb2FsKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5nYW1lLXByb21wdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGhlaWdodDogbWluKDk1dncsIDEwMCUpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkLWJyKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcXG5cXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxLjJyZW07XFxufVxcblxcbi5nYW1lLXRpbGUge1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZC1icik7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZS10aWxlOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG4uZ2FtZS10aWxlOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLk8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLlgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLk8sXFxuLlgge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMnJlbSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1hdHRyaWJ1dGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvb3RlciAudG9wLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLVVUSUxJVFkgQ0xBU1NFUy0tLS0tLS0tLS0tLS0tLSAqL1xcbi51bnNlbGVjdGFibGUge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZGlzYWJsZWQ6aG92ZXIge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSWSAtLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtdGlsZTpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtYm9hcmQge1xcbiAgICBoZWlnaHQ6IDgwdnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTJFO0FBQzdFOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix5QkFBeUI7O0VBRXpCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0RBQXNEO0VBQ3RELG1EQUFtRDtFQUNuRCw4Q0FBOEM7RUFDOUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixnQ0FBZ0M7O0VBRWhDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLHlEQUE4RDtBQUNoRTs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBWYXJlbGFSb3VuZDtcXG4gIHNyYzogdXJsKC4vZ2xvYmFsLWFzc2V0cy9mb250cy9WYXJlbGFSb3VuZC1SZWd1bGFyL1ZhcmVsYVJvdW5kLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLWNoYXJjb2FsOiAjMjY0NjUzZmY7XFxuICAtLXBlcnNpYW4tZ3JlZW46ICMyYTlkOGZmZjtcXG4gIC0tc2FmZnJvbjogI2U5YzQ2YWZmO1xcbiAgLS1zYW5keS1icm93bjogI2Y0YTI2MWZmO1xcbiAgLS1idXJudC1zaWVubmE6ICNlNzZmNTFmZjtcXG5cXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcXG4gIC0tZm9vdGVyLWZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgLS10aWxlLXNpemU6IDE1MHB4O1xcblxcbiAgLS1zbWFsbC1icjogNXB4O1xcbiAgLS1tZWQtYnI6IDEwcHg7XFxuICAtLWRlZi1zcGFjaW5nOiAyNXB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBWYXJlbGFSb3VuZCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmcjtcXG4gIHBhZGRpbmc6IHZhcigtLWRlZi1zcGFjaW5nKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtNHB4IHZhcigtLWNoYXJjb2FsKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtNHB4IHZhcigtLWNoYXJjb2FsKTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTRweCB2YXIoLS1jaGFyY29hbCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydC1idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5zdGFydC1idXR0b246YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uZ2FtZS1wcm9tcHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZGVmLXNwYWNpbmcpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBoZWlnaHQ6IG1pbig5NXZ3LCAxMDAlKTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZC1icik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FmZnJvbik7XFxuXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMS4ycmVtO1xcbn1cXG5cXG4uZ2FtZS10aWxlIHtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWQtYnIpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWUtdGlsZTpob3ZlciB7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuLmdhbWUtdGlsZTphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5PIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ltYWdlcy9PLWNoYXJjb2FsLnBuZ1xcXCIpO1xcbn1cXG5cXG4uWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9pbWFnZXMvWC1jaGFyY29hbC5wbmdcXFwiKTtcXG59XFxuXFxuLk8sXFxuLlgge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMnJlbSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1hdHRyaWJ1dGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvb3RlciAudG9wLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLVVUSUxJVFkgQ0xBU1NFUy0tLS0tLS0tLS0tLS0tLSAqL1xcbi51bnNlbGVjdGFibGUge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZGlzYWJsZWQ6aG92ZXIge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSWSAtLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtdGlsZTpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtYm9hcmQge1xcbiAgICBoZWlnaHQ6IDgwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gXCIuL1N0YXJ0QnV0dG9uXCI7XG5pbXBvcnQgR2FtZVByb21wdCBmcm9tIFwiLi9HYW1lUHJvbXB0XCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuXG5jb25zdCBwbGFjZWhvbGRlciA9ICgpID0+IHtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgfSk7XG4gIHJldHVybiBwbGFjZWhvbGRlcjtcbn07XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udGVudFwiLFxuICB9KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKFN0YXJ0QnV0dG9uKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKEdhbWVQcm9tcHQoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoR2FtZUJvYXJkKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImltcG9ydCBHaXRIdWJJY29uIGZyb20gXCIuL2xvZ29zL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKSwge30pO1xuXG4gIGNvbnN0IGNvcHlyaWdodENvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtY29udGFpbmVyXCIsXG4gICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtYXR0cmlidXRpb25cIixcbiAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgYnlcIixcbiAgfSk7XG5cbiAgY29uc3QgdG9wTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICB9KTtcblxuICBjb25zdCBnaXRodWJMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9UaWNUYWNUb2Utd2VicGFjay1UT1BcIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIHNyYzogR2l0SHViSWNvbixcbiAgfSk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgY29weXJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wTGluayk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRDb250YWluZXIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IEdhbWVUaWxlIGZyb20gXCIuL0dhbWVUaWxlXCI7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImdhbWUtYm9hcmRcIixcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoR2FtZVRpbGUoYGdhbWUtdGlsZS0ke2l9YCkpO1xuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNvbnN0IEdhbWVQcm9tcHQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb21wdCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJnYW1lLXByb21wdFwiLFxuICAgIGlubmVyVGV4dDogXCJQcmVzcyB0aGUgYnV0dG9uIGFib3ZlIHRvIHBsYXkhXCIsXG4gIH0pO1xuXG4gIHJldHVybiBwcm9tcHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUHJvbXB0O1xuIiwiY29uc3QgR2FtZVRpbGUgPSAoaWQpID0+IHtcbiAgY29uc3QgdGlsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBpZCxcbiAgICBjbGFzc05hbWU6IFwiZ2FtZS10aWxlXCIsXG4gIH0pO1xuXG4gIHJldHVybiB0aWxlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVRpbGU7XG4iLCJpbXBvcnQgZ2FtZSBmcm9tIFwiLi4vbG9naWMvR2FtZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgU3RhcnRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXJ0aW5nVGV4dCA9IFwiVGljIFRhYyBUb2VcIjtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInN0YXJ0LWJ1dHRvbiB1bnNlbGVjdGFibGVcIixcbiAgICBpbm5lclRleHQ6IHN0YXJ0aW5nVGV4dCxcbiAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFnYW1lLmdldEdhbWVJc1J1bm5pbmcoKSkge1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHN0YXJ0aW5nVGV4dC5yZXBsYWNlKFwiVG9lXCIsIFwiR28hXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25tb3VzZW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFnYW1lLmdldEdhbWVJc1J1bm5pbmcoKSkge1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHN0YXJ0aW5nVGV4dDtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0QnV0dG9uO1xuIiwiaW1wb3J0IHNjcmVlbiBmcm9tIFwiLi9TY3JlZW5Db250cm9sbGVyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBHYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBnYW1lQm9hcmQgPSBBcnJheSg5KS5maWxsKFwiXCIpO1xuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAoKSA9PiBnYW1lQm9hcmQ7XG4gIGNvbnN0IHVwZGF0ZUdhbWVCb2FyZCA9IChpbmRleCkgPT4ge1xuICAgIGdhbWVCb2FyZFtpbmRleF0gPSBhY3RpdmVQbGF5ZXIubWFya2VyO1xuICAgIGNvbnNvbGUubG9nKGdhbWVCb2FyZCk7XG4gIH07XG4gIGNvbnN0IHJlc2V0R2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGdhbWVCb2FyZCA9IGdhbWVCb2FyZC5tYXAoKGUpID0+IFwiXCIpO1xuICB9O1xuXG4gIGxldCBnYW1lSXNSdW5uaW5nID0gZmFsc2U7XG4gIGNvbnN0IGdldEdhbWVJc1J1bm5pbmcgPSAoKSA9PiBnYW1lSXNSdW5uaW5nO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJYXCIsIFwiWFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcihcIk9cIiwgXCJPXCIpO1xuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcbiAgY29uc3QgdG9nZ2xlQWN0aXZlUGxheWVyID0gKCkgPT4ge1xuICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICAgIHNjcmVlbi51cGRhdGVHYW1lUHJvbXB0KGBJdCdzICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgdHVybmApO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9ICgpID0+IHtcbiAgICBpZiAoIWdhbWVJc1J1bm5pbmcpIHtcbiAgICAgIHNjcmVlbi5kaXNhYmxlU3RhcnRCdXR0b24oKTtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcjE7XG4gICAgICByZXNldEdhbWVCb2FyZCgpO1xuICAgICAgc2NyZWVuLnJlc2V0R2FtZVRpbGVzKCk7XG4gICAgICBnYW1lSXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHNjcmVlbi51cGRhdGVHYW1lUHJvbXB0KGBJdCdzICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgdHVybmApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZU1hcmtlciA9IChpbmRleCkgPT4ge1xuICAgIGlmIChnYW1lSXNSdW5uaW5nICYmIGdhbWVCb2FyZFtpbmRleF0gPT09IFwiXCIpIHtcbiAgICAgIHVwZGF0ZUdhbWVCb2FyZChpbmRleCk7XG4gICAgICBzY3JlZW4udXBkYXRlR2FtZVRpbGUoaW5kZXgsIGFjdGl2ZVBsYXllci5tYXJrZXIpO1xuICAgICAgY2hlY2tGb3JXaW4oKTtcbiAgICAgIGlmIChnYW1lSXNSdW5uaW5nKSB7XG4gICAgICAgIHRvZ2dsZUFjdGl2ZVBsYXllcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICh3aW5uZXIpID0+IHtcbiAgICBnYW1lSXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgY29uc29sZS5sb2cod2lubmVyKTtcbiAgICAgIHNjcmVlbi51cGRhdGVHYW1lUHJvbXB0KFxuICAgICAgICBgJHthY3RpdmVQbGF5ZXIubmFtZX0gd2lucyEgUHJlc3MgdGhlIGJ1dHRvbiB0byBwbGF5IGFnYWluIWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmVlbi51cGRhdGVHYW1lUHJvbXB0KGBJdCdzIGEgZHJhdyEgUHJlc3MgdGhlIGJ1dHRvbiB0byBwbGF5IGFnYWluIWApO1xuICAgIH1cbiAgICBzY3JlZW4udXBkYXRlU3RhcnRCdXR0b25UZXh0KFwiVGljIFRhYyBUb2VcIik7XG4gICAgc2NyZWVuLmVuYWJsZVN0YXJ0QnV0dG9uKCk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93MSA9IGdhbWVCb2FyZC5zbGljZSgwLCAzKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IHJvdzIgPSBnYW1lQm9hcmQuc2xpY2UoMywgNikuam9pbihcIlwiKTtcbiAgICBjb25zdCByb3czID0gZ2FtZUJvYXJkLnNsaWNlKDYsIDkpLmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCBjb2wxID0gZ2FtZUJvYXJkWzBdICsgZ2FtZUJvYXJkWzNdICsgZ2FtZUJvYXJkWzZdO1xuICAgIGNvbnN0IGNvbDIgPSBnYW1lQm9hcmRbMV0gKyBnYW1lQm9hcmRbNF0gKyBnYW1lQm9hcmRbN107XG4gICAgY29uc3QgY29sMyA9IGdhbWVCb2FyZFsyXSArIGdhbWVCb2FyZFs1XSArIGdhbWVCb2FyZFs4XTtcblxuICAgIGNvbnN0IGRpYWcxID0gZ2FtZUJvYXJkWzBdICsgZ2FtZUJvYXJkWzRdICsgZ2FtZUJvYXJkWzhdO1xuICAgIGNvbnN0IGRpYWcyID0gZ2FtZUJvYXJkWzJdICsgZ2FtZUJvYXJkWzRdICsgZ2FtZUJvYXJkWzZdO1xuXG4gICAgY29uc3Qgd2luUmVnZXggPSAvWFhYfE9PTy87XG5cbiAgICBpZiAod2luUmVnZXgudGVzdChyb3cxKSB8fCB3aW5SZWdleC50ZXN0KHJvdzIpIHx8IHdpblJlZ2V4LnRlc3Qocm93MykpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicm93IHdpbiFcIik7XG4gICAgICBnYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDEpIHx8XG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDIpIHx8XG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDMpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbHVtbiB3aW4hXCIpO1xuICAgICAgZ2FtZU92ZXIoYWN0aXZlUGxheWVyKTtcbiAgICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gICAgfSBlbHNlIGlmICh3aW5SZWdleC50ZXN0KGRpYWcxKSB8fCB3aW5SZWdleC50ZXN0KGRpYWcyKSkge1xuICAgICAgY29uc29sZS5sb2coXCJkaWFnIHdpbiFcIik7XG4gICAgICBnYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuICAgICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZC5maWx0ZXIoKHRpbGUpID0+IHRpbGUgPT09IFwiXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJpdHMgYSBkcmF3XCIpO1xuICAgICAgZ2FtZU92ZXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0R2FtZUJvYXJkLFxuICAgIGdldEdhbWVJc1J1bm5pbmcsXG4gICAgcmVzZXRHYW1lQm9hcmQsXG4gICAgcGxheVJvdW5kLFxuICAgIHBsYWNlTWFya2VyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgbWFya2VyKSA9PiB7XG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXIoKSB7XG4gICAgcmV0dXJuIG1hcmtlcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBnZXROYW1lLFxuICAgIG1hcmtlcixcbiAgICBnZXRNYXJrZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcblxuaW1wb3J0IGdhbWUgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8vU3RhcnQgQnV0dG9uXG5cbiAgY29uc3Qgc2V0SW5pdGlhbFZpZXcgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5wbGF5Um91bmQpO1xuXG4gICAgY29uc3QgZ2FtZVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLXRpbGVcIik7XG4gICAgZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXh0cmFjdCB0aGUgdGlsZSdzIG51bWJlciBmcm9tIHRoZSBpZFxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaWQuc3BsaXQoXCItXCIpWzJdO1xuICAgICAgICBnYW1lLnBsYWNlTWFya2VyKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXJ0QnV0dG9uVGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gc3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlR2FtZVRpbGUgPSAoaW5kZXgsIG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtdGlsZS1cIiArIGluZGV4KTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQobWFya2VyKTtcbiAgfTtcblxuICBjb25zdCByZXNldEdhbWVUaWxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWUtdGlsZVwiKTtcbiAgICBnYW1lVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc05hbWUgPSBcImdhbWUtdGlsZVwiO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVQcm9tcHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RyaW5nKTtcbiAgICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtcHJvbXB0XCIpO1xuICAgIHByb21wdC5pbm5lclRleHQgPSBzdHJpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRJbml0aWFsVmlldyxcbiAgICB1cGRhdGVHYW1lUHJvbXB0LFxuICAgIHVwZGF0ZUdhbWVUaWxlLFxuICAgIHJlc2V0R2FtZVRpbGVzLFxuICAgIHVwZGF0ZVN0YXJ0QnV0dG9uVGV4dCxcbiAgICBkaXNhYmxlU3RhcnRCdXR0b24sXG4gICAgZW5hYmxlU3RhcnRCdXR0b24sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5Db250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyMjIyMjIyMjIyMjIyMjIyMjIExPR0lDIElNUE9SVFMgIyMjIyMjIyMjIyMjIyMjIyMjI1xuaW1wb3J0IHNjcmVlbiBmcm9tIFwiLi9sb2dpYy9TY3JlZW5Db250cm9sbGVyXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vbG9naWMvR2FtZUNvbnRyb2xsZXJcIjtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyBTVFlMRSBJTVBPUlRTICMjIyMjIyMjIyMjIyMjIyMjIyNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnNjcmVlbi5zZXRJbml0aWFsVmlldygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9