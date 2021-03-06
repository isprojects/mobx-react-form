(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"), require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["_", "mobx"], factory);
	else if(typeof exports === 'object')
		exports["MobxReactFormValidatorVJF"] = factory(require("_"), require("mobx"));
	else
		root["MobxReactFormValidatorVJF"] = factory(root["_"], root["mobx"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var isPromise = function isPromise(obj) {
  return !!obj && typeof obj.then === 'function' && (_typeof(obj) === 'object' || typeof obj === 'function');
};
/**
  Vanilla JavaScript Functions

    const plugins = {
      vkf: vkf({
        package: validator,
      }),
    };

*/


var VJF = /*#__PURE__*/function () {
  function VJF(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? {} : _ref$state,
        _ref$promises = _ref.promises,
        promises = _ref$promises === void 0 ? [] : _ref$promises;

    _classCallCheck(this, VJF);

    _defineProperty(this, "promises", []);

    _defineProperty(this, "config", null);

    _defineProperty(this, "state", null);

    _defineProperty(this, "extend", null);

    _defineProperty(this, "validator", null);

    this.state = state;
    this.promises = promises;
    this.extend = config.extend;
    this.validator = config["package"] || config;
    this.extendValidator();
  }

  _createClass(VJF, [{
    key: "extendValidator",
    value: function extendValidator() {
      // extend using "extend" callback
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(this.extend)) {
        this.extend({
          validator: this.validator,
          form: this.state.form
        });
      }
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var _this = this;

      // exit if field does not have validation functions
      if (!field.validators) return; // get validators from validate property

      var $fn = Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["toJS"])(field.validators); // map only if is an array of validator functions

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray($fn)) {
        $fn.map(function (fn) {
          return _this.collectData(fn, field);
        });
      } // it's just one function


      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction($fn)) {
        this.collectData($fn, field);
      } // execute the validation function


      this.executeValidation(field);
    }
  }, {
    key: "collectData",
    value: function collectData($fn, field) {
      var _this2 = this;

      var res = this.handleFunctionResult($fn, field); // check and execute only if is a promise

      if (isPromise(res)) {
        var $p = res.then(function ($res) {
          return field.setValidationAsyncData($res[0], $res[1]);
        }).then(function () {
          return _this2.executeAsyncValidation(field);
        }).then(function () {
          return field.showAsyncErrors();
        }); // push the promise into array

        this.promises.push($p);
        return;
      } // is a plain function


      field.validationFunctionsData.unshift({
        valid: res[0],
        message: res[1]
      });
    }
  }, {
    key: "executeValidation",
    value: function executeValidation(field) {
      // otherwise find an error message to show
      field.validationFunctionsData.map(function (rule) {
        return rule.valid === false && field.invalidate(rule.message);
      });
    }
  }, {
    key: "executeAsyncValidation",
    value: function executeAsyncValidation(field) {
      if (field.validationAsyncData.valid === false) {
        field.invalidate(field.validationAsyncData.message, true);
      }
    }
  }, {
    key: "handleFunctionResult",
    value: function handleFunctionResult($fn, field) {
      // executre validation function
      var res = $fn({
        validator: this.validator,
        form: this.state.form,
        field: field
      });
      /**
        Handle "array"
      */

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(res)) {
        var isValid = res[0] || false;
        var message = res[1] || 'Error';
        return [isValid, message];
      }
      /**
        Handle "boolean"
      */


      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isBoolean(res)) {
        return [res, 'Error'];
      }
      /**
        Handle "string"
      */


      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(res)) {
        return [false, res];
      }
      /**
        Handle "object / promise"
      */


      if (isPromise(res)) {
        return res; // the promise
      }
      /**
        Handle other cases
      */


      return [false, 'Error'];
    }
  }]);

  return VJF;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  return {
    "class": VJF,
    config: config
  };
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=MobxReactFormValidatorVJF.umd.js.map