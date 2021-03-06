(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_"), require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["_", "mobx"], factory);
	else if(typeof exports === 'object')
		exports["MobxReactForm"] = factory(require("_"), require("mobx"));
	else
		root["MobxReactForm"] = factory(root["_"], root["mobx"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(10);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var getObservableMapValues = function getObservableMapValues(observableMap) {
  return __WEBPACK_IMPORTED_MODULE_1_mobx__["values"] ? Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["values"])(observableMap) : observableMap.values();
};

var getObservableMapKeys = function getObservableMapKeys(observableMap) {
  return __WEBPACK_IMPORTED_MODULE_1_mobx__["values"] ? Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["keys"])(observableMap) : observableMap.keys();
};

var checkObserveItem = function checkObserveItem(change) {
  return function (_ref) {
    var key = _ref.key,
        to = _ref.to,
        type = _ref.type,
        exec = _ref.exec;
    return change.type === type && change.name === key && change.newValue === to && exec.apply(change, [change]);
  };
};

var checkObserve = function checkObserve(collection) {
  return function (change) {
    return collection.map(checkObserveItem(change));
  };
};

var checkPropType = function checkPropType(_ref2) {
  var type = _ref2.type,
      data = _ref2.data;
  var $check;

  switch (type) {
    case 'some':
      $check = function $check($data) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.some($data, Boolean);
      };

      break;

    case 'every':
      $check = function $check($data) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.every($data, Boolean);
      };

      break;

    default:
      $check = null;
  }

  return $check(data);
};

var hasProps = function hasProps($type, $data) {
  var $props;

  switch ($type) {
    case 'booleans':
      $props = __WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].booleans;
      break;

    case 'field':
      $props = [].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].field), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].validation), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */]["function"]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].handlers));
      break;

    case 'all':
      $props = ['id'].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].booleans), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].field), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].validation), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */]["function"]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].handlers));
      break;

    default:
      $props = null;
  }

  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.intersection($data, $props).length > 0;
};
/**
  Check Allowed Properties
*/


var allowedProps = function allowedProps(type, data) {
  if (hasProps(type, data)) return;
  var $msg = 'The selected property is not allowed';
  throw new Error("".concat($msg, " (").concat(JSON.stringify(data), ")"));
};
/**
  Throw Error if undefined Fields
*/


var throwError = function throwError(path, fields) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(fields)) return;
  var $msg = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(msg) ? 'The selected field is not defined' : msg;
  throw new Error("".concat($msg, " (").concat(path, ")"));
};

var pathToStruct = function pathToStruct(path) {
  var struct;
  struct = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace(path, new RegExp('[.]\\d+($|.)', 'g'), '[].');
  struct = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace(struct, '..', '.');
  struct = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trim(struct, '.');
  return struct;
};

var hasSome = function hasSome(obj, keys) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.some(keys, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.partial(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has, obj));
};

var isPromise = function isPromise(obj) {
  return !!obj && typeof obj.then === 'function' && (_typeof(obj) === 'object' || typeof obj === 'function');
};

var isStruct = function isStruct(struct) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(struct) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.every(struct, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString);
};

var isEmptyArray = function isEmptyArray(field) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(field) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(field);
};

var isArrayOfObjects = function isArrayOfObjects(fields) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(fields) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.every(fields, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isPlainObject);
};

var $getKeys = function $getKeys(fields) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.union(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(fields), function (values) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keys(values);
  })[0]);
};

var hasUnifiedProps = function hasUnifiedProps(_ref3) {
  var fields = _ref3.fields;
  return !isStruct({
    fields: fields
  }) && hasProps('field', $getKeys(fields));
};

var hasSeparatedProps = function hasSeparatedProps(initial) {
  return hasSome(initial, __WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].separated) || hasSome(initial, __WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].validation);
};

var allowNested = function allowNested(field, strictProps) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isObject(field) && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isDate(field) && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has(field, 'fields') && (!hasSome(field, [].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].field), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].validation), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */]["function"]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */].handlers))) || strictProps);
};

var parseIntKeys = function parseIntKeys(fields) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(getObservableMapKeys(fields), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.ary(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.toNumber, 1));
};

var hasIntKeys = function hasIntKeys(fields) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.every(parseIntKeys(fields), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isInteger);
};

var maxKey = function maxKey(fields) {
  var max = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.max(parseIntKeys(fields));

  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(max) ? 0 : max + 1;
};

var uniqueId = function uniqueId(field) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniqueId([__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace(field.path, new RegExp('\\.', 'g'), '-'), '--'].join(''));
};

var $isEvent = function $isEvent(obj) {
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(obj) || typeof Event === 'undefined') return false;
  return obj instanceof Event || !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(obj.target); // eslint-disable-line
};

var $hasFiles = function $hasFiles($) {
  return $.target.files && $.target.files.length !== 0;
};

var $isBool = function $isBool($, val) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isBoolean(val) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isBoolean($.target.checked);
};

var $try = function $try() {
  var found = null;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.map(function (val) {
    return (// eslint-disable-line
      found === null && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(val) && (found = val)
    );
  });
  return found;
};

/* harmony default export */ __webpack_exports__["e"] = ({
  props: __WEBPACK_IMPORTED_MODULE_2__props__["a" /* default */],
  checkObserve: checkObserve,
  checkPropType: checkPropType,
  hasProps: hasProps,
  allowedProps: allowedProps,
  throwError: throwError,
  isPromise: isPromise,
  isStruct: isStruct,
  isEmptyArray: isEmptyArray,
  isArrayOfObjects: isArrayOfObjects,
  pathToStruct: pathToStruct,
  hasUnifiedProps: hasUnifiedProps,
  hasSeparatedProps: hasSeparatedProps,
  allowNested: allowNested,
  parseIntKeys: parseIntKeys,
  hasIntKeys: hasIntKeys,
  maxKey: maxKey,
  uniqueId: uniqueId,
  $isEvent: $isEvent,
  $hasFiles: $hasFiles,
  $isBool: $isBool,
  $try: $try,
  getObservableMapKeys: getObservableMapKeys,
  getObservableMapValues: getObservableMapValues
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaultClearValue = function defaultClearValue(_ref) {
  var value = _ref.value;
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(value)) return [];
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isDate(value)) return null;
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isBoolean(value)) return false;
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNumber(value)) return 0;
  if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(value)) return '';
  return undefined;
};

var defaultValue = function defaultValue(_ref2) {
  var type = _ref2.type,
      _ref2$nullable = _ref2.nullable,
      nullable = _ref2$nullable === void 0 ? false : _ref2$nullable,
      _ref2$isEmptyArray = _ref2.isEmptyArray,
      isEmptyArray = _ref2$isEmptyArray === void 0 ? false : _ref2$isEmptyArray;
  if (type === 'date') return null;
  if (type === 'datetime-local') return null;
  if (type === 'checkbox') return false;
  if (type === 'number') return 0;
  if (nullable) return null;
  if (isEmptyArray) return [];
  return '';
};

var parsePath = function parsePath(path) {
  var $path = path;
  $path = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace($path, new RegExp('\\[', 'g'), '.');
  $path = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace($path, new RegExp('\\]', 'g'), '');
  return $path;
};

var parseInput = function parseInput(input, _ref3) {
  var type = _ref3.type,
      isEmptyArray = _ref3.isEmptyArray,
      nullable = _ref3.nullable,
      separated = _ref3.separated,
      unified = _ref3.unified,
      fallback = _ref3.fallback;
  return input(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].$try(separated, unified, fallback, defaultValue({
    type: type,
    isEmptyArray: isEmptyArray,
    nullable: nullable
  })));
};

var parseArrayProp = function parseArrayProp($val, $prop) {
  var $values = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values($val);

  if ($prop === 'value' || $prop === 'initial' || $prop === 'default') {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.without($values, null, undefined, '');
  }

  return $values;
};

var parseCheckArray = function parseCheckArray(field, value, prop) {
  return field.hasIncrementalKeys ? parseArrayProp(value, prop) : value;
};

var parseCheckOutput = function parseCheckOutput($field, $prop) {
  return $prop === 'value' && $field.$output ? $field.$output($field[$prop]) : $field[$prop];
};

var defineFieldsFromStruct = function defineFieldsFromStruct(struct) {
  var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduceRight(struct, function ($, name) {
    var obj = {};

    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.endsWith(name, '[]')) {
      var val = add ? [$] : [];
      obj[__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trimEnd(name, '[]')] = val;
      return obj;
    } // no brakets


    var prev = struct[struct.indexOf(name) - 1];
    var stop = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.endsWith(prev, '[]') && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.last(struct) === name;
    if (!add && stop) return obj;
    obj[name] = $;
    return obj;
  }, {});
};

var handleFieldsArrayOfStrings = function handleFieldsArrayOfStrings($fields) {
  var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fields = $fields; // handle array with field struct (strings)

  if (__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].isStruct(fields)) {
    fields = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(fields, function ($obj, $) {
      var pathStruct = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split($, '.'); // as array of strings (with empty values)


      if (!pathStruct.length) return Object.assign($obj, _defineProperty({}, $, '')); // define flat or nested fields from pathStruct

      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge($obj, defineFieldsFromStruct(pathStruct, add));
    }, {});
  }

  return fields;
};

var handleFieldsArrayOfObjects = function handleFieldsArrayOfObjects($fields) {
  var fields = $fields; // handle array of objects (with unified props)

  if (__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].isArrayOfObjects(fields)) {
    fields = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(fields, function ($obj, field) {
      if (__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].hasUnifiedProps({
        fields: {
          field: field
        }
      }) && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has(field, 'name')) return undefined;
      return Object.assign($obj, _defineProperty({}, field.name, field));
    }, {});
  }

  return fields;
};

