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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/MachineStd-Bold.otf */ \"./src/fonts/MachineStd-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --metal-gradient: linear-gradient(\\n    0deg,\\n    rgba(84, 90, 93, 1) 0%,\\n    rgba(195, 196, 196, 1) 25%,\\n    rgba(156, 156, 156, 1) 50%,\\n    rgba(180, 182, 183, 1) 75%,\\n    rgba(84, 90, 93, 1) 100%\\n  );\\n}\\n\\n@font-face {\\n  font-family: \\\"BattleshipFont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"BattleshipFont\\\";\\n}\\n\\nh1 {\\n  background-image: var(--metal-gradient);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  color: transparent;\\n  font-size: 9rem;\\n  margin-bottom: -20px;\\n}\\n\\nform {\\n  max-width: 40%;\\n  height: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\nlabel {\\n  background-image: var(--metal-gradient);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  color: transparent;\\n\\n  font-size: 3rem;\\n}\\n\\n.input-container {\\n  display: flex;\\n}\\n\\ninput {\\n  background-image: var(--metal-gradient);\\n  background-size: 100%;\\n  background-clip: text;\\n  background-color: transparent;\\n  border: solid 3px black;\\n  height: 100%;\\n  width: 70%;\\n  padding: 10px 5px 0px 5px;\\n  font-size: 3rem;\\n}\\n\\nbutton[type=\\\"submit\\\"] {\\n  font-size: 1.5rem;\\n  background-image: var(--metal-gradient);\\n  border: solid 3px black;\\n\\n  padding: 10px;\\n}\\n\\n.big-container {\\n  min-height: 100vh;\\n  background-color: #04619f;\\n  background-image: linear-gradient(\\n    180deg,\\n    #000000 0%,\\n    #04619f 50%,\\n    #000000 100%\\n  );\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 20px;\\n}\\n\\n.container {\\n  width: 100%;\\n\\n  display: grid;\\n  justify-content: space-between;\\n  grid-template-columns: 35% 35%;\\n  margin: 0 100px;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.container-setup {\\n  width: 100%;\\n\\n  display: grid;\\n  grid-template-columns: 30%;\\n  justify-content: center;\\n  gap: 10px;\\n}\\n\\n.direction-btn {\\n  background-image: var(--metal-gradient);\\n  left: 100%;\\n  padding: 10px;\\n  justify-self: center;\\n  font-size: 2rem;\\n}\\n\\n.board {\\n  background-color: #b0e5f3;\\n  aspect-ratio: 1/1;\\n  border: solid 10px black;\\n\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n}\\n\\n.board div {\\n  border: solid 0.5px black;\\n  aspect-ratio: 1/1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.highlighted {\\n  background-color: gray !important;\\n}\\n\\n.highlighted:hover {\\n  cursor: pointer;\\n}\\n\\n.red-highlight {\\n  background-color: red !important;\\n}\\n\\n.red-highlight:hover {\\n  cursor: not-allowed;\\n}\\n\\n.placed-ship {\\n  background-color: gray;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domControl.js":
/*!***************************!*\
  !*** ./src/domControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addShipToBoard\": () => (/* binding */ addShipToBoard),\n/* harmony export */   \"computerAttack\": () => (/* binding */ computerAttack),\n/* harmony export */   \"loadInitScreen\": () => (/* binding */ loadInitScreen),\n/* harmony export */   \"playerAttack\": () => (/* binding */ playerAttack),\n/* harmony export */   \"recordAttack\": () => (/* binding */ recordAttack),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\nfunction loadInitScreen() {\n  let mainContainer = document.querySelector(\".big-container\");\n  let form = document.createElement(\"form\");\n  form.setAttribute(\"onsubmit\", \"return false\");\n  let label = document.createElement(\"label\");\n  label.textContent = \"NAME: \";\n  let nameInput = document.createElement(\"input\");\n  nameInput.setAttribute(\"type\", \"input\");\n  let inputContainer = document.createElement(\"div\");\n  inputContainer.append(label, nameInput);\n  let submitButton = document.createElement(\"button\");\n  submitButton.setAttribute(\"type\", \"submit\");\n  submitButton.textContent = \"SUBMIT\";\n\n  form.append(inputContainer, submitButton);\n  mainContainer.appendChild(form);\n}\n\nasync function startGame(newName, player1, comp) {\n  let mainContainer = document.querySelector(\".big-container\");\n  let form = document.querySelector(\"form\");\n  mainContainer.removeChild(form);\n  let container = document.createElement(\"div\");\n  container.classList.add(\"container-setup\");\n  let board1 = document.createElement(\"div\");\n  let board2 = document.createElement(\"div\");\n  let toggleBtn = document.createElement(\"button\");\n  toggleBtn.classList.add(\"direction-btn\");\n  toggleBtn.textContent = \"Switch Orientation\";\n  toggleBtn.id = \"h\";\n\n  board1.classList.add(\"board\", \"board-1\");\n  board2.classList.add(\"board\", \"board-2\");\n  mainContainer.appendChild(container);\n  container.appendChild(toggleBtn);\n  container.appendChild(board1);\n  player1.name = newName;\n\n  board1 = prepareBoards(board1);\n\n  let value = placeShip(5, player1);\n  await getPromiseFromEvent(board1, \"click\");\n  while ((await value) == false) {\n    value = placeShip(5, player1);\n    await getPromiseFromEvent(board1, \"click\");\n  }\n\n  value = placeShip(4, player1);\n  await getPromiseFromEvent(board1, \"click\");\n  while ((await value) == false) {\n    value = placeShip(4, player1);\n    await getPromiseFromEvent(board1, \"click\");\n  }\n\n  value = placeShip(3, player1);\n  await getPromiseFromEvent(board1, \"click\");\n  while ((await value) == false) {\n    value = placeShip(3, player1);\n    await getPromiseFromEvent(board1, \"click\");\n  }\n\n  value = placeShip(3, player1);\n  await getPromiseFromEvent(board1, \"click\");\n  while ((await value) == false) {\n    value = placeShip(3, player1);\n    await getPromiseFromEvent(board1, \"click\");\n  }\n\n  value = placeShip(2, player1);\n  await getPromiseFromEvent(board1, \"click\");\n  while ((await value) == false) {\n    value = placeShip(2, player1);\n    await getPromiseFromEvent(board1, \"click\");\n  }\n\n  container.removeChild(toggleBtn);\n  container.appendChild(prepareBoards(board2));\n  container.classList.replace(\"container-setup\", \"container\");\n  playerAttack(player1, comp);\n}\n\nfunction prepareBoards(board) {\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      let div = document.createElement(\"div\");\n      div.setAttribute(\"data-row\", 9 - i);\n      div.setAttribute(\"data-column\", j);\n      div.setAttribute(\"ondragstart\", \"return false\");\n      div.setAttribute(\"ondrop\", \"return false\");\n      board.appendChild(div);\n    }\n  }\n  return board;\n}\n\nfunction placeShip(length, player) {\n  let board = document.querySelector(\".container-setup .board\");\n  let toggleBtn = document.querySelector(\".direction-btn\");\n  let orient = toggleBtn.id;\n\n  toggleBtn.addEventListener(\"click\", () => {\n    if (orient == \"h\") {\n      orient = \"v\";\n    } else orient = \"h\";\n    toggleBtn.id = orient;\n  });\n  let controller = new AbortController();\n  let testSignal = controller.signal;\n  board.addEventListener(\n    \"mouseover\",\n    (e) => {\n      addHighlight(e.target, length, orient);\n    },\n    { signal: testSignal }\n  );\n\n  board.addEventListener(\n    \"mouseout\",\n    (e) => {\n      removeHighlight(e.target, length, orient);\n    },\n    {}\n  );\n  let value;\n  board.addEventListener(\n    \"click\",\n    (e) => {\n      let x = parseInt(e.target.getAttribute(\"data-column\"));\n      let y = parseInt(e.target.getAttribute(\"data-row\"));\n      if (e.target.classList.contains(\"red-highlight\")) {\n        value = false;\n        console.log(\"FAILS\");\n      } else {\n        player.gameBoard.populateBoard(x, y, orient, length);\n        addShipToBoard(length);\n        value = true;\n      }\n      controller.abort();\n    },\n    { once: true }\n  );\n  return getPromiseFromEvent(board, \"click\").then(() => {\n    return value;\n  });\n}\n\nfunction getPromiseFromEvent(item, event) {\n  return new Promise((resolve) => {\n    const listener = () => {\n      item.removeEventListener(event, listener);\n      resolve();\n    };\n    item.addEventListener(event, listener);\n  });\n}\n\nfunction addHighlight(target, length, orient) {\n  let x = parseInt(target.getAttribute(\"data-column\"));\n  let y = parseInt(target.getAttribute(\"data-row\"));\n\n  if (orient == \"h\") {\n    let className = x <= 10 - length ? \"highlighted\" : \"red-highlight\";\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y}'][data-column='${x + i}']`\n        );\n        if (nextSquare.classList.contains(\"placed-ship\"))\n          className = \"red-highlight\";\n      } catch (ignore) {}\n    }\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y}'][data-column='${x + i}']`\n        );\n        nextSquare.classList.add(className);\n      } catch (ignore) {}\n    }\n  } else {\n    let className = y <= 10 - length ? \"highlighted\" : \"red-highlight\";\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y + i}'][data-column='${x}']`\n        );\n        if (nextSquare.classList.contains(\"placed-ship\"))\n          className = \"red-highlight\";\n      } catch (ignore) {}\n    }\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y + i}'][data-column='${x}']`\n        );\n        nextSquare.classList.add(className);\n      } catch (ignore) {}\n    }\n    // target.classList.add(className);\n    // let sibling = document.querySelector(\n    //   `.board-1 [data-row='${y + 1}'][data-column='${x}']`\n    // );\n    // for (let i = 2; i <= length; i++) {\n    //   try {\n    //     sibling.classList.add(className);\n    //     sibling = document.querySelector(\n    //       `.board-1 [data-row='${y + i}'][data-column='${x}']`\n    //     );\n    //   } catch (ignore) {}\n    // }\n  }\n}\n\nfunction removeHighlight(target, length, orient) {\n  let x = parseInt(target.getAttribute(\"data-column\"));\n  let y = parseInt(target.getAttribute(\"data-row\"));\n  if (orient == \"h\") {\n    let className = x <= 10 - length ? \"highlighted\" : \"red-highlight\";\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y}'][data-column='${x + i}']`\n        );\n        if (nextSquare.classList.contains(\"placed-ship\"))\n          className = \"red-highlight\";\n      } catch (ignore) {}\n    }\n\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y}'][data-column='${x + i}']`\n        );\n        nextSquare.classList.remove(className);\n      } catch (ignore) {}\n    }\n  } else {\n    let className = y <= 10 - length ? \"highlighted\" : \"red-highlight\";\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y + i}'][data-column='${x}']`\n        );\n        if (nextSquare.classList.contains(\"placed-ship\"))\n          className = \"red-highlight\";\n      } catch (ignore) {}\n    }\n    for (let i = 0; i < length; i++) {\n      try {\n        let nextSquare = document.querySelector(\n          `.board-1 [data-row='${y + i}'][data-column='${x}']`\n        );\n        nextSquare.classList.remove(className);\n      } catch (ignore) {}\n    }\n  }\n}\n\nfunction addShipToBoard(length) {\n  for (let i = 0; i < length; i++) {\n    let divs = document.querySelectorAll(\".highlighted\");\n    divs.forEach((div) => {\n      div.classList.add(\"placed-ship\");\n    });\n  }\n}\n\nfunction recordAttack(x, y, boardNum, status) {\n  let div = document.querySelector(\n    `.board-${boardNum} [data-row='${y}'][data-column='${x}']`\n  );\n  if (status == \"miss\") {\n    div.innerHTML = \"&#x1F534\";\n    div.style.backgroundColor = \"#ffcccb\";\n  } else {\n    div.textContent = \"\\u274C\";\n    // div.style.backgroundColor = \"#4BF54B !important;\";\n    div.setAttribute(\"style\", \"background-color: #4BF54B !important;\");\n  }\n}\n\nfunction playerAttack(player1, comp) {\n  let board = document.querySelector(\".board-2\");\n  let controller = new AbortController();\n  let testSignal = controller.signal;\n  board.addEventListener(\n    \"click\",\n    (e) => {\n      let x = parseInt(e.target.getAttribute(\"data-column\"));\n      let y = parseInt(e.target.getAttribute(\"data-row\"));\n      let status = player1.attack(x, y, comp);\n      recordAttack(x, y, 2, status);\n      if (comp.gameBoard.isGameOver() || player1.gameBoard.isGameOver()) {\n        console.log(\"YOU WIN\");\n        controller.abort();\n        return;\n      }\n\n      computerAttack(player1, comp);\n    },\n    { signal: testSignal }\n  );\n}\n\nfunction computerAttack(player1, comp) {\n  let x = Math.floor(Math.random() * 10);\n  let y = Math.floor(Math.random() * 10);\n  console.log(player1.gameBoard.missedShots.includes(`${x}${y}`));\n\n  while (player1.gameBoard.missedShots.includes(`${x}${y}`)) {\n    x = Math.floor(Math.random() * 10);\n    y = Math.floor(Math.random() * 10);\n  }\n\n  let status = comp.attack(x, y, player1);\n  recordAttack(x, y, 1, status);\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/domControl.js?");

