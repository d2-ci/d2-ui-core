'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = Message;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
    padding: '0.5rem 0'
};

function Message(_ref) {
    var propsStyle = _ref.style,
        message = _ref.message;

    var style = (0, _assign2.default)({}, defaultStyle, propsStyle);

    return _react2.default.createElement(
        'div',
        { style: style },
        message
    );
}
Message.propTypes = {
    style: _propTypes2.default.object,
    message: _propTypes2.default.string
};