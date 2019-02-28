'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = LoadingMask;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('../circular-progress/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingStatusMask = {
    left: '45%',
    position: 'fixed',
    top: '45%'
};

function LoadingMask(_ref) {
    var _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style,
        _ref$large = _ref.large,
        large = _ref$large === undefined ? false : _ref$large,
        _ref$small = _ref.small,
        small = _ref$small === undefined ? false : _ref$small;

    return _react2.default.createElement(
        'div',
        { style: (0, _assign2.default)({}, loadingStatusMask, style) },
        _react2.default.createElement(_CircularProgress2.default, { large: large, small: small })
    );
}

LoadingMask.propTypes = {
    style: _propTypes2.default.object,
    large: _propTypes2.default.bool,
    small: _propTypes2.default.bool
};