/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.sass */ \"./src/sass/style.sass\");\n/* harmony import */ var _js_dropdownfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dropdownfunction */ \"./src/js/dropdownfunction.js\");\n/* harmony import */ var _js_dropdownfunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_dropdownfunction__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_open__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/open */ \"./src/js/open.js\");\n/* harmony import */ var _js_open__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_open__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/checkbox */ \"./src/js/checkbox.js\");\n/* harmony import */ var _js_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_checkbox__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/toggle */ \"./src/js/toggle.js\");\n/* harmony import */ var _js_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_toggle__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar image = __webpack_require__(/*! ./images/expandmore.svg */ \"./src/images/expandmore.svg\");\n\n//# sourceURL=webpack://metalamp/./src/index.js?");

/***/ }),

/***/ "./src/js/checkbox.js":
/*!****************************!*\
  !*** ./src/js/checkbox.js ***!
  \****************************/
/***/ (() => {

eval("function openn() {\n  document.getElementById('list').classList.toggle('visible');\n}\n\nfunction opened() {\n  document.getElementById('listed').classList.toggle('visible');\n}\n\n//# sourceURL=webpack://metalamp/./src/js/checkbox.js?");

/***/ }),

/***/ "./src/js/dropdownfunction.js":
/*!************************************!*\
  !*** ./src/js/dropdownfunction.js ***!
  \************************************/
/***/ (() => {

eval("var add = function add(e) {\n  var element = e.parentNode.children[1];\n  element.innerText = +element.innerText + 1;\n\n  if (element.innerText > 0) {\n    document.getElementById('clear').classList.add('vis');\n    document.getElementById('minus').classList.add('opacity');\n  }\n};\n\nvar dec = function dec(e) {\n  var element = e.parentNode.children[1];\n  element.innerText = +element.innerText - 1;\n  element.innerText = element.innerText <= 0 ? 0 : element.innerText = +element.innerText - 1;\n\n  if (element.innerText <= 0) {\n    document.getElementById('clear').classList.remove('vis');\n    document.getElementById('minus').classList.remove('opacity');\n  }\n};\n\nfunction clear() {\n  i = 0;\n}\n\n//# sourceURL=webpack://metalamp/./src/js/dropdownfunction.js?");

/***/ }),

/***/ "./src/js/open.js":
/*!************************!*\
  !*** ./src/js/open.js ***!
  \************************/
/***/ (() => {

eval("function drop() {\n  document.getElementById('dropmenu').classList.toggle('vis');\n  document.getElementById('border').classList.toggle('border');\n}\n\nfunction peopleopen() {\n  document.getElementById('dropmenupeople').classList.toggle('vis');\n  document.getElementById('borderpeople').classList.toggle('border');\n}\n\n//# sourceURL=webpack://metalamp/./src/js/open.js?");

/***/ }),

/***/ "./src/js/toggle.js":
/*!**************************!*\
  !*** ./src/js/toggle.js ***!
  \**************************/
/***/ (() => {

eval("function toggle() {\n  // const toggles = document.getElementById('toggle');\n  // toggles.forEach(toggle => {\n  //     toggle.addEvenListener('click', (e) => {\n  //         e.currentTarget.classList.toggle('active');\n  //     })\n  // })\n  document.getElementById('toggle').classList.toggle('active');\n}\n\n//# sourceURL=webpack://metalamp/./src/js/toggle.js?");

/***/ }),

/***/ "./src/images/expandmore.svg":
/*!***********************************!*\
  !*** ./src/images/expandmore.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/images/img/Nrr2wUs.svg\");\n\n//# sourceURL=webpack://metalamp/./src/images/expandmore.svg?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://metalamp/./src/sass/style.sass?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;