var handleFieldsNested = function handleFieldsNested(fields) {
  var strictProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(fields, function (obj, field, key) {
    if (__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].allowNested(field, strictProps)) {
      // define nested field
      return Object.assign(obj, _defineProperty({}, key, {
        fields: __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].isEmptyArray(field) ? [] : handleFieldsNested(field)
      }));
    }

    return Object.assign(obj, _defineProperty({}, key, field));
  }, {});
};
/* mapNestedValuesToUnifiedValues

FROM:

{
  street: '123 Fake St.',
  zip: '12345',
}

TO:

[{
  name: 'street'
  value: '123 Fake St.',
}, {
  name: 'zip'
  value: '12345',
}]

*/


var mapNestedValuesToUnifiedValues = function mapNestedValuesToUnifiedValues(data) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isPlainObject(data) ? __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(data, function (value, name) {
    return {
      value: value,
      name: name
    };
  }) : undefined;
};
/* reduceValuesToUnifiedFields

FROM:

{
  name: 'fatty',
  address: {
    street: '123 Fake St.',
    zip: '12345',
  },
};

TO:

{
  name: {
    value: 'fatty',
    fields: undefined
  },
  address: {
    value: {
      street: '123 Fake St.',
      zip: '12345'
    },
    fields: [ ... ]
  },
};

*/


var reduceValuesToUnifiedFields = function reduceValuesToUnifiedFields(values) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(values, function (obj, value, key) {
    return Object.assign(obj, _defineProperty({}, key, {
      value: value,
      fields: mapNestedValuesToUnifiedValues(value)
    }));
  }, {});
};
/*
  Fallback Unified Props to Sepated Mode
*/


var handleFieldsPropsFallback = function handleFieldsPropsFallback(fields, initial, fallback) {
  if (!__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has(initial, 'values')) return fields; // if the 'values' object is passed in constructor
  // then update the fields definitions

  var values = initial.values;

  if (__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].hasUnifiedProps({
    fields: fields
  })) {
    values = reduceValuesToUnifiedFields(values);
  }

  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(fields, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(values, function (result, v, k) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(fields[k])) result[k] = v;
    if (!(k in fields) && (!isNaN(Number(k)) || fallback)) result[k] = v;
  }, {}));
};

var mergeSchemaDefaults = function mergeSchemaDefaults(fields, validator) {
  if (validator) {
    var schema = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(validator.plugins, 'svk.config.schema');

    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(fields) && schema && !!schema.properties) {
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(schema.properties, function (prop, key) {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.set(fields, key, {
          value: prop["default"],
          label: prop.title
        });
      });
    }
  }

  return fields;
};

var prepareFieldsData = function prepareFieldsData(initial) {
  var strictProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var fields = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(handleFieldsArrayOfStrings(initial.fields, false), handleFieldsArrayOfStrings(initial.struct, false));

  fields = handleFieldsArrayOfObjects(fields);
  fields = handleFieldsPropsFallback(fields, initial, fallback);
  fields = handleFieldsNested(fields, strictProps);
  return fields;
};

var pathToFieldsTree = function pathToFieldsTree(struct, path) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var structPath = __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].pathToStruct(path);

  var structArray = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(struct, function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.startsWith(item, structPath);
  });

  var $tree = handleFieldsArrayOfStrings(structArray, add);

  var $struct = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.replace(structPath, new RegExp('\\[]', 'g'), "[".concat(n, "]"));

  return handleFieldsNested(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get($tree, $struct));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  defaultValue: defaultValue,
  defaultClearValue: defaultClearValue,
  parseInput: parseInput,
  parsePath: parsePath,
  parseArrayProp: parseArrayProp,
  parseCheckArray: parseCheckArray,
  parseCheckOutput: parseCheckOutput,
  mergeSchemaDefaults: mergeSchemaDefaults,
  handleFieldsNested: handleFieldsNested,
  handleFieldsArrayOfStrings: handleFieldsArrayOfStrings,
  prepareFieldsData: prepareFieldsData,
  pathToFieldsTree: pathToFieldsTree
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




var Base = (_class = (_temp = /*#__PURE__*/function () {
  function Base() {
    var _this = this;

    _classCallCheck(this, Base);

    _defineProperty(this, "noop", function () {});

    _initializerDefineProperty(this, "$submitted", _descriptor, this);

    _initializerDefineProperty(this, "$submitting", _descriptor2, this);

    _initializerDefineProperty(this, "$validated", _descriptor3, this);

    _initializerDefineProperty(this, "$validating", _descriptor4, this);

    _defineProperty(this, "execHook", function (name) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(fallback[name], _this.$hooks[name], _this.hooks && _this.hooks.apply(_this, [_this])[name], _this.noop).apply(_this, [_this]);
    });

    _defineProperty(this, "execHandler", function (name, args) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return [Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(_this.$handlers[name] && _this.$handlers[name].apply(_this, [_this]), _this.handlers && _this.handlers.apply(_this, [_this])[name] && _this.handlers.apply(_this, [_this])[name].apply(_this, [_this]), fallback, _this.noop).apply(_this, _toConsumableArray(args)), _this.execHook(name)];
    });

    _defineProperty(this, "intercept", function (opt) {
      return _this.MOBXEvent(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isFunction(opt) ? {
        type: 'interceptor',
        call: opt
      } : _objectSpread({
        type: 'interceptor'
      }, opt));
    });

    _defineProperty(this, "observe", function (opt) {
      return _this.MOBXEvent(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isFunction(opt) ? {
        type: 'observer',
        call: opt
      } : _objectSpread({
        type: 'observer'
      }, opt));
    });

    _defineProperty(this, "onClear", function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _this.execHandler('onClear', args, function (e) {
        e.preventDefault();

        _this.clear(true);
      });
    });

    _defineProperty(this, "onReset", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.execHandler('onReset', args, function (e) {
        e.preventDefault();

        _this.reset(true);
      });
    });

    _defineProperty(this, "onSubmit", function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.execHandler('onSubmit', args, function (e) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        e.preventDefault();

        _this.submit(o);
      });
    });

    _defineProperty(this, "onAdd", function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.execHandler('onAdd', args, function (e, val) {
        e.preventDefault();

        _this.add(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$isEvent"])(val) ? null : val);
      });
    });

    _defineProperty(this, "onDel", function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.execHandler('onDel', args, function (e, path) {
        e.preventDefault();

        _this.del(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$isEvent"])(path) ? _this.path : path);
      });
    });

    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["makeObservable"])(this);
  }

  _createClass(Base, [{
    key: "submitted",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$submitted);
    }
  }, {
    key: "submitting",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$submitting);
    }
  }, {
    key: "validated",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$validated);
    }
  }, {
    key: "validating",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$validating);
    }
  }, {
    key: "hasIncrementalKeys",
    get: function get() {
      return this.fields.size && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["hasIntKeys"])(this.fields);
    }
  }, {
    key: "hasNestedFields",
    get: function get() {
      return this.fields.size !== 0;
    }
  }, {
    key: "size",
    get: function get() {
      return this.fields.size;
    }
    /**
     Interceptor
     */

  }]);

  return Base;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "$submitted", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "$submitting", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "$validated", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "$validating", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "submitted", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "submitted"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submitting", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "submitting"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validated", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "validated"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validating", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "validating"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasIncrementalKeys", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "hasIncrementalKeys"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasNestedFields", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "hasNestedFields"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "size", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "size"), _class.prototype)), _class);

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prototypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Base__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parser__ = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _obj, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }







var setupFieldProps = function setupFieldProps(instance, props, data) {
  return Object.assign(instance, {
    $label: props.$label || data && data.label || '',
    $placeholder: props.$placeholder || data && data.placeholder || '',
    $disabled: props.$disabled || data && data.disabled || false,
    $bindings: props.$bindings || data && data.bindings || 'default',
    $related: props.$related || data && data.related || [],
    $validators: Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(props.$validators || data && data.validators || null),
    $validatedWith: props.$validatedWith || data && data.validatedWith || 'value',
    $rules: props.$rules || data && data.rules || null,
    $observers: props.$observers || data && data.observers || null,
    $interceptors: props.$interceptors || data && data.interceptors || null,
    $extra: props.$extra || data && data.extra || null,
    $options: props.$options || data && data.options || {},
    $hooks: props.$hooks || data && data.hooks || {},
    $handlers: props.$handlers || data && data.handlers || {}
  });
};

var setupDefaultProp = function setupDefaultProp(instance, data, props, update, _ref) {
  var isEmptyArray = _ref.isEmptyArray;
  return Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(instance.$input, {
    nullable: true,
    isEmptyArray: isEmptyArray,
    type: instance.type,
    unified: update ? Object(__WEBPACK_IMPORTED_MODULE_4__parser__["defaultValue"])({
      type: instance.type
    }) : data && data["default"],
    separated: props.$default,
    fallback: instance.$initial
  });
};

