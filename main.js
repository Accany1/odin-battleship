/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nhtml {\r\n    margin: 0px;\r\n    background-color: #f1faee;\r\n    color: #0d1b2a;\r\n    font-family: 'montserrat', system-ui,-apple-system, BlinkMacSystemFont,Arial, sans-serif; \r\n    height: 100%;\r\n}\r\n\r\nh1 {\r\n    left: 50%;\r\n    top: 20px;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.board-container,\r\n.board-titles {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n}\r\n\r\n.board-titles {\r\n    font-weight: 600;\r\n    font-size: 1.5em;\r\n    margin: 20px 0px;\r\n}\r\n\r\n\r\n.gameboard-human {\r\n    border-radius: 10px;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    align-items: center;\r\n    justify-self: center;\r\n    border: 1px solid #61a5c2;\r\n    overflow: hidden;\r\n    margin-right: 30px;\r\n}\r\n\r\n.gameboard-computer {\r\n    border-radius: 10px;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    align-items: center;\r\n    justify-self: center;\r\n    border: 1px solid #61a5c2;\r\n    overflow: hidden;\r\n    margin-left: 30px;\r\n}\r\n\r\n.tile,\r\n.computer-tile {\r\n    background-color: #a9d6e5;\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid #61a5c2;\r\n    cursor: pointer;\r\n}\r\n\r\n.miss {\r\n    background-color: #fb8500;\r\n}\r\n\r\n.ship {\r\n    background-color: #023047;\r\n}\r\n\r\n.hit {\r\n    background-color: black;\r\n}\r\n\r\n.current-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.current-status {\r\n    font-weight: 600;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.ship-model {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton {\r\n    background-color: #61a5c2;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-dynamic-interface/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create-ship.js":
/*!****************************!*\
  !*** ./src/create-ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createShip(shipLength) {\r\n    const length = shipLength\r\n    let hits = 0\r\n\r\n    return {\r\n        getLength: () => length,\r\n        hit: () => {\r\n            hits += 1\r\n        },\r\n        isSunk: () => hits === length,\r\n        currentHits: () => hits\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/create-ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Game() {\r\n    const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n    let rot = \"x\"\r\n\r\n    function renderBoard() {\r\n        for (let i = 0; i < _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize; i++) {\r\n            for (let j = 0; j < _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize; j++) {\r\n                let status = player.getTile(i,j)\r\n                \r\n                const newTile = document.createElement('div')\r\n                newTile.classList.add(\"tile\")\r\n                newTile.setAttribute(\"data-y\",i)\r\n                newTile.setAttribute(\"data-x\",j)\r\n                \r\n                if (status === \"X\") {\r\n                    newTile.classList.add(\"miss\")\r\n                } else if (status === \"O\") {\r\n                    newTile.classList.add(\"hit\")\r\n                } else if (status !== null && \"getLength\" in status) {\r\n                    newTile.classList.add(\"ship\")\r\n                }\r\n                \r\n                document.querySelector(\".gameboard-human\").appendChild(newTile)\r\n            }\r\n        }\r\n    }\r\n\r\n    function renderComputerBoard() {\r\n        for (let i = 0; i < _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize; i++) {\r\n            for (let j = 0; j < _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize; j++) {\r\n                let status = computer.getTile(i,j)\r\n                \r\n                const newTile = document.createElement('div')\r\n                newTile.classList.add(\"computer-tile\")\r\n                newTile.setAttribute(\"data-y\",i)\r\n                newTile.setAttribute(\"data-x\",j)\r\n                \r\n                if (status === \"X\") {\r\n                    newTile.classList.add(\"miss\")\r\n                } else if (status === \"O\") {\r\n                    newTile.classList.add(\"hit\")\r\n                }\r\n                \r\n                document.querySelector(\".gameboard-computer\").appendChild(newTile)\r\n            }\r\n        }\r\n    }\r\n\r\n    function placeShips() {\r\n        if (player.shipIndex() !== 5) {\r\n            const tile = document.querySelectorAll(\".tile\")\r\n            renderShipModel()\r\n            for (let i = 0; i < tile.length; i++) {\r\n                tile[i].addEventListener(\"click\", () => {\r\n                    player.placeShips(tile[i].getAttribute(\"data-y\"),tile[i].getAttribute(\"data-x\"),rot)\r\n                    clearBoard()\r\n                    placeShips()\r\n                })\r\n            }\r\n        } else {\r\n            clearShipModel()\r\n            renderStatus(\"Select tile to attack\")\r\n            Attack()\r\n        }\r\n    }\r\n\r\n    function computerPlaceShips() {\r\n        if (computer.shipIndex() !== 5) {\r\n            const randY = Math.floor(Math.random() * _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize)\r\n            const randX = Math.floor(Math.random() * _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize)\r\n            let randRot\r\n            if ((Math.floor(Math.random() *10) >5)) {\r\n                randRot = \"x\" \r\n            } else {\r\n                randRot = \"y\" \r\n            }\r\n            computer.placeShips(randY,randX,randRot)\r\n            clearBoard()\r\n\r\n            computerPlaceShips()\r\n        }\r\n    }\r\n\r\n    function renderShipModel() {\r\n        const shipModel = document.querySelector(\".ship-model\")\r\n        clearShipModel()\r\n        const currentIndex = player.shipIndex()\r\n        const shipSize = _helpers__WEBPACK_IMPORTED_MODULE_1__.ships[currentIndex]\r\n        if (rot === \"x\") {\r\n            shipModel.style.flexDirection = \"row\"\r\n        } else {\r\n            shipModel.style.flexDirection = \"column\"\r\n        }\r\n\r\n        for (let i = 0; i < shipSize; i++) {\r\n            const newShip = document.createElement(\"div\")\r\n            newShip.classList.add(\"tile\")\r\n            newShip.classList.add(\"ship\")\r\n            shipModel.appendChild(newShip)\r\n        }\r\n    }\r\n\r\n    function clearShipModel() {\r\n        const shipModel = document.querySelector(\".ship-model\")\r\n        shipModel.innerHTML = \"\"\r\n    }\r\n\r\n    function renderStatus(status) {\r\n        const currentStatus = document.querySelector(\".current-status\")\r\n        currentStatus.textContent = status\r\n    }\r\n\r\n    function resetBoard() {\r\n        player.resetBoard()\r\n        computer.resetBoard()\r\n        renderStatus(\"Please place a ship, press R to rotate\")\r\n        clearBoard()\r\n\r\n        computerPlaceShips()\r\n        placeShips()\r\n    }\r\n\r\n    function checkEnd() {\r\n        if (checkGameOver()) {\r\n            document.getElementsByClassName(\"restart-button\")[0].hidden = false\r\n            clearBoard()\r\n\r\n            //removes event listeners\r\n            let tile = document.querySelectorAll(\".computer-tile\")\r\n            for (let i = 0; i < tile.length; i++) {\r\n                tile[i].replaceWith(tile[i].cloneNode(true))\r\n            }\r\n        } else {\r\n            computerAttack()\r\n        }    \r\n    }\r\n\r\n    function computerAttack() {\r\n        const randX = Math.floor(Math.random()*_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize)\r\n        const randY = Math.floor(Math.random()*_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize)\r\n\r\n        if (player.receiveAttack(randY,randX) === \"Error\") {\r\n            computerAttack()\r\n        }\r\n\r\n        clearBoard()\r\n\r\n        if (checkGameOver()) {\r\n            document.getElementsByClassName(\"restart-button\")[0].hidden = false\r\n        } else {\r\n            Attack()\r\n        }    \r\n    }\r\n\r\n\r\n    function checkGameOver() {\r\n        if (computer.checkAllShips()) {\r\n            renderStatus(\"You Win\")\r\n            return true\r\n        } else if (player.checkAllShips()) {\r\n            renderStatus(\"Computer Win\")\r\n            return true\r\n        } else {\r\n            return false\r\n        }\r\n    }\r\n\r\n\r\n    function clearBoard() {\r\n        document.querySelector(\".gameboard-human\").innerHTML = \"\"\r\n        document.querySelector(\".gameboard-computer\").innerHTML = \"\"\r\n        renderBoard()\r\n        renderComputerBoard()\r\n    }\r\n\r\n    function Attack() {\r\n        const tile = document.querySelectorAll(\".computer-tile\")\r\n        for (let i = 0; i < tile.length; i++) {\r\n            tile[i].addEventListener(\"click\", () => {\r\n                const returnVal = computer.receiveAttack(Number(tile[i].getAttribute(\"data-y\")),Number(tile[i].getAttribute(\"data-x\")))\r\n                if (returnVal === true) {\r\n                    renderStatus(\"Hit!\")\r\n                    checkEnd()\r\n                } else if (returnVal === \"Error\"){\r\n                    renderStatus(\"Please choose a valid tile\")\r\n                } else {\r\n                    renderStatus(\"Miss\")\r\n                    checkEnd()\r\n                }\r\n                \r\n            })\r\n        }\r\n    }\r\n\r\n    const handleKeyDown = (event) => {\r\n        if (event.key === \"r\") {\r\n            if (rot === \"x\") {\r\n                rot = \"y\"\r\n                renderShipModel()\r\n            } else {\r\n                rot = \"x\"\r\n                renderShipModel()\r\n            }\r\n        }\r\n    }\r\n\r\n    window.addEventListener(\"keydown\", handleKeyDown)\r\n\r\n    document.getElementsByClassName(\"restart-button\")[0].addEventListener(\"click\", () => {\r\n        resetBoard()\r\n        document.getElementsByClassName(\"restart-button\")[0].hidden = true\r\n    })\r\n\r\n    return {\r\n        renderBoard,\r\n        renderComputerBoard,\r\n        computerPlaceShips,\r\n        placeShips,\r\n        Attack,\r\n        resetBoard,\r\n        handleKeyDown\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ship */ \"./src/create-ship.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\nfunction Gameboard() {\r\n\r\n    // create board according to specs\r\n    let board = Array(_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize).fill(null).map(() => Array(_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize).fill(null));\r\n\r\n    const getBoard = () => board\r\n\r\n    const getTile = (y,x) => board[y][x]\r\n\r\n    let chosenTiles = []\r\n    let placedShips = []\r\n    let shipsCreated = 0\r\n\r\n    function resetBoard() {\r\n        board = Array(_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize).fill(null).map(() => Array(_helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize).fill(null));\r\n        chosenTiles = []\r\n        placedShips = []\r\n        shipsCreated = 0\r\n    }\r\n\r\n    function receiveAttack(y,x) {\r\n        // if chosen tile already exists, return false\r\n        for (let i = 0; i < chosenTiles.length; i++) {\r\n            if (chosenTiles[i].x === x && chosenTiles[i].y === y) {\r\n                return \"Error\"\r\n            }\r\n        }\r\n        // if tile is empty, mark X\r\n        if (board[y][x] === null) {\r\n            board[y][x] = \"X\"\r\n            chosenTiles.push({x,y})\r\n            return false\r\n        } \r\n        // if tile is occupied by a ship,hit it\r\n        else if (typeof board[y][x] === \"object\") {\r\n            board[y][x].hit()\r\n            chosenTiles.push({y,x})\r\n            board[y][x] = \"O\"\r\n            return true\r\n        }\r\n    }\r\n\r\n    function checkOverflow(y, x, shipLength, dir) {\r\n\r\n        if (dir === \"x\"){\r\n            if ((Number(x) + shipLength) > _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize) {\r\n                return false\r\n            }\r\n        }\r\n\r\n        if (dir === \"y\"){\r\n            if (Number(y) + shipLength > _helpers__WEBPACK_IMPORTED_MODULE_1__.boardSize) {\r\n                return false\r\n            }\r\n        }\r\n        return true\r\n    }\r\n\r\n    function checkCollision(y,x,shipLength, dir) {\r\n        if (dir === \"x\") {\r\n            for (let i = 0; i < shipLength; i++) {\r\n                if (board[Number(y)][Number(x)+i] !== null) {\r\n                    return false\r\n                }\r\n            }\r\n        } else if (dir === \"y\") {\r\n            for (let i = 0; i < shipLength; i++) {\r\n                if (board[Number(y)+i][Number(x)] !== null) {\r\n                    return false\r\n                }\r\n            }\r\n        }\r\n        return true\r\n    }\r\n    \r\n    function placeShip(y, x, shipLength, dir) {\r\n        if (checkOverflow(Number(y), Number(x), shipLength, dir) && checkCollision(Number(y), Number(x), shipLength, dir)) {\r\n            let ship = (0,_create_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipLength)\r\n            for (let i = 0; i < shipLength; i++) {\r\n                if (dir === \"x\") {\r\n                    board[Number(y)][Number(x)+i] = ship\r\n                } else {\r\n                    board[Number(y)+i][Number(x)] = ship\r\n                }\r\n            }\r\n            shipsCreated += 1\r\n            placedShips.push(ship)\r\n            return true\r\n        } else {\r\n            return false\r\n        }\r\n    }\r\n    \r\n    function checkAllShips() {\r\n        let sunkShips = 0 \r\n\r\n        for (let i = 0; i < placedShips.length; i++) {  \r\n            if (placedShips[i].isSunk()) {\r\n                sunkShips += 1\r\n            }\r\n        }\r\n        if (sunkShips === placedShips.length) {\r\n            return true\r\n        }\r\n    }\r\n\r\n    function getShips() {\r\n        return placedShips\r\n    }\r\n\r\n    return {\r\n        getBoard,\r\n        placeShip,\r\n        receiveAttack,\r\n        checkAllShips,\r\n        getTile,\r\n        getShips,\r\n        resetBoard\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/gameboard.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boardSize: () => (/* binding */ boardSize),\n/* harmony export */   shipNames: () => (/* binding */ shipNames),\n/* harmony export */   ships: () => (/* binding */ ships)\n/* harmony export */ });\nconst boardSize = 10\r\n\r\nconst ships = [5,4,3,3,2]\r\nconst shipNames = [\"battleship\",\"cruiser\",\"submarine\",\"destroyer\",\"carrier\"]\r\n\r\n\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\nconst game = (0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\ngame.renderBoard()\r\ngame.renderComputerBoard()\r\ngame.computerPlaceShips()\r\ngame.placeShips()\r\ngame.Attack()\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\nfunction Player() {\r\n    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n    let currentShipIndex = 0\r\n    \r\n    function shipIndex() {\r\n        return currentShipIndex\r\n    }\r\n\r\n    function placeShips(y,x,dir) {\r\n        let result = gameboard.placeShip(y,x,_helpers__WEBPACK_IMPORTED_MODULE_1__.ships[currentShipIndex],dir)\r\n\r\n        if (result) {\r\n            currentShipIndex += 1\r\n        }\r\n    }\r\n\r\n    function receiveAttack(y,x) {\r\n        return gameboard.receiveAttack(y,x)\r\n    }\r\n\r\n    function getBoard() {\r\n        return gameboard.getBoard()\r\n    }\r\n\r\n    function getTile(y,x) {\r\n        return gameboard.getTile(y,x)\r\n    }\r\n\r\n    function checkAllShips() {\r\n        return gameboard.checkAllShips()\r\n    }\r\n\r\n    function resetBoard() {\r\n        currentShipIndex = 0\r\n        gameboard.resetBoard()\r\n    }\r\n\r\n    return {\r\n        placeShips,\r\n        receiveAttack,\r\n        getBoard,\r\n        getTile,\r\n        shipIndex,\r\n        checkAllShips,\r\n        resetBoard\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://odin-dynamic-interface/./src/player.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;