'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Message = require('./Message.component');

var _Message2 = _interopRequireDefault(_Message);

var _mapProps = require('../component-helpers/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mapProps2.default)(function (props) {
  return (0, _extends3.default)({ style: { color: 'red' } }, props);
}, _Message2.default);