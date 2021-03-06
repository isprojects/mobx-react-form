(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["MobxReactFormValidatorSVK"] = factory(require("_"));
	else
		root["MobxReactFormValidatorSVK"] = factory(root["_"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var isPromise = function isPromise(obj) {
  return !!obj && typeof obj.then === 'function' && (_typeof(obj) === 'object' || typeof obj === 'function');
};
/**
  Schema Validation Keywords

    const plugins = {
      svk: svk({
        package: ajv,
        extend: callback,
      }),
    };

*/


var SVK = /*#__PURE__*/function () {
  function SVK(_ref) {
    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? {} : _ref$state,
        _ref$promises = _ref.promises,
        promises = _ref$promises === void 0 ? [] : _ref$promises;

    _classCallCheck(this, SVK);

    _defineProperty(this, "promises", []);

    _defineProperty(this, "config", null);

    _defineProperty(this, "state", null);

    _defineProperty(this, "extend", null);

    _defineProperty(this, "validator", null);

    _defineProperty(this, "schema", null);

    this.state = state;
    this.promises = promises;
    this.extend = config.extend;
    this.schema = config.schema;
    this.initAJV(config);
  }

  _createClass(SVK, [{
    key: "extendOptions",
    value: function extendOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign(options, {
        allowRequired: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(options, 'allowRequired') || false,
        errorDataPath: 'property',
        allErrors: true,
        coerceTypes: true,
        v5: true
      });
    }
  }, {
    key: "initAJV",
    value: function initAJV(config, form) {
      // get ajv package
      var ajv = config["package"] || config; // create ajv instance

      var validator = new ajv(this.extendOptions(config.options)); // extend ajv using "extend" callback

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(this.extend)) {
        this.extend({
          form: this.state.form,
          validator: validator
        });
      } // create ajv validator (compiling rules)


      this.validator = validator.compile(this.schema);
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var _this = this;

      var data = _defineProperty({}, field.path, field.validatedValue);

      var validate = this.validator(this.parseValues(data)); // check if is $async schema

      if (isPromise(validate)) {
        var $p = validate.then(function () {
          return field.setValidationAsyncData(true);
        })["catch"](function (err) {
          return err && _this.handleAsyncError(field, err.errors);
        }).then(function () {
          return _this.executeAsyncValidation(field);
        }).then(function () {
          return field.showAsyncErrors();
        }); // push the promise into array

        this.promises.push($p);
        return;
      } // check sync errors


      this.handleSyncError(field, this.validator.errors);
    }
  }, {
    key: "handleSyncError",
    value: function handleSyncError(field, errors) {
      var fieldErrorObj = this.findError(field.key, errors); // if fieldErrorObj is not undefined, the current field is invalid.

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(fieldErrorObj)) return; // the current field is now invalid
      // add additional info to the message

      var msg = "".concat(field.label, " ").concat(fieldErrorObj.message); // invalidate the current field with message

      field.invalidate(msg);
    }
  }, {
    key: "handleAsyncError",
    value: function handleAsyncError(field, errors) {
      // find current field error message from ajv errors
      var fieldErrorObj = this.findError(field.path, errors); // if fieldErrorObj is not undefined, the current field is invalid.

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(fieldErrorObj)) return; // the current field is now invalid
      // add additional info to the message

      var msg = "".concat(field.label, " ").concat(fieldErrorObj.message); // set async validation data on the field

      field.setValidationAsyncData(false, msg);
    }
  }, {
    key: "findError",
    value: function findError(path, errors) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(errors, function (_ref2) {
        var dataPath = _ref2.dataPath;
        var $dataPath;
        $dataPath = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trimStart(dataPath, '.');
        $dataPath = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trim($dataPath, '[\'');
        $dataPath = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trim($dataPath, '\']');
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.includes($dataPath, "".concat(path));
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
    key: "parseValues",
    value: function parseValues(values) {
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(this.config, 'options.allowRequired') === true) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omitBy(values, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNaN);
      }

      return values;
    }
  }]);

  return SVK;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  return {
    "class": SVK,
    config: config
  };
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=MobxReactFormValidatorSVK.umd.js.map