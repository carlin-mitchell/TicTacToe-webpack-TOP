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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: VarelaRound;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  /* colors */\n  --charcoal: #264653ff;\n  --persian-green: #2a9d8fff;\n  --saffron: #e9c46aff;\n  --sandy-brown: #f4a261ff;\n  --burnt-sienna: #e76f51ff;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1.2rem;\n  --tile-size: 150px;\n\n  --small-br: 5px;\n  --med-br: 10px;\n  --def-spacing: 25px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 100px;\n  font-family: VarelaRound, sans-serif;\n}\n\n.content {\n  width: 100%;\n  background-color: var(--persian-green);\n  display: grid;\n  grid-template-rows: max-content max-content 1fr;\n  padding: var(--def-spacing);\n  overflow-y: scroll;\n}\n\n.start-button {\n  padding: var(--def-spacing);\n  margin-bottom: var(--def-spacing);\n  border-radius: 20px;\n  background-color: var(--burnt-sienna);\n  font-size: 3rem;\n  color: var(--charcoal);\n  max-width: 100%;\n  text-align: center;\n  justify-self: center;\n  -webkit-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  -moz-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  box-shadow: 10px 10px 7px -4px var(--charcoal);\n  cursor: pointer;\n}\n\n.start-button:hover {\n  scale: 1.05;\n}\n\n.start-button:active {\n  scale: 1;\n}\n\n.game-prompt {\n  text-align: center;\n  color: var(--charcoal);\n  font-size: 1.5rem;\n  margin-bottom: var(--def-spacing);\n}\n\n.game-board {\n  height: min(95vw, 100%);\n  aspect-ratio: 1;\n  border-radius: var(--med-br);\n  padding: 20px;\n  background-color: var(--saffron);\n\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 1.2rem;\n}\n\n.game-tile {\n  aspect-ratio: 1;\n  background-color: sandybrown;\n  border-radius: var(--med-br);\n  border: 4px solid var(--burnt-sienna);\n  cursor: pointer;\n}\n\n.game-tile:hover {\n  scale: 1.05;\n}\n.game-tile:active {\n  scale: 1;\n}\n\n.O {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.X {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.O,\n.X {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-origin: content-box;\n  padding: 10px;\n}\n\nfooter {\n  padding: 20px;\n  background-color: var(--charcoal);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n  margin-left: var(--marginSpace);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\nfooter .top-attribution {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n\nfooter .top-link {\n  color: var(--burnt-sienna);\n  margin-left: var(--marginSpace);\n}\n\nfooter .top-link:visited {\n  color: var(--burnt-sienna);\n}\n\n.placeholder:nth-child(even) {\n  background-color: green;\n}\n\n.placeholder:nth-child(odd) {\n  background-color: red;\n}\n\n/* ---------------UTILITY CLASSES--------------- */\n.unselectable {\n  user-select: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* --------------- MEDIA QUERY --------------- */\n@media only screen and (max-width: 400px) {\n  .start-button {\n    font-size: 2rem;\n  }\n  .start-button:hover {\n    scale: 1;\n  }\n  .game-tile:hover {\n    scale: 1;\n  }\n  .game-board {\n    height: 80vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA2E;AAC7E;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,0BAA0B;EAC1B,oBAAoB;EACpB,wBAAwB;EACxB,yBAAyB;;EAEzB,qBAAqB;EACrB,0BAA0B;EAC1B,kBAAkB;;EAElB,eAAe;EACf,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,aAAa;EACb,+CAA+C;EAC/C,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,iCAAiC;EACjC,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,sDAAsD;EACtD,mDAAmD;EACnD,8CAA8C;EAC9C,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,4BAA4B;EAC5B,aAAa;EACb,gCAAgC;;EAEhC,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,4BAA4B;EAC5B,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;AACA;EACE,QAAQ;AACV;;AAEA;EACE,yDAA8D;AAChE;;AAEA;EACE,yDAA8D;AAChE;;AAEA;;EAEE,4BAA4B;EAC5B,wBAAwB;EACxB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;EAC9C,+BAA+B;AACjC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,+BAA+B;AACjC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,kDAAkD;AAClD;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,gDAAgD;AAChD;EACE;IACE,eAAe;EACjB;EACA;IACE,QAAQ;EACV;EACA;IACE,QAAQ;EACV;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["@font-face {\n  font-family: VarelaRound;\n  src: url(./global-assets/fonts/VarelaRound-Regular/VarelaRound-Regular.ttf);\n}\n\n:root {\n  /* colors */\n  --charcoal: #264653ff;\n  --persian-green: #2a9d8fff;\n  --saffron: #e9c46aff;\n  --sandy-brown: #f4a261ff;\n  --burnt-sienna: #e76f51ff;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1.2rem;\n  --tile-size: 150px;\n\n  --small-br: 5px;\n  --med-br: 10px;\n  --def-spacing: 25px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 100px;\n  font-family: VarelaRound, sans-serif;\n}\n\n.content {\n  width: 100%;\n  background-color: var(--persian-green);\n  display: grid;\n  grid-template-rows: max-content max-content 1fr;\n  padding: var(--def-spacing);\n  overflow-y: scroll;\n}\n\n.start-button {\n  padding: var(--def-spacing);\n  margin-bottom: var(--def-spacing);\n  border-radius: 20px;\n  background-color: var(--burnt-sienna);\n  font-size: 3rem;\n  color: var(--charcoal);\n  max-width: 100%;\n  text-align: center;\n  justify-self: center;\n  -webkit-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  -moz-box-shadow: 10px 10px 7px -4px var(--charcoal);\n  box-shadow: 10px 10px 7px -4px var(--charcoal);\n  cursor: pointer;\n}\n\n.start-button:hover {\n  scale: 1.05;\n}\n\n.start-button:active {\n  scale: 1;\n}\n\n.game-prompt {\n  text-align: center;\n  color: var(--charcoal);\n  font-size: 1.5rem;\n  margin-bottom: var(--def-spacing);\n}\n\n.game-board {\n  height: min(95vw, 100%);\n  aspect-ratio: 1;\n  border-radius: var(--med-br);\n  padding: 20px;\n  background-color: var(--saffron);\n\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 1.2rem;\n}\n\n.game-tile {\n  aspect-ratio: 1;\n  background-color: sandybrown;\n  border-radius: var(--med-br);\n  border: 4px solid var(--burnt-sienna);\n  cursor: pointer;\n}\n\n.game-tile:hover {\n  scale: 1.05;\n}\n.game-tile:active {\n  scale: 1;\n}\n\n.O {\n  background-image: url(\"./global-assets/images/O-charcoal.png\");\n}\n\n.X {\n  background-image: url(\"./global-assets/images/X-charcoal.png\");\n}\n\n.O,\n.X {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-origin: content-box;\n  padding: 10px;\n}\n\nfooter {\n  padding: 20px;\n  background-color: var(--charcoal);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n  margin-left: var(--marginSpace);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\nfooter .top-attribution {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n\nfooter .top-link {\n  color: var(--burnt-sienna);\n  margin-left: var(--marginSpace);\n}\n\nfooter .top-link:visited {\n  color: var(--burnt-sienna);\n}\n\n.placeholder:nth-child(even) {\n  background-color: green;\n}\n\n.placeholder:nth-child(odd) {\n  background-color: red;\n}\n\n/* ---------------UTILITY CLASSES--------------- */\n.unselectable {\n  user-select: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* --------------- MEDIA QUERY --------------- */\n@media only screen and (max-width: 400px) {\n  .start-button {\n    font-size: 2rem;\n  }\n  .start-button:hover {\n    scale: 1;\n  }\n  .game-tile:hover {\n    scale: 1;\n  }\n  .game-board {\n    height: 80vw;\n  }\n}\n"],"sourceRoot":""}]);
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

  const player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("Player 1", "X");
  const player2 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__["default"])("Player 2", "O");
  let activePlayer = player1;
  const getActivePlayer = () => activePlayer;
  const toggleActivePlayer = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(`It's ${activePlayer.name}'s turn`);
  };

  const playRound = () => {
    resetGameBoard();
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].resetGameTiles();
    gameIsRunning = true;
    _ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].updateGamePrompt(`It's ${activePlayer.name}'s turn`);
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

  return { setInitialView, updateGamePrompt, updateGameTile, resetGameTiles };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUM4QztBQUNNOztBQUVwRDtBQUNxQjs7QUFFckIsOEVBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudCIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9HYW1lUHJvbXB0LmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0dhbWVUaWxlLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL1N0YXJ0QnV0dG9uLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3AvLi9zcmMvbG9naWMvUGxheWVyLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9TY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aWN0YWN0b2Utd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RpY3RhY3RvZS13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGljdGFjdG9lLXdlYnBhY2stdG9wLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL1ZhcmVsYVJvdW5kLVJlZ3VsYXIvVmFyZWxhUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2dsb2JhbC1hc3NldHMvaW1hZ2VzL08tY2hhcmNvYWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ltYWdlcy9YLWNoYXJjb2FsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVmFyZWxhUm91bmQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC8qIGNvbG9ycyAqL1xcbiAgLS1jaGFyY29hbDogIzI2NDY1M2ZmO1xcbiAgLS1wZXJzaWFuLWdyZWVuOiAjMmE5ZDhmZmY7XFxuICAtLXNhZmZyb246ICNlOWM0NmFmZjtcXG4gIC0tc2FuZHktYnJvd246ICNmNGEyNjFmZjtcXG4gIC0tYnVybnQtc2llbm5hOiAjZTc2ZjUxZmY7XFxuXFxuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XFxuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMnJlbTtcXG4gIC0tdGlsZS1zaXplOiAxNTBweDtcXG5cXG4gIC0tc21hbGwtYnI6IDVweDtcXG4gIC0tbWVkLWJyOiAxMHB4O1xcbiAgLS1kZWYtc3BhY2luZzogMjVweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTAwcHg7XFxuICBmb250LWZhbWlseTogVmFyZWxhUm91bmQsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICBwYWRkaW5nOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgcGFkZGluZzogdmFyKC0tZGVmLXNwYWNpbmcpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZGVmLXNwYWNpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTRweCB2YXIoLS1jaGFyY29hbCk7XFxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTRweCB2YXIoLS1jaGFyY29hbCk7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggN3B4IC00cHggdmFyKC0tY2hhcmNvYWwpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmdhbWUtcHJvbXB0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWRlZi1zcGFjaW5nKTtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgaGVpZ2h0OiBtaW4oOTV2dywgMTAwJSk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWQtYnIpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhZmZyb24pO1xcblxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuLmdhbWUtdGlsZSB7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkLWJyKTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYW1lLXRpbGU6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcbi5nYW1lLXRpbGU6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uTyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4uWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4uTyxcXG4uWCB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4ycmVtKTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMjtcXG59XFxuXFxuZm9vdGVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbmZvb3RlciAudG9wLWF0dHJpYnV0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZm9vdGVyIC50b3AtbGluayB7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XFxufVxcblxcbmZvb3RlciAudG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYWNlaG9sZGVyOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tVVRJTElUWSBDTEFTU0VTLS0tLS0tLS0tLS0tLS0tICovXFxuLnVuc2VsZWN0YWJsZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSWSAtLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtdGlsZTpob3ZlciB7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgLmdhbWUtYm9hcmQge1xcbiAgICBoZWlnaHQ6IDgwdnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTJFO0FBQzdFOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix5QkFBeUI7O0VBRXpCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0RBQXNEO0VBQ3RELG1EQUFtRDtFQUNuRCw4Q0FBOEM7RUFDOUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixnQ0FBZ0M7O0VBRWhDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLHlEQUE4RDtBQUNoRTs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBWYXJlbGFSb3VuZDtcXG4gIHNyYzogdXJsKC4vZ2xvYmFsLWFzc2V0cy9mb250cy9WYXJlbGFSb3VuZC1SZWd1bGFyL1ZhcmVsYVJvdW5kLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLWNoYXJjb2FsOiAjMjY0NjUzZmY7XFxuICAtLXBlcnNpYW4tZ3JlZW46ICMyYTlkOGZmZjtcXG4gIC0tc2FmZnJvbjogI2U5YzQ2YWZmO1xcbiAgLS1zYW5keS1icm93bjogI2Y0YTI2MWZmO1xcbiAgLS1idXJudC1zaWVubmE6ICNlNzZmNTFmZjtcXG5cXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcXG4gIC0tZm9vdGVyLWZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgLS10aWxlLXNpemU6IDE1MHB4O1xcblxcbiAgLS1zbWFsbC1icjogNXB4O1xcbiAgLS1tZWQtYnI6IDEwcHg7XFxuICAtLWRlZi1zcGFjaW5nOiAyNXB4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBWYXJlbGFSb3VuZCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmcjtcXG4gIHBhZGRpbmc6IHZhcigtLWRlZi1zcGFjaW5nKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kZWYtc3BhY2luZyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtNHB4IHZhcigtLWNoYXJjb2FsKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtNHB4IHZhcigtLWNoYXJjb2FsKTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTRweCB2YXIoLS1jaGFyY29hbCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydC1idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5zdGFydC1idXR0b246YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uZ2FtZS1wcm9tcHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZGVmLXNwYWNpbmcpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBoZWlnaHQ6IG1pbig5NXZ3LCAxMDAlKTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZC1icik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FmZnJvbik7XFxuXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMS4ycmVtO1xcbn1cXG5cXG4uZ2FtZS10aWxlIHtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWQtYnIpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWUtdGlsZTpob3ZlciB7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuLmdhbWUtdGlsZTphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5PIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ltYWdlcy9PLWNoYXJjb2FsLnBuZ1xcXCIpO1xcbn1cXG5cXG4uWCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9pbWFnZXMvWC1jaGFyY29hbC5wbmdcXFwiKTtcXG59XFxuXFxuLk8sXFxuLlgge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMnJlbSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1hdHRyaWJ1dGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvb3RlciAudG9wLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5mb290ZXIgLnRvcC1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlcjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLVVUSUxJVFkgQ0xBU1NFUy0tLS0tLS0tLS0tLS0tLSAqL1xcbi51bnNlbGVjdGFibGUge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gTUVESUEgUVVFUlkgLS0tLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLnN0YXJ0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5zdGFydC1idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIC5nYW1lLXRpbGU6aG92ZXIge1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIC5nYW1lLWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA4MHZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTdGFydEJ1dHRvbiBmcm9tIFwiLi9TdGFydEJ1dHRvblwiO1xuaW1wb3J0IEdhbWVQcm9tcHQgZnJvbSBcIi4vR2FtZVByb21wdFwiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmRcIjtcblxuY29uc3QgcGxhY2Vob2xkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInBsYWNlaG9sZGVyXCIsXG4gIH0pO1xuICByZXR1cm4gcGxhY2Vob2xkZXI7XG59O1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIixcbiAgfSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChTdGFydEJ1dHRvbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChHYW1lUHJvbXB0KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKEdhbWVCb2FyZCgpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJpbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi9sb2dvcy9naXRodWItbWFyay13aGl0ZS5wbmdcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiksIHt9KTtcblxuICBjb25zdCBjb3B5cmlnaHRDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWNvbnRhaW5lclwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLFxuICB9KTtcblxuICBjb25zdCB0b3BDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWF0dHJpYnV0aW9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIGJ5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcExpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvVGljVGFjVG9lLXdlYnBhY2stVE9QXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBzcmM6IEdpdEh1Ykljb24sXG4gIH0pO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGNvcHlyaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExpbmspO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Q29udGFpbmVyKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBHYW1lVGlsZSBmcm9tIFwiLi9HYW1lVGlsZVwiO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJnYW1lLWJvYXJkXCIsXG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKEdhbWVUaWxlKGBnYW1lLXRpbGUtJHtpfWApKTtcbiAgfVxuXG4gIHJldHVybiBnYW1lQm9hcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJjb25zdCBHYW1lUHJvbXB0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9tcHQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiZ2FtZS1wcm9tcHRcIixcbiAgICBpbm5lclRleHQ6IFwiUHJlc3MgdGhlIGJ1dHRvbiBhYm92ZSB0byBwbGF5IVwiLFxuICB9KTtcblxuICByZXR1cm4gcHJvbXB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVByb21wdDtcbiIsImNvbnN0IEdhbWVUaWxlID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRpbGUgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogaWQsXG4gICAgY2xhc3NOYW1lOiBcImdhbWUtdGlsZVwiLFxuICB9KTtcblxuICByZXR1cm4gdGlsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVUaWxlO1xuIiwiaW1wb3J0IGdhbWUgZnJvbSBcIi4uL2xvZ2ljL0dhbWVDb250cm9sbGVyXCI7XG5cbmNvbnN0IFN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdGFydGluZ1RleHQgPSBcIlRpYyBUYWMgVG9lXCI7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJzdGFydC1idXR0b24gdW5zZWxlY3RhYmxlXCIsXG4gICAgaW5uZXJUZXh0OiBzdGFydGluZ1RleHQsXG4gICAgb25tb3VzZW92ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZ2FtZS5nZXRHYW1lSXNSdW5uaW5nKCkpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBzdGFydGluZ1RleHQucmVwbGFjZShcIlRvZVwiLCBcIkdvIVwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9ubW91c2VvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZ2FtZS5nZXRHYW1lSXNSdW5uaW5nKCkpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBzdGFydGluZ1RleHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydEJ1dHRvbjtcbiIsImltcG9ydCBzY3JlZW4gZnJvbSBcIi4vU2NyZWVuQ29udHJvbGxlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgR2FtZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgZ2FtZUJvYXJkID0gQXJyYXkoOSkuZmlsbChcIlwiKTtcbiAgY29uc3QgZ2V0R2FtZUJvYXJkID0gKCkgPT4gZ2FtZUJvYXJkO1xuICBjb25zdCB1cGRhdGVHYW1lQm9hcmQgPSAoaW5kZXgpID0+IHtcbiAgICBnYW1lQm9hcmRbaW5kZXhdID0gYWN0aXZlUGxheWVyLm1hcmtlcjtcbiAgICBjb25zb2xlLmxvZyhnYW1lQm9hcmQpO1xuICB9O1xuICBjb25zdCByZXNldEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBnYW1lQm9hcmQgPSBnYW1lQm9hcmQubWFwKChlKSA9PiBcIlwiKTtcbiAgfTtcblxuICBsZXQgZ2FtZUlzUnVubmluZyA9IGZhbHNlO1xuICBjb25zdCBnZXRHYW1lSXNSdW5uaW5nID0gKCkgPT4gZ2FtZUlzUnVubmluZztcblxuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKFwiUGxheWVyIDFcIiwgXCJYXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKFwiUGxheWVyIDJcIiwgXCJPXCIpO1xuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuICBjb25zdCB0b2dnbGVBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXIxID8gcGxheWVyMiA6IHBsYXllcjE7XG4gICAgc2NyZWVuLnVwZGF0ZUdhbWVQcm9tcHQoYEl0J3MgJHthY3RpdmVQbGF5ZXIubmFtZX0ncyB0dXJuYCk7XG4gIH07XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKCkgPT4ge1xuICAgIHJlc2V0R2FtZUJvYXJkKCk7XG4gICAgc2NyZWVuLnJlc2V0R2FtZVRpbGVzKCk7XG4gICAgZ2FtZUlzUnVubmluZyA9IHRydWU7XG4gICAgc2NyZWVuLnVwZGF0ZUdhbWVQcm9tcHQoYEl0J3MgJHthY3RpdmVQbGF5ZXIubmFtZX0ncyB0dXJuYCk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VNYXJrZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoZ2FtZUlzUnVubmluZyAmJiBnYW1lQm9hcmRbaW5kZXhdID09PSBcIlwiKSB7XG4gICAgICB1cGRhdGVHYW1lQm9hcmQoaW5kZXgpO1xuICAgICAgc2NyZWVuLnVwZGF0ZUdhbWVUaWxlKGluZGV4LCBhY3RpdmVQbGF5ZXIubWFya2VyKTtcbiAgICAgIGNoZWNrRm9yV2luKCk7XG4gICAgICBpZiAoZ2FtZUlzUnVubmluZykge1xuICAgICAgICB0b2dnbGVBY3RpdmVQbGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAod2lubmVyKSA9PiB7XG4gICAgZ2FtZUlzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbm5lcik7XG4gICAgICBzY3JlZW4udXBkYXRlR2FtZVByb21wdChcbiAgICAgICAgYCR7YWN0aXZlUGxheWVyLm5hbWV9IHdpbnMhIFByZXNzIHRoZSBidXR0b24gdG8gcGxheSBhZ2FpbiFgXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JlZW4udXBkYXRlR2FtZVByb21wdChgSXQncyBhIGRyYXchIFByZXNzIHRoZSBidXR0b24gdG8gcGxheSBhZ2FpbiFgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93MSA9IGdhbWVCb2FyZC5zbGljZSgwLCAzKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IHJvdzIgPSBnYW1lQm9hcmQuc2xpY2UoMywgNikuam9pbihcIlwiKTtcbiAgICBjb25zdCByb3czID0gZ2FtZUJvYXJkLnNsaWNlKDYsIDkpLmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCBjb2wxID0gZ2FtZUJvYXJkWzBdICsgZ2FtZUJvYXJkWzNdICsgZ2FtZUJvYXJkWzZdO1xuICAgIGNvbnN0IGNvbDIgPSBnYW1lQm9hcmRbMV0gKyBnYW1lQm9hcmRbNF0gKyBnYW1lQm9hcmRbN107XG4gICAgY29uc3QgY29sMyA9IGdhbWVCb2FyZFsyXSArIGdhbWVCb2FyZFs1XSArIGdhbWVCb2FyZFs4XTtcblxuICAgIGNvbnN0IGRpYWcxID0gZ2FtZUJvYXJkWzBdICsgZ2FtZUJvYXJkWzRdICsgZ2FtZUJvYXJkWzhdO1xuICAgIGNvbnN0IGRpYWcyID0gZ2FtZUJvYXJkWzJdICsgZ2FtZUJvYXJkWzRdICsgZ2FtZUJvYXJkWzZdO1xuXG4gICAgY29uc3Qgd2luUmVnZXggPSAvWFhYfE9PTy87XG5cbiAgICBpZiAod2luUmVnZXgudGVzdChyb3cxKSB8fCB3aW5SZWdleC50ZXN0KHJvdzIpIHx8IHdpblJlZ2V4LnRlc3Qocm93MykpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicm93IHdpbiFcIik7XG4gICAgICBnYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDEpIHx8XG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDIpIHx8XG4gICAgICB3aW5SZWdleC50ZXN0KGNvbDMpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbHVtbiB3aW4hXCIpO1xuICAgICAgZ2FtZU92ZXIoYWN0aXZlUGxheWVyKTtcbiAgICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gICAgfSBlbHNlIGlmICh3aW5SZWdleC50ZXN0KGRpYWcxKSB8fCB3aW5SZWdleC50ZXN0KGRpYWcyKSkge1xuICAgICAgY29uc29sZS5sb2coXCJkaWFnIHdpbiFcIik7XG4gICAgICBnYW1lT3ZlcihhY3RpdmVQbGF5ZXIpO1xuICAgICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZC5maWx0ZXIoKHRpbGUpID0+IHRpbGUgPT09IFwiXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJpdHMgYSBkcmF3XCIpO1xuICAgICAgZ2FtZU92ZXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0R2FtZUJvYXJkLFxuICAgIGdldEdhbWVJc1J1bm5pbmcsXG4gICAgcmVzZXRHYW1lQm9hcmQsXG4gICAgcGxheVJvdW5kLFxuICAgIHBsYWNlTWFya2VyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgbWFya2VyKSA9PiB7XG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXIoKSB7XG4gICAgcmV0dXJuIG1hcmtlcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBnZXROYW1lLFxuICAgIG1hcmtlcixcbiAgICBnZXRNYXJrZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcblxuaW1wb3J0IGdhbWUgZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgU2NyZWVuQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8vU3RhcnQgQnV0dG9uXG5cbiAgY29uc3Qgc2V0SW5pdGlhbFZpZXcgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5wbGF5Um91bmQpO1xuXG4gICAgY29uc3QgZ2FtZVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLXRpbGVcIik7XG4gICAgZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXh0cmFjdCB0aGUgdGlsZSdzIG51bWJlciBmcm9tIHRoZSBpZFxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaWQuc3BsaXQoXCItXCIpWzJdO1xuICAgICAgICBnYW1lLnBsYWNlTWFya2VyKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVUaWxlID0gKGluZGV4LCBtYXJrZXIpID0+IHtcbiAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLXRpbGUtXCIgKyBpbmRleCk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKG1hcmtlcik7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lVGlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLXRpbGVcIik7XG4gICAgZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NOYW1lID0gXCJnYW1lLXRpbGVcIjtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVHYW1lUHJvbXB0ID0gKHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XG4gICAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXByb21wdFwiKTtcbiAgICBwcm9tcHQuaW5uZXJUZXh0ID0gc3RyaW5nO1xuICB9O1xuXG4gIHJldHVybiB7IHNldEluaXRpYWxWaWV3LCB1cGRhdGVHYW1lUHJvbXB0LCB1cGRhdGVHYW1lVGlsZSwgcmVzZXRHYW1lVGlsZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbkNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIyMjIyMjIyMjIyMjIyMjIyMgTE9HSUMgSU1QT1JUUyAjIyMjIyMjIyMjIyMjIyMjIyMjXG5pbXBvcnQgc2NyZWVuIGZyb20gXCIuL2xvZ2ljL1NjcmVlbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9sb2dpYy9HYW1lQ29udHJvbGxlclwiO1xuXG4vLyMjIyMjIyMjIyMjIyMjIyMjIFNUWUxFIElNUE9SVFMgIyMjIyMjIyMjIyMjIyMjIyMjI1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuc2NyZWVuLnNldEluaXRpYWxWaWV3KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=