/***/ }),

/***/ "./src/gameFunctions.js":
/*!******************************!*\
  !*** ./src/gameFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n\nclass Ship {\n  constructor(length, startPos = []) {\n    this.length = length;\n    this.hitPlaces = [...Array(length)].fill(0);\n    this.sunk = false;\n    this.startPos = startPos;\n  }\n\n  hit(num) {\n    this.hitPlaces[num] = 1;\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.hitPlaces.reduce((prev, curr) => prev + curr, 0) == this.length) {\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n}\n\nclass Gameboard {\n  constructor(num) {\n    this.board = Array(10)\n      .fill(0)\n      .map(() => Array(10).fill(0));\n\n    this.missedShots = [];\n    this.boardNum = num;\n  }\n\n  populateBoard(x, y, orient, length) {\n    let newShip = new Ship(length, [x, y]);\n    for (let i = 0; i < length; i++) {\n      if (orient == \"h\") {\n        console.log(`${x},${y}`);\n        this.board[y][x + i] = newShip;\n      } else {\n        this.board[y + i][x] = newShip;\n      }\n    }\n  }\n\n  receiveAttack(x, y) {\n    if (this.missedShots.includes(`${x}${y}`)) {\n      return \"ALREADY HIT\";\n    } else if (this.board[y][x] == 0) {\n      this.missedShots.push(`${x}${y}`);\n      return \"miss\";\n    }\n    this.missedShots.push(`${x}${y}`);\n    let currShip = this.board[y][x];\n    let posn =\n      x == currShip.startPos[0]\n        ? y - currShip.startPos[1]\n        : x - currShip.startPos[0];\n    currShip.hit(posn);\n    return \"hit\";\n  }\n\n  isGameOver() {\n    let gameOver = true;\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (this.board[i][j] != 0 && this.board[i][j].sunk == false) {\n          gameOver = false;\n        }\n      }\n    }\n    return gameOver;\n  }\n}\n\nclass Player {\n  constructor(name, boardNum, computer = false) {\n    this.name = name;\n    this.computer = computer;\n    this.gameBoard = new Gameboard(boardNum);\n  }\n\n  attack(x, y, targetPlayer) {\n    return targetPlayer.gameBoard.receiveAttack(x, y);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comp\": () => (/* binding */ comp),\n/* harmony export */   \"p1\": () => (/* binding */ p1)\n/* harmony export */ });\n/* harmony import */ var _domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domControl */ \"./src/domControl.js\");\n/* harmony import */ var _gameFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFunctions */ \"./src/gameFunctions.js\");\n\n\n\nlet p1 = new _gameFunctions__WEBPACK_IMPORTED_MODULE_1__.Player(\"p1\", 1);\nlet comp = new _gameFunctions__WEBPACK_IMPORTED_MODULE_1__.Player(\"comp\", 2);\ncomp.gameBoard.populateBoard(2, 0, \"h\", 5);\ncomp.gameBoard.populateBoard(3, 5, \"v\", 3);\n\n(0,_domControl__WEBPACK_IMPORTED_MODULE_0__.loadInitScreen)();\nlet submitButton = document.querySelector(\"button\");\nlet nameInput = document.querySelector(\"input\");\nsubmitButton.addEventListener(\"click\", () => {\n  (0,_domControl__WEBPACK_IMPORTED_MODULE_0__.startGame)(nameInput.value, p1, comp);\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/fonts/MachineStd-Bold.otf":
/*!***************************************!*\
  !*** ./src/fonts/MachineStd-Bold.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6dc6e5974a79b8929f5d.otf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/MachineStd-Bold.otf?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;