var Field = (_class = (_temp = /*#__PURE__*/function (_Base) {
  _inherits(Field, _Base);

  var _super = _createSuper(Field);

  function Field(_ref2) {
    var _this4;

    var key = _ref2.key,
        path = _ref2.path,
        _ref2$data = _ref2.data,
        data = _ref2$data === void 0 ? {} : _ref2$data,
        _ref2$props = _ref2.props,
        props = _ref2$props === void 0 ? {} : _ref2$props,
        _ref2$update = _ref2.update,
        update = _ref2$update === void 0 ? false : _ref2$update,
        state = _ref2.state;

    _classCallCheck(this, Field);

    _this4 = _super.call(this);

    _defineProperty(_assertThisInitialized(_this4), "fields", __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map ? __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map({}) : Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["asMap"])({}));

    _defineProperty(_assertThisInitialized(_this4), "hasInitialNestedFields", false);

    _defineProperty(_assertThisInitialized(_this4), "incremental", false);

    _defineProperty(_assertThisInitialized(_this4), "id", void 0);

    _defineProperty(_assertThisInitialized(_this4), "key", void 0);

    _defineProperty(_assertThisInitialized(_this4), "name", void 0);

    _defineProperty(_assertThisInitialized(_this4), "path", void 0);

    _defineProperty(_assertThisInitialized(_this4), "state", void 0);

    _defineProperty(_assertThisInitialized(_this4), "$observers", void 0);

    _defineProperty(_assertThisInitialized(_this4), "$interceptors", void 0);

    _defineProperty(_assertThisInitialized(_this4), "$hooks", {});

    _defineProperty(_assertThisInitialized(_this4), "$handlers", {});

    _defineProperty(_assertThisInitialized(_this4), "$input", function ($) {
      return $;
    });

    _defineProperty(_assertThisInitialized(_this4), "$output", function ($) {
      return $;
    });

    _initializerDefineProperty(_assertThisInitialized(_this4), "$options", _descriptor, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$value", _descriptor2, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$type", _descriptor3, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$label", _descriptor4, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$placeholder", _descriptor5, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$default", _descriptor6, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$initial", _descriptor7, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$bindings", _descriptor8, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$extra", _descriptor9, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$related", _descriptor10, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$validatedWith", _descriptor11, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$validators", _descriptor12, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$rules", _descriptor13, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$disabled", _descriptor14, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$focused", _descriptor15, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$touched", _descriptor16, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$changed", _descriptor17, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$blurred", _descriptor18, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$deleted", _descriptor19, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$clearing", _descriptor20, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "$resetting", _descriptor21, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "autoFocus", _descriptor22, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "showError", _descriptor23, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "errorSync", _descriptor24, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "errorAsync", _descriptor25, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "validationErrorStack", _descriptor26, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "validationFunctionsData", _descriptor27, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "validationAsyncData", _descriptor28, _assertThisInitialized(_this4));

    _initializerDefineProperty(_assertThisInitialized(_this4), "files", _descriptor29, _assertThisInitialized(_this4));

    _defineProperty(_assertThisInitialized(_this4), "sync", Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function (e) {
      var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      _this4.$changed = true;

      var $get = function $get($) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$isBool"])($, _this4.value) ? $.target.checked : $.target.value;
      }; // assume "v" or "e" are the values


      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(e) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(e.target)) {
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(v) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(v.target)) {
          v = $get(v); // eslint-disable-line
        }

        _this4.value = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$try"])(e, v);
        return;
      }

      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(e.target)) {
        _this4.value = $get(e);
        return;
      }

      _this4.value = e;
    }));

    _defineProperty(_assertThisInitialized(_this4), "onChange", function () {
      var _this5;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _this4.type === 'file' ? (_this5 = _this4).onDrop.apply(_this5, args) : _this4.execHandler('onChange', args, _this4.sync);
    });

    _defineProperty(_assertThisInitialized(_this4), "onToggle", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this4.execHandler('onToggle', args, _this4.sync);
    });

    _defineProperty(_assertThisInitialized(_this4), "onBlur", function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this4.execHandler('onBlur', args, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function () {
        if (!_this4.$blurred) {
          _this4.$blurred = true;
        }

        _this4.$focused = false;
      }));
    });

    _defineProperty(_assertThisInitialized(_this4), "onFocus", function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this4.execHandler('onFocus', args, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function () {
        _this4.$focused = true;
        _this4.$touched = true;
      }));
    });

    _defineProperty(_assertThisInitialized(_this4), "onDrop", function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this4.execHandler('onDrop', args, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function () {
        var e = args[0];
        var files = null;

        if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$isEvent"])(e) && Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$hasFiles"])(e)) {
          files = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(e.target.files);
        }

        _this4.files = files || args;
      }));
    });

    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["makeObservable"])(_assertThisInitialized(_this4));
    _this4.state = state;

    _this4.setupField(key, path, data, props, update);

    _this4.checkValidationPlugins();

    _this4.initNestedFields(data, update);

    _this4.incremental = _this4.hasIncrementalKeys !== 0;
    _this4.debouncedValidation = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(_this4.validate, _this4.state.options.get('validationDebounceWait', _assertThisInitialized(_this4)), _this4.state.options.get('validationDebounceOptions', _assertThisInitialized(_this4)));

    _this4.observeValidationOnBlur();

    _this4.observeValidationOnChange();

    _this4.initMOBXEvent('observers');

    _this4.initMOBXEvent('interceptors');

    _this4.execHook('onInit');

    return _this4;
  }
  /* ------------------------------------------------------------------ */

  /* COMPUTED */


  _createClass(Field, [{
    key: "checkValidationErrors",
    get: function get() {
      return this.validationAsyncData.valid === false && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.validationAsyncData) || !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.validationErrorStack) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(this.errorAsync) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(this.errorSync);
    }
  }, {
    key: "checked",
    get: function get() {
      return this.type === 'checkbox' ? this.value : undefined;
    }
  }, {
    key: "value",
    get: function get() {
      return this.getComputedProp('value');
    },
    set: function set(newVal) {
      if (this.$value === newVal) return; // handle numbers

      if (this.state.options.get('autoParseNumbers', this) === true) {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNumber(this.$initial)) {
          if (new RegExp('^-?\\d+(,\\d+)*(\\.\\d+([eE]\\d+)?)?$', 'g').exec(newVal)) {
            this.$value = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.toNumber(newVal);
            return;
          }
        }
      } // handle parse value


      this.$value = newVal;
    }
  }, {
    key: "initial",
    get: function get() {
      return this.$initial ? Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$initial) : this.getComputedProp('initial');
    },
    set: function set(val) {
      this.$initial = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
        separated: val
      });
    }
  }, {
    key: "default",
    get: function get() {
      return this.$default ? Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$default) : this.getComputedProp('default');
    },
    set: function set(val) {
      this.$default = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
        separated: val
      });
    }
  }, {
    key: "actionRunning",
    get: function get() {
      return this.submitting || this.clearing || this.resetting;
    }
  }, {
    key: "type",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$type);
    }
  }, {
    key: "label",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$label);
    }
  }, {
    key: "placeholder",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$placeholder);
    }
  }, {
    key: "extra",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$extra);
    }
  }, {
    key: "options",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$options);
    }
  }, {
    key: "bindings",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$bindings);
    }
  }, {
    key: "related",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$related);
    }
  }, {
    key: "disabled",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$disabled);
    }
  }, {
    key: "rules",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$rules);
    }
  }, {
    key: "validators",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.$validators);
    }
  }, {
    key: "validatedValue",
    get: function get() {
      return Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseCheckOutput"])(this, this.$validatedWith);
    }
  }, {
    key: "error",
    get: function get() {
      if (this.showError === false) return null;
      return this.errorAsync || this.errorSync || null;
    }
  }, {
    key: "hasError",
    get: function get() {
      return this.checkValidationErrors || this.check('hasError', true);
    }
  }, {
    key: "isValid",
    get: function get() {
      return !this.checkValidationErrors && this.check('isValid', true);
    }
  }, {
    key: "isDefault",
    get: function get() {
      return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(this["default"]) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(this["default"], this.value);
    }
  }, {
    key: "isDirty",
    get: function get() {
      return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(this.initial) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(this.initial, this.value);
    }
  }, {
    key: "isPristine",
    get: function get() {
      return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(this.initial) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(this.initial, this.value);
    }
  }, {
    key: "isEmpty",
    get: function get() {
      if (this.hasNestedFields) return this.check('isEmpty', true);
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isBoolean(this.value)) return !!this.$value;
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNumber(this.value)) return false;
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isDate(this.value)) return false;
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.value);
    }
  }, {
    key: "resetting",
    get: function get() {
      return this.hasNestedFields ? this.check('resetting', true) : this.$resetting;
    }
  }, {
    key: "clearing",
    get: function get() {
      return this.hasNestedFields ? this.check('clearing', true) : this.$clearing;
    }
  }, {
    key: "focused",
    get: function get() {
      return this.hasNestedFields ? this.check('focused', true) : this.$focused;
    }
  }, {
    key: "blurred",
    get: function get() {
      return this.hasNestedFields ? this.check('blurred', true) : this.$blurred;
    }
  }, {
    key: "touched",
    get: function get() {
      return this.hasNestedFields ? this.check('touched', true) : this.$touched;
    }
  }, {
    key: "changed",
    get: function get() {
      return this.hasNestedFields ? this.check('changed', true) : this.$changed;
    }
  }, {
    key: "deleted",
    get: function get() {
      return this.hasNestedFields ? this.check('deleted', true) : this.$deleted;
    }
    /* ------------------------------------------------------------------ */

    /* EVENTS HANDLERS */

  }]);

  return Field;
}(__WEBPACK_IMPORTED_MODULE_2__Base__["a" /* default */]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "$options", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "$value", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "$type", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "$label", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "$placeholder", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "$default", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "$initial", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "$bindings", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "$extra", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "$related", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "$validatedWith", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "$validators", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "$rules", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "$disabled", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "$focused", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "$touched", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "$changed", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "$blurred", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "$deleted", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "$clearing", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "$resetting", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "autoFocus", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "showError", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "errorSync", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "errorAsync", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "validationErrorStack", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "validationFunctionsData", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "validationAsyncData", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, "files", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "checkValidationErrors", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "checkValidationErrors"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checked", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "checked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "value", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "value"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initial", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "initial"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "default", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "default"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "actionRunning", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "actionRunning"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "type", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "type"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "label", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "label"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "placeholder", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "placeholder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "extra", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "extra"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "options", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "options"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bindings", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "bindings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "related", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "related"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "disabled", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "disabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rules", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "rules"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validators", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "validators"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validatedValue", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "validatedValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "error", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "error"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasError", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "hasError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isValid", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isValid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isDefault", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isDefault"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isDirty", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isDirty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isPristine", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isPristine"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isEmpty", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isEmpty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resetting", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "resetting"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearing", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "clearing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focused", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "focused"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "blurred", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "blurred"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "touched", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "touched"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changed", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "changed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleted", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "deleted"), _class.prototype)), _class);

/**
  Prototypes
*/

var prototypes = (_obj = {
  setupField: function setupField($key, $path, $data, $props, update) {
    this.key = $key;
    this.path = $path;
    this.id = this.state.options.get('uniqueId').apply(this, [this]);
    var struct = this.state.struct();
    var structPath = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["pathToStruct"])(this.path);
    var isEmptyArray = Array.isArray(struct) ? struct.filter(function (s) {
      return s.startsWith(structPath);
    }).find(function (s) {
      return s.substr(structPath.length, 2) === '[]';
    }) : Array.isArray(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(struct, this.path));
    var $type = $props.$type,
        $input = $props.$input,
        $output = $props.$output; // eslint-disable-next-line
    // if (_.isNil($data)) $data = '';

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isPlainObject($data)) {
      var type = $data.type,
          input = $data.input,
          output = $data.output;
      this.name = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.toString($data.name || $key);
      this.$type = $type || type || 'text';
      this.$input = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$try"])($input, input, this.$input);
      this.$output = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$try"])($output, output, this.$output);
      this.$value = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
        isEmptyArray: isEmptyArray,
        type: this.type,
        unified: $data.value,
        separated: $props.$value,
        fallback: $props.$initial
      });
      this.$initial = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
        nullable: true,
        isEmptyArray: isEmptyArray,
        type: this.type,
        unified: $data.initial,
        separated: $props.$initial,
        fallback: this.$value
      });
      this.$default = setupDefaultProp(this, $data, $props, update, {
        isEmptyArray: isEmptyArray
      });
      setupFieldProps(this, $props, $data);
      return;
    }
    /* The field IS the value here */


    this.name = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.toString($key);
    this.$type = $type || 'text';
    this.$input = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$try"])($input, this.$input);
    this.$output = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["$try"])($output, this.$output);
    this.$value = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
      isEmptyArray: isEmptyArray,
      type: this.type,
      unified: $data,
      separated: $props.$value
    });
    this.$initial = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["parseInput"])(this.$input, {
      nullable: true,
      isEmptyArray: isEmptyArray,
      type: this.type,
      unified: $data,
      separated: $props.$initial,
      fallback: this.$value
    });
    this.$default = setupDefaultProp(this, $data, $props, update, {
      isEmptyArray: isEmptyArray
    });
    setupFieldProps(this, $props, $data);
  },
  getComputedProp: function getComputedProp(key) {
    var _this = this;

    if (this.incremental || this.hasNestedFields) {
      var $val = key === 'value' ? this.get(key, false) : Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["untracked"])(function () {
        return _this.get(key, false);
      });
      return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty($val) ? $val : [];
    }

    var val = this["$".concat(key)];

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(val) || Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["isObservableArray"])(val)) {
      return [].slice.call(val);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(val);
  },
  checkValidationPlugins: function checkValidationPlugins() {
    var drivers = this.state.form.validator.drivers;
    var form = this.state.form.name ? "".concat(this.state.form.name, "/") : '';

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(drivers.dvr) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(this.rules)) {
      throw new Error("The DVR validation rules are defined but no DVR plugin provided. Field: \"".concat(form + this.path, "\"."));
    }

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(drivers.vjf) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(this.validators)) {
      throw new Error("The VJF validators functions are defined but no VJF plugin provided. Field: \"".concat(form + this.path, "\"."));
    }
  },
  initNestedFields: function initNestedFields(field, update) {
    var fields = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(field) ? null : field.fields;

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(fields) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(fields)) {
      this.hasInitialNestedFields = true;
    }

    this.initFields({
      fields: fields
    }, update);

    if (!update && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(fields) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(fields)) {
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(this.value) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.value)) {
        this.hasInitialNestedFields = true;
        this.initFields({
          fields: fields,
          values: this.value
        }, update);
      }
    }
  },
  invalidate: function invalidate(message) {
    var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (async === true) {
      this.errorAsync = message;
      return;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(message)) {
      this.validationErrorStack = message;
      this.showErrors(true);
      return;
    }

    this.validationErrorStack.unshift(message);
    this.showErrors(true);
  },
  setValidationAsyncData: function setValidationAsyncData() {
    var valid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    this.validationAsyncData = {
      valid: valid,
      message: message
    };
  },
  resetValidation: function resetValidation() {
    var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.showError = true;
    this.errorSync = null;
    this.errorAsync = null;
    this.validationAsyncData = {};
    this.validationFunctionsData = [];
    this.validationErrorStack = [];
    if (deep) this.each(function (field) {
      return field.resetValidation();
    });
  },
  clear: function clear() {
    var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.$clearing = true;
    this.$touched = false;
    this.$changed = false;
    this.$blurred = false;
    this.$value = Object(__WEBPACK_IMPORTED_MODULE_4__parser__["defaultClearValue"])({
      value: this.$value
    });
    this.files = undefined;
    if (deep) this.each(function (field) {
      return field.clear(true);
    });
    this.validate({
      showErrors: this.state.options.get('showErrorsOnClear', this)
    });
  },
  reset: function reset() {
    var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.$resetting = true;
    this.$touched = false;
    this.$changed = false;
    this.$blurred = false;
    var useDefaultValue = this.$default !== this.$initial;
    if (useDefaultValue) this.value = this.$default;
    if (!useDefaultValue) this.value = this.$initial;
    this.files = undefined;
    if (deep) this.each(function (field) {
      return field.reset(true);
    });
    this.validate({
      showErrors: this.state.options.get('showErrorsOnReset', this)
    });
  },
  focus: function focus() {
    // eslint-disable-next-line
    this.state.form.each(function (field) {
      return field.autoFocus = false;
    });
    this.autoFocus = true;
  },
  showErrors: function showErrors() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.showError = show;
    this.errorSync = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.head(this.validationErrorStack);
    this.each(function (field) {
      return field.showErrors(show);
    });
  },
  showAsyncErrors: function showAsyncErrors() {
    if (this.validationAsyncData.valid === false) {
      this.errorAsync = this.validationAsyncData.message;
      return;
    }

    this.errorAsync = null;
  },
  observeValidationOnBlur: function observeValidationOnBlur() {
    var _this2 = this;

    var opt = this.state.options;

    if (opt.get('validateOnBlur', this)) {
      this.disposeValidationOnBlur = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(this, '$focused', function (change) {
        return change.newValue === false && _this2.debouncedValidation({
          showErrors: opt.get('showErrorsOnBlur', _this2)
        });
      });
    }
  },
  observeValidationOnChange: function observeValidationOnChange() {
    var _this3 = this;

    var opt = this.state.options;

    if (opt.get('validateOnChange', this)) {
      this.disposeValidationOnChange = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(this, '$value', function () {
        return !_this3.actionRunning && _this3.debouncedValidation({
          showErrors: opt.get('showErrorsOnChange', _this3)
        });
      });
    } else if (opt.get('validateOnChangeAfterInitialBlur', this) || opt.get('validateOnChangeAfterSubmit', this)) {
      this.disposeValidationOnChange = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(this, '$value', function () {
        return !_this3.actionRunning && (opt.get('validateOnChangeAfterInitialBlur', _this3) && _this3.blurred || opt.get('validateOnChangeAfterSubmit', _this3) && _this3.state.form.submitted) && _this3.debouncedValidation({
          showErrors: opt.get('showErrorsOnChange', _this3)
        });
      });
    }
  },
  initMOBXEvent: function initMOBXEvent(type) {
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(this["$".concat(type)])) return;
    var fn;
    if (type === 'observers') fn = this.observe;
    if (type === 'interceptors') fn = this.intercept;
    this["$".concat(type)].map(function (obj) {
      return fn(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.omit(obj, 'path'));
    });
  },
  bind: function bind() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.state.bindings.load(this, this.bindings, props);
  }
}, (_applyDecoratedDescriptor(_obj, "setupField", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "setupField"), _obj), _applyDecoratedDescriptor(_obj, "initNestedFields", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "initNestedFields"), _obj), _applyDecoratedDescriptor(_obj, "invalidate", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "invalidate"), _obj), _applyDecoratedDescriptor(_obj, "setValidationAsyncData", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "setValidationAsyncData"), _obj), _applyDecoratedDescriptor(_obj, "resetValidation", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "resetValidation"), _obj), _applyDecoratedDescriptor(_obj, "clear", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "clear"), _obj), _applyDecoratedDescriptor(_obj, "reset", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "reset"), _obj), _applyDecoratedDescriptor(_obj, "focus", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "focus"), _obj), _applyDecoratedDescriptor(_obj, "showErrors", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "showErrors"), _obj), _applyDecoratedDescriptor(_obj, "showAsyncErrors", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "showAsyncErrors"), _obj)), _obj);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Field__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Initializer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Helpers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Actions__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Events__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_1__Form__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return __WEBPACK_IMPORTED_MODULE_2__Field__["a"]; });



