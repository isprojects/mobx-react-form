"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
};
exports["default"] = _default;
module.exports = exports["default"];