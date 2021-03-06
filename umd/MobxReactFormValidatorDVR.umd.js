(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["MobxReactFormValidatorDVR"] = factory(require("_"));
	else
		root["MobxReactFormValidatorDVR"] = factory(root["_"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

/***/ 21:
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
  Declarative Validation Rules

    const plugins = {
      dvr: dvr({
        package: validatorjs,
        extend: callback,
      }),
    };

*/

var DVR = /*#__PURE__*/function () {
  function DVR(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? {} : _ref$state,
        _ref$promises = _ref.promises,
        promises = _ref$promises === void 0 ? [] : _ref$promises;

    _classCallCheck(this, DVR);

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

  _createClass(DVR, [{
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
      // get form fields data
      var data = this.state.form.validatedValues;
      this.validateFieldAsync(field, data);
      this.validateFieldSync(field, data);
    }
  }, {
    key: "makeLabels",
    value: function makeLabels(validation, field) {
      var _this = this;

      var labels = _defineProperty({}, field.path, field.label);

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forIn(validation.rules[field.path], function (rule) {
        if (typeof rule.value === 'string' && rule.name.match(/^(required_|same|different)/)) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forIn(rule.value.split(','), function (p, i) {
            if (!rule.name.match(/^required_(if|unless)/) || i % 2 === 0) {
              var f = _this.state.form.$(p);

              if (f && f.path && f.label) {
                labels[f.path] = f.label;
              }
            }
          });
        }
      });

      validation.setAttributeNames(labels);
    }
  }, {
    key: "validateFieldSync",
    value: function validateFieldSync(field, data) {
      var $rules = this.rules(field.rules, 'sync'); // exit if no rules found

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty($rules[0])) return; // get field rules

      var rules = _defineProperty({}, field.path, $rules); // create the validator instance


      var validation = new this.validator(data, rules); // set label into errors messages instead key

      this.makeLabels(validation, field); // check validation

      if (validation.passes()) return; // the validation is failed, set the field error

      field.invalidate(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.first(validation.errors.get(field.path)));
    }
  }, {
    key: "validateFieldAsync",
    value: function validateFieldAsync(field, data) {
      var _this2 = this;

      var $rules = this.rules(field.rules, 'async'); // exit if no rules found

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty($rules[0])) return; // get field rules

      var rules = _defineProperty({}, field.path, $rules); // create the validator instance


      var validation = new this.validator(data, rules); // set label into errors messages instead key

      this.makeLabels(validation, field);
      var $p = new Promise(function (resolve) {
        return validation.checkAsync(function () {
          return _this2.handleAsyncPasses(field, resolve);
        }, function () {
          return _this2.handleAsyncFails(field, validation, resolve);
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
    value: function handleAsyncFails(field, validation, resolve) {
      field.setValidationAsyncData(false, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.first(validation.errors.get(field.path)));
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
  }, {
    key: "rules",
    value: function rules(_rules, type) {
      var $rules = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(_rules) ? __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split(_rules, '|') : _rules; // eslint-disable-next-line new-cap

      var v = new this.validator();
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter($rules, function ($rule) {
        return type === 'async' ? v.getRule(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split($rule, ':')[0]).async : !v.getRule(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split($rule, ':')[0]).async;
      });
    }
  }]);

  return DVR;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  return {
    "class": DVR,
    config: config
  };
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=MobxReactFormValidatorDVR.umd.js.map