/* shared prototype methods */






/**
  Enables MobX strict mode globally (TEST only).
  - - - - - - - - - - - - - - - - - -
  In strict mode, it is not allowed to
  change any state outside of an action
*/

if (process.env.TEST) {
  Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["configure"])({
    enforceActions: true
  });
}
/**
  Extend Classes with Prototype
  - - - - - - - - - - - - - - - - - -
  Cannot use Object.assign as @action
  methods on mixins are non-enumerable
*/


var extend = function extend($class, $obj) {
  return $obj.forEach(function (mixin) {
    return Object.getOwnPropertyNames(mixin).forEach(function (name) {
      return $class.prototype[name] = mixin[name];
    });
  });
}; // eslint-disable-line


var shared = [__WEBPACK_IMPORTED_MODULE_3__shared_Initializer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__shared_Actions__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__shared_Helpers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__shared_Utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__shared_Events__["a" /* default */]];
extend(__WEBPACK_IMPORTED_MODULE_1__Form__["a" /* default */], shared.concat(__WEBPACK_IMPORTED_MODULE_1__Form__["b" /* prototypes */]));
extend(__WEBPACK_IMPORTED_MODULE_2__Field__["a" /* default */], shared.concat(__WEBPACK_IMPORTED_MODULE_2__Field__["b" /* prototypes */]));
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__Form__["a" /* default */]);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prototypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Base__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Validator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__State__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Field__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _obj, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }







var Form = (_class = (_temp = /*#__PURE__*/function (_Base) {
  _inherits(Form, _Base);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    var setup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? null : _ref$name,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options,
        _ref$plugins = _ref.plugins,
        plugins = _ref$plugins === void 0 ? {} : _ref$plugins,
        _ref$bindings = _ref.bindings,
        bindings = _ref$bindings === void 0 ? {} : _ref$bindings,
        _ref$hooks = _ref.hooks,
        hooks = _ref$hooks === void 0 ? {} : _ref$hooks,
        _ref$handlers = _ref.handlers,
        handlers = _ref$handlers === void 0 ? {} : _ref$handlers;

    _classCallCheck(this, Form);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

    _defineProperty(_assertThisInitialized(_this), "validator", void 0);

    _defineProperty(_assertThisInitialized(_this), "$hooks", {});

    _defineProperty(_assertThisInitialized(_this), "$handlers", {});

    _initializerDefineProperty(_assertThisInitialized(_this), "fields", _descriptor, _assertThisInitialized(_this));

    _this.name = name;
    _this.$hooks = hooks;
    _this.$handlers = handlers; // load data from initializers methods

    var initial = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each({
      setup: setup,
      options: options,
      plugins: plugins,
      bindings: bindings
    }, function (val, key) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isFunction(_this[key]) ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(val, _this[key].apply(_assertThisInitialized(_this), [_assertThisInitialized(_this)])) : val;
    });

    _this.state = new __WEBPACK_IMPORTED_MODULE_4__State__["a" /* default */]({
      form: _assertThisInitialized(_this),
      initial: initial.setup,
      options: initial.options,
      bindings: initial.bindings
    });
    _this.validator = new __WEBPACK_IMPORTED_MODULE_3__Validator__["a" /* default */]({
      form: _assertThisInitialized(_this),
      plugins: initial.plugins
    });

    _this.initFields(initial.setup);

    _this.debouncedValidation = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(_this.validate, _this.state.options.get("validationDebounceWait"), _this.state.options.get("validationDebounceOptions")); // execute validation on form initialization

    if (_this.state.options.get("validateOnInit") === true) {
      _this.validator.validate({
        showErrors: _this.state.options.get("showErrorsOnInit")
      });
    }

    _this.execHook("onInit");

    return _this;
  }
  /* ------------------------------------------------------------------ */

  /* COMPUTED */


  _createClass(Form, [{
    key: "validatedValues",
    get: function get() {
      var data = {};
      this.each(function ($field // eslint-disable-line
      ) {
        return data[$field.path] = $field.validatedValue;
      });
      return data;
    }
  }, {
    key: "clearing",
    get: function get() {
      return this.check("clearing", true);
    }
  }, {
    key: "resetting",
    get: function get() {
      return this.check("resetting", true);
    }
  }, {
    key: "error",
    get: function get() {
      return this.validator.error;
    }
  }, {
    key: "hasError",
    get: function get() {
      return !!this.validator.error || this.check("hasError", true);
    }
  }, {
    key: "isValid",
    get: function get() {
      return !this.validator.error && this.check("isValid", true);
    }
  }, {
    key: "isPristine",
    get: function get() {
      return this.check("isPristine", true);
    }
  }, {
    key: "isDirty",
    get: function get() {
      return this.check("isDirty", true);
    }
  }, {
    key: "isDefault",
    get: function get() {
      return this.check("isDefault", true);
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.check("isEmpty", true);
    }
  }, {
    key: "focused",
    get: function get() {
      return this.check("focused", true);
    }
  }, {
    key: "touched",
    get: function get() {
      return this.check("touched", true);
    }
  }, {
    key: "changed",
    get: function get() {
      return this.check("changed", true);
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.check("disabled", true);
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_2__Base__["a" /* default */]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fields", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map ? __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map({}) : Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["asMap"])({});
  }
}), _applyDecoratedDescriptor(_class.prototype, "validatedValues", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "validatedValues"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearing", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "clearing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resetting", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "resetting"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "error", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "error"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasError", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "hasError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isValid", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isValid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isPristine", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isPristine"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isDirty", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isDirty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isDefault", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isDefault"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isEmpty", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "isEmpty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focused", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "focused"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "touched", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "touched"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changed", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "changed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "disabled", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "disabled"), _class.prototype)), _class);

/**
  Prototypes
*/

