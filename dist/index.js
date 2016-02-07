/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Calculator = __webpack_require__(1);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('cd-boilerplate index'); // index.js
	// =============================================================================
	
	var myCalc = new _Calculator2.default(0);
	myCalc.add(4).subtract(2).multiply(3).divide(2);
	console.log('calculator total', myCalc.total());
	
	var myCalc2 = new _Calculator2.default(33);
	myCalc2.add(7).subtract(3).multiply(33).divide(2);
	console.log('calcuator total2', myCalc2.total());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Calculator = function () {
		function Calculator() {
			var base = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
			_classCallCheck(this, Calculator);
	
			this._total = base;
		}
	
		_createClass(Calculator, [{
			key: "add",
			value: function add(value) {
				this._total += value;
				return this;
			}
		}, {
			key: "subtract",
			value: function subtract(value) {
				this._total -= value;
				return this;
			}
		}, {
			key: "multiply",
			value: function multiply(value) {
				this._total = this._total * value;
				return this;
			}
		}, {
			key: "divide",
			value: function divide(value) {
				this._total = this._total / value;
				return;
			}
		}, {
			key: "reset",
			value: function reset() {
				this._total = 0;
			}
		}, {
			key: "total",
			value: function total() {
				return this._total;
			}
		}]);
	
		return Calculator;
	}();

	exports.default = Calculator;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map