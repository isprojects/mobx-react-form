"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form["default"];
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _Field["default"];
  }
});
exports["default"] = void 0;

var _mobx = require("mobx");

var _Form = _interopRequireWildcard(require("./Form"));

var _Field = _interopRequireWildcard(require("./Field"));

var _Initializer = _interopRequireDefault(require("./shared/Initializer"));

var _Helpers = _interopRequireDefault(require("./shared/Helpers"));

var _Actions = _interopRequireDefault(require("./shared/Actions"));

var _Utils = _interopRequireDefault(require("./shared/Utils"));

var _Events = _interopRequireDefault(require("./shared/Events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* shared prototype methods */

/**
  Enables MobX strict mode globally (TEST only).
  - - - - - - - - - - - - - - - - - -
  In strict mode, it is not allowed to
  change any state outside of an action
*/
if (process.env.TEST) {
  (0, _mobx.configure)({
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


var shared = [_Initializer["default"], _Actions["default"], _Helpers["default"], _Utils["default"], _Events["default"]];
extend(_Form["default"], shared.concat(_Form.prototypes));
extend(_Field["default"], shared.concat(_Field.prototypes));
var _default = _Form["default"];
exports["default"] = _default;