var prototypes = (_obj = {
  makeField: function makeField(data) {
    return new __WEBPACK_IMPORTED_MODULE_5__Field__["a" /* default */](data);
  },
  init: function init() {
    var $fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(this, "fields", __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map ? __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map({}) : Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["asMap"])({}));

    this.state.initial.props.values = $fields; // eslint-disable-line

    this.state.current.props.values = $fields; // eslint-disable-line

    this.initFields({
      fields: $fields || this.state.struct()
    });
  },
  invalidate: function invalidate() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.validator.error = message || this.state.options.get("defaultGenericError") || true;
  },
  showErrors: function showErrors() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.each(function (field) {
      return field.showErrors(show);
    });
  },
  clear: function clear() {
    this.$touched = false;
    this.$changed = false;
    this.each(function (field) {
      return field.clear(true);
    });
  },
  reset: function reset() {
    this.$touched = false;
    this.$changed = false;
    this.each(function (field) {
      return field.reset(true);
    });
  }
}, (_applyDecoratedDescriptor(_obj, "init", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "init"), _obj), _applyDecoratedDescriptor(_obj, "invalidate", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "invalidate"), _obj), _applyDecoratedDescriptor(_obj, "clear", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "clear"), _obj), _applyDecoratedDescriptor(_obj, "reset", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "reset"), _obj)), _obj);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["a"] = ({
  booleans: ['hasError', 'isValid', 'isDirty', 'isPristine', 'isDefault', 'isEmpty', 'focused', 'touched', 'changed', 'disabled', 'resetting', 'clearing', 'blurred', 'deleted'],
  field: ['value', 'initial', 'default', 'label', 'placeholder', 'disabled', 'related', 'options', 'extra', 'bindings', 'type', 'hooks', 'handlers', 'deleted', 'error'],
  separated: ['values', 'initials', 'defaults', 'labels', 'placeholders', 'disabled', 'related', 'options', 'extra', 'bindings', 'types', 'hooks', 'handlers', 'deleted', 'error'],
  handlers: ['onChange', 'onToggle', 'onFocus', 'onBlur', 'onDrop', 'onSubmit', 'onReset', 'onClear', 'onAdd', 'onDel'],
  "function": ['observers', 'interceptors', 'input', 'output'],
  validation: ['rules', 'validators', 'validateWith'],
  exceptions: ['isDirty', 'isPristine'],
  types: {
    isDirty: 'some',
    isPristine: 'every',
    isDefault: 'every',
    isValid: 'every',
    isEmpty: 'every',
    hasError: 'some',
    focused: 'some',
    blurred: 'some',
    touched: 'some',
    changed: 'some',
    deleted: 'every',
    disabled: 'every',
    clearing: 'every',
    resetting: 'every'
  }
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




var Validator = (_class = (_temp = /*#__PURE__*/function () {
  function Validator() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Validator);

    _defineProperty(this, "promises", []);

    _defineProperty(this, "form", {});

    _defineProperty(this, "options", {});

    _defineProperty(this, "drivers", {});

    _defineProperty(this, "plugins", {
      vjf: undefined,
      dvr: undefined,
      svk: undefined,
      yup: undefined
    });

    _initializerDefineProperty(this, "error", _descriptor, this);

    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["makeObservable"])(this);

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(this.plugins, obj.plugins);

    this.form = obj.form;
    this.initDrivers();
    this.checkSVKValidationPlugin();
  }

  _createClass(Validator, [{
    key: "initDrivers",
    value: function initDrivers() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.plugins, function (driver, key) {
        return _this.drivers[key] = driver && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(driver, 'class') && new driver["class"]({
          config: driver.config,
          state: _this.form.state,
          promises: _this.promises
        });
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this2 = this;

      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var path = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(opt.path, opt);
      var field = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(opt.field, this.form.select(path, null, null));
      var related = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(opt.related, obj.related, true);
      var showErrors = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["$try"])(opt.showErrors, obj.showErrors, false);
      var instance = field || this.form;
      instance.$validating = true;
      instance.$validated += 1;
      this.error = null;
      return new Promise(function (resolve) {
        // validate instance (form or filed)
        if (instance.path || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(path)) {
          _this2.validateField({
            field: instance,
            showErrors: showErrors,
            related: related,
            path: path
          });
        } // validate nested fields


        instance.each(function ($field) {
          return _this2.validateField({
            path: $field.path,
            field: $field,
            showErrors: showErrors,
            related: related
          });
        }); // wait all promises

        resolve(Promise.all(_this2.promises));
      }).then(Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function () {
        instance.$validating = false;
        instance.$clearing = false;
        instance.$resetting = false;
      }))["catch"](Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function (err) {
        instance.$validating = false;
        instance.$clearing = false;
        instance.$resetting = false;
        throw err;
      })).then(function () {
        return instance;
      });
    }
  }, {
    key: "validateField",
    value: function validateField(_ref) {
      var _ref$showErrors = _ref.showErrors,
          showErrors = _ref$showErrors === void 0 ? false : _ref$showErrors,
          _ref$related = _ref.related,
          related = _ref$related === void 0 ? false : _ref$related,
          _ref$field = _ref.field,
          field = _ref$field === void 0 ? null : _ref$field,
          path = _ref.path;
      var instance = field || this.form.select(path); // check if the field is a valid instance

      if (!instance.path) throw new Error('Validation Error: Invalid Field Instance'); // do not validate soft deleted fields

      if (instance.deleted && !this.form.state.options.get('validateDeletedFields')) return; // do not validate disabled fields

      if (instance.disabled && !this.form.state.options.get('validateDisabledFields')) return; // do not validate pristine fields

      if (instance.isPristine && !this.form.state.options.get('validatePristineFields')) return; // reset field validation

      instance.resetValidation(); // validate with all enabled drivers

      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.drivers, function (driver) {
        return driver && driver.validateField(instance);
      }); // send error to the view


      instance.showErrors(showErrors); // related validation

      if (related) this.relatedFieldValidation(instance, showErrors);
    }
    /**
      Validate 'related' fields if specified
      and related validation allowed (recursive)
    */

  }, {
    key: "relatedFieldValidation",
    value: function relatedFieldValidation(field, showErrors) {
      var _this3 = this;

      if (!field.related || !field.related.length) return;

      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(field.related, function (path) {
        return _this3.validateField({
          related: false,
          showErrors: showErrors,
          path: path
        });
      });
    }
  }, {
    key: "checkSVKValidationPlugin",
    value: function checkSVKValidationPlugin() {
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(this.drivers.svk) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.plugins, 'svk.config.schema')) {
        var form = this.state.form.name ? "Form: ".concat(this.state.form.name) : '';
        throw new Error("The SVK validation schema is defined but no plugin provided (SVK). ".concat(form));
      }
    }
  }]);

  return Validator;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "error", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "validate", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "validate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateField", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "validateField"), _class.prototype)), _class);

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Options__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Bindings__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var State = /*#__PURE__*/function () {
  function State(_ref) {
    var form = _ref.form,
        initial = _ref.initial,
        options = _ref.options,
        bindings = _ref.bindings;

    _classCallCheck(this, State);

    _defineProperty(this, "mode", 'mixed');

    _defineProperty(this, "strict", false);

    _defineProperty(this, "form", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "bindings", void 0);

    _defineProperty(this, "$extra", void 0);

    _defineProperty(this, "disposers", {
      interceptor: {},
      observer: {}
    });

    _defineProperty(this, "$struct", []);

    _defineProperty(this, "initial", {
      props: {},
      fields: {}
    });

    _defineProperty(this, "current", {
      props: {},
      fields: {}
    });

    this.set('form', form);
    this.initProps(initial);
    this.options = new __WEBPACK_IMPORTED_MODULE_2__Options__["a" /* default */]();
    this.options.set(options);
    this.bindings = new __WEBPACK_IMPORTED_MODULE_3__Bindings__["a" /* default */]();
    this.bindings.register(bindings);
    this.observeOptions();
  }

  _createClass(State, [{
    key: "initProps",
    value: function initProps(initial) {
      var initialProps = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(initial, [].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].props.separated), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].props.validation), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].props["function"]), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].props.handlers)));

      this.set('initial', 'props', initialProps);
      var $unified = __WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].hasUnifiedProps(initial);
      var $separated = __WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].hasSeparatedProps(initial);

      if ($unified && $separated) {
        console.warn( // eslint-disable-line
        'WARNING: Your mobx-react-form instance ', this.form.name, ' is running in MIXED Mode (Unified + Separated) as fields properties definition.', 'This mode is experimental, use it at your own risk, or use only one mode.');
      }

      if (($separated || __WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].isStruct(initial.fields)) && !$unified) {
        var struct = __WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].$try(initial.struct || initial.fields);
        this.struct(struct);
        this.strict = true;
        this.mode = 'separated';
        return;
      }

      this.struct(initial.struct);
      this.mode = 'unified';
    }
    /**
      Get/Set Fields Structure
    */

  }, {
    key: "struct",
    value: function struct() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data) this.$struct = data;
      return this.$struct;
    }
    /**
      Get Props/Fields
    */

  }, {
    key: "get",
    value: function get(type, subtype) {
      return this[type][subtype];
    }
    /**
      Set Props/Fields
    */

  }, {
    key: "set",
    value: function set(type, subtype) {
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (type === 'form') {
        // subtype is the form here
        this.form = subtype;
      }

      if (type === 'initial') {
        Object.assign(this.initial[subtype], state);
        Object.assign(this.current[subtype], state);
      }

      if (type === 'current') {
        Object.assign(this.current[subtype], state);
      }
    }
  }, {
    key: "extra",
    value: function extra() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(data)) return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.$extra, data);
      if (data === null) return this.$extra;
      this.$extra = data;
      return null;
    }
  }, {
    key: "observeOptions",
    value: function observeOptions() {
      var _this = this;

      // Fix Issue #201
      Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(this.options.options, __WEBPACK_IMPORTED_MODULE_4__utils__["e" /* default */].checkObserve([{
        // start observing fields validateOnChange
        type: 'update',
        key: 'validateOnChange',
        to: true,
        exec: function exec() {
          return _this.form.each(function (field) {
            return field.observeValidationOnChange();
          });
        }
      }, {
        // stop observing fields validateOnChange
        type: 'update',
        key: 'validateOnChange',
        to: false,
        exec: function exec() {
          return _this.form.each(function (field) {
            return field.disposeValidationOnChange();
          });
        }
      }, {
        // start observing fields validateOnBlur
        type: 'update',
        key: 'validateOnBlur',
        to: true,
        exec: function exec() {
          return _this.form.each(function (field) {
            return field.observeValidationOnBlur();
          });
        }
      }, {
        // stop observing fields validateOnBlur
        type: 'update',
        key: 'validateOnBlur',
        to: false,
        exec: function exec() {
          return _this.form.each(function (field) {
            return field.disposeValidationOnBlur();
          });
        }
      }]));
    }
  }]);

  return State;
}();


module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




var Options = (_class = (_temp = /*#__PURE__*/function () {
  function Options() {
    _classCallCheck(this, Options);

    _initializerDefineProperty(this, "options", _descriptor, this);

    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["makeObservable"])(this);
  }

  _createClass(Options, [{
    key: "get",
    value: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // handle field option
      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(field, 'path')) {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(field.$options, key)) {
          return field.$options[key];
        }
      } // fallback on global form options


      if (key) return this.options[key];
      return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["toJS"])(this.options);
    }
  }, {
    key: "set",
    value: function set(options) {
      if (__WEBPACK_IMPORTED_MODULE_0_mobx__["set"]) {
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["set"])(this.options, options);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["extendObservable"])(this.options, options);
      }
    }
  }]);

  return Options;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "options", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      uniqueId: __WEBPACK_IMPORTED_MODULE_2__utils__["uniqueId"],
      fallback: true,
      defaultGenericError: null,
      submitThrowsError: true,
      showErrorsOnInit: false,
      showErrorsOnSubmit: true,
      showErrorsOnBlur: true,
      showErrorsOnChange: true,
      showErrorsOnClear: false,
      showErrorsOnReset: true,
      validateOnInit: true,
      validateOnBlur: true,
      validateOnChange: false,
      validateOnChangeAfterInitialBlur: false,
      validateOnChangeAfterSubmit: false,
      validateDisabledFields: false,
      validateDeletedFields: false,
      validatePristineFields: true,
      strictUpdate: false,
      strictDelete: true,
      softDelete: false,
      retrieveOnlyDirtyValues: false,
      retrieveOnlyEnabledFields: false,
      autoParseNumbers: false,
      validationDebounceWait: 250,
      validationDebounceOptions: {
        leading: false,
        trailing: true
      }
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "set", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "set"), _class.prototype)), _class);

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bindings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Bindings = /*#__PURE__*/function () {
  function Bindings() {
    _classCallCheck(this, Bindings);

    _defineProperty(this, "templates", {// default: ({ field, props, keys, $try }) => ({
      //   [keys.id]: $try(props.id, field.id),
      // }),
    });

    _defineProperty(this, "rewriters", {
      "default": {
        id: 'id',
        name: 'name',
        type: 'type',
        value: 'value',
        checked: 'checked',
        label: 'label',
        placeholder: 'placeholder',
        disabled: 'disabled',
        onChange: 'onChange',
        onBlur: 'onBlur',
        onFocus: 'onFocus',
        autoFocus: 'autoFocus'
      }
    });
  }

  _createClass(Bindings, [{
    key: "load",
    value: function load(field) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      var props = arguments.length > 2 ? arguments[2] : undefined;

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has(this.rewriters, name)) {
        var $bindings = {};

        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(this.rewriters[name], function ($v, $k) {
          return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge($bindings, _defineProperty({}, $v, Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$try"])(props[$k], field[$k])));
        });

        return $bindings;
      }

      return this.templates[name]({
        keys: this.rewriters[name],
        $try: __WEBPACK_IMPORTED_MODULE_1__utils__["$try"],
        field: field,
        props: props
      });
    }
  }, {
    key: "register",
    value: function register(bindings) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(bindings, function (val, key) {
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(val)) __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(_this.templates, _defineProperty({}, key, val));
        if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isPlainObject(val)) __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(_this.rewriters, _defineProperty({}, key, val));
      });

      return this;
    }
  }]);

  return Bindings;
}();


