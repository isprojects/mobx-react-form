(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["MobxReactFormValidatorYUP"] = factory(require("_"));
	else
		root["MobxReactFormValidatorYUP"] = factory(root["_"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
  YUP - Dead simple Object schema validation

    const plugins = {
      yup: $yup({
        package: yup,
        schema: (y) => (),
        extend,
      }),
    };

*/

var YUP = /*#__PURE__*/function () {
  function YUP(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? {} : _ref$state,
        _ref$promises = _ref.promises,
        promises = _ref$promises === void 0 ? [] : _ref$promises;

    _classCallCheck(this, YUP);

    _defineProperty(this, "promises", []);

    _defineProperty(this, "config", null);

    _defineProperty(this, "state", null);

    _defineProperty(this, "extend", null);

    _defineProperty(this, "validator", null);

    _defineProperty(this, "schema", null);

    this.state = state;
    this.promises = promises;
    this.extend = config.extend;
    this.validator = config["package"] || config;
    this.schema = config.schema(this.validator);
    this.extendValidator();
  }

  _createClass(YUP, [{
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

      var $p = new Promise(function (resolve) {
        return _this.validator.reach(_this.schema, field.path).label(field.label).validate(field.validatedValue, {
          strict: true
        }).then(function () {
          return _this.handleAsyncPasses(field, resolve);
        })["catch"](function (error) {
          return _this.handleAsyncFails(field, resolve, error);
        });
      });
      this.promises.push($p);
    }
  }, {
    key: "handleAsyncPasses",
    value: function handleAsyncPasses(field, resolve) {
      field.setValidationAsyncData(true);
      field.showAsyncErrors();
      resolve();
    }
  }, {
    key: "handleAsyncFails",
    value: function handleAsyncFails(field, resolve, error) {
      field.setValidationAsyncData(false, error.errors[0]);
      this.executeAsyncValidation(field);
      field.showAsyncErrors();
      resolve();
    }
  }, {
    key: "executeAsyncValidation",
    value: function executeAsyncValidation(field) {
      if (field.validationAsyncData.valid === false) {
        field.invalidate(field.validationAsyncData.message, true);
      }
    }
  }]);

  return YUP;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  return {
    "class": YUP,
    config: config
  };
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=MobxReactFormValidatorYUP.umd.js.map