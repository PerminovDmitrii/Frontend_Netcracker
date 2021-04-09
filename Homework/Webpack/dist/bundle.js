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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_resourcesStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/resourcesStack */ \"./src/resourcesStack.js\");\n/* harmony import */ var _src_pushElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/pushElement */ \"./src/pushElement.js\");\n/* harmony import */ var _src_getElemernt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/getElemernt */ \"./src/getElemernt.js\");\n\r\n\r\n\r\n\r\nwindow.stack = _src_resourcesStack__WEBPACK_IMPORTED_MODULE_0__.stack;\r\nwindow.pushElement = _src_pushElement__WEBPACK_IMPORTED_MODULE_1__.pushElement;\r\nwindow.getElement = _src_getElemernt__WEBPACK_IMPORTED_MODULE_2__.getElement;\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/getElemernt.js":
/*!****************************!*\
  !*** ./src/getElemernt.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElement\": () => (/* binding */ getElement)\n/* harmony export */ });\nfunction getElement(stack) {\r\n\ttry {\r\n        let elem = stack.getElement();\r\n\t\tstack.lastOperationValue = elem;\r\n\t\tdocument.getElementById('output-field').innerHTML = elem;\r\n\t\tdocument.getElementById(`${stack.currentItem}`).style.background = '#ffffff';\r\n\t\tstack.lastOperation = 'get from';\r\n    } catch(err) {\r\n\t\tstack.currentItem = 0;\r\n\t\tdocument.getElementById('output-field').innerHTML = \"\";\r\n\t\talert('Stack empty!');\r\n        console.log(err);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getElemernt.js?");

/***/ }),

/***/ "./src/pushElement.js":
/*!****************************!*\
  !*** ./src/pushElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pushElement\": () => (/* binding */ pushElement)\n/* harmony export */ });\nfunction pushElement(stack) {\r\n\tstack.lastOperation = 'push into';\r\n\tif (document.getElementById('entry-field').value == \"\") {\r\n\t\talert('Entry field is empty!');\r\n\t\treturn;\r\n\t}\r\n\tif (stack.currentItem < 10) { \r\n\t\tlet elem = document.getElementById('entry-field').value;\r\n\t\tstack.pushElement(elem);\r\n\t\tstack.lastOperationValue = elem;\r\n\t\tdocument.getElementById(`${stack.currentItem - 1}`).innerHTML = elem;\r\n\t\tdocument.getElementById('entry-field').value = \"\";\r\n\t\tdocument.getElementById(`${stack.currentItem - 1}`).style.background = '#190018';\r\n\t} else {\r\n\t\tdocument.getElementById('entry-field').value = \"\";\r\n\t\talert('Stack full!');\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/pushElement.js?");

/***/ }),

/***/ "./src/resourcesStack.js":
/*!*******************************!*\
  !*** ./src/resourcesStack.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stack\": () => (/* binding */ stack)\n/* harmony export */ });\nlet stack = {\r\n\telements: [],\r\n\tstackSize: 10,\r\n\tcurrentItem: 0,\r\n\tlastOperation: '',\r\n\tlastOperationValue: '',\r\n\t\r\n\tpushElement(elem) {\r\n\t\tthis.elements.push(elem);\r\n\t\tthis.currentItem++;\r\n\t},\r\n\tgetElement() {\r\n\t\tlet elem = this.elements.pop();\r\n\t\tthis.currentItem -= 1;\r\n\t\treturn elem;\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/resourcesStack.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;