module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser__ = __webpack_require__(4);
var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





/**
  Field Initializer
*/

/* harmony default export */ __webpack_exports__["a"] = (_obj = {
  initFields: function initFields(initial, update) {
    var _this = this;

    var fallback = this.state.options.get('fallback');

    var $path = function $path(key) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trimStart([_this.path, key].join('.'), '.');
    };

    var fields;
    fields = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].prepareFieldsData(initial, this.state.strict, fallback);
    fields = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].mergeSchemaDefaults(fields, this.validator); // create fields

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forIn(fields, function (field, key) {
      var path = $path(key);

      var $f = _this.select(path, null, false);

      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil($f)) {
        if (fallback) {
          _this.initField(key, path, field, update);
        } else {
          var structPath = __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].pathToStruct(path);

          var struct = _this.state.struct();

          var found = struct.filter(function (s) {
            return s.startsWith(structPath);
          }).find(function (s) {
            return s.charAt(structPath.length) === '.' || s.substr(structPath.length, 2) === '[]' || s === structPath;
          });
          if (found) _this.initField(key, path, field, update);
        }
      }
    });
  },
  initField: function initField(key, path, data) {
    var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var initial = this.state.get('current', 'props');
    var struct = __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].pathToStruct(path); // try to get props from separated objects

    var $try = function $try(prop) {
      var t = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(initial[prop], struct);

      if ((prop === 'input' || prop === 'output') && typeof t !== 'function') return undefined;
      return t;
    };

    var props = {
      $value: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(initial['values'], path),
      $label: $try('labels'),
      $placeholder: $try('placeholders'),
      $default: $try('defaults'),
      $initial: $try('initials'),
      $disabled: $try('disabled'),
      $bindings: $try('bindings'),
      $type: $try('types'),
      $options: $try('options'),
      $extra: $try('extra'),
      $related: $try('related'),
      $hooks: $try('hooks'),
      $handlers: $try('handlers'),
      $validatedWith: $try('validatedWith'),
      $validators: $try('validators'),
      $rules: $try('rules'),
      $observers: $try('observers'),
      $interceptors: $try('interceptors'),
      $input: $try('input'),
      $output: $try('output')
    };
    var field = this.state.form.makeField({
      key: key,
      path: path,
      data: data,
      props: props,
      update: update,
      state: this.state
    });
    this.fields.merge(_defineProperty({}, key, field));
    return field;
  }
}, (_applyDecoratedDescriptor(_obj, "initField", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "initField"), _obj)), _obj);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/**
  Field Helpers
*/
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   Fields Selector (alias of select)
   */
  $: function $(key) {
    return this.select(key);
  },

  /**
   Fields Values (recursive with Nested Fields)
   */
  values: function values() {
    return this.get('value');
  },

  /**
   Fields Errors (recursive with Nested Fields)
   */
  errors: function errors() {
    return this.get('error');
  },

  /**
   Fields Labels (recursive with Nested Fields)
   */
  labels: function labels() {
    return this.get('label');
  },

  /**
   Fields Placeholders (recursive with Nested Fields)
   */
  placeholders: function placeholders() {
    return this.get('placeholder');
  },

  /**
   Fields Default Values (recursive with Nested Fields)
   */
  defaults: function defaults() {
    return this.get('default');
  },

  /**
   Fields Initial Values (recursive with Nested Fields)
   */
  initials: function initials() {
    return this.get('initial');
  },

  /**
   Fields Types (recursive with Nested Fields)
   */
  types: function types() {
    return this.get('type');
  }
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser__ = __webpack_require__(4);
var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





/**
  Field Actions
*/

/* harmony default export */ __webpack_exports__["a"] = (_obj = {
  validate: function validate() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $opt = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(opt, {
      path: this.path
    });

    return this.state.form.validator.validate($opt, obj);
  },
  submit: function submit() {
    var _this = this;

    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.$submitting = true;
    this.$submitted += 1;

    var exec = function exec(isValid) {
      return isValid ? _this.execHook('onSuccess', o) : _this.execHook('onError', o);
    };

    var validate = function validate() {
      return _this.validate({
        showErrors: _this.state.options.get('showErrorsOnSubmit', _this)
      }).then(function (_ref) {
        var isValid = _ref.isValid;
        var handler = exec(isValid);
        if (isValid) return handler;

        var $err = _this.state.options.get('defaultGenericError', _this);

        var $throw = _this.state.options.get('submitThrowsError', _this);

        if ($throw && $err) _this.invalidate();
        return handler;
      }) // eslint-disable-next-line
      .then(Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function () {
        return _this.$submitting = false;
      }))["catch"](Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function (err) {
        _this.$submitting = false;
        throw err;
      })).then(function () {
        return _this;
      });
    };

    return __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].isPromise(exec) ? exec.then(function () {
      return validate();
    }) : validate();
  },

  /**
   Check Field Computed Values
   */
  check: function check(prop) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].allowedProps('booleans', [prop]);
    return deep ? __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].checkPropType({
      type: __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.types[prop],
      data: this.deepCheck(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.types[prop], prop, this.fields)
    }) : this[prop];
  },
  deepCheck: function deepCheck(type, prop, fields) {
    var _this2 = this;

    var $fields = __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].getObservableMapValues(fields);
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.transform($fields, function (check, field) {
      if (!field.fields.size || __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.exceptions.includes(prop)) {
        check.push(field[prop]);
      }

      var $deep = _this2.deepCheck(type, prop, field.fields);

      check.push(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].checkPropType({
        type: type,
        data: $deep
      }));
      return check;
    }, []);
  },

  /**
   Update Field Values recurisvely
   OR Create Field if 'undefined'
   */
  update: function update(fields) {
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isPlainObject(fields)) {
      throw new Error('The update() method accepts only plain objects.');
    }

    return this.deepUpdate(__WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].prepareFieldsData({
      fields: fields
    }));
  },
  deepUpdate: function deepUpdate(fields) {
    var _this3 = this;

    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var recursion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(fields, function (field, key) {
      var $key = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(field, 'name') ? field.name : key;

      var $path = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trimStart("".concat(path, ".").concat($key), '.');

      var $field = _this3.select($path, null, false);

      var $container = _this3.select(path, null, false) || _this3.state.form.select(_this3.path, null, false);

      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil($field) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(field)) {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray($field.values())) {
          var n = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.max(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(field.fields, function (f, i) {
            return Number(i);
          }));

          if (n === undefined) n = -1; // field's value is []

          __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].getObservableMapValues($field.fields), function ($f) {
            if (Number($f.name) > n) $field.fields["delete"]($f.name);
          });
        }

        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(field) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(field.fields)) {
          $field.$value = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parseInput($field.$input, {
            separated: field
          });
          return;
        }
      }

      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil($container) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil($field)) {
        // get full path when using update() with select() - FIX: #179
        var $newFieldPath = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trimStart([_this3.path, $path].join('.'), '.'); // init field into the container field


        $container.initField($key, $newFieldPath, field, true);
      } else if (recursion) {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(field, 'fields') && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(field.fields)) {
          // handle nested fields if defined
          _this3.deepUpdate(field.fields, $path);
        } else {
          // handle nested fields if undefined or null
          var $fields = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].pathToFieldsTree(_this3.state.struct(), $path);

          _this3.deepUpdate($fields, $path, false);
        }
      }
    });
  },

  /**
    Get Fields Props
   */
  get: function get() {
    var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(prop)) {
      return this.deepGet([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.booleans), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.field), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].props.validation)), this.fields);
    }

    __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].allowedProps('all', __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(prop) ? prop : [prop]);

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(prop)) {
      if (strict && this.fields.size === 0) {
        return __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parseCheckOutput(this, prop);
      }

      var value = this.deepGet(prop, this.fields);
      return __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parseCheckArray(this, value, prop);
    }

    return this.deepGet(prop, this.fields);
  },

  /**
    Get Fields Props Recursively
   */
  deepGet: function deepGet(prop, fields) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.transform(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].getObservableMapValues(fields), function (obj, field) {
      var $nested = function $nested($fields) {
        return $fields.size !== 0 ? _this4.deepGet(prop, $fields) : undefined;
      };

      Object.assign(obj, _defineProperty({}, field.key, {
        fields: $nested(field.fields)
      }));

      if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(prop)) {
        var removeValue = prop === 'value' && (_this4.state.options.get('retrieveOnlyDirtyValues', _this4) && field.isPristine || _this4.state.options.get('retrieveOnlyEnabledFields', _this4) && field.disabled || _this4.state.options.get('softDelete', _this4) && field.deleted);

        if (field.fields.size === 0) {
          delete obj[field.key]; // eslint-disable-line

          if (removeValue) return obj;
          return Object.assign(obj, _defineProperty({}, field.key, __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parseCheckOutput(field, prop)));
        }

        var value = _this4.deepGet(prop, field.fields);

        if (prop === 'value') value = field.$output(value);
        delete obj[field.key]; // eslint-disable-line

        if (removeValue) return obj;
        return Object.assign(obj, _defineProperty({}, field.key, __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parseCheckArray(field, value, prop)));
      }

      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(prop, function ($prop) {
        return Object.assign(obj[field.key], _defineProperty({}, $prop, field[$prop]));
      });

      return obj;
    }, {});
  },
  set: function set(prop, data) {
    // UPDATE CUSTOM PROP
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(prop) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(data)) {
      __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].allowedProps('field', [prop]);

      var deep = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(data) && prop === 'value' || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isPlainObject(data);

      if (deep && this.hasNestedFields) this.deepSet(prop, data, '', true);else __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.set(this, "$".concat(prop), data);
      return;
    } // NO PROP NAME PROVIDED ("prop" is value)


    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(data)) {
      if (this.hasNestedFields) this.deepSet('value', prop, '', true);else this.set('value', prop);
    }
  },

  /**
    Set Fields Props Recursively
   */
  deepSet: function deepSet($, data) {
    var _this5 = this;

    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var recursion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var err = 'You are updating a not existent field:';
    var isStrict = this.state.options.get('strictUpdate', this);

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNil(data)) {
      this.each(function (field) {
        return field.clear(true);
      });
      return;
    }

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(data, function ($val, $key) {
      var $path = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trimStart("".concat(path, ".").concat($key), '.'); // get the field by path joining keys recursively


      var field = _this5.select($path, null, isStrict); // if no field found when is strict update, throw error


      if (isStrict) __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].throwError($path, field, err); // update the field/fields if defined

      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(field)) {
        // update field values or others props
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($val)) {
          field.set($, $val, recursion);
        } // update values recursively only if field has nested


        if (field.fields.size && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject($val)) {
          _this5.deepSet($, $val, $path, recursion);
        }
      }
    });
  },
  add: function add(obj) {
    var _this6 = this;

    if (__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].isArrayOfObjects(obj)) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(obj, function (values) {
        return _this6.update(_defineProperty({}, __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].maxKey(_this6.fields), values));
      });
    }

    var key; // eslint-disable-next-line

    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(obj, 'key')) key = obj.key;
    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(obj, 'name')) key = obj.name;
    if (!key) key = __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].maxKey(this.fields);

    var $path = function $path($key) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trimStart([_this6.path, $key].join('.'), '.');
    };

    var tree = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].pathToFieldsTree(this.state.struct(), this.path, 0, true);
    return this.initField(key, $path(key), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(tree[0], obj));
  },
  del: function del() {
    var $path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var isStrict = this.state.options.get('strictDelete', this);
    var path = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parsePath(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].$try($path, this.path));

    var fullpath = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trim([this.path, path].join('.'), '.');

    var container = this.container($path);

    var keys = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.split(path, '.');

    var last = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(keys);

    if (isStrict && !container.fields.has(last)) {
      var msg = "Key \"".concat(last, "\" not found when trying to delete field");
      __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].throwError(fullpath, null, msg);
    }

    if (this.state.options.get('softDelete', this)) {
      return this.select(fullpath).set('deleted', true);
    }

    return container.fields["delete"](last);
  }
}, (_applyDecoratedDescriptor(_obj, "submit", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "submit"), _obj), _applyDecoratedDescriptor(_obj, "deepUpdate", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "deepUpdate"), _obj), _applyDecoratedDescriptor(_obj, "set", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "set"), _obj), _applyDecoratedDescriptor(_obj, "add", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "add"), _obj), _applyDecoratedDescriptor(_obj, "del", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_obj, "del"), _obj)), _obj);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parser__ = __webpack_require__(4);



/**
  Field Utils
*/

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   Fields Selector
   */
  select: function select(path) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isStrict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var $path = __WEBPACK_IMPORTED_MODULE_2__parser__["a" /* default */].parsePath(path);

    var keys = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split($path, '.');

    var head = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.head(keys);

    keys.shift();
    var $fields = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(fields) ? this.fields.get(head) : fields.get(head);
    var stop = false;

    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(keys, function ($key) {
      if (stop) return;

      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil($fields)) {
        $fields = undefined;
        stop = true;
      } else {
        $fields = $fields.fields.get($key);
      }
    });

    if (isStrict) __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].throwError(path, $fields);
    return $fields;
  },

  /**
    Get Container
   */
  container: function container($path) {
    var path = __WEBPACK_IMPORTED_MODULE_2__parser__["a" /* default */].parsePath(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].$try($path, this.path));

    var cpath = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.trim(path.replace(new RegExp('[^./]+$'), ''), '.');

    if (!!this.path && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil($path)) {
      return cpath !== '' ? this.state.form.select(cpath, null, false) : this.state.form;
    }

    return cpath !== '' ? this.select(cpath, null, false) : this;
  },

  /**
    Has Field
   */
  has: function has(path) {
    return this.fields.has(path);
  },

  /**
   Map Fields
  */
  map: function map(cb) {
    return __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].getObservableMapValues(this.fields).map(cb);
  },

  /**
   * Iterates deeply over fields and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, depth).
   *
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Array|Object} [fields=form.fields] fields to iterate over.
   * @param {number} [depth=1] The recursion depth for internal use.
   * @returns {Array} Returns [fields.values()] of input [fields] parameter.
   * @example
   *
   * JSON.stringify(form)
   * // => {
     *   "fields": {
     *     "state": {
     *       "fields": {
     *         "city": {
     *           "fields": { "places": {
     *                "fields": {},
     *                "key": "places", "path": "state.city.places", "$value": "NY Places"
     *              }
     *           },
     *           "key": "city", "path": "state.city", "$value": "New York"
     *         }
     *       },
     *       "key": "state", "path": "state", "$value": "USA"
     *     }
     *   }
     * }
   *
   * const data = {};
   * form.each(field => data[field.path] = field.value);
   * // => {
     *   "state": "USA",
     *   "state.city": "New York",
     *   "state.city.places": "NY Places"
     * }
   *
   */
  each: function each(iteratee) {
    var _this = this;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var $fields = fields || this.fields;

    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* default */].getObservableMapValues($fields), function (field, index) {
      iteratee(field, index, depth);

      if (field.fields.size !== 0) {
        _this.each(iteratee, field.fields, depth + 1);
      }
    });
  }
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser__ = __webpack_require__(4);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
  Field Events
*/

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   MobX Event (observe/intercept)
   */
  MOBXEvent: function MOBXEvent(_ref) {
    var _this = this;

    var _ref$path = _ref.path,
        path = _ref$path === void 0 ? null : _ref$path,
        _ref$key = _ref.key,
        key = _ref$key === void 0 ? 'value' : _ref$key,
        call = _ref.call,
        type = _ref.type;
    var $instance = this.select(path || this.path, null, null) || this;

    var $call = function $call(change) {
      return call.apply(null, [{
        change: change,
        form: _this.state.form,
        path: $instance.path || null,
        field: $instance.path ? $instance : null
      }]);
    };

    var fn;
    var ffn;

    if (type === 'observer') {
      fn = __WEBPACK_IMPORTED_MODULE_0_mobx__["observe"];

      ffn = function ffn(cb) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])($instance.fields, cb);
      };
    }

    if (type === 'interceptor') {
      // eslint-disable-next-line
      key = "$".concat(key);
      fn = __WEBPACK_IMPORTED_MODULE_0_mobx__["intercept"];
      ffn = $instance.fields.intercept;
    }

    var $dkey = $instance.path ? "".concat(key, "@").concat($instance.path) : key;

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(this.state.disposers[type], _defineProperty({}, $dkey, key === 'fields' ? ffn.apply(function (change) {
      return $call(change);
    }) : fn($instance, key, function (change) {
      return $call(change);
    })));
  },

  /**
   Dispose MOBX Events
   */
  dispose: function dispose() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.path && opt) return this.disposeSingle(opt);
    return this.disposeAll(opt);
  },

  /**
   Dispose All Events (observe/intercept)
   */
  disposeAll: function disposeAll() {
    var dispose = function dispose(disposer) {
      return disposer.apply();
    };

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.state.disposers.interceptor, dispose);

    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.state.disposers.observer, dispose);

    this.state.disposers = {
      interceptor: {},
      observer: {}
    };
    return null;
  },

  /**
   Dispose Single Event (observe/intercept)
   */
  disposeSingle: function disposeSingle(_ref2) {
    var type = _ref2.type,
        _ref2$key = _ref2.key,
        key = _ref2$key === void 0 ? 'value' : _ref2$key,
        _ref2$path = _ref2.path,
        path = _ref2$path === void 0 ? null : _ref2$path;
    var $path = __WEBPACK_IMPORTED_MODULE_3__parser__["a" /* default */].parsePath(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* default */].$try(path, this.path)); // eslint-disable-next-line

    if (type === 'interceptor') key = "$".concat(key); // target observables

    this.state.disposers[type]["".concat(key, "@").concat($path)].apply();
    delete this.state.disposers[type]["".concat(key, "@").concat($path)];
  }
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=MobxReactForm.